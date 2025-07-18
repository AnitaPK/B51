import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import GreetingClassBased from "./components/GreetingClassBased";
import Product from "./components/Product";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
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
      </div>
    </>
  );
}

export default App;
