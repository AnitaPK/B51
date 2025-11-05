import apiClient from './apiClient';

export const fetchProjects = () => apiClient.get('/projects/getAllProject');
export const createProject = (data) => apiClient.post('/projects/createProject', data);
export const updateProject = (id, data) => apiClient.put(`/projects/updateProject/${id}`, data);
export const deleteProject = (id) => apiClient.delete(`/projects/deleteProject/${id}`);