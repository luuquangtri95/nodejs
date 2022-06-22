import db from "../models";

class UserApiService {
  async getAllUser() {
    try {
      let userList = await db.User.findAll({
        attributes: ["id", "username", "email", "phone", "sex"],
        include: { model: db.Group, attributes: ["name", "description"] },
      });

      if (userList) {
        return {
          EM: "get all data successfully",
          EC: 0,
          DT: userList,
        };
      } else {
        return {
          EM: "get all data successfully",
          EC: 0,
          DT: [],
        };
      }
    } catch (error) {
      return {
        EM: "something went wrong with service",
        EC: 1,
        DT: [],
      };
    }
  }

  async getUserWithPagination(page, limit) {
    try {
      const offset = (page - 1) * limit;

      /**
       * page - 1 ??
       * if page = 1 then 1 - 1 = 0, page start
       */

      const { count, rows } = await db.User.findAndCountAll({
        offset,
        limit,
        attributes: ["id", "username", "email", "phone", "sex"],
        include: { model: db.Group, attributes: ["name", "description"] },
      });

      let totalPage = Math.ceil(count / limit);

      let userList = {
        data: rows,

        pagination: {
          _totalPage: totalPage,
          _totalRows: count,
          _page: page,
          _limit: limit,
        },
      };

      return {
        EM: "get all user pagination successfully",
        EC: 0,
        DT: userList,
      };
    } catch (error) {
      return {
        EM: "something went wrong with service",
        EC: 1,
        DT: [],
      };
    }
  }
  async createNewUser(data) {
    try {
      let isUser = await db.User.findOne({
        where: { id: data.id },
      });

      if (isUser) {
        // update
      } else {
        // create
      }
    } catch (error) {}
  }
  async updateUser(data) {
    try {
      let user = await db.User.findOne({
        where: { id: data.id },
      });

      if (user) {
        // update
      } else {
        // not found
      }
    } catch (error) {}
  }
  async deleteUser(id) {
    try {
      await db.User.destroy({
        where: { id },
      });

      return {
        EM: "delete item successfully",
        EC: 0,
        DT: "",
      };
    } catch (error) {
      return {
        EM: "something went wrong with service",
        EC: 1,
        DT: [],
      };
    }
  }
}

export default new UserApiService();
