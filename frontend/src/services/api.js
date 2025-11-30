import axios from 'axios';

const API_URL = 'https://aguliacrudbackend.onrender.com';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (username, password) => api.post('/auth/login', { username, password }),
  signup: (username, password, email) => api.post('/auth/signup', { username, password, email }),
};

export const positionsAPI = {
  getAll: () => api.get('/positions'),
  getOne: (id) => api.get(`/positions/${id}`),
  create: (positionCode, positionName) => api.post('/positions', { positionCode, positionName }),
  update: (id, positionCode, positionName) => api.patch(`/positions/${id}`, { positionCode, positionName }),
  delete: (id) => api.delete(`/positions/${id}`),
};

export default api;
