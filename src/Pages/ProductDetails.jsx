import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../Components/NavBar";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) return <div className="flex items-center justify-center h-screen text-xl font-semibold">Loading...</div>;

  return (
    <>
      <NavBar />
      <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
        <div className="space-y-4">
          <p className="text-lg">
            <strong className="font-semibold text-gray-700">Price:</strong>{" "}
            <span className="text-green-600">${product.price}</span>
          </p>
          <p className="text-lg">
            <strong className="font-semibold text-gray-700">Brand:</strong> {product.brand}
          </p>
          <p className="text-lg">
            <strong className="font-semibold text-gray-700">Category:</strong> {product.category}
          </p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;