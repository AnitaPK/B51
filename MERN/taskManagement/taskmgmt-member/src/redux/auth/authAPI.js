import apiClient from "../../api/apiClient";

export const login =  (data) =>  apiClient.post('/user/login', data);

export const register =  (data) => apiClient.post('/user/register', data);

export const getCurrentUser = () =>apiClient.get('/user/getUserInfo');
