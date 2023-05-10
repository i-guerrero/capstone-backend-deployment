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
      "INSERT INTO projects (name, verified, admin) VALUES($1, $2, $3) RETURNING *",
      [project.name, project.verified, project.admin]
    );
    return newproject;
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
      "UPDATE projects SET name=$1, verified=$2, admin=$3 where id=$4 RETURNING *",
      [project.name, project.verified, project.admin, id]
    );
    return updatedProject;
  } catch (err) {
    return err;
  }
};

const getAllBookmarksForProject = async (id) => {
  try {
    const bookmarksByProject = await db.any(
      `
          SELECT
              *
          FROM
              projects_bookmarks
          JOIN
              projects
          ON
              projects.id = projects_bookmarks.project_id
          JOIN
              bookmarks
          ON
              bookmarks.id = projects_bookmarks.bookmark_id
          WHERE
              projects_bookmarks.project_id = $1;
        `,
      id
    );
    return bookmarksByproject;
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
  getAllBookmarksForProject,
};
