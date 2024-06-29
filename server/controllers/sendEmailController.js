const { sendEmail } = require("../services/viaGmailService");

const sendEmailController = async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).json({
      success: false,
      error: "Missing parameters",
    });
  }

  try {
    const response = await sendEmail(to, subject, text);
    res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { sendEmailController };
