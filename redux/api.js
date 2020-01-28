import axios from 'axios';

const env = process.env.ENV || 'development';

const config = {
  development: {
    api: 'http://localhost:3000/api/',
  },
  staging: {
    api: 'https://test.ayu.health/api/',
  },
  production: {
    api: 'https://ayu.health/api/',
  },
}[env];

export const BASE_URL = config.api;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
