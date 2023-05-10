//CONFIGURATION
const express = require("express");
const users = express.Router();
const { createUser, deleteUser, putUser } = require("../queries/users");
const { checkName } = require("../validation/checkUsers.js");


//GET ALL INDEX ROUTE
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
      res.status(200).json(allUsers);
  } else {
      res.status(500).json({ error: "server error" });
  }
})

// GET SHOW ROUTE
users.get("/:id", async (req, res) => {
const { id } = req.params;
const user = await getUser(id);
console.log(user);
if (user) {
  res.json(user);
} else {
  res.status(404).json({ error: "Not Found" });
}
});


//CREATE ROUTE
users.post("/", checkName, async (req, res) => {
  try {
    const user = await createUser(req.body);
    return res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error 500" });
  }
});

//UPDATE ROUTE
users.put("/:id", checkName, async (req, res) => {
  try {
    const user = await putUser(req.body, req.params.id);
    return res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error 500" });
  }
});


//DELETE ROUTE
users.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    if (deletedUser.id) {
      res.status(200).json(deletedUser);
    } else {
      res.status(404).json("User Not Found Error 404");
    }
  });

  module.exports = users;