const express = require("express");
const router = express.Router();

const SignupTemplate = require("../models/Signup");

router.get("/", (req, res) => {
  res.send("Hi, we are now at courses route");
});

router.get("/1", (req, res) => {
  res.send("I am now in course #1");
});

router.post("/signup", (req, res) => {
  const newuser = new SignupTemplate({
    Name: req.body.Name,
    Phonenumber: req.body.Phonenumber,
    Password:req.body.Password,
    confirmPassword:req.body.confirmPassword,
  });

  newuser
    .save()
    .then(result => {
      res.json(result);
      console.log(result);
    })
    .catch(err => {
      res.json({ message: err });
      console.log(err);
    });
});

module.exports = router;