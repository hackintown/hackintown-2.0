const dotenv = require("dotenv"); //Reads .env file and makes environment variables available through process.env.
dotenv.config(); // Loads environment variables from .env file into process.env
module.exports = {
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase",
  JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret",
  PORT: process.env.PORT || 5000,
};
