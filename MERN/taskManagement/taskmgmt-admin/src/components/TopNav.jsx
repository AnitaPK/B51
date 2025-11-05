import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { logout, getCurrentUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function TopNav() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // ✅ store fetched user

  useEffect(() => {
    async function fetchUser() {
      try {
        const userInfo = await getCurrentUser();
        setUser(userInfo);
      } catch (err) {
        console.error('Error fetching current user:', err);
        logout();
        navigate('/login');
      }
    }
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-3 shadow-sm">
      <Container fluid>
        <Navbar.Brand
          style={{ cursor: 'pointer', fontWeight: 'bold' }}
          onClick={() => navigate('/admin')}
        >
          PM Admin
        </Navbar.Brand>

        <Nav className="ms-auto d-flex align-items-center">
          {user ? (
            <>
              {user.avatar && (
                <img
                  src={user.avatar}
                  alt="avatar"
                  width="35"
                  height="35"
                  className="rounded-circle me-2"
                />
              )}
              <span className="me-3">{user.name}</span>
            </>
          ) : (
            <span className="me-3 text-muted">Loading...</span>
          )}
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
