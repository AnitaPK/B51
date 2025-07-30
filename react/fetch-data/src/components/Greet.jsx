import React, { useEffect } from 'react'

const Greet = () => {

    useEffect(()=>{
        console.log("****object****")
        console.log('Greet component mounted')
    },[])

  return (
    <div>
      <h1>HELLO</h1>
    </div>
  )
}

export default Greet
