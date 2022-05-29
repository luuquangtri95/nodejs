const handleHelloWorld = (req, res) => {
  // model=> get from database

  return res.render("home.ejs", { name: "tri" });
};

const handleUserPage = (req, res) => {
  // model=> get from database

  return res.render("user.ejs");
};

module.exports = {
  handleHelloWorld,
  handleUserPage,
};
