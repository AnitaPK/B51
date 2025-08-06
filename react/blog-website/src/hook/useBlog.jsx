import React, { useState } from 'react'

const useBlog = () => {
    const [blogs, setBlogs] = useState([])

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
  return {saveBlog,getBlogs, blogs, addNewBlog}
}

export default useBlog
