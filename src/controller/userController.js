const userController = {
  getAllUser(req, res) {
    // model => get all list user

    // ! controller Interactive with view
    return res.render("user.ejs");
  },
  createNewUser(req, res) {
    // model => post data to database

    // ! controller Interactive with view
    return res.render("user.ejs");
  },

  deleteUser(req, res) {
    // model => delete data to database use "id"

    // ! controller Interactive with view
    return res.render("/user.ejs");
  },

  updateUser(req, res) {
    // model => update data to database use "id"

    // ! controller Interactive with view
    return res.render("/user.ejs");
  },
};

export default userController;
