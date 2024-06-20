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

// Allow only your front-end URL for CORS

const corsOptions = {
  origin: ["https://hackintown-v2-0-static.onrender.com"],
  credentials: true,
  methods: ["GET", "POST", "DELETE", "OPTIONS"], // specify allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // specify allowed headers
  maxAge: 86400, // cache preflight response for 24 hours
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Enable pre-flight requests for all routes
app.use(require("helmet")());
app.use(morgan("combined")); // Add Morgan for logging
app.use(limiter);

// MongoDB Connection
connectToDatabase(MONGODB_URI);

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
const PORT = process.env.PORT || 5500;
// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
