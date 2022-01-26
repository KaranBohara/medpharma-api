const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");

const AuthController = require("../src/admin/admin.controller");

router.post("/login", cleanBody, AuthController.Login);
router.post("/product",cleanBody,AuthController.AddProduct);
router.get("/product",AuthController.getProducts);
router.get("/product/:id",AuthController.getProduct);
router.put("/product/:id",AuthController.updateProduct);


module.exports = router;