import React, { useEffect, useState } from "react";
import {
  createProduct,
  updateProduct,
  getAllBrands,
  getAllCategories,
} from "../../api/apiService";
import { toast } from "react-toastify";

const ProductModal = ({ show, setShow, editProduct, refresh }) => {
  const [pName, setPName] = useState("");
  const [pDescription, setPDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [catID, setCatID] = useState("");
  const [brandID, setBrandID] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchDropdowns = async () => {
      try {
        const [brandRes, catRes] = await Promise.all([
          getAllBrands(),
          getAllCategories(),
        ]);
        setBrands(brandRes.data.brands || []);
        setCategories(catRes.data.categories || []);
      } catch (err) {
        toast.error("Failed to load dropdowns");
      }
    };
    fetchDropdowns();

    if (editProduct) {
      setPName(editProduct.pName);
      setPDescription(editProduct.pDescription);
      setPrice(editProduct.price);
      setQuantity(editProduct.quantity);
      setCatID(editProduct.catID);
      setBrandID(editProduct.brandID);
    } else {
      setPName("");
      setPDescription("");
      setPrice("");
      setQuantity("");
      setCatID("");
      setBrandID("");
    }
  }, [editProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { pName, pDescription, price, quantity, catID, brandID };
      if (editProduct) {
        await updateProduct(editProduct.id, payload);
        toast.success("Product updated");
      } else {
        await createProduct(payload);
        toast.success("Product created");
      }
      setShow(false);
      refresh();
    } catch {
      toast.error("Error saving product");
    }
  };

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {editProduct ? "Edit Product" : "Add Product"}
            </h5>
            <button className="btn-close" onClick={() => setShow(false)}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label>Name</label>
                <input
                  className="form-control"
                  value={pName}
                  onChange={(e) => setPName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <label>Description</label>
                <textarea
                  className="form-control"
                  value={pDescription}
                  onChange={(e) => setPDescription(e.target.value)}
                  required
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label>Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <label>Category</label>
                  <select
                    className="form-select"
                    value={catID}
                    onChange={(e) => setCatID(e.target.value)}
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
                <div className="col-md-6 mb-2">
                  <label>Brand</label>
                  <select
                    className="form-select"
                    value={brandID}
                    onChange={(e) => setBrandID(e.target.value)}
                    required
                  >
                    <option value="">Select Brand</option>
                    {brands.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.bName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="text-end">
                <button className="btn btn-secondary me-2" onClick={() => setShow(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editProduct ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
