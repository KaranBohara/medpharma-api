const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const routeSignup = require("./routes/signup");

// Middleware
app.use("/users", routeSignup);

app.get("/", (req, res) => {
  res.send("Welcome to express tutorial!");
});


// Connect to Database
mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  ()=>console.log("Database connected successfully")
);
let port = process.env.PORT || 5000
app.listen(port, () => console.log("Listening on port "+port));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`listening on port ${PORT}`));