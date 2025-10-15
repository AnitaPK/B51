import React, { useState, useEffect } from "react";
import { getAllProducts, deleteProduct } from "../../api/apiService";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import ProductModal from "./ProductModal";
import DeleteProductModal from "./DeleteProductModal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getAllProducts();
      setProducts(res.data.products || []);
    } catch (err) {
      toast.error("Failed to load products");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteProduct(deleteId);
      toast.success("Product deleted successfully");
      fetchData();
    } catch {
      toast.error("Error deleting product");
    } finally {
      setShowDelete(false);
      setDeleteId(null);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Product List</h5>
        <button
          className="btn btn-primary"
          onClick={() => {
            setSelectedProduct(null);
            setShowModal(true);
          }}
        >
          <FaPlus /> Add New
        </button>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((prod, index) => (
              <tr key={prod.id}>
                <td>{index + 1}</td>
                <td><Link to={`/dashboard/products/${prod.id}`}>{prod.pName}</Link></td>
                <td>{prod.categoryName}</td>
                <td>{prod.brandName}</td>
                <td>{prod.price}</td>
                <td>{prod.quantity}</td>
                <td className="d-flex flex-wrap gap-1">
                  {prod.images?.map((img, i) => (
                    <img
                      key={i}
                      src={`${img}`}
                      alt=""
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                  ))}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => {
                      setSelectedProduct(prod);
                      setShowModal(true);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(prod.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showModal && (
        <ProductModal
          show={showModal}
          onHide={() => setShowModal(false)}
          selectedProduct={selectedProduct}
          refresh={fetchData}
        />
      )}

      {showDelete && (
        <DeleteProductModal
          show={showDelete}
          onHide={() => setShowDelete(false)}
          confirmDelete={confirmDelete}
        />
      )}
    </div>
  );
};

export default ProductList;
