import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import Card from './Card';


const Dashboard = () => {
        const [productsState, setProductsState] = useState([]);

    // console.log(axios.isCancel('34567890'))

    async function fetchData(){
        const response = await axios.get('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
        console.log(response.data)
        setProductsState(response.data)

    }

    useEffect(()=>{
        fetchData()
    },[])


  return (
    <div>
      DASHBOARD
      <hr></hr>
      <div className="d-flex flex-wrap">
        {productsState.map((product, index) => (
          <div keys={index}>
            <div className="badge bg-secondary">
                {product.category}
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="row">
          {productsState.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-3" 
            keys={index}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
