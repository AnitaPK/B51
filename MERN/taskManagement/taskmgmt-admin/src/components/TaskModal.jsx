import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { createTask, updateTask } from '../services/taskService'
import apiClient from '../services/apiClient'

export default function TaskModal({ show, setShow, editing, projects, users: propUsers, onSaved }){
  const [form, setForm] = useState({ taskId:'', title:'', description:'', projectId:'', assignTo:'', priority:'Medium', status:'Planned', startDate:'', endDate:'' })
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(()=>{
    if(editing) {
      setForm({ 
        taskId: editing.taskId||'', 
        title: editing.title||'', 
        description: editing.description || '',
        projectId: editing.projectId?._id || editing.projectId || '', 
        assignTo: editing.assignTo?._id || editing.assignedTo?._id || editing.assignTo || editing.assignedTo || '', 
        priority: editing.priority||'Medium', 
        status: editing.status||'Planned', 
        startDate: editing.startDate ? editing.startDate.split('T')[0] : '', 
        endDate: editing.endDate ? editing.endDate.split('T')[0] : '' 
      })
    } else {
      setForm({ taskId:'', title:'', description:'', projectId:'', assignTo:'', priority:'Medium', status:'Planned', startDate:'', endDate:'' })
    }
  }, [editing, show])

  useEffect(()=>{ 
    if(propUsers && propUsers.length > 0) {
      setUsers(propUsers);
    } else {
      const loadUsers = async ()=>{ 
        try{ 
          const res = await apiClient.get('/user/getAllUsers'); 
          setUsers(res.data.users || []) 
        }catch(e){ 
          console.error(e) 
        } 
      }; 
      loadUsers() 
    }
  }, [propUsers])

  const handleSave = async ()=>{
    setError('')
    if(!form.title || !form.projectId || !form.assignTo){ setError('Title, project and assigned user required'); return; }
    try{
      if(editing) await updateTask(editing._id, form)
      else await createTask(form)
      setShow(false); if(onSaved) onSaved();
    }catch(err){ setError(err.response?.data?.message || 'Save failed') }
  }

  return (
    <Modal show={show} onHide={()=>setShow(false)}>
      <Modal.Header closeButton><Modal.Title>{editing ? 'Edit Task' : 'New Task'}</Modal.Title></Modal.Header>
      <Modal.Body>
        {error && <div className='alert alert-danger'>{error}</div>}
        <Form>
          <Form.Group className='mb-2'><Form.Label>Title</Form.Label><Form.Control value={form.title} onChange={e=>setForm({...form, title:e.target.value})} required /></Form.Group>
          <Form.Group className='mb-2'><Form.Label>Description</Form.Label><Form.Control as="textarea" rows={3} value={form.description} onChange={e=>setForm({...form, description:e.target.value})} /></Form.Group>
          <Form.Group className='mb-2'><Form.Label>Project</Form.Label>
            <Form.Select value={form.projectId} onChange={e=>setForm({...form, projectId:e.target.value})}>
              <option value=''>Select</option>
              {projects.map(p=> <option key={p._id} value={p._id}>{p.name}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-2'><Form.Label>Assign to</Form.Label>
            <Form.Select value={form.assignTo} onChange={e=>setForm({...form, assignTo:e.target.value})}>
              <option value=''>Select user</option>
              {users.map(u=> <option key={u._id} value={u._id}>{u.name} ({u.email})</option>)}
            </Form.Select>
          </Form.Group>
          <div className='d-flex gap-2'>
            <Form.Group className='mb-2 flex-fill'><Form.Label>Priority</Form.Label>
              <Form.Select value={form.priority} onChange={e=>setForm({...form, priority:e.target.value})}><option>Low</option><option>Medium</option><option>High</option></Form.Select>
            </Form.Group>
            <Form.Group className='mb-2 flex-fill'><Form.Label>Status</Form.Label>
              <Form.Select value={form.status} onChange={e=>setForm({...form, status:e.target.value})}><option>Planned</option><option>In Progress</option><option>Completed</option></Form.Select>
            </Form.Group>
          </div>
          <Form.Group className='mb-2'><Form.Label>Start Date</Form.Label><Form.Control type='date' value={form.startDate} onChange={e=>setForm({...form, startDate:e.target.value})} /></Form.Group>
          <Form.Group className='mb-2'><Form.Label>End Date</Form.Label><Form.Control type='date' value={form.endDate} onChange={e=>setForm({...form, endDate:e.target.value})} /></Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={()=>setShow(false)}>Cancel</Button>
        <Button variant='primary' onClick={handleSave}>{editing ? 'Update' : 'Create'}</Button>
      </Modal.Footer>
    </Modal>
  )
}