import "./App.css";
import Greeting from "./components/Greeting";
import GreetingClassBased from "./components/GreetingClassBased";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";

function App() {
  // const jobTitle = 'FullStack developer'
  const [jobTitle, setJobTitle] = useState('FullStack developer')

  useEffect(()=>{
      console.log("Mount component")
      return(()=>{
        console.log('unmount')
      })
  },[])

  return (
    <>
    <h3>Job Title :{jobTitle}</h3>
    <button onClick={()=>setJobTitle('Senior Developer')}>Update job title</button>
    <Counter />
    <Fruits />
    {/* <Navbar />
      <Greeting studName="SHRIHARI" marks={90} />
      <Greeting studName="Aditya" marks={90} />

      <GreetingClassBased studName="SHRIHARI" />
      <GreetingClassBased studName="Aditya" />
<div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
      <Product
        prod={{
          name: "iPhone 17 Pro",
          brand: "Apple",
          price: 23456,
          inStock: true,
          color: "pink",
          image: "https://m.media-amazon.com/images/I/71d7rfSl0wL.jpg",
        }}
      />
            <Product
        prod={{
          name: "iPhone 17 Pro",
          brand: "Apple",
          price: 23456,
          inStock: true,
          color: "black",
          image: "https://m.media-amazon.com/images/I/71d7rfSl0wL.jpg",
        }}
      />      <Product
        prod={{
          name: "iPhone 17 Pro",
          brand: "Apple",
          price: 23456,
          inStock: true,
          color: "white",
          image: "https://m.media-amazon.com/images/I/71d7rfSl0wL.jpg",
        }}
      />
      </div> */}
    </>
  );
}

export default App;
