import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import BrandPage from "./pages/brand/BrandPage";
import CategoryPage from "./pages/category/CategoryPage";
import ProductPage from "./pages/product/ProductPage";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <Router>
      <div className="d-flex">
        <div className="flex-grow-1" style={{ marginLeft: "220px" }}>
          <Routes>
            <Route path="/brands" element={<BrandPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="*" element={<h1>Page Not Found</h1> } /> {/* default */}
          </Routes>
        </div>
        <Sidebar /> 
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </Router>
  )
}

export default App
