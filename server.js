const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors');
require("dotenv").config();
const PORT = 5000;

const authRoutes = require("./routes/users");

mongoose.connect(process.env.DATABASE_ACCESS, {
    dbName: "medPharmacy",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection Success.");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const app = express();
app.use(cors({origin:"*"}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  return res.send({
    error: false,
    message: "Server is healthy",
  });
});

app.use("/users", authRoutes);
let port = process.env.PORT || 5000;
app.listen(port, () => console.log("Listening on port "+port));
