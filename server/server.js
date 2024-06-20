const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT, MONGODB_URI } = require("./config/config.jsx");
const authRoutes = require("./routes/authRoutes.jsx");
const authenticateToken = require("./middleware/authenticateToken.jsx");
const limiter = require("./middleware/express-rate-limit.jsx");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Allow only your front-end URL for CORS
const allowedOrigins = [process.env.CLIENT_URL || 'https://hackintown-v2-0-static.onrender.com'];

const corsOptions = {
    origin: function (origin, callback) {
        // Check if the origin is in the allowed list, or if it's undefined (e.g., from non-browser clients)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};
app.use(cors(corsOptions));
app.use(require("helmet")());
app.use(limiter);

// MongoDB Connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
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
