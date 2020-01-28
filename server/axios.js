const axios = require('axios');
const serverConfig = require('../config/environments');

const axiosInstance = axios.create({
  baseURL: serverConfig.server.api,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = axiosInstance;
