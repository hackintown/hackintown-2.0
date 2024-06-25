const dotenv = require("dotenv"); //Reads .env file and makes environment variables available through process.env.
dotenv.config(); // Loads environment variables from .env file into process.env
const config = {
  development: {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT || 5000,
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    SESSION_SECRET: process.env.SESSION_SECRET,
  },
  production: {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    CLIENT_URL: process.env.CLIENT_URL || "https://www.hackintown.com",
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    SESSION_SECRET: process.env.SESSION_SECRET,
  },
};
const environment = process.env.NODE_ENV || "development";
module.exports = config[environment];
