const express = require("express");
const app = express();
const cors=require("cors")
app.use(cors());

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const path = require("path");

  require("dotenv").config({ path: "config/config.env" });


app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));





const contact = require("./routes/contactRoutes");
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello! The API is running." });
});



app.use("/api/v1", contact);

module.exports = app;