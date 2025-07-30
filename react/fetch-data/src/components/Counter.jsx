import React,{useEffect, useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
        const timer = setInterval(() => {
            console.log('prints after every second')
        }, 1000);

        console.log("Count updated")

        return ()=>{
            clearInterval(timer)
            console.log('*****clear****')
        }

  },[count])


  return (
    <div>
      <h1>COUNT: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increament</button>
    </div>
  )
}

export default Counter
