const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config.jsx");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  
  if (!authHeader) {
    return res.status(401).json({ msg: "No token provided" });
  }
  
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "Token is missing or malformed" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ msg: "Token is invalid or expired" });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
