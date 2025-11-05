import React from 'react'
import { useSelector } from 'react-redux'


const Counter = () => {
    const counterValue = useSelector(state=>state.counter.count)

  return (
    <div>
      Count : {counterValue}
    </div>
  )
}

export default Counter
