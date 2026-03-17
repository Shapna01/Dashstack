"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Favourites() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "{}");
      setWishlist(storedWishlist);
    }

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  const toggleWishlist = (productId) => {
    const updated = { ...wishlist, [productId]: !wishlist[productId] };
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const favouriteProducts = products.filter((p) => wishlist[p.id]);

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

  return (
    <div >
      <h1 className="text-3xl font-bold mb-6">Favourites</h1>
      <Link href="/products" className="mb-6 inline-block text-blue-600 font-semibold">
        Back to Products
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favouriteProducts.length === 0 && <p>No favourites yet.</p>}

        {favouriteProducts.map((product) => (
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
              <div>
                <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                <p className="text-blue-600 font-bold mb-1">${product.price}</p>
                <div className="flex items-center gap-2">
                  <StarRating rating={product.rating} />
                  <span className="text-gray-400 text-sm">
                    ({Math.round(product.rating * 30)})
                  </span>
                </div>
              </div>

              <button
                style={{ backgroundColor: "#E2EAF8" }}
                className="text-black-900 font-bold rounded px-3 py-1 text-sm w-max hover:bg-blue-300 mt-2"
              >
                Edit Product
              </button>
            </div>

            <div className="absolute top-4 right-4">
              <button
                onClick={() => toggleWishlist(product.id)}
                aria-label="Toggle wishlist"
                className="focus:outline-none"
              >
                {wishlist[product.id] ? (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}