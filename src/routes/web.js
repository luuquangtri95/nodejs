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

  router.get("/user", userController.getAllUser);
  router.post("/user/create-user", userController.createNewUser);
  router.get("/user/delete-user/:id", userController.deleteUser);
  router.get("/user/update-user/:id", userController.getUserById);
  router.post("/user/update-user", userController.updateUser);

  return app.use("/", router);
};

export default initWebRoutes;
