const config = {
  apiBaseUrl:
    process.env.NODE_ENV === "production"
      ? "https://hackintown-v2-0-server.onrender.com"
      : "http://localhost:5000",
  RAZORPAY_KEY_ID: "rzp_live_OjOeKHPcFGiR42",
  RAZORPAY_KEY_SECRET: "fQWWmGrvK0UnCNsq17701eQ0",
};

export default config;
