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

const handleEditUser = async (req, res) => {
  const id = req.params.id;

  let user = await userService.getUserById(id);

  let userData = {};
  if (user && user.length > 0) {
    userData = user[0];
  }

  const body = {
    title: "edit user page",
    data: userData,
  };

  return res.render("user-update.ejs", body);
};

const handleUserUpdated = async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let id = req.body.id;

  await userService.updateUserInfo(id, email, username);

  return res.redirect("/user");
};

module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
  handleEditUser,
  handleUserUpdated,
};
