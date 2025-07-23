import React, { useState } from 'react'

const ChangeHeading = () => {
    const [heading , setHeading] = useState('Learned HTML CSS Javacript')
    function handleChangeHeading(){
        setHeading('Now learning ReactJS')
    }
  return (
    <div>
      <h1>{heading}</h1>
      <button onClick={handleChangeHeading}>Change Heading</button>
    </div>
  )
}

export default ChangeHeading
