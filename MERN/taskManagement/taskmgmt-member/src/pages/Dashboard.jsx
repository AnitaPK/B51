import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {logout, setUser} from '../redux/auth/authSlice' 
import { getUserInfo } from '../redux/auth/authSlice'
import TaskList from './TaskList'


const Dashboard = () => {
  const {user, status} = useSelector(state=>state.auth)
  const dispatch = useDispatch()

  async function fetchBaseQuery(){
  await dispatch(getUserInfo())
  }

  useEffect(()=>{
    fetchBaseQuery()
  },[])



  console.log('redux auth slice ->', user);


  return (
    <div>
      <h1>Dashboard</h1>
      <TaskList /> 
    </div>
  )
}

export default Dashboard
