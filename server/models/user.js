const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config.js");

const userSchema = new mongoose.Schema(
  {
    fname: {
     type: String,
     required: [true, "First Name is required"],
     trim: true,
    },
    lname: {
      type: String,
      required: [true, "Last Name is required"],
      trim: true,
    },
    email: {
      type: String, //Data type (String).
      required: [true, "Email is required"], // Mandatory field with a custom error message.
      unique: true, //Ensures each email is unique.
      lowercase: true, //Converts email to lowercase before saving.
      trim: true, //Removes whitespace from both ends.
      match: [/\S+@\S+\.\S+/, "is invalid"], //Validates the format of the email using a regex pattern.
      index: true, //mproves query performance on this field.
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"], //Ensures a minimum length of 8 characters.
    },
  },
  { timestamps: true } //Adds createdAt and updatedAt fields automatically.
);

// Middleware to hash the password before saving a user document
//Middleware that runs before saving a user document.
userSchema.pre("save", async function (next) {
  const user = this;
  //Checks if the password field has been modified. If not, it proceeds without rehashing.
  if (!user.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10); //Generates a salt using bcrypt.genSalt().
    user.password = await bcrypt.hash(user.password, salt); //Hashes the password using the generated salt.
    next(); //Replaces the plaintext password with the hashed version
  } catch (error) {
    next(error);
  }
});

// Instance method to compare passwords
//Compares a plaintext password with the hashed password stored in the database.
userSchema.methods.comparePassword = async function (candidatePassword) {
  //Uses bcrypt.compare() to perform the comparison.
  return await bcrypt.compare(candidatePassword, this.password);
};

// Instance method to generate a JWT
//Generates a JWT token containing the user ID and email.
userSchema.methods.generateJWT = function () {
  //Signs the token with the JWT_SECRET and sets an expiration time of 1 hour.
  return jwt.sign({ id: this._id, email: this.email }, JWT_SECRET, {
    expiresIn: "1h",
  });
};

// Index the email field for faster queries
//Ensures efficient querying on the email field.
userSchema.index({ email: 1 });

// Compiles the schema into a model and exports it for use in other parts of the application.
module.exports = mongoose.model("User", userSchema); 
