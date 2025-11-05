import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { HouseDoor, ListTask, People } from 'react-bootstrap-icons';

export default function Sidebar({ active, setActive }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  // Update active based on current location
  useEffect(() => {
    if (location.pathname.includes('/tasks')) {
      setActive('tasks');
    } else if (location.pathname.includes('/users')) {
      setActive('users');
    } else if (location.pathname.includes('/projects')) {
      setActive('projects');
    }
  }, [location.pathname, setActive]);

  // Keep sidebar width in a CSS variable so parent content can react to it
  useEffect(() => {
    const width = collapsed ? '70px' : '220px';
    document.documentElement.style.setProperty('--sidebar-width', width);
  }, [collapsed]);

  const toggleSidebar = () => setCollapsed((s) => !s);

  const sidebarStyle = {
    height: '100vh',
    position: 'fixed',
    width: collapsed ? '60px' : '220px', // <- valid: number or px-string is fine
    transition: 'width 0.25s ease',
    overflow: 'hidden',
    zIndex: 1000,
    backgroundColor: '#fff',
    borderRight: '1px solid #e5e5e5',
    padding: '10px 8px',
  };

  const linkClass = (key) =>
    `d-flex align-items-center gap-2 px-2 py-2 ${active === key ? 'bg-light rounded' : ''}`;

  return (
    <div className="" style={sidebarStyle}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        {!collapsed && <h6 className="mb-0 ms-1">Navigation</h6>}
        <button
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="btn btn-sm btn-outline-secondary"
          onClick={toggleSidebar}
        >
          {collapsed ? '»' : '«'}
        </button>
      </div>

      <Nav className="flex-column">
        <Nav.Link
          href="#"
          onClick={(e) => { 
            e.preventDefault(); 
            setActive('projects');
            navigate('/admin/projects');
          }}
          className={linkClass('projects')}
        >
          <HouseDoor size={18} />
          {!collapsed && <span>Projects</span>}
        </Nav.Link>

        <Nav.Link
          href="#"
          onClick={(e) => { 
            e.preventDefault(); 
            setActive('tasks');
            navigate('/admin/tasks');
          }}
          className={linkClass('tasks')}
        >
          <ListTask size={18} />
          {!collapsed && <span>Tasks</span>}
        </Nav.Link>

        <Nav.Link
          href="#"
          onClick={(e) => { 
            e.preventDefault(); 
            setActive('users');
            navigate('/admin/users');
          }}
          className={linkClass('users')}
        >
          <People size={18} />
          {!collapsed && <span>Users</span>}
        </Nav.Link>
      </Nav>
    </div>
  );
}
