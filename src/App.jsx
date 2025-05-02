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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
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
            <button 
              onClick={() => alert(JSON.stringify(product, null, 2))} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors block text-center mt-2"
            >
              Show More
            </button>
            <Meta
              title={<div className="text-lg font-semibold mt-2">{product.title}</div>}
              description={<div className="text-sm text-gray-600 mt-1">{product.description}</div>}
            />
          </Card>
        </div>
      ))}
    </div>
  );
}

export default App;
