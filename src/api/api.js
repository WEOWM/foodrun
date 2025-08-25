import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/', // base URL
  timeout: 10000, // optional (10s)
});

export default api;
