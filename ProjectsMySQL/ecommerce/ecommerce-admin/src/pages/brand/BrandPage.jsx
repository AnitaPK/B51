import React, { useEffect, useState } from "react";
import { getAllBrands, deleteBrand } from "../../api/apiService";
import { toast } from "react-toastify";

const BrandList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const res = await getAllBrands();
      setBrands(res.data.brands);
    } catch (error) {
      toast.error("Failed to fetch brands");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this brand?")) {
      try {
        await deleteBrand(id);
        toast.success("Brand deleted");
        fetchBrands();
      } catch (error) {
        toast.error("Failed to delete brand");
      }
    }
  };

  return (
    <div className="container my-4">
      <h3>Brand List</h3>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.bName}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(b.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrandList;
