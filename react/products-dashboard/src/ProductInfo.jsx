import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductInfo = () => {
  const [product, setProduct] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(
        'https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts'
      );
      setProduct(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
<div className="container my-5">
      {product ? (
        <div className="row align-items-center g-4">
          {/* Left Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>

          {/* Right Side - Product Info */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">{product.name}</h1>
            <p className="text-muted fs-5">{product.category}</p>
            <p className="lead">{product.description}</p>

            <div className="mb-3">
              <span className="fs-4 text-success">₹{product.discountedPrice}</span>
              {product.discount > 0 && (
                <>
                  <span className="text-decoration-line-through text-muted ms-2">
                    ₹{product.price}
                  </span>
                  <span className="badge bg-danger ms-2">
                    -{product.discount}%
                  </span>
                </>
              )}
            </div>

            <div className="mb-3">
              <span className="badge bg-primary fs-6">
                ⭐ Rating: {product.rating}%
              </span>
            </div>

            <button className="btn btn-success btn-lg mt-3">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Loading product details...</p>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
