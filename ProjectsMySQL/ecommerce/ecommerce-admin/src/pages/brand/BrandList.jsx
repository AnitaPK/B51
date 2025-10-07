import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  getAllBrands,
  deleteBrand,
  getBrandById,
} from "../../api/apiService.js";
import BrandModal from "./BrandModal";
import DeleteModal from "./DeleteModal";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  async function fetchBrands() {
    try {
      const res = await getAllBrands();
      if (res.data.success) {
        setBrands(res.data.brands);
      }
    } catch {
      toast.error("Error fetching brands");
    }
  }

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleAdd = () => {
    setSelectedBrand(null);
    setShowModal(true);
  };

  const handleEdit = async (id) => {
    try {
      const res = await getBrandById(id);
      setSelectedBrand(res.data.brand);
      setShowModal(true);
    } catch {
      toast.error("Error loading brand");
    }
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteBrand(deleteId);
      toast.success("Brand deleted");
      fetchBrands();
    } catch {
      toast.error("Error deleting brand");
    } finally {
      setShowDelete(false);
    }
  };

  return (
    <div>
      {/* Add Button */}
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={handleAdd}>
          <FaPlus className="me-2" />
          Add New
        </button>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Brand Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.length > 0 ? (
              brands.map((b, i) => (
                <tr key={b.id}>
                  <td>{i + 1}</td>
                  <td>{b.bName}
                    <span>
                      <img src={`${b.bIamge}`} alt={b.bName} class="img-fluid " style={{width:"40px", height:"30px"}} />
                    </span>

                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(b.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(b.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No brands found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showModal && (
        <BrandModal
          show={showModal}
          onHide={() => setShowModal(false)}
          refresh={fetchBrands}
          selectedBrand={selectedBrand}
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

export default BrandList;
