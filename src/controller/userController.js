const userController = {
  getAllUser(req, res) {
    return res.render("user.ejs");
  },
  createNewUser(req, res) {
    res.render("user.ejs");
  },
};

export default userController;
