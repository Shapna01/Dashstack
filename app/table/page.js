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
    <div
      className="p-6 space-y-10"
      style={{
        backgroundColor: "#F5F6FA",
        minHeight: "100vh",
      }}
    >


      <div className="bg-white shadow rounded-lg p-6">

        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Order List</h2>

          <div className="relative">
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />

            <input
              placeholder="Search order"
              value={orderSearch}
              onChange={(e) => setOrderSearch(e.target.value)}
              className="border rounded-lg pl-9 py-2 text-sm"
            />
          </div>
        </div>

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-5 px-4 text-left">ID</th>
              <th className="py-5 px-4 text-left">Name</th>
              <th className="py-5 px-4 text-left">Address</th>
              <th className="py-5 px-4 text-left">Date</th>
              <th className="py-5 px-4 text-left">Type</th>
              <th className="py-5 px-4 text-left">Status</th>
              <th className="py-5 px-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >

                <td className="py-5 px-4">{order.id}</td>

                <td className="py-4 px-4 font-medium">
                  {order.name}
                </td>

                <td className="py-4 px-4 text-gray-500">
                  {order.address}
                </td>

                <td className="py-5 px-4">
                  {new Date(order.order_date).toLocaleDateString()}
                </td>

                <td className="py-5 px-4">{order.type}</td>

                <td className="py-5 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs
                    ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : order.status === "Processing"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="py-4 px-4 flex gap-3">

                  <button className="text-blue-500">
                    <FiEdit />
                  </button>

                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="text-red-500"
                  >
                    <FiTrash2 />
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>






      <div className="bg-white shadow rounded-lg p-6">

        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Product Stock</h2>

          <div className="relative">
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />

            <input
              placeholder="Search product"
              value={productSearch}
              onChange={(e) => setProductSearch(e.target.value)}
              className="border rounded-lg pl-9 py-2 text-sm"
            />
          </div>
        </div>

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-gray-600">
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
                className="border-b border-gray-200 hover:bg-gray-50"
              >

                <td className="py-5 px-4">
                  <img
                    src={product.thumbnail}
                    className="w-12 h-12"
                  />
                </td>

                <td className="py-4 px-4 font-medium">
                  {product.title}
                </td>

                <td className="py-4 px-4 text-gray-500">
                  {product.category}
                </td>

                <td className="py-4 px-4 text-blue-600">
                  ${product.price}
                </td>

                <td className="py-5 px-4">{product.stock}</td>

                <td className="py-4 px-4 flex gap-2">
                  <span className="w-4 h-4 bg-black rounded-full"></span>
                  <span className="w-4 h-4 bg-red-400 rounded-full"></span>
                  <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
                </td>

                <td className="py-4 px-4 flex gap-3">

                  <button className="text-blue-500">
                    <FiEdit />
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="text-red-500"
                  >
                    <FiTrash2 />
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>


        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={() =>
              setCurrentPage((p) => Math.max(p - 1, 1))
            }
            className="px-3 py-1 border rounded"
          >
            {"<"}
          </button>

          <button
            onClick={() =>
              setCurrentPage((p) =>
                Math.min(p + 1, totalPages)
              )
            }
            className="px-3 py-1 border rounded"
          >
            {">"}
          </button>

        </div>
      </div>

    </div>
  );
}