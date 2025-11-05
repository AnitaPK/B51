import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import TaskModal from './TaskModal';
import { deleteTask } from '../services/taskService';

export default function TaskList() {
  const { tasks = [], projects = [], users = [], refresh } = useOutletContext()
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(null);

  const openNew = () => {
    setEditing(null);
    setShow(true);
  };

  const openEdit = (t) => {
    setEditing(t);
    setShow(true);
  };

  const doDelete = async (id) => {
    if (!window.confirm('Delete task?')) return;
    try {
      await deleteTask(id);
      if (refresh) refresh(); // reload tasks from Dashboard
    } catch (err) {
      alert(err.response?.data?.message || 'Delete failed');
    }
  };

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h5>Tasks</h5>
        <Button size='sm' onClick={openNew}>
          + New Task
        </Button>
      </div>

      {tasks.length === 0 ? (
        <div className='alert alert-info'>No tasks available</div>
      ) : (
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Project</th>
              <th>Assigned To</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t._id}>
                <td>{t.taskId || t._id.slice(-6)}</td>
                <td>{t.title || '—'}</td>
                <td>{t.description ? (t.description.length > 30 ? t.description.substring(0, 30) + '...' : t.description) : '—'}</td>
                <td>{t.projectId?.name || '—'}</td>
                <td>{t.assignTo?.name || t.assignedTo?.name || (t.assignTo?.email || t.assignedTo?.email) || '—'}</td>
                <td>
                  <span className={`badge ${t.priority === 'High' ? 'bg-danger' : t.priority === 'Medium' ? 'bg-warning' : 'bg-info'}`}>
                    {t.priority || 'Low'}
                  </span>
                </td>
                <td>
                  <span className={`badge ${t.status === 'Completed' ? 'bg-success' : t.status === 'In Progress' ? 'bg-warning' : 'bg-secondary'}`}>
                    {t.status || 'Planned'}
                  </span>
                </td>
                <td>{t.startDate ? new Date(t.startDate).toLocaleDateString() : '—'}</td>
                <td>{t.endDate ? new Date(t.endDate).toLocaleDateString() : '—'}</td>
                <td>
                  <Button size='sm' variant='primary' className='me-2' onClick={() => openEdit(t)}>
                    Edit
                  </Button>
                  <Button
                    size='sm'
                    variant='danger'
                    onClick={() => doDelete(t._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal for create/edit */}
      <TaskModal
        show={show}
        setShow={setShow}
        editing={editing}
        projects={projects}
        users={users}
        onSaved={refresh}
      />
    </div>
  );
}

