"use client";

import { useEffect, useState } from "react";
import { FiEdit, FiTrash2, FiSearch } from "react-icons/fi";

export default function TablesPage() {

  const [orders, setOrders] = useState([]);
  const [orderSearch, setOrderSearch] = useState("");

  const [products, setProducts] = useState([]);
  const [productSearch, setProductSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredOrders = orders.filter((o) =>
    o.name.toLowerCase().includes(orderSearch.toLowerCase())
  );

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(productSearch.toLowerCase())
  );

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0f172a] min-h-screen py-6">
  <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-gray-800 dark:text-white">Table</h1>
      <div className="bg-white dark:bg-[#1e293b] 
shadow rounded-lg p-6 
border border-gray-200 dark:border-gray-700
transition-colors duration-200">

        <div className="flex justify-between mb-4">

          
        </div>

        <div className="overflow-x-auto">
  <table className="min-w-[700px] w-full text-sm">

          <thead className="bg-gray-100 dark:bg-[#0f172a] text-gray-600 dark:text-gray-300">
            <tr>
              <th className="py-3 px-3 sm:py-4 sm:px-4 text-left">ID</th>
              <th className="py-3 px-3 sm:py-4 sm:px-4 text-left">Name</th>
              <th className="py-3 px-3 sm:py-4 sm:px-4 text-left">Address</th>
              <th className="py-3 px-3 sm:py-4 sm:px-4 text-left">Date</th>
              <th className="py-3 px-3 sm:py-4 sm:px-4 text-left">Type</th>
              <th className="py-3 px-3 sm:py-4 sm:px-4 text-left">Status</th>
              <th className="py-3 px-3 sm:py-4 sm:px-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-200 dark:border-gray-700 
hover:bg-gray-50 dark:hover:bg-[#2a3a4f] 
transition-colors text-gray-500 dark:text-gray-400"
              >

                <td className="py-4 px-4">00{order.id}</td>

                <td className="py-4 px-4 font-medium text-gray-800 dark:text-gray-200">
                  {order.name}
                </td>

                <td className="py-4 px-4 text-gray-500 dark:text-gray-400">
                  {order.address}
                </td>

                <td className="py-4 px-4 text-gray-500 dark:text-gray-400">
                  {new Date(order.order_date).toLocaleDateString()}
                </td>

                <td className="py-4 px-4 text-gray-500 dark:text-gray-400">{order.type}</td>

                <td className="py-4 px-4 text-gray-500 dark:text-gray-400">
                  <span
                    className={`px-3 py-1 rounded-full text-xs
                    ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                        : order.status === "Processing"
                        ? "bg-purple-100 text-purple-600 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-600 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="py-4 px-4">
  <div className="flex items-center gap-2 sm:gap-3">
    <button className="text-blue-500">
      <FiEdit />
    </button>
    <button
      onClick={() => deleteOrder(order.id)}
      className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition"
    >
      <FiTrash2 />
    </button>
  </div>
</td>
                
              </tr>
            ))}
          </tbody>

        </table>
        
        </div>
      </div>




<br />

      
      
      
      <div className="bg-white dark:bg-[#1e293b] 
shadow rounded-lg p-6 
border border-gray-200 dark:border-gray-700
transition-colors duration-200">

        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Product Stock</h2>

          
        </div>

        <div className="overflow-x-auto">
  <table className="min-w-[700px] w-full text-sm">

          <thead className="bg-gray-100 dark:bg-[#0f172a] 
text-gray-600 dark:text-gray-300">
            <tr>
              <th className="py-4 px-4 text-left">Image</th>
              <th className="py-4 px-4 text-left">Product</th>
              <th className="py-4 px-4 text-left">Category</th>
              <th className="py-4 px-4 text-left">Price</th>
              <th className="py-4 px-4 text-left">Stock</th>
              <th className="py-4 px-4 text-left">Colors</th>
              <th className="py-4 px-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 dark:border-gray-700 
hover:bg-gray-50 dark:hover:bg-[#2a3a4f] 
transition-colors"
              >

                <td className="py-5 px-4">
                  <img
                    src={product.thumbnail}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                </td>

                <td className="py-4 px-4 font-medium text-gray-800 dark:text-gray-200">
                  {product.title}
                </td>

                <td className="py-4 px-4 text-gray-500 dark:text-gray-400">
                  {product.category}
                </td>

                <td className="py-4 px-4 text-blue-600 dark:text-blue-400">
                  ${product.price}
                </td>

                <td className="py-5 px-4 text-gray-700 dark:text-gray-300">{product.stock}</td>

                <td className="py-4 px-4 flex gap-2">
                  <span className="w-4 h-4 bg-black rounded-full"></span>
                  <span className="w-4 h-4 bg-red-400 rounded-full"></span>
                  <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
                </td>

                <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition">
                   <FiEdit />
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition"
                  >
                  <FiTrash2 />
                  </button>
                </div>
                  </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

        <div className="flex justify-between sm:justify-end items-center gap-3 mt-6">

          <button
            onClick={() =>
              setCurrentPage((p) => Math.max(p - 1, 1))
            }
            className="px-3 py-1 border rounded border-gray-300 dark:border-gray-600 
text-gray-700 dark:text-gray-200 
hover:bg-gray-100 dark:hover:bg-[#2a3a4f]
transition"
>
            {"<"}
          </button>

          <button
            onClick={() =>
              setCurrentPage((p) =>
                Math.min(p + 1, totalPages)
              )
            }
            className="px-3 py-1 border rounded border-gray-300 dark:border-gray-600 
text-gray-700 dark:text-gray-200 
hover:bg-gray-100 dark:hover:bg-[#2a3a4f]
transition"
          >
            {">"}
          </button>

        </div>
      </div>
    </div>
    </div>
  );
}