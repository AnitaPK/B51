import React, { useState, useEffect } from "react";
import { createCategory, updateCategory } from "../../api/apiService.js";
import axiosInstance from "../../api/axiosInstance.js";
import { toast } from "react-toastify";

const CategoryModal = ({ show, setShow, editCategory, refresh }) => {
  const [cName, setCName] = useState("");
  const [cImage, setCImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Set Authorization header if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  // Populate form when editing
  useEffect(() => {
    if (editCategory) {
      setCName(editCategory.cName);
      setPreview(editCategory.cImage ? editCategory.cImage : null);
      setCImage(null); // reset file input
    } else {
      setCName("");
      setCImage(null);
      setPreview(null);
    }
  }, [editCategory]);

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(editCategory?.cImage || null);
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("cName", cName);
      if (cImage) formData.append("myfile", cImage); // optional file upload

      if (editCategory) {
        await updateCategory(editCategory.id, formData);
        toast.success("Category updated successfully");
      } else {
        await createCategory(formData);
        toast.success("Category created successfully");
      }

      refresh();
      setShow(false);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.msg || "Error saving category");
    }
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">{editCategory ? "Edit Category" : "Add Category"}</h5>
              <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={cName}
                  onChange={(e) => setCName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Category Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleImageChange}
                />
              </div>

              {preview && (
                <div className="mb-3 text-center">
                  <img
                    src={preview}
                    alt="Category Preview"
                    style={{ maxHeight: "150px", maxWidth: "100%", objectFit: "contain" }}
                  />
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {editCategory ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
