import authService from "../services/authService";

const authController = {
  async handleRegister(req, res) {
    try {
      const data = req.body;
      if (!data.email || !data.phone || !data.password) {
        return res.status(200).json({
          EM: "Missing required parameters", // error massage
          EC: "1", // error code
          DT: "", // data
        });
      }

      if (!data.password || data.password.length < 5) {
        return res.status(200).json({
          EM: "Password must be at least 5 characters ", // error massage
          EC: "1", // error code
          DT: "", // data
        });
      }

      // service createUser
      const result = await authService.createUser(data);
      return res.status(200).json({
        EM: result.EM, // error massage
        EC: result.EC, // error code
        DT: "", // data
      });
      // end service
    } catch (error) {
      return res.status(500).json({
        EM: "error form server", // error massage
        EC: "-1", // error code
        DT: "", // data
      });
    }
  },
  async handleLogin(req, res) {
    try {
      const data = req.body;
      if (!data.email || !data.password) {
        return res.status(200).json({
          EM: "Missing required parameters", // error massage
          EC: "1", // error code
          DT: "", // data
        });
      }

      // service createUser
      const result = await authService.loginUser(data);

      return res.status(200).json({
        EM: result.EM, // error massage
        EC: result.EC, // error code
        DT: "", // data
      });
    } catch (error) {
      return res.status(500).json({
        EM: "error form server", // error massage
        EC: "-1", // error code
        DT: "", // data
      });
    }
  },
};

export default authController;
