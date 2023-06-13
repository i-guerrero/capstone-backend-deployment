//CONFIGURATION
const express = require("express");
const users = express.Router();
const {
  createUser,
  getUserByFirebaseId,
  deleteUser,
  putUser,
  getAllUsers,
  getUser,
  getAllProjectsByUser,
} = require("../queries/users");
const { checkName } = require("../validation/checkUsers.js");

//GET ALL INDEX ROUTE
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// GET SHOW ROUTE
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const userByFirebase = await getUser(id);
  console.log(userByFirebase);
  if (userByFirebase) {
    res.json(userByFirebase);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

users.get("/:id/firebase", async (req, res) => {
  const { id } = req.params;
  const userByFirebase = await getUserByFirebaseId(id);
  if (userByFirebase) {
    res.json(userByFirebase);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

//CREATE ROUTE
users.post("/", async (req, res) => {
  try {
    const userByFirebase = await createUser(req.body);
    return res.json(userByFirebase);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error 500" });
  }
});

//UPDATE ROUTE
users.put("/:id", async (req, res) => {
  try {
    const userByFirebase = await putUser(req.body, req.params.id);
    return res.json(userByFirebase);
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

users.get("/:userId/projects", async (req, res) => {
  const { userId } = req.params;
  const usersProjects = await getAllProjectsByUser(userId);
  res.json(usersProjects);
});

module.exports = users;
