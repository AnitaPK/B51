import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: { 'Content-Type': 'application/json' }
});

apiClient.interceptors.request.use(cfg => {
  const token = localStorage.getItem('token51');
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

export default apiClient;