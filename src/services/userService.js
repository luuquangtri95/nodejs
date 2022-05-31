import mysql from "mysql2/promise";
import bluebird from "bluebird";

const userService = {
  async getAllUser() {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "jwt",
      Promise: bluebird,
    });

    try {
      const [row] = await connection.execute("SELECT * FROM users");

      return row;
    } catch (error) {
      console.log(error);
    }
  },

  async getUserById(id) {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "jwt",
      Promise: bluebird,
    });

    try {
      const [row] = await connection.execute("SELECT * FROM users WHERE id=?", [
        id,
      ]);

      return row;
    } catch (error) {
      console.log(error);
    }
  },

  async addNewUser({ email, username, password }) {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "jwt",
      Promise: bluebird,
    });

    try {
      await connection.execute(
        "INSERT INTO users (email, username, password) VALUES (?,?,?)",
        [email, username, password]
      );
    } catch (error) {
      console.log(error);
    }
  },

  async deleteUser(id) {
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
  },

  async updateUser({ id, email, username }) {
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
  },
};

export default userService;
