//CONFIGURATION
const db = require("../db/dbConfig.js");

//GET ALL INDEX
const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//GET ONE SHOW
const getUser = async (id) => {
  try {
    const oneUser = await db.oneOrNone("SELECT * FROM users WHERE id=$1", id);
    return oneUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//CREATE
const createUser = async (user) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (first_name, last_name, email, company, city, country, user_name, user_pw, user_type, linkedin) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        user.first_name,
        user.last_name,
        user.email,
        user.company,
        user.city,
        user.country,
        user.user_name,
        user.user_pw,
        user.user_type,
        user.linkedin,
      ]
    );
    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//UPDATE
const putUser = async (user, id) => {
  try {
    const updatedUser = db.one(
      "UPDATE users SET first_name=$1, last_name=$2, email=$3, company=$4, city=$5, country=$6, user_name=$7, user_pw=$8, user_type=$9, linkedin=$10 WHERE id=$11 RETURNING *",
      [
        user.first_name,
        user.last_name,
        user.email,
        user.company,
        user.city,
        user.country,
        user.user_name,
        user.user_pw,
        user.user_type,
        user.linkedin,
        id,
      ]
    );
    return updatedUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//DELETE
const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      id
    );
    return deletedUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  createUser,
  putUser,
  deleteUser,
  getUser,
  getAllUsers,
};
