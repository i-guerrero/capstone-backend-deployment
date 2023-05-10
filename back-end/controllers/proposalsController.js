//CONFIGURATION
const express = require("express");
const proposals = express.Router();
const {
  createProposal,
  deleteProposal,
  putProposal,
  getAllProposals,
  getProposal,
} = require("../queries/proposals");
const { checkName } = require("../validation/checkProposals");

//GET ALL INDEX ROUTE
proposals.get("/", async (req, res) => {
    const allProposals = await getAllProposals();
    if (allProposals[0]) {
        res.status(200).json(allProposals);
    } else {
        res.status(500).json({ error: "server error" });
    }
    
})

// GET SHOW ROUTE
proposals.get("/:id", async (req, res) => {
  const { id } = req.params;
  const proposal = await getProposal(id);
  console.log(proposal);
  if (proposal) {
    res.json(proposal);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

//CREATE ROUTE
proposals.post("/", checkName, async (req, res) => {
  try {
    const user = await createProposal(req.body);
    return res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error 500" });
  }
});

//UPDATE ROUTE
proposals.put("/:id", checkName, async (req, res) => {
  try {
    const user = await putProposal(req.body, req.params.id);
    return res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error 500" });
  }
});

//DELETE ROUTE
proposals.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProposal = await deleteProposal(id);
  if (deletedProposal.id) {
    res.status(200).json(deletedProposal);
  } else {
    res.status(404).json("User Not Found Error 404");
  }
});

module.exports = proposals;
