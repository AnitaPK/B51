import React, { useEffect, useState } from "react";
import { getUserInfo } from "../api/apiService";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/"); // redirect to login if no token
          return;
        }

        // Set Authorization header
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await getUserInfo();
        if (response.data.success) {
          console.log(response.data.user)
          setUsername(response.data.user.name);
        } else {
          // Token invalid or user not found
          localStorage.removeItem("token");
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark text-light shadow-sm px-3">
      <span className="navbar-brand mb-0 h1">Admin Panel</span>
      {username && (
        <div className="ms-auto d-flex align-items-center">
          <span className="lead me-3 ">{username}</span>
          <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;
