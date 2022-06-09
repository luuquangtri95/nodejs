import express from "express";
import apiController from "../controller/apiController";
import authController from "../controller/authController";

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

  return app.use("/api/v1", router);
};

export default initApiRoutes;
