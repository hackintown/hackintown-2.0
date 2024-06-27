const express = require("express");
const router = express.Router();
const { createOrder } = require("../controllers/paymentController");
const validatePayment = require("../middleware/validatePayment");

router.post("/createOrder", validatePayment, createOrder);

module.exports = router;
