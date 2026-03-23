"use client";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiFilter, FiChevronDown } from "react-icons/fi";

export default function OrdersPage() {

  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const statuses = [
    "Completed",
    "Processing",
    "Rejected",
    "On Hold",
    "In Transit",
  ];

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders");
      const data = await res.json();

      const formattedOrders = data.map((order) => ({
        id: order.id,
        name: order.name,
        address: order.address,
        date: order.order_date,
        type: order.type,
        status: order.status,
      }));

      setOrders(formattedOrders);
      setFilteredOrders(formattedOrders);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    let filtered = [...orders];

    if (typeFilter) {
      filtered = filtered.filter((o) => o.type === typeFilter);
    }

    if (statusFilter) {
      filtered = filtered.filter((o) => o.status === statusFilter);
    }

    if (selectedDate) {
      filtered = filtered.filter(
        (o) =>
          new Date(o.date).toDateString() ===
          new Date(selectedDate).toDateString()
      );
    }

    setFilteredOrders(filtered);
  }, [typeFilter, statusFilter, selectedDate, orders]);

  const resetFilters = () => {
    setTypeFilter("");
    setStatusFilter("");
    setSelectedDate(null);
    setFilteredOrders(orders);
  };

  return (
    <div >

      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Order Lists</h2>


      <div className="bg-white border border-gray-200 rounded-xl flex items-center overflow-hidden">

        <div className="flex items-center gap-2 px-4 py-3 text-gray-600">
          <FiFilter />
          <span className="font-medium">Filter By</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 bg-white dark:bg-[#334155]">
          <DatePicker
           selected={selectedDate}
           onChange={(date) => setSelectedDate(date)}
           placeholderText="Date"
           className="outline-none w-24 
           bg-transparent 
           text-gray-700 dark:text-gray-200 
           placeholder-gray-400 dark:placeholder-gray-400"
          />
          <FiChevronDown size={16} />
        </div>

        <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 bg-white dark:bg-[#334155]">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="outline-none bg-transparent appearance-none"
          >
            <option value="">Order Type</option>
            <option value="beauty">Beauty</option>
            <option value="furniture">Furniture</option>
            <option value="fragrances">Fragrances</option>
            <option value="groceries">Groceries</option>
          </select>
          <FiChevronDown size={16} />
        </div>

        <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 bg-white dark:bg-[#334155]">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="outline-none bg-transparent appearance-none"
          >
            <option value="">Order Status</option>
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <FiChevronDown size={16} />
        </div>

        <button
  onClick={resetFilters}
  className="px-4 py-3 text-red-500 dark:text-red-400 font-medium hover:underline flex items-center gap-2"
>
  Reset Filter
</button>

      </div>


      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mt-6">

        <table className="w-full min-w-[700px] text-sm table-fixed">

         <thead className="bg-white text-gray-700 text-xs uppercase border-b border-gray-100 ">
          <tr className="border-b border-gray-100">
            <th className="py-4 px-6 text-left">ID</th>
            <th className="py-4 px-6 text-left">Name</th>
            <th className="py-4 px-6 text-left">Address</th>
            <th className="py-4 px-6 text-left">Date</th>
            <th className="py-4 px-6 text-left">Type</th>
            <th className="py-4 px-6 text-left">Status</th>
          </tr>
          </thead>

          <tbody  >

            {filteredOrders.map((order) => (
              <tr
                
  key={order.id}
  className="border-b border-gray-100 bg-white hover:bg-gray-50 transition"
>
              

                <td className="py-4 px-6 font-medium text-gray-700 dark:text-gray-200">
  000{order.id}
</td>

<td className="py-4 px-6 text-gray-600 dark:text-gray-400">
  {order.name}
</td>

<td className="py-4 px-6 text-gray-500">
  {order.address}
</td>

                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                  {new Date(order.date).toLocaleDateString()}
                </td>

                <td className="py-4 px-6 text-gray-800 dark:text-gray-200">{order.type}</td>

                <td className="py-4 px-6 text-gray-700dark:text-gray-300">
                  <span
  className={`px-3 py-1 text-xs font-medium rounded-full
  ${
    order.status === "Completed"
      ? "bg-green-100 text-green-600"
      : order.status === "Processing"
      ? "bg-purple-100 text-purple-600"
      : order.status === "Rejected"
      ? "bg-red-100 text-red-500"
      : order.status === "On Hold"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-blue-100 text-blue-600"
  }`}
>
  {order.status}
</span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}