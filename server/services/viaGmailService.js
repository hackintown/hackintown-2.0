const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASS } = require("../config/config");

const sendEmail = async (to, subject, courseLink) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Purchase Successful</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      color: #333333;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #4CAF50;
      padding: 20px;
      text-align: center;
      color: #ffffff;
    }
    .header h1 {
      margin: 0;
    }
    .content {
      padding: 20px;
    }
    .content h2 {
      color: #4CAF50;
    }
    .content p {
      font-size: 16px;
      line-height: 1.5;
    }
    .course{
      padding:5px 8px;
      background:yellow;
    }
    .footer {
      background-color: #f4f4f4;
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #777777;
    }
    .footer a {
      color: #4CAF50;
      text-decoration: none;
    }
  </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Thank You for Your Purchase!</h1>
        </div>
        <div class="content">
          <h2>Purchase Successful</h2>
          <p>Dear Customer,</p>
          <p>Thank you for purchasing our course. We're excited to have you on board!</p>
          <p>Here is your course link:</p>
            <p class="course">${courseLink}</p>
          <p>If you have any questions or need assistance, feel free to contact us at <a href="mailto:manojkumarcse432@gmail.com">manojkumarcse432@gmail.com</a>.</p>
          <p>Best regards,<br>Team Hackintown</p>
        </div>
        <div class="footer">
          <p>&copy; 2024 Hackintown. All rights reserved.</p>
          <p><a href="https://hackintown.com">Visit our website</a></p>
        </div>
      </div>
    </body>
    </html>

  `;

    const mailOptions = {
      from: EMAIL_USER,
      to,
      subject,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

module.exports = { sendEmail };
