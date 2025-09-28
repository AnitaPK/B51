import React, { useEffect, useState } from "react";
import { getAllProducts, deleteProduct, getAllCategories, getAllBrands } from "../../api/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await getAllProducts();
      setProducts(res.data.products);
    } catch (error) {
      toast.error("Failed to fetch products");
    }
  };


  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const res = await getAllBrands();
      setBrands(res.data.brands);
    } catch (error) {
      toast.error("Failed to fetch brands");
    }
  };
  // Helper to find brand name
  const getBrandName = (brandId) => {
    const brand = brands.find((b) => b.id === brandId);
    return brand ? brand.bName : "-";
  };

  useEffect(() => {
      fetchCategories();
    }, []);
  
    const fetchCategories = async () => {
      try {
        const res = await getAllCategories();
        setCategories(res.data.categories);
      } catch (error) {
        toast.error("Failed to fetch categories");
      }
    };
  // Helper to find category name
  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.cName : "-";
  };



  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this product?")) {
      try {
        await deleteProduct(id);
        toast.success("Product deleted successfully");
        fetchProducts(); // refresh list
      } catch (error) {
        toast.error("Failed to delete product");
      }
    }
  };

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Product List</h3>
        <button className="btn btn-primary btn-sm">+ Add Product</button>
      </div>

      <table className="table table-striped table-hover">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Brand</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.pName}</td>
                <td>{p.pDescription || "-"}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>{getCategoryName(p.catID)}</td>
                <td>{getBrandName(p.brandID)}</td>
                <td className="text-center">
                  <button className="btn btn-sm btn-warning me-2">Edit</button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center text-muted">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
