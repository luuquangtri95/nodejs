import express from "express";
import path from "path";

/**
 *
 * @param {*} app: app express to server.js
 */

const configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

export default configViewEngine;