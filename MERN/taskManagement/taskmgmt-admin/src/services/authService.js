import apiClient from './apiClient';

export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/user/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response;
  } catch (error) {
    console.error('Login failed:', error);
    throw error.response?.data || { message: 'Server error' };
  }
};

export const register = async (data) => {
  const res = await apiClient.post('/user/register', data);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getCurrentUser = async () => {
  try {
    const response = await apiClient.get('/user/getUserInfo');
    return response.data.userInfo;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error.response?.data || { message: 'Server error' };
  }
};

export const fetchUsers = () => apiClient.get('/user/getAllUsers');
