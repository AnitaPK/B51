import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom'
import ProjectModal from './ProjectModal'
import { deleteProject } from '../services/projectService'

export default function ProjectList(){
  const { projects = [], refresh } = useOutletContext()
  const [show, setShow] = useState(false)
  const [editing, setEditing] = useState(null)

  const openNew = () => { setEditing(null); setShow(true); }
  const openEdit = (p) => { setEditing(p); setShow(true); }

  const onDelete = async (id) => {
    if(!confirm('Delete project?')) return;
    try { await deleteProject(id); refresh(); } catch(err){ alert(err.response?.data?.message || 'Delete failed') }
  }
  console.log(projects)

  return (
    <div className='mb-4'>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h5>Projects</h5>
        <Button size='sm' onClick={openNew}>+ New Project</Button>
      </div>
      {projects.length === 0 ? (
        <div className='alert alert-info'>No projects available</div>
      ) : (
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Added By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p => (
              <tr key={p._id}>
                <td>{p.projectId || p._id.slice(-6)}</td>
                <td>{p.name || '—'}</td>
                <td>{p.description ? (p.description.length > 50 ? p.description.substring(0, 50) + '...' : p.description) : '—'}</td>
                <td>{p.startDate ? new Date(p.startDate).toLocaleDateString() : '—'}</td>
                <td>{p.endDate ? new Date(p.endDate).toLocaleDateString() : '—'}</td>
                <td><span className={`badge ${p.status === 'Completed' ? 'bg-success' : p.status === 'In Progress' ? 'bg-warning' : 'bg-secondary'}`}>{p.status || 'Planned'}</span></td>
                <td>{p.addedBy?.name || p.addedBy?.email || '—'}</td>
                <td>
                  <Button size='sm' variant='primary' className='me-2' onClick={()=>openEdit(p)}>Edit</Button>
                  <Button size='sm' variant='danger' onClick={()=>onDelete(p._id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <ProjectModal show={show} setShow={setShow} editing={editing} refresh={refresh} />
    </div>
  )
}