import React, { useState } from 'react'

const Fruits = () => {
    const [fruits, setFruits] = useState(['Apple', 'Banana','Orange'])
  return (
    <div>
      {fruits[0]}
    </div>
  )
}

export default Fruits
