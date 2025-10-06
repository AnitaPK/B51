import React from "react";
import { Link } from "react-router-dom";
import { FaThLarge, FaTags, FaBox } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="bg-dark text-white position-fixed vh-100 p-3"
      style={{ width: "220px" }}
    >
      <h5 className="mb-4 text-center border-bottom pb-2">Menu</h5>

      <ul className="nav flex-column gap-2">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/brands">
            <FaTags className="me-2" /> Brands
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/categories">
            <FaThLarge className="me-2" /> Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/products">
            <FaBox className="me-2" /> Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
