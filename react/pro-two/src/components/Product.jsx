import React from 'react'

const Product = (props) => {
    const prod = props.prod
    console.log(prod)
  return (
    <div style={{'width':'18rem', 'backgroundColor':'gray', 'color':'white',marginLeft:'20px'}}>
            <img src={prod.image} alt='Prod image' style={{'width':'18rem'}}/>
            <h2 style={{textAlign:'center'}}>{prod.name}</h2>
            <p>₹ {prod.price}</p>
            <p style={{color:'green'}}>Instock</p>
            <p style={{textAlign:'center'}}><button style={{textAlign:'center', padding:'5px 10px'}}>More Info</button></p>
    </div>
  )
}

export default Product
