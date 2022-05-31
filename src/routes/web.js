import express from "express";
import userController from "../controller/userController";

const router = express.Router();

/**
 *
 * @param {*} app: app express to server.js
 */

const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.render("home.ejs");
  });

  router.get("/user", userController.handleGetAllUser);
  router.get("/user/delete/:id", userController.handleDeleteUser);
  router.get("/user/update/:id", userController.handleUpdateUser);
  router.post("/user/update", userController.handleUserUpdated);
  router.post("/user", userController.handleCreateNewUser);

  return app.use("/", router);
};

export default initWebRoutes;
