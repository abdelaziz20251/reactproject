// import Home from "./Pages/Home";

// const App = () =>{

//   return (
//     <>
//     <Home/>
//     </>

//   )
// }
// export default App;

// import { useState, useEffect } from "react";

// const App = () => {
//   const [counter , setCounter] = useState(0);

//   const incrment = () =>{
//     setCounter(counter +1)
//   }
//   const deIncrment = () =>{
//     setCounter(counter -1)
//   }
//   const reset = () =>{
//     setCounter(0)
//   } 

//   useEffect(() => {
//     if (counter > 10) {
//       reset();
//     }
//   }, [counter])

// return (
// <>
//   <div>
//     <h1>Counter : {counter}</h1> <br />
//     <button onClick = {incrment}>Incrment</button>
//     <button onClick = {deIncrment}>Decrment</button>
//     <button onClick = {reset}>Reset</button>
//   </div>
// </>
// )
// }
// export default App;

// import Abdelaziz from "./Components/Abdelaziz";
// const App = () => {
//   const user ={
//     name: "Abdelaziz",
//     age: 29,
//     email: "abdelaziz20251@hotmail.com"
//   }
//   return (
//     <>
//       <Abdelaziz user={user.name} age={user.age} email={user.email}/>
//     </>
//   );
// }
// export default App;
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from 'antd';
import './App.css'; // Import a CSS file for animations
import HeroSection from './Components/HeroSection';
const { Meta } = Card;

const App = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response?.data?.products);
    }
    getData();
  }, []);

  return (
    <>
    <nav className="bg-blue-600 text-white p-4 mb-6 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">My Store</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="#products" className="hover:text-gray-200">Products</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-200">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

    <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mx-4">
      {products.map(product => (
        <div 
          key={product.id} 
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <Card
            className="h-full"
            cover={
              <img
                alt={product.title}
                src={product.images[0]}
                className="w-full h-48 object-cover"
              />
            }
          >
            <Meta
              title={<div className="text-lg font-semibold mt-2">{product.title}</div>}
              description={<div className="text-sm text-gray-600 mt-1">{product.description}</div>}
            />
          </Card>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
