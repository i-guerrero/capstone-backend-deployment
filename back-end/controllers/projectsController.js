const express = require("express");

const projects = express.Router({ mergeParams: true });
const {
  getAllProjects,
  getProject,
  newProject,
  deleteProject,
  updateProject,
  getAllUsersOnProject,
  getAllProjectsWithNonProfitNameAndProposalDescription,
} = require("../queries/projects");

projects.get("/", async (req, res) => {
  try {
    const allProjects =
      await getAllProjectsWithNonProfitNameAndProposalDescription();
    console.log(allProjects);
    res.json(allProjects);
  } catch (err) {
    res.json(err);
  }
});

// SHOW
projects.get("/:id", async (req, res) => {
  const { id } = req.params;
  const project = await getProject(id);
  if (project.length > 0) {
    res.json(project[0]);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
projects.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProject = await updateProject(req.body, id);
  res.status(200).json(updatedProject);
});

projects.post("/", async (req, res) => {
  const project = await newProject(req.body);
  res.json(project);
});

// DELETE
projects.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProject = await deleteProject(id);
  res.status(200).json(deletedProject);
});

projects.get("/:projectId/users", async (req, res) => {
  const { projectId } = req.params;
  const projectUsers = await getAllUsersOnProject(projectId);
  res.json(projectUsers);
});

module.exports = projects;
