const express = require("express");
const router = express.Router();
const cleanBody = require("../middlewares/cleanbody");
const AuthController = require("../src/orders/orders.controller");

router.post("/",cleanBody,AuthController.placeOrder);
router.get("/",AuthController.getOrderItems);
// router.get("/:id",AuthController.getOrderItem);
// router.put("/:id",AuthController.updateOrder);
// router.delete("/:id",AuthController.deleteOrder);

module.exports = router;