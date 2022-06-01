import db from "../models/index";

const userService = {
  async getListUser() {
    let userList = [];
    try {
      userList = await db.User.findAll();

      return userList;
    } catch (error) {
      console.log(error);
    }
  },
  async addNewUser(user) {
    const { email, username, password } = user;

    try {
      await db.User.create({
        email,
        username,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getById(id) {},
  deleteUser(id) {},
  updateUser(user) {},
};

export default userService;
