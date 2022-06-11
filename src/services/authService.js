import { Op } from "sequelize";
import db from "../models/index";

const authService = {
  async createUser({ email, username, phone, password }) {
    try {
      // check email/phone number are axist
      const isCheckEmailExist = await db.User.findOne({
        where: { email },
        raw: true,
      });

      if (!!isCheckEmailExist === false) {
        // hash password
        // create new user
        await db.User.create({
          email,
          username,
          phone,
          password,
        });
      } else {
        return {
          EM: "the email is already exist",
          EC: 1,
        };
      }

      return {
        EM: "register user successfully",
        EC: 0,
      };
    } catch (error) {
      return {
        EM: "something wrongs in service",
        EC: "-2",
      };
    }
  },

  async loginUser({ valueLogin, password }) {
    try {
      const user = await db.User.findOne({
        where: {
          [Op.or]: [{ email: valueLogin }, { phone: valueLogin }],
          password,
        },
        raw: true,
      });

      if (user === null) {
        return {
          EM: "Incorrect email/phone or password ",
          EC: 1,
          DT: "",
        };
      }

      return {
        EM: "login user successfully",
        EC: 0,
        DT: user,
      };
    } catch (error) {
      return {
        EM: "something wrongs in service",
        EC: "-2",
      };
    }
  },
};

export default authService;
