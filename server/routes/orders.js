const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

//POST an order
router.post("/", orderController.post_order);

module.exports = router;
