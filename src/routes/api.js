import express from "express";
import apiController from "../controller/apiController";
import authController from "../controller/authController";
import userApiController from "../controller/userApiController";

const router = express.Router();

/**
 *
 * @param {*} app: app express to server.js
 */

const initApiRoutes = (app) => {
  // api
  // router.get("/register", authController.handleRegister);
  router.post("/register", authController.handleRegister);
  router.post("/login", authController.handleLogin);

  router.get("/user/read", userApiController.read);
  router.post("/user/create", userApiController.create);
  router.put("/user/update", userApiController.update);
  router.delete("/user/delete/:id", userApiController.delete);

  return app.use("/api/v1", router);
};

export default initApiRoutes;
