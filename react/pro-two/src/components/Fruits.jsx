import React, { useState } from 'react'
import fruitsData from  '../../fruitsData.js'

const Fruits = () => {
  console.log(fruitsData);
    const [fruits, setFruits] = useState(['Apple','Kiwi', 'Banana','Orange'])
  return (
    <div>

      <table>
        <thead>
          <tr>
          <th>Sr no</th>
          <th>Name</th>
          <th>Price</th>
          <th>Availability</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fruitsData.map((fruit,index)=>(
            <tr keys={fruit.id}>
              <td>{index+1}</td>
              <td>{fruit.name}</td>
              <td>₹{fruit.price}</td>
              <td>{fruit.quantity > 0 ? (<p>In Stock</p>):(<p>Out Of Stock</p>)}</td>
              <button><img src={fruit.image} alt={fruit.name} />Buy Now</button>
            </tr>
          ))}
        </tbody>
      </table>

      <ul>
        {fruits.map((elemt,index)=>(
          <li keys={index}>{elemt}</li>
        ))}
      </ul>
    </div>
  )
}

export default Fruits
