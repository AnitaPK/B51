const db = require('../config/db')


function createTask (req,res){
    // const {task_name,task_description,start_date,end_date} = req.body
    task_name = req.body.task_name,
    task_description = req.body.task_description || ''
    is_complete = 0
    start_date = req.body.start_date
    end_date = req.body.end_date
    try {
        q1 = `insert into tasks (task_name,task_description,is_complete,start_date,end_date) 
                values (?,?,?,?,?)
        `
        db.query(q1,[task_name,task_description,is_complete,start_date,end_date],(err,result)=>{
            if(err) throw err
            res.status(200).send({msg:'task added successfully'})
        } )
    } catch (error) {
            res.status(500).send({msg:"Server error"})
    }
}
function getAllTasks(req,res){
    try {
        q2 = 'select * from tasks'
        db.query(q2, (err,result)=>{
            if(err) throw err
            // console.log(result)
            res.status(200).send({tasks:result})
        })

    } catch (error) {
            res.status(500).send({msg:"Server error"})
    }
}

function getTaskByID(req,res){
    const id = req.params.ID
    q3 = `select * from tasks where id = ?` 
  try {
        db.query(q3, [id], (err,result)=>{
            if(err) throw err
            console.log(result)
            res.status(200).send({task:result})
        })
  } catch (error) {
            res.status(500).send({msg:"Server error"})
    }
}
function updateTask(req,res){
    id = req.params.ID
    q5 = `update tasks set is_complete = 1 where id = ?`

  try {
    db.query(q5, [id], (err,result)=>{
        if (err) throw err
        res.status(200).send({msg:"Task updated successfully"})
    })
  } catch (error) {
            res.status(500).send({msg:"Server error", success:false})
    }
}
function deleteTask(req,res){
    id = req.params.ID
    q4 = `delete from tasks where id = ?`
  try {
    db.query(q4, [id],(err,result)=>{
        if (err) throw err
        res.status(200).send({msg:'Task deleted successfully'})

    })
  } catch (error) {
            res.status(500).send({msg:"Server error"})
    }
}


module.exports = {
    createTask,
    getAllTasks,
    getTaskByID,
    updateTask,
    deleteTask
}