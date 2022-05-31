import express from "express";
import expressLayouts from "express-ejs-layouts";

/**
 *
 * @param {*} app: app express to server.js
 */

const configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.use(expressLayouts);

  app.set("view engine", "ejs");
  app.set("layout", "./layouts/defaultLayout");
  app.set("views", "./src/views");
};

export default configViewEngine;
