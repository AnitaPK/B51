import React, { useEffect, useState } from "react";
import useBlog from "../hook/useBlog";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const { getBlogs, deleteBlog } = useBlog();

  function fetchData() {
    const getBlogsLocal = getBlogs();
    setBlogs(getBlogsLocal);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleDelete(ID){
    const mgs = deleteBlog(ID)
      if(mgs){
        toast(mgs)
      }else{
        toast('Can not delete')
      }
      fetchData()
  }

  return (
    <>
    <div>
      DASHBOARD
      <h1>List of Blog</h1>
      {blogs.length > 0 ? (
        <>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Blag Title</th>
                <th scope="col">ACtion</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((b, index) => (
                <tr keys={index}>
                  <th scope="row">{index + 1}</th>

                  <td>
                    <Link to={`/${b.id}`}>{b.title}</Link>
                  </td>

                  <td>
                    <button className="btn btn-success">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={()=>handleDelete(b.id)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No blog yet</p>
      )}
    </div>
    <ToastContainer />
    </>
  );
};

export default Dashboard;
