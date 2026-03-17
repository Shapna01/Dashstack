"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("wishlist") || "{}");
    }
    return {};
  });

  const createOrder = async (product) => {
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        name: product.title,
        address: product.brand,
        type: product.category,
        price: product.price,
        quantity: 1,
        status: "Processing",
        
        })
      });

      const data = await res.json();
      console.log("Order created:", data);
      alert("Order Created!");
    } catch (error) {
      console.error("Failed to create order", error);
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    setWishlist((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  function StarRating({ rating: initialRating }) {
    const [hoverRating, setHoverRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(initialRating);
  
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= (hoverRating || selectedRating);
          return (
            <svg
              key={star}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setSelectedRating(star)}
              xmlns="http://www.w3.org/2000/svg"
              fill={isFilled ? "gold" : "none"}
              stroke="gold"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 cursor-pointer"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          );
        })}
      </div>
    );
  }

  function WishlistHeart({ productId }) {
    const isFavorited = wishlist[productId];

    return (
      <button
        onClick={() => toggleWishlist(productId)}
        aria-label="Toggle wishlist"
        className="focus:outline-none"
      >
        {isFavorited ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="gray"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        )}
      </button>
    );
  }

  return (
    <div  >
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      
        <div className="w-full min-h-[220px] md:min-h-[300px] bg-blue-500 text-white rounded-xl shadow-lg mb-8 px-4 sm:px-6 md:px-10 py-6 flex items-center justify-center md:justify-start">
        
          <div className="flex flex-col gap-2 max-w-md text-center md:text-left">

          <span className="text-sm sm:text-base font-semibold">September 12-22</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            Enjoy free home delivery in this summer
          </h2>
          <p className="text-sm sm:text-base md:text-lg mt-1">
            Designer Dresses - Pick from trendy Designer Dress.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-md mt-4 w-fit mx-auto md:mx-0 hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {products.map((product) => (
          <div
  key={product.id}
  className="bg-white rounded-lg shadow relative p-4 flex flex-col"
>

  <img
    src={product.thumbnail}
    alt={product.title}
    className="w-full h-64 object-contain"
  />

  <div className="flex flex-col gap-2 mt-4">
    <h2 className="text-lg font-semibold">{product.title}</h2>

    <p className="text-blue-600 font-bold">${product.price}</p>

    <div className="flex items-center gap-2">
      <StarRating rating={product.rating} />
      <span className="text-gray-400 text-sm">
        ({Math.round(product.rating * 30)})
      </span>
    </div>

    <button
      onClick={() => createOrder(product)}
      className="text-black font-bold rounded px-3 py-2 text-sm w-max bg-blue-200 hover:bg-blue-300 mt-2"
    >
      Create Order
    </button>
  </div>

  <div className="absolute top-4 right-4">
    <WishlistHeart productId={product.id} />
  </div>

</div>
        ))}
      </div>
    </div>
  );
}