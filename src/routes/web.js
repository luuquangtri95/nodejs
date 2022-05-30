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

  router.post("/user", homeController.handleCreateNewUser);
  router.get("/delete-user/:id", homeController.handleDeleteUser);
  router.get("/update-user/:id", homeController.handleEditUser);
  router.post("/user/update-user", homeController.handleUserUpdated);

  return app.use("/", router);
};

export default initWebRoutes;
