const express = require("express");
const router = express.Router();
const cleanBody = require("../middlewares/cleanbody");
const AuthController = require("../src/products/products.controller");

router.post("/",cleanBody,AuthController.AddProduct);
router.get("/",AuthController.getProducts);
router.get("/:id",AuthController.getProduct);
router.put("/:id",AuthController.updateProduct);
router.delete("/:id",AuthController.deleteProduct);

module.exports = router;