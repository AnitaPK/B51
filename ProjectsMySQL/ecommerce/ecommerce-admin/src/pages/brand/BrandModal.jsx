import React, { useState, useEffect } from "react";
import { createBrand, updateBrand } from "../../api/apiService.js";
import { toast } from "react-toastify";

const BrandModal = ({ show, onHide, refresh, selectedBrand }) => {
  const [bName, setBName] = useState("");
  const [bImage, setBImage] = useState(null);


  useEffect(() => {
    if (selectedBrand) setBName(selectedBrand.bName);
  }, [selectedBrand]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedBrand) {
        await updateBrand(selectedBrand.id, { bName });
        toast.success("Brand updated successfully");
      } else {

 // Create FormData for file + text
        const formData = new FormData();
        formData.append("bName", bName);
        if (bImage) formData.append("bImage", bImage);
        await createBrand(formData);
        toast.success("Brand created successfully");
      }
      refresh();
      onHide();
    } catch {
      toast.error("Error saving brand");
    }
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">
                {selectedBrand ? "Edit Brand" : "Add Brand"}
              </h5>
              <button type="button" className="btn-close" onClick={onHide}></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Brand Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={bName}
                  onChange={(e) => setBName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Brand Image</label>
                <input
                  type="file"
                  className="form-control"
                  value={bImage}
                  required
                  onChange={(e) => setBImage(e.target.files[0])}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onHide}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {selectedBrand ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;
