const config = {
  apiBaseUrl: process.env.NODE_ENV === 'production'
    ? 'https://hackintown-v2-0-server.onrender.com/api'
    : 'http://localhost:5000'
};

export default config;
