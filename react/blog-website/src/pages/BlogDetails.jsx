import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useBlog from '../hook/useBlog'

const BlogDetails = () => {
  const [b_details, setB_Details] = useState()
  const {ID} = useParams()
  const {GetBlogByID} = useBlog()

 function fetchData(){
        const getData =  GetBlogByID(ID)
          setB_Details(getData)
 } 

useEffect(()=>{
  fetchData()
},[])
  return (
    <div>
      <h1>blog Details</h1>
      {b_details ? (
        <><h2>{b_details.title}</h2>
      <p className='lead'>{b_details.description}</p></>
      ) : (<h2> No such blog</h2>)}
      
    </div>
  )
}

export default BlogDetails
