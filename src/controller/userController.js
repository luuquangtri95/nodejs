import userService from "../services/userService";

const userController = {
  async handleGetAllUser(req, res) {
    // model => get all list user

    const userList = await userService.getAllUser();

    // ! controller Interactive with view
    return res.render("user.ejs", { userList });
  },

  handleCreateNewUser(req, res) {
    // model => post data to database
    const data = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };

    userService.addNewUser(data);

    // ! controller Interactive with view
    return res.redirect("/user");
  },

  handleDeleteUser(req, res) {
    const id = req.params.id;

    console.log(id);

    // model => delete data to database use "id"
    userService.deleteUser(id);

    // ! controller Interactive with view
    return res.redirect("/user");
  },

  async handleUpdateUser(req, res) {
    const id = req.params.id;
    // model => update data to database use "id"
    // userService.updateUser(id);
    const user = await userService.getUserById(id);

    if (user.length === 0) return;

    const dataUser = { ...user[0] };

    // ! controller Interactive with view
    return res.render("user-update.ejs", { dataUser });
  },

  handleUserUpdated(req, res) {
    const data = req.body;

    userService.updateUser(data);

    return res.redirect("/user");
  },
};

export default userController;
