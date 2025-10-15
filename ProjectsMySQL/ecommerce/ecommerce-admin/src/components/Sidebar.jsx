import React from "react";
import { NavLink } from "react-router-dom";
import { FaThLarge, FaTags, FaBox, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="bg-dark text-white position-fixed vh-100 p-3 shadow"
      style={{ width: "220px" }}
    >
      <h5 className="mb-4 text-center border-bottom pb-2">Dashboard</h5>

      <ul className="nav flex-column gap-2">
        <li className="nav-item">
          <NavLink
            to="/dashboard/brands"
            className={({ isActive }) =>
              `nav-link text-white d-flex align-items-center ${isActive ? "bg-secondary rounded" : ""}`
            }
          >
            <FaTags className="me-2" /> Brands
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/categories"
            className={({ isActive }) =>
              `nav-link text-white d-flex align-items-center ${isActive ? "bg-secondary rounded" : ""}`
            }
          >
            <FaThLarge className="me-2" /> Categories
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/products"
            className={({ isActive }) =>
              `nav-link text-white d-flex align-items-center ${isActive ? "bg-secondary rounded" : ""}`
            }
          >
            <FaBox className="me-2" /> Products
          </NavLink>
        </li>

        <hr className="text-white" />

        <li className="nav-item mt-2">
          <NavLink
            to="/"
            className="nav-link text-white d-flex align-items-center"
            onClick={() => localStorage.removeItem("token")}
          >
            <FaSignOutAlt className="me-2" /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
