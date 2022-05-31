const userController = {
  getAllUser(req, res) {
    // model => get all list user

    return res.render("user.ejs");
  },
  createNewUser(req, res) {
    // model => post data to database

    return res.render("user.ejs");
  },

  deleteUser(req, res) {
    return res.render("/user.ejs");
  },

  updateUser(req, res) {
    return res.render("/user.ejs");
  },
};

export default userController;
