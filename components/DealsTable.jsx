"use client";

import { useEffect, useState } from "react";

export default function DealsTable() {

const [orders, setOrders] = useState([]);
const [products, setProducts] = useState([]);

useEffect(() => {


async function fetchData() {

  try {

    const ordersRes = await fetch("/api/orders");
    const ordersData = await ordersRes.json();
    setOrders(ordersData);

    const productRes = await fetch("https://dummyjson.com/products");
    const productData = await productRes.json();
    setProducts(productData.products);

  } catch (error) {
    console.error("Fetch error:", error);
  }

}

fetchData();


}, []);

return (
<div
className="bg-white rounded-[14px] p-6"
style={{
width: "1190px",
height: "420px",
boxShadow: "6px 6px 54px rgba(0,0,0,0.05)"
}}
>


  <div className="flex justify-between items-center mb-6">
    <h3 className="text-[22px] font-bold text-gray-700">
      Deals Details
    </h3>

    <select className="border border-gray-200 rounded-md px-3 py-1 text-sm">
      <option>October</option>
      <option>September</option>
      <option>August</option>
    </select>
  </div>

  <table className="w-full text-sm">

    <thead>
      <tr className="text-gray-500 border-b">
        <th className="text-left py-3">Product Name</th>
        <th className="text-left py-3">Location</th>
        <th className="text-left py-3">Date - Time</th>
        <th className="text-left py-3">Piece</th>
        <th className="text-left py-3">Amount</th>
        <th className="text-left py-3">Status</th>
      </tr>
    </thead>

    <tbody>

      {orders.map((order) => {

        const product = products.find(
          (p) => p.title.toLowerCase() === order.name.toLowerCase()
        );

        return (

          <tr key={order.id} className="border-b">

            <td className="py-4 flex items-center gap-3">

              <img
                src={product?.thumbnail}
                alt={order.name}
                className="w-8 h-8 rounded"
              />

              {order.name}

            </td>

            <td>{order.address}</td>

            <td>
              {new Date(order.order_date).toLocaleString()}
            </td>

            <td>{order.quantity}</td>

            <td>${order.price}</td>

            <td>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                {order.status}
              </span>
            </td>

          </tr>

        );

      })}

    </tbody>

  </table>

</div>


);

}
