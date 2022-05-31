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
    // model => delete data to database use "id"

    // ! controller Interactive with view
    return res.redirect("/user");
  },

  handleUpdateUser(req, res) {
    // model => update data to database use "id"

    // ! controller Interactive with view
    return res.send("create success");
  },
};

export default userController;
