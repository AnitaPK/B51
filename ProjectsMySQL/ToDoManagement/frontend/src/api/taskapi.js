import axiosInstance from './api.js'



export const getAllTasks = ()=> axiosInstance.get('/task/getAllTasks')

export const createTask = (payload) => axiosInstance.post('/task/createTask', payload)

export const deleteTask = (id) => axiosInstance.delete(`/task/deleteTask/${id}`)

export const isCompleteTask = (id) => axiosInstance.put(`/task/isComplete/${id}`)


// create function for getTask By ID


export const updateTask = (id, payload) => axiosInstance.put(`/task/updateTask/${id}`, payload)