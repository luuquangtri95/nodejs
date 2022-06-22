import userApiService from "../services/userApiService";
// const userReactController = {
//   read(req, res) {},
//   create(req, res) {},
//   update(req, res) {},
//   delete(req, res) {},
// };

// export default userReactController;

class UserApiController {
  async read(req, res) {
    try {
      if (req.query.page && req.query.limit) {
        let page = req.query.page;
        let limit = req.query.limit;

        let userListPagination = await userApiService.getUserWithPagination(
          Number(page),
          Number(limit)
        );

        return res.status(200).json({
          EM: userListPagination.EM, // error massage
          EC: userListPagination.EC, // error code
          DT: userListPagination.DT, // data
        });
      } else {
        let userList = await userApiService.getAllUser();
        return res.status(200).json({
          EM: userList.EM, // error massage
          EC: userList.EC, // error code
          DT: userList.DT, // data
        });
      }
    } catch (error) {
      return res.status(500).json({
        EM: "something went wrong with controller", // error massage
        EC: "-1", // error code
        DT: "", // data
      });
    }
  }
  create(req, res) {
    try {
      const data = req.body;

      userApiService.createNewUser(data);
    } catch (error) {
      return res.status(500).json({
        EM: "something went wrong with controller", // error massage
        EC: "-1", // error code
        DT: "", // data
      });
    }
  }
  update(req, res) {}
  async delete(req, res) {
    try {
      const id = req.params.id;

      let result = await userApiService.deleteUser(id);

      return res.status(200).json({
        EM: result.EM, // error massage
        EC: result.EC, // error code
        DT: result.DT, // data
      });
    } catch (error) {
      return res.status(500).json({
        EM: "something went wrong with controller", // error massage
        EC: "-1", // error code
        DT: "", // data
      });
    }
  }
}

const userApiController = new UserApiController();

export default userApiController;
