import express from "express";

const router = express.Router();

/**
 *
 * @param {*} app: app express to server.js
 */

const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.render("home.ejs");
  });

  router.get("/user", (req, res) => {
    return res.render("user.ejs");
  });

  return app.use("/", router);
};

export default initWebRoutes;
