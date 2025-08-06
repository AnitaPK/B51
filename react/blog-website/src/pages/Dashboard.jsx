import React, { useEffect, useState } from 'react'
import useBlog from '../hook/useBlog'

const Dashboard = () => {
    const [blogs, setBlogs] = useState([])
    const {getBlogs} = useBlog()

    function fetchData(){
        const getBlogsLocal = getBlogs()
        setBlogs(getBlogsLocal)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
      DASHBOARD
      {blogs.length >0 ?(<p>List of Blog</p>) : (<p>No blog yet</p>)}
    </div>
  )
}

export default Dashboard
