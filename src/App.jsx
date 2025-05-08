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
import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import ProductDetails from './Pages/ProductDetails';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; // Import a CSS file for animations
import Login from './Pages/Login';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  const ProtectedRoute = ({ children }) => {
    if (!loggedIn) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/products/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
      </Routes>
    </router>
  );
}

export default App;
