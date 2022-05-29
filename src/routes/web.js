import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

/**
 *
 * @param {*} app: app express to server.js
 */

const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWorld);
  router.get("/user", homeController.handleUserPage);
  router.post("/user/create-user", homeController.handleCreateNewUser);

  return app.use("/", router);
};

export default initWebRoutes;
