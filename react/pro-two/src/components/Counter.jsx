import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    function handleIncreament(){
            setCount(count+1)
    }
    const handleDecreament=()=>{
        setCount(count-1)
        // setCount(count--)
    }
  return (
    <div>
      Count: {count}
      <button onClick={()=>setCount(count+1)}>Increament</button>
      <button onClick={handleIncreament}>Increament By function</button>
      <button onClick={()=>setCount(count-1)}>Decreament</button>
      <button onClick={handleDecreament}>Decreament By Function</button>
    </div>
  )
}

export default Counter
