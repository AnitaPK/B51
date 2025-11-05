import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import ProjectList from './components/ProjectList'
import './styles.css'
import TaskList from './components/TaskList'
import UserList from './components/UserList'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><Dashboard /></ProtectedRoute>}>
  <Route index element={<Navigate to="projects" />} /> 
  <Route path="projects" element={<ProjectList />} />
  <Route path="tasks" element={<TaskList />} />
  <Route path="users" element={<UserList />} />
</Route>
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  )
}