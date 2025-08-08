import React, { useEffect, useState } from 'react'

const useBlog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        const firstTimeFromLocal = JSON.parse(localStorage.getItem('blogs')) || []
        console.log(firstTimeFromLocal)
        setBlogs(firstTimeFromLocal)
    },[])

    function saveBlog(b){
        localStorage.setItem('blogs', JSON.stringify(b))
    }
    function getBlogs(){
        return JSON.parse(localStorage.getItem('blogs'))
    }
    // saveBlog(blogs)

    function addNewBlog(data){
        console.log(data)
        const getFromLocal = getBlogs()
        getFromLocal.push(data)
        saveBlog(getFromLocal)
    }

    function GetBlogByID(ID){
        const getFromLocal = getBlogs()
        return getFromLocal.find((b,i) => b.id == ID)
    }
function deleteBlog(ID){
        const getFromLocal = getBlogs()
        const blogLIstAfterDelete =getFromLocal.filter((b,i)=> b.id!= ID)
        saveBlog(blogLIstAfterDelete)
        return 'deleted successfully'
}

  return {saveBlog,getBlogs, blogs, addNewBlog, GetBlogByID, deleteBlog}
}

export default useBlog
