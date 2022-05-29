import express from "express";

const router = express.Router();

/**
 *
 * @param {*} app: app express to server.js
 */

const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send(`
    <h1>Hello World</h1>
    `);
  });

  router.get("/search", (req, res) => {
    return res.send(`
    <h1>Search page</h1>
    `);
  });

  return app.use("/", router);
};

export default initWebRoutes;
