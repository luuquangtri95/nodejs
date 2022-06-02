import userService from "../services/userService";

const userController = {
  async getAllUser(req, res) {
    // model => get all list user
    const userList = await userService.getListUser();

    // ! controller Interactive with view
    return res.render("user.ejs", { userList });
  },
  createNewUser(req, res) {
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

  deleteUser(req, res) {
    // model => delete data to database use "id"
    const id = req.params.id;

    userService.deleteUser(id);

    // ! controller Interactive with view
    return res.redirect("/user");
  },

  async getUserById(req, res) {
    const id = req.params.id;

    const user = await userService.getById(id);

    return res.render("user-update.ejs", { user });
  },

  updateUser(req, res) {
    // model => update data to database use "id"

    userService.updateUser(req.body);

    // ! controller Interactive with view
    return res.redirect("/user");
  },
};

export default userController;
