import React, { useState } from "react";
import useBlog from "../hook/useBlog";
import { ToastContainer, toast } from 'react-toastify';

const AddBlog = () => {
  const [blogTitle, setBlogTitle] = useState()
  const [description,setDescription] = useState()
  const {addNewBlog} = useBlog()

  function handleSubmit(event){
    event.preventDefault()
    const payload = {
      title: blogTitle,
      description:description
    }
    addNewBlog(payload)
    toast("Blog added successfully...")
  }


  return (
    <>
    <div className="container">
      <h2>Add New blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="blogTitle" className="form-label">
            Blag Title
          </label>
          <input
            type="text"
            className="form-control"
            id="blogTitle"
            onChange={(e)=>setBlogTitle(e.target.value)}
          />
          
        </div>
        <div className="mb-3">
          <label for="blogDescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="blogDescription"
            onChange={(e)=>setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
     <ToastContainer />
     </>
  );
};

export default AddBlog;
