import React, { useState, useEffect } from "react";
import { createCategory, updateCategory } from "../../api/apiService.js";
import { toast } from "react-toastify";

const CategoryModal = ({ show, setShow, editCategory, refresh }) => {
  const [cName, setCName] = useState("");

  useEffect(() => {
    if (editCategory) setCName(editCategory.cName);
    else setCName("");
  }, [editCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editCategory) {
        await updateCategory(editCategory.id, { cName });
        toast.success("Updated successfully");
      } else {
        await createCategory({ cName });
        toast.success("Created successfully");
      }
      refresh();
      setShow(false);
    } catch {
      toast.error("Operation failed");
    }
  };

  if (!show) return null;

  return (
    <div className="modal show fade d-block" tabIndex="-1">
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
                <input type="text" className="form-control" value={cName} onChange={(e) => setCName(e.target.value)} required />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Close</button>
              <button type="submit" className="btn btn-primary">{editCategory ? "Update" : "Save"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
