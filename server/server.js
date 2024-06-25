const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const session = require("express-session");
const passport = require("passport");
const config = require("./config/config.js");
const router = require("./routes/authRoutes.js");
const authenticateToken = require("./middleware/authenticateToken.js");
const limiter = require("./middleware/express-rate-limit.js");
const { connectToDatabase } = require("./utils/db.js");
require("./config/passport.js");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require("helmet")());
app.use(morgan("combined")); // Add Morgan for logging
app.use(limiter);

//Session
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
connectToDatabase(MONGODB_URI);

//Testing the Server
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running..",
  });
});
// Routes
app.use("/api/auth", router);

// Protected route example
app.get("/protected", authenticateToken, (req, res) => {
  res.send("This is a protected route");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = config.PORT;

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
