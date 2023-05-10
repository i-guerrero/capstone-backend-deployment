//CONFIGURATION
const db = require("../db/dbConfig.js");

//CREATE
const createProposal = async (proposal) => {
  try {
    const newProposal = await db.one(
      "INSERT INTO users (first_name, last_name, email, company, city, country, user_name, user_pw, user_type, linkedin) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 RETURNING *",
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
      ]
    );
    return updatedProposal;
  } catch (error) {
    console.log(error);
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
};
``