const User = require("../models/user");

// Register Function:
// Extracts email and password from the request body.
// Checks if a user with the given email already exists.
// If yes, responds with a 400 status and an error message.
// If no, creates a new user and saves it to the database.
// Responds with a success message upon successful registration.
// Catches and logs any errors, responding with a 500 status.

const register = async (req, res) => {
  const { fname, lname, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    if (!fname || !lname || !password) {
      return res
        .status(400)
        .json({ message: "First Name, Last Name, and Password are required." });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long." });
    }
    user = new User({ fname, lname, email, password });
    await user.save();
    const token = user.generateJWT();
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error registering user" });
  }
};

// Login Function:
// Extracts email and password from the request body.
// Finds a user with the given email.
// If not found, responds with a 404 status and an error message.
// Compares the provided password with the stored hashed password.
// If they do not match, responds with a 401 status and an error message.
// If they match, generates a JWT token.
// Responds with the token.
// Catches and logs any errors, responding with a 500 status.

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const token = user.generateJWT();
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const googleLoginCallback = (req, res) => {
  const token = req.user.generateJWT();
  res.redirect(`${CLIENT_URL}/auth/callback?token=${token}`);
};
module.exports = { register, login, googleLoginCallback };
