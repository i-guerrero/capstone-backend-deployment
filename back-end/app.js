// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const allUsers = require("./controllers/usersController");
const allProposals = require("./controllers/proposalsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use("/users", allUsers);
app.use("/proposals", allProposals);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// USERS Routes
const usersController = require("./controllers/usersController");
app.use("/users", usersController);

// Projects Routes
const projectsController = require("./controllers/projectsController");
app.use("/projects", projectsController);

// EXPORT
module.exports = app;
