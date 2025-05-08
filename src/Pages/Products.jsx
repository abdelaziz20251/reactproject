import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from 'antd';
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
const { Meta } = Card;

const Products = () => {
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
    <NavBar />
    <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mx-4">
    {products.map(product => (
    <Link 
      to={`/products/${product.id}`} 
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
      description={
        <div>
          <div className="text-sm text-gray-600 mt-1">{product.description}</div>
          <div className="text-blue-500 mt-2">View Details</div>
        </div>
      }
      />
      </Card>
    </Link>
    ))}
    </div>
    </>
  );
};

export default Products;