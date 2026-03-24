"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log("Product ID:", id);
        console.log("Product title:", data.title);    
      });
  }, [id]);

  if (!product) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform transform hover:scale-105">
      <img
        src={product.thumbnail}
        className="w-64 h-64 object-contain mt-4 rounded-lg shadow-md"
      />

      <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">{product.title}</h1>

      

      <p className="mt-2 text-lg font-semibold text-xl font-semibold text-blue-500">${product.price}</p><br />

      <p className="t-6 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-900 transition">{product.description}</p>
      </div>
    </div>
  );
}