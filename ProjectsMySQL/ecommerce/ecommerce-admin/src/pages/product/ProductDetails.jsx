import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../api/apiService";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { ID } = useParams(); // get ID from URL
   const navigate = useNavigate(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(ID);
        if (res.data.success) {
          setProduct(res.data.product);
        } else {
          toast.error("Product not found");
        }
      } catch (err) {
        toast.error("Failed to fetch product");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [ID]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <>
    <div className="m-3">
                  <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate(-1)} // go back to previous page
      >
        &larr; Back
      </button>
      </div>
    <div className="card p-3 m-3 shadow-sm">

      <h5 className="card-title">{product.pName}</h5>
      <div className="card-body">
        <p><strong>Description:</strong> {product.pDescription}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Quantity:</strong> {product.quantity}</p>
        <p><strong>Brand:</strong> {product.brandName}</p>
        <p><strong>Category:</strong> {product.categoryName}</p>

        <div className="d-flex flex-wrap gap-2 mt-2">
          {product.images?.map((img, i) => (
            <img
              key={i}
              src={img} // img already has full URL from backend
              alt={product.pName}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
