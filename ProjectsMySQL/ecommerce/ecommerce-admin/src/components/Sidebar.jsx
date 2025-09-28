import React from "react";
import { Link } from "react-router-dom";
import { FaTags, FaListAlt, FaBox } from "react-icons/fa";
import "./Sidebar.css"; // optional custom styling

const Sidebar = () => {
  return (
    <div className="sidebar bg-light border-start p-3">
      <h5 className="text-center mb-4">Admin Panel</h5>
      <ul className="list-unstyled">
        <li className="mb-3">
          <Link to="/brands" className="text-decoration-none d-flex align-items-center">
            <FaTags className="me-2" /> Brands
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/categories" className="text-decoration-none d-flex align-items-center">
            <FaListAlt className="me-2" /> Categories
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/products" className="text-decoration-none d-flex align-items-center">
            <FaBox className="me-2" /> Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
