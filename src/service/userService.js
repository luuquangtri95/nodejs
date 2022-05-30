import mysql from "mysql2/promise";
import bluebird from "bluebird";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

// create connect database
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "jwt",
//   Promise: bluebird,
// });

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);

  return hashPassword;
};

const createNewUser = async ({ email, password, username }) => {
  let hashPassword = hashUserPassword(password);
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    await connection.execute(
      `INSERT INTO users (email,password,username) VALUES (?,?,?)`,
      [email, hashPassword, username]
    );
  } catch (error) {
    console.log(error);
  }
};

const getListUsers = async () => {
  let userList = [];

  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "jwt",
      Promise: bluebird,
    });
    const [row, fields] = await connection.execute("SELECT * FROM users");

    userList = [...row];

    return userList;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [row, fields] = await connection.execute(
      "SELECT * FROM users WHERE id=?",
      [id]
    );

    return row;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  // DELETE FROM users WHERE id=id;

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    await connection.execute("DELETE FROM users WHERE id=?", [id]);
  } catch (error) {
    console.log(error);
  }
};

const updateUserInfo = async (id, email, username) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    await connection.execute(
      "UPDATE users SET email=?, username=? WHERE id=?",
      [email, username, id]
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashUserPassword,
  createNewUser,
  getListUsers,
  deleteUser,
  getUserById,
  updateUserInfo,
};
