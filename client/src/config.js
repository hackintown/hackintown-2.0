const config = {
    apiBaseUrl: process.env.NODE_ENV === 'production'
      ? 'https://hackintown-server.onrender.com/api' // Update with your deployed server URL
      : 'http://localhost:5000/api'
  };
  
  export default config;
  