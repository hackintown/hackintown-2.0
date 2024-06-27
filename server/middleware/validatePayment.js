const validatePayment = (req, res, next) => {
  const { amount } = req.body;
  if (!amount || amount <= 0) {
    return res.status(400).json({
      message: "Invalid payment amount",
    });
  }
  next();
};
module.exports = validatePayment;
