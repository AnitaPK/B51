import React, { useEffect, useState } from 'react'
import { getTasksOfUser } from '../api/taskAPI'

const TaskList = () => {
  const [tasks,setTasks] = useState()
  async function getTasks(){
      const res = await getTasksOfUser()
      if(res){
        setTasks(res.data)
      }
  }

useEffect(()=>{
  getTasks()
},[])

console.log(tasks ,"Tasks in task list")

  return (
    <div>
      <h1>Task List </h1>
    </div>
  )
}

export default TaskList