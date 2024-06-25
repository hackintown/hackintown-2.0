const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { register, login } = require("../controllers/authController.js");
const { CLIENT_URL } = require("../config/config.js");
const router = express.Router();

// Route: POST /api/auth/register
router.post("/register", register);

// Route: POST /api/auth/login
router.post("/login", login);

//Google Authentication Route:
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

//Google Callback Route:
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect home with token or handle as needed
    const token = req.user.generateJWT(); // Assuming generateJWT is a method on your User model
    res.redirect(`${CLIENT_URL}/influencer?token=${token}`);
  }
);

//Logout
router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;
