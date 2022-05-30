import userService from "../service/userService";

const handleHelloWorld = (req, res) => {
  // model=> get from database

  const body = {
    title: "home page",
  };

  return res.render("home.ejs", body);
};

const handleUserPage = async (req, res) => {
  // model=> get from database

  const userList = await userService.getListUsers();

  const body = {
    title: "user page",
    data: userList,
  };

  return res.render("user.ejs", body);
};

const handleCreateNewUser = (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
  };

  if (!data.username || !data.password) return;

  /**
   *  todo: if has username and password then save data to database
   */

  userService.createNewUser(data);

  return res.redirect("/user");
};

const handleDeleteUser = async (req, res) => {
  const id = req.params.id; // id nhận từ /user/:id

  await userService.deleteUser(id);

  return res.redirect("/user");
};

module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
};
