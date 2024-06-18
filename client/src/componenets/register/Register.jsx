import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });
      setMessage("Registration successful! Please log in.");
      navigate("/login"); // Redirect to the login page after registration
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      setMessage(`Registration failed: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.authForm} container`}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Register"}
        </button>
      </form>
      {message && <p>{message}</p>}
      <button
        className={styles.toggleButton}
        onClick={() => navigate("/login")} // Navigate to the Login page
      >
        Switch to Login
      </button>
    </div>
  );
};

export default Register;
