import React, { useState, useEffect } from "react";
import { createBrand, updateBrand } from "../../api/apiService.js";
import axiosInstance from "../../api/axiosInstance.js";
import { toast } from "react-toastify";

const BrandModal = ({ show, onHide, refresh, selectedBrand }) => {
  const [bName, setBName] = useState("");
  const [bImage, setBImage] = useState(null);

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      setBName(selectedBrand.bName);
      setPreview(selectedBrand.bImage ? `/uploads/${selectedBrand.bImage}` : null);
      setBImage(null); // reset file input
    } else {
      setBName("");
      setBImage(null);
      setPreview(null);
    }
  }, [selectedBrand]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(selectedBrand?.bImage ? `/uploads/${selectedBrand.bImage}` : null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedBrand) {
        // Update brand name and optionally image
        const formData = new FormData();
        formData.append("bName", bName);
        if (bImage) formData.append("myfile", bImage);
        await updateBrand(selectedBrand.id, formData); // adjust backend to accept FormData if updating image
        toast.success("Brand updated successfully");
      } else {
        const formData = new FormData();
        formData.append("bName", bName);
        if (bImage) formData.append("myfile", bImage);
        await createBrand(formData);
        toast.success("Brand created successfully");
      }
      refresh();
      onHide();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.msg || "Error saving brand");
    }
  };

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">{selectedBrand ? "Edit Brand" : "Add Brand"}</h5>
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
                  // value={bImage}
                  onChange={handleImageChange}
                />
              </div>

              {preview && (
                <div className="mb-3 text-center">
                  <img
                    src={preview}
                    alt="Brand Preview"
                    style={{ maxHeight: "150px", maxWidth: "100%", objectFit: "contain" }}
                  />
                </div>
              )}
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
