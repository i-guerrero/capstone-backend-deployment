//CONFIGURATION
const express = require("express");
const proposals = express.Router();
const {
  addMentorToProposal,
  createProposal,
  deleteProposal,
  putProposal,
  getAllProposals,
  getProposal,
} = require("../queries/proposals");
const { checkName } = require("../validation/checkProposals");
const {getUserByFirebaseId} = require("../queries/proposals");

//GET ALL INDEX ROUTE
proposals.get("/", async (req, res) => {
  const allProposals = await getAllProposals();
  if (allProposals[0]) {
    res.status(200).json(allProposals);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

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
proposals.post("/", async (req, res) => {
  try {
    const user = await createProposal(req.body);
    return res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error 500" });
  }
});

//UPDATE ROUTE
proposals.put("/:id", async (req, res) => {
  try {
    const user = await putProposal(req.body, req.params.id);
    return res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error 500" });
  }
});

//MENTOR-PRoposal update
proposals.put("/:id/mentor", async (req, res) => {
  const { firebaseId } = req.body;
  const { id } = req.params;
  try {
    const mentor = await getUserByFirebaseId(firebaseId)
    const proposal = await addMentorToProposal(id, mentor.id)
    if (proposal.id) {
      res.status(200).json(proposal);
    } else {
      res.status(404).json("User Not Found Error 404");
    }
  }
  catch (error) {
    console.error(error) 
    res.status(500).json({ error: "Internal Server Error 500" });
  }
}  );

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
