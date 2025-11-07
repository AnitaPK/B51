import apiClient from "./apiClient";

export const getTasksOfUser = () =>apiClient.get('/tasks/getTasksOfUser');
