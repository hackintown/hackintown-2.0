import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";
import config from "../../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${config.apiBaseUrl}/auth/login`, {
        email,
        password,
      });
      setMessage(`Login successful! Token: ${response.data.token}`);
      localStorage.setItem("token", response.data.token); // Store the JWT token
      console.log("Loggged In Successfully");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setMessage(`Login failed: ${error.response?.data?.msg || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.authForm} container`}>
      <h2>Login</h2>
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
            autoComplete="off"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Login"}
        </button>
      </form>
      {message && <p>{message}</p>}
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => navigate("/register")}
      >
        Switch to Register
      </button>
    </div>
  );
};

export default Login;
