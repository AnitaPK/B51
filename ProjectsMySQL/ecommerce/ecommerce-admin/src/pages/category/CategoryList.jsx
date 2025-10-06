import React, { useEffect, useState } from "react";
import { getAllCategories, deleteCategory } from "../../api/apiService.js";
import { toast } from "react-toastify";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import CategoryModal from "./CategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getAllCategories();
      
      setCategories(res.data.categories || []);
    } catch {
      toast.error("Failed to load categories");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    // ✅ open confirmation modal
  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  // ✅ call API on confirm
  const confirmDelete = async () => {
    try {
      await deleteCategory(deleteId);
      toast.success("Category deleted successfully");
      fetchData();
    } catch {
      toast.error("Error deleting category");
    } finally {
      setShowDelete(false);
      setDeleteId(null);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Category List</h5>
        <button className="btn btn-primary" onClick={() => { setEditCategory(null); setShowModal(true); }}>
          <FaPlus /> Add New
        </button>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((cat, index) => (
              <tr key={cat.id}>
                <td>{index + 1}</td>
                <td>{cat.cName}</td>
                <td>
                  <button className="btn btn-sm btn-info me-2" onClick={() => { setEditCategory(cat); setShowModal(true); }}>
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(cat.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="3" className="text-center">No categories found</td></tr>
          )}
        </tbody>
      </table>

      {showModal && <CategoryModal show={showModal} setShow={setShowModal} editCategory={editCategory} refresh={fetchData} />}
    
    
      {/* Delete Confirmation Modal */}
      {showDelete && (
        <DeleteCategoryModal
          show={showDelete}
          onHide={() => setShowDelete(false)}
          confirmDelete={confirmDelete}
        />
      )}
    
    </div>
  );
};

export default CategoryList;
