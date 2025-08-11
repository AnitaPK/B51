import React, { useEffect, useState,useContext } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import products from '../data.js'
import { CreateTheme } from '../ThemeContext/ThemeProvider.jsx';


const ProductInfo = () => {
  const [product, setProduct] = useState({});
  const {ID} = useParams()

  const {theme} = useContext(CreateTheme)



  async function fetchData() {
    const index = products.findIndex((p,i)=> p.id == ID)
    if(index == -1){
      console.log('product not found')
    }else{
      setProduct({...product, ...products[index]})
    }
      
  }

  useEffect(() => {
    fetchData();
  }, []);


console.log(ID, 'ID in prod info')
console.log(product,'product')

  return (
    <>
<div className={`container my-5 ${ theme == "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
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
           <div className="mt-3">
                <Link to="likes" className="btn btn-outline-primary me-2">Likes</Link>
                <Link to="reviews" className="btn btn-outline-secondary">Reviews</Link>
              </div>

          </div>
        </div>
       ) : (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Loading product details...</p>
        </div>
      )} 
    </div>

      <Routes>
        <Route path='likes' element={<Likes />}></Route>
        <Route path='reviews' element={<Reviews />}></Route>

      </Routes>

    </>
  );

  function Likes(){
    return(
      <>
      <div className="mb-3">
              <span className="badge bg-primary fs-6">
                Likes ⭐⭐⭐⭐
              </span>
      </div>
      </>
    )
  }
  function Reviews(){
    return(
      <>
      <div className="mb-3">
              <span className="badge bg-primary fs-6">
                <h4>User name</h4>
                Comments <br></br>
                <p className='lead'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
              </span>
      </div>
      </>
    )
  }
};

export default ProductInfo;
