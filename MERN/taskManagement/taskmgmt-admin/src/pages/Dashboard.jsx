import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import TopNav from '../components/TopNav'
import Sidebar from '../components/Sidebar'
import { fetchProjects } from '../services/projectService'
import { fetchTasks } from '../services/taskService'
import { fetchUsers, getCurrentUser } from '../services/authService'


export default function Dashboard(){
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([])
  const location = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState('projects')
  const [loggedUser, setLoggedUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  const load = async () => {
      try {
        const [p, t, u] = await Promise.all([fetchProjects(), fetchTasks(), fetchUsers()]);
         console.log("Projects API Response:", p.data);
        setProjects(p.data.projects || []);
        setTasks(t.data.tasks || []);
        setUsers(u.data.users || u.data || []);
      } catch (err) {
        console.error(err);
        alert('Failed to load data');
      }
    };

      // ✅ Load logged-in user
    const loadUser = async () => {
      try {
        const user = await getCurrentUser();
        setLoggedUser(user);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        // Optional redirect if token invalid
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    };

    useEffect(() => {
      (async () => {
        await loadUser();
        await load();
        setLoading(false);
      })();
    }, []);

    // Redirect to projects if on base admin route
    useEffect(() => {
      if (location.pathname === '/admin' || location.pathname === '/admin/') {
        navigate('/admin/projects', { replace: true });
      }
    }, [location.pathname, navigate]);

    return (
      <div>
        <TopNav  loggedUser={loggedUser} />
        <div className='d-flex'>
          <Sidebar active={active} setActive={setActive} />
           <div className="flex-grow-1 p-3" style={{ marginLeft: 220 }}>
        <Outlet context={{ projects, tasks, users, refresh: load }} />
      </div>
        </div>
      </div>
    )
  }