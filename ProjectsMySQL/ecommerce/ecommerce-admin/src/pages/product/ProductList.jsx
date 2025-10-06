import React, { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../../api/apiService";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import ProductModal from "./ProductModal";
import DeleteModal from "../../components/DeleteModal";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
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
      toast.success("Product deleted");
      fetchData();
    } catch (err) {
      toast.error("Error deleting product");
    } finally {
      setShowDelete(false);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Product List</h5>
        <button
          className="btn btn-primary"
          onClick={() => {
            setEditProduct(null);
            setShowModal(true);
          }}
        >
          <FaPlus /> Add Product
        </button>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.pName}</td>
                <td>{p.pDescription}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>{p.Category?.cName || "-"}</td>
                <td>{p.Brand?.bName || "-"}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => {
                      setEditProduct(p);
                      setShowModal(true);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(p.id)}
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
          setShow={setShowModal}
          editProduct={editProduct}
          refresh={fetchData}
        />
      )}

      {showDelete && (
        <DeleteModal
          show={showDelete}
          onHide={() => setShowDelete(false)}
          confirmDelete={confirmDelete}
        />
      )}
    </div>
  );
};

export default ProductList;
