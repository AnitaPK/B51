import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createProject, updateProject } from '../services/projectService';
import { getCurrentUser } from '../services/authService'; 

export default function ProjectModal({ show, setShow, editing, refresh }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    addedBy: ''
  });
  const [error, setError] = useState('');

  // ✅ Load logged user once when modal opens
  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await getCurrentUser();
        setForm(prev => ({ ...prev, addedBy: user._id || '' }));
      } catch (err) {
        console.error('User fetch failed', err);
      }
    };
    if (show) loadUser();
  }, [show]);

  // ✅ Load form data if editing
  useEffect(() => {
    if (editing) {
      setForm({
        name: editing.name || '',
        description: editing.description || '',
        startDate: editing.startDate ? editing.startDate.split('T')[0] : '',
        endDate: editing.endDate ? editing.endDate.split('T')[0] : '',
        addedBy: editing.addedBy || ''
      });
    } else {
      setForm({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        addedBy: form.addedBy // keep current user
      });
    }
  }, [editing, show]);

  // ✅ Save handler
  const handleSave = async () => {
    setError('');
    if (!form.name) {
      setError('Name is required');
      return;
    }

    try {
      if (editing) await updateProject(editing._id, form);
      else await createProject(form);

      setShow(false);
      refresh();
    } catch (err) {
      console.error('Save error:', err);
      setError(err.response?.data?.message || 'Save failed');
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{editing ? 'Edit Project' : 'New Project'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={form.startDate}
              onChange={e => setForm({ ...form, startDate: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={form.endDate}
              onChange={e => setForm({ ...form, endDate: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          {editing ? 'Update' : 'Create'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
