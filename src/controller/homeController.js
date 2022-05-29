import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "jwt",
});

const handleHelloWorld = (req, res) => {
  // model=> get from database

  const body = {
    title: "home page",
  };

  return res.render("home.ejs", body);
};

const handleUserPage = (req, res) => {
  // model=> get from database
  const body = {
    title: "user page",
  };

  return res.render("user.ejs", body);
};

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  if (!username || !password) return;

  //

  connection.query(
    `INSERT INTO users (email,password,username) VALUES (?,?,?)`,
    [email, password, username],
    (err, results, fields) => {
      console.log(results);
    }
  );

  res.send("handleCreateNewUser");
};

module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
};
