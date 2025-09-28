import React, { useEffect, useState } from "react";
import { getAllCategories, deleteCategory } from "../../api/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this category?")) {
      try {
        await deleteCategory(id);
        toast.success("Category deleted successfully");
        fetchCategories(); // refresh list
      } catch (error) {
        toast.error("Failed to delete category");
      }
    }
  };

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Category List</h3>
        <button className="btn btn-primary btn-sm">+ Add Category</button>
      </div>

      <table className="table table-striped table-hover">
        <thead className="table-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Category Name</th>
            <th scope="col" className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.cName}</td>
                <td className="text-center">
                  <button className="btn btn-sm btn-warning me-2">Edit</button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(cat.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center text-muted">
                No categories found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
