import React, { useEffect, useState } from "react";
import { getAllTasks, deleteTask, isCompleteTask, updateTask } from "../api/taskapi";
import DeleteTaskModal from './TaskDelete'
import TaskUpdateModal from "./TaskUpdateModal";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedTaskEdit, setSelectedTaskEdit] = useState(null);


  async function fetchData() {
    const response = await getAllTasks();
    console.log(response.data.tasks);
    if (response.data.success) {
      setTasks(response.data.tasks);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  const handleDeleteClick = (task) => {
    console.log("**********")
    setSelectedTask(task);
    setShowModalDelete(true);
  };

  const handleClose = () => {
    setShowModalDelete(false);
    setSelectedTask(null);
    setShowModalEdit(false);
    setSelectedTaskEdit(null);
  };

  async function handleDelete(taskID){
    response = await deleteTask(taskID)
    if(response.data.success){
    setShowModalDelete(false);
    setSelectedTask(null);
    alert(response.data.msg)
    fetchData()
    }
  }

  function handleUpdateClick(task){
        console.log("**********")
    setSelectedTaskEdit(task);
    setShowModalEdit(true);
  }

  async function handleUpdate(taskID, formData){
    console.log("&&&&&&&&&&&&")
    response = await updateTask(taskID, formData)
    setShowModalEdit(false)
    setSelectedTaskEdit(null)
    fetchData()
  }


async function handleIsComplete(taskID) {
      const response = await isCompleteTask(taskID)
      if(response.data.success){
      alert(response.data.msg)
      }else{
        alert('Cant updated')
      }
    fetchData();

}

  return (
    <>
        <div>
      Home Page
      <div className="container ">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task Name</th>
              <th scope="col">Task Description</th>
              <th scope="col">Task IsComplete</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (<>
              {
                tasks.map((task,i)=>(
                        <tr keys={i}>
                <th scope="row">{i+1}</th>
                <td>{task.task_name}</td>
                <td>{task.task_description}</td>
                <td>
                  
                  <button onClick={()=>handleIsComplete(task.id)}>{task.is_complete == 0 ? <span>In progress</span>:<span>Completed</span>}
                  </button>
                  </td>
                <td>{task.start_date}</td>
                <td>{task.end_date}</td>
                <td><button className="btn btn-success" onClick={()=>handleUpdateClick(task)}>Edit</button>
                <button className="btn btn-danger"
                onClick={() => handleDeleteClick(task)}
                >Delete</button>
                </td>
              </tr>
                ))
              }
            </>) : (
              <tr>No task available</tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    <DeleteTaskModal show={showModalDelete}
        handleClose={handleClose}
        handleDelete={handleDelete}
        task={selectedTask}/>



<TaskUpdateModal 
show={showModalEdit}
        handleClose={handleClose}
        handleUpdate={handleUpdate}
        task={selectedTaskEdit}
/>
    </>

  );
};

export default Home;
