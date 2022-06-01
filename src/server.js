import bodyParser from "body-parser";
import express from "express";
// import connection from "./config/connectDB";
require("dotenv").config();
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 8080;

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config view engine
configViewEngine(app);

// test connection
// connection();

// init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(`port listening ${PORT}`);
});
