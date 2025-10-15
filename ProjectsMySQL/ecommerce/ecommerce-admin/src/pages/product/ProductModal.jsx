import React, { useState, useEffect } from "react";
import { getAllCategories, getAllBrands, createProduct, updateProduct } from "../../api/apiService";
import { toast } from "react-toastify";

const ProductModal = ({ show, onHide, selectedProduct, refresh }) => {
  const [formData, setFormData] = useState({
    pName: "",
    pDescription: "",
    price: "",
    quantity: "",
    catID: "",
    brandID: "",
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [images, setImages] = useState([]); // New images
  const [previewImages, setPreviewImages] = useState([]); // Previews for new images
  const [existingImages, setExistingImages] = useState([]); // Existing images

  const [loading, setLoading] = useState(false);

  // Fetch categories and brands
  const fetchDropdowns = async () => {
    try {
      const catRes = await getAllCategories();
      setCategories(catRes.data.categories || []);

      const brandRes = await getAllBrands();
      setBrands(brandRes.data.brands || []);
    } catch (err) {
      toast.error("Failed to load categories or brands");
    }
  };

  useEffect(() => {
    fetchDropdowns();
  }, []);

  // Populate form when editing
  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        pName: selectedProduct.pName,
        pDescription: selectedProduct.pDescription || "",
        price: selectedProduct.price,
        quantity: selectedProduct.quantity,
        catID: selectedProduct.catID,
        brandID: selectedProduct.brandID,
      });
      setExistingImages(selectedProduct.images || []);
      setImages([]);
      setPreviewImages([]);
    } else {
      setFormData({
        pName: "",
        pDescription: "",
        price: "",
        quantity: "",
        catID: "",
        brandID: "",
      });
      setExistingImages([]);
      setImages([]);
      setPreviewImages([]);
    }
  }, [selectedProduct]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle new image selection
  const handleImageChange = (e) => {
     if (!e.target.files) return;
  const files = Array.from(e.target.files); // convert FileList to array
  setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  // Remove existing image
  const removeExistingImage = (index) => {
    const newImages = [...existingImages];
    newImages.splice(index, 1);
    setExistingImages(newImages);
  };

  // Submit form
 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const data = new FormData();
    data.append("pName", formData.pName);
    data.append("pDescription", formData.pDescription);
    data.append("price", formData.price);
    data.append("quantity", formData.quantity);
    data.append("catID", formData.catID);
    data.append("brandID", formData.brandID);

    // Append new images
    if (images.length > 0) {
      images.forEach((img) => data.append("myfiles", img)); // must match backend field name
    }

    // Append existing images (for edit)
    if (selectedProduct) {
      data.append("existingImages", JSON.stringify(existingImages));
      await updateProduct(selectedProduct.id, data);
      toast.success("Product updated successfully");
    } else {
      await createProduct(data);
      toast.success("Product created successfully");
    }

    refresh();
    onHide();
  } catch (err) {
    console.error(err);
    toast.error(err.response?.data?.msg || "Operation failed");
  } finally {
    setLoading(false);
  }
};

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">{selectedProduct ? "Edit Product" : "Add Product"}</h5>
              <button type="button" className="btn-close" onClick={onHide}></button>
            </div>

            <div className="modal-body">
              {/* Product Name */}
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="pName"
                  value={formData.pName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="pDescription"
                  value={formData.pDescription}
                  onChange={handleChange}
                />
              </div>

              {/* Price & Quantity */}
              <div className="mb-3 d-flex gap-3">
                <div className="flex-grow-1">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex-grow-1">
                  <label className="form-label">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Category & Brand */}
              <div className="mb-3 d-flex gap-3">
                <div className="flex-grow-1">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    name="catID"
                    value={formData.catID}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.cName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex-grow-1">
                  <label className="form-label">Brand</label>
                  <select
                    className="form-select"
                    name="brandID"
                    value={formData.brandID}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Brand</option>
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.bName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Existing Images */}
              {existingImages.length > 0 && (
                <div className="mb-3">
                  <label className="form-label">Existing Images</label>
                  <div className="d-flex flex-wrap gap-2">
                    {existingImages.map((img, i) => (
                      <div key={i} className="position-relative">
                        <img
                          src={img.startsWith("http") ? img : `/uploads/${img}`}
                          alt=""
                          style={{ width: "80px", height: "80px", objectFit: "cover" }}
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-danger position-absolute top-0 end-0"
                          onClick={() => removeExistingImage(i)}
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* New Images */}
              <div className="mb-3">
                <label className="form-label">Upload Images</label>
                <input
                  type="file"
                  className="form-control"
                  multiple
                  onChange={handleImageChange}
                />
                {previewImages.length > 0 && (
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {previewImages.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt=""
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onHide}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Saving..." : selectedProduct ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
