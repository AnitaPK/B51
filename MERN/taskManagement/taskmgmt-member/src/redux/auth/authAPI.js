import apiClient from "../../api/apiClient";

export const login =  (email, password) =>  apiClient.post('/user/login', { email, password });

export const register =  (data) => apiClient.post('/user/register', data);

export const getCurrentUser = () =>apiClient.get('/user/getUserInfo');
