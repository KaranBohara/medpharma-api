const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");

const AuthController = require("../src/admin/admin.controller");

router.post("/login", cleanBody, AuthController.Login);



module.exports = router;