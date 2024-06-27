const Razorpay = require("razorpay");
const crypto = require('crypto');
const config = require("../config/config");
const razorpay = new Razorpay({
    key_id: config.razorpayKeyId,
    key_secret: config.razorpayKeySecret,
})

exports.createOrder = async (req, res) => {
    const payment_capture = 1;
    const amount = req.body.amount;
    const currency = 'INR';

    // Generate a unique receipt ID
    const receipt = crypto.randomBytes(16).toString('hex');

    const options = {
        amount: amount * 1000, // amount in paise
        currency,
        receipt,
        payment_capture,
    };

    try {
        const response = await razorpay.orders.create(options);
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount,
        });
    } catch (error) {
        res.status(500).send('Something went wrong');
    }
};