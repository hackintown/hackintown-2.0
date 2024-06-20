const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT, MONGODB_URI } = require("./config/config.jsx");
const authRoutes = require("./routes/authRoutes.jsx");
const authenticateToken = require("./middleware/authenticateToken.jsx");
const limiter = require("./middleware/express-rate-limit.jsx");
const { connectToDatabase } = require("./utils/db.js");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(require("helmet")());
app.use(morgan("combined")); // Add Morgan for logging
app.use(limiter);

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
app.use("/api/auth", authRoutes);

// Protected route example
app.get("/protected", authenticateToken, (req, res) => {
  res.send("This is a protected route");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
