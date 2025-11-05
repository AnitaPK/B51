import React from 'react'
import { Table } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom'

export default function UserList(){
  const { users = [] } = useOutletContext()
  return (
    <div>
      <h5>Users</h5>
      {users.length === 0 ? (
        <div className='alert alert-info'>No users available</div>
      ) : (
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u=> (
              <tr key={u._id}>
                <td>{u.userId || u._id.slice(-6)}</td>
                <td>
                  {u.avatar ? (
                    <img src={u.avatar} alt={u.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {u.name?.charAt(0)?.toUpperCase() || 'U'}
                    </div>
                  )}
                </td>
                <td>{u.name || '—'}</td>
                <td>{u.email || '—'}</td>
                <td>
                  <span className={`badge ${u.role === 'admin' ? 'bg-danger' : 'bg-secondary'}`}>
                    {u.role || 'member'}
                  </span>
                </td>
                <td>—</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  )
}