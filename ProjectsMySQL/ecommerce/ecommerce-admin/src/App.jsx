import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

import BrandPage from "./pages/brand/BrandPage";
import CategoryPage from "./pages/category/CategoryPage";
import ProductPage from "./pages/product/ProductPage";
import Sidebar from "./components/Sidebar";
import TopNavbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetails from './pages/product/ProductDetails';

function App() {

  return (
    <>
    <Router>
       <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes with Layout */}
        <Route
          path="/dashboard/*"
          element={
            <>
              <TopNavbar />
              <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1" style={{ marginLeft: "220px" }}>
                  <Routes>
                    <Route path="brands" element={<BrandPage />} />
                    <Route path="categories" element={<CategoryPage />} />
                    <Route path="products" element={<ProductPage />} />
                    <Route path="products/:ID" element={<ProductDetails />} />

                    <Route path="*" element={<h1>Page Not Found</h1>} />
                  </Routes>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
