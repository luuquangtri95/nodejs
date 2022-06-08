import db from "../models/index";

const userService = {
  async getListUser() {
    // test relationship

    const newUser = await db.User.findOne({
      where: { id: 1 },
      attributes: ["username", "email", "groupId"],
      include: { model: db.Group, attributes: ["name", "description"] },
      raw: true,
      nest: true,
    });

    let roles = await db.Role.findAll({
      attributes: ["id", "url", "description"],
      include: {
        model: db.Group,
        where: { id: 2 },
        attributes: ["name", "description"],
      },
      raw: true,
      nest: true,
    });

    console.log("roles", roles);

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

  async getById(id) {
    try {
      const user = await db.User.findOne({
        where: {
          id,
        },
      });

      return user;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteUser(id) {
    try {
      await db.User.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  async updateUser(user) {
    const { id, email, username } = user;
    try {
      await db.User.update(
        { email, username },
        {
          where: {
            id,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
};

export default userService;
