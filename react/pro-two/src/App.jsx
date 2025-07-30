import "./App.css";
import Greeting from "./components/Greeting";
import GreetingClassBased from "./components/GreetingClassBased";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import ChangeHeading from "./components/ChangeHeading";
import Calculator from "./components/Calculator";
import Vegetables from "./components/Vegetables";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  // const jobTitle = 'FullStack developer'
  const [jobTitle, setJobTitle] = useState("FullStack developer");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user,setUser] = useState('Shrihari')
  useEffect(() => {
    console.log("Mount component");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <>
    <ContactForm />

    <Vegetables />
      <Fruits />

      {isLoggedIn ? (
        <>
          <h1 className="redFont">User Logged In</h1>
          {/* <button onClick={() => setIsLoggedIn(false)}>Logout</button> */}
        </>
      ) : (
        <>
        <h1 className="greenFont">Please Login</h1>
        {/* <button onClick={()=>setIsLoggedIn(true)}>Login</button> */}
        </>
      )}
<button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
{isLoggedIn ? 'Logout':'Login'}
</button>
      
<h1 className={`${isLoggedIn ? 'greenBlock ' : 'blueBlock'}`}>Best Style In Focus</h1>

<h1>{isLoggedIn && <span>{user}</span>}</h1>


      <Calculator />
      <ChangeHeading />
      <h3>Job Title :{jobTitle}</h3>
      <button onClick={() => setJobTitle("Senior Developer")}>
        Update job title
      </button>
      <Counter />
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
