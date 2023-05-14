const db = require("../db/dbConfig.js");

const getAllProjects = async () => {
  try {
    const allProjects = await db.any("SELECT * FROM projects");

    return allProjects;
  } catch (err) {
    return err;
  }
};

const getProject = async (id) => {
  try {
    const oneProject = await db.any("SELECT * FROM projects WHERE id=$1", id);
    return oneProject;
  } catch (err) {
    return err;
  }
};

const newProject = async (project) => {
  try {
    const newProject = await db.one(
      "INSERT INTO projects (technologies, num_developers, date_to_complete, trello, project_status) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        project.technologies,
        project.num_developers,
        project.date_to_complete,
        project.trello,
        project.project_status,
      ]
    );
    return newProject;
  } catch (err) {
    return err;
  }
};

const deleteProject = async (id) => {
  try {
    const deletedProject = await db.one(
      "DELETE FROM projects WHERE id = $1 RETURNING *",
      id
    );
    return deletedProject;
  } catch (err) {
    return err;
  }
};

const updateProject = async (project, id) => {
  try {
    const updatedProject = await db.one(
      "UPDATE projects SET technologies=$1, num_developers=$2, date_to_complete=$3, trello=$4, project_status=$5 WHERE id=$6 RETURNING *",
      [
        project.technologies,
        project.num_developers,
        project.date_to_complete,
        project.trello,
        project.project_status,
        id,
      ]
    );
    return updatedProject;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllProjects,
  getProject,
  newProject,
  deleteProject,
  updateProject,
};
