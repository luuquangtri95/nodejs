import express from "express";
import expressEjsLayout from "express-ejs-layouts";

/**
 *
 * @param {*} app: app express to server.js
 */

const configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.use(expressEjsLayout);
  app.set("layout", "./layouts/mainLayout.ejs");
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

export default configViewEngine;
