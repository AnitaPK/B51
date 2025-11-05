import apiClient from './apiClient';

export const fetchTasks = (params) => apiClient.get('/tasks/getAllTask', { params });
export const createTask = (data) => apiClient.post('/tasks/createTask', data);
export const updateTask = (id, data) => apiClient.put(`/tasks/updateTask/${id}`, data);
export const deleteTask = (id) => apiClient.delete(`/tasks/deleteTask/${id}`);