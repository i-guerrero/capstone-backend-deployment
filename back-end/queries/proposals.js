//CONFIGURATION
const db = require("../db/dbConfig.js");

//GET ALL INDEX
const getAllProposals = async () => {
  try {
    const allProposals = await db.any("SELECT * FROM proposals");
    return allProposals;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//GET ONE SHOW
const getProposal = async (id) => {
  try {
    const oneProposal = await db.oneOrNone(
      "SELECT * FROM proposals WHERE id=$1",
      id
    );
    return oneProposal;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//CREATE
const createProposal = async (proposal) => {
  try {
    const newProposal = await db.one(
      "INSERT INTO proposals (title, description, impact, status, non_profit_id, mentor_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        proposal.title,
        proposal.description,
        proposal.impact,
        proposal.status,
        proposal.non_profit_id,
        proposal.mentor_id,
      ]
    );
    return newProposal;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//UPDATE
const putProposal = async (proposal, id) => {
  try {
    const updatedProposal = db.one(
      "UPDATE proposals SET title=$1, description=$2, impact=$3, status=$4, non_profit_id=$5, mentor_id=$6 WHERE id=$7 RETURNING *",
      [
        proposal.title,
        proposal.description,
        proposal.impact,
        proposal.status,
        proposal.non_profit_id,
        proposal.mentor_id,
        id,
      ]
    );
    return updatedProposal;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//UPdate Mentor Id
const addMentorToProposal = async (proposalId, mentorId) => {
  try {
    const updatedProposal = db.one(
      "UPDATE proposals SET mentor_id=$1 WHERE id=$2 RETURNING *",
      [mentorId, proposalId]
    );
    return updatedProposal;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//DELETE
const deleteProposal = async (id) => {
  try {
    const deletedProposal = await db.one(
      "DELETE FROM proposals WHERE id = $1 RETURNING *",
      id
    );
    return deletedProposal;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  createProposal,
  putProposal,
  deleteProposal,
  getAllProposals,
  getProposal, addMentorToProposal
};
