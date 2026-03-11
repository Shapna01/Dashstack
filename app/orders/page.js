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

  const randomStatus = () => {
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  const randomDate = () => {
    const start = new Date(2024, 0, 1);
    const end = new Date();
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

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
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">Order Lists</h2>

      {/* FILTER BAR */}

      <div className="bg-white border rounded-xl shadow-sm flex items-center overflow-hidden w-fit">

        {/* Filter Label */}

        <div className="flex items-center gap-2 px-4 py-3 border-r text-gray-600">
          <FiFilter />
          <span className="font-medium">Filter By</span>
        </div>

        {/* Date */}

        <div className="flex items-center gap-2 px-4 py-3 border-r text-gray-600">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Date"
            className="outline-none w-24"
          />
          <FiChevronDown size={16} />
        </div>

        {/* Order Type */}

        <div className="flex items-center gap-2 px-4 py-3 border-r text-gray-600">
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

        {/* Order Status */}

        <div className="flex items-center gap-2 px-4 py-3 border-r text-gray-600">
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

        {/* Reset */}

        <button
          onClick={resetFilters}
          className="px-4 py-3 text-red-500 font-medium flex items-center gap-2"
        >
          Reset Filter
        </button>

      </div>

      {/* TABLE */}

      <div className="bg-white shadow rounded-lg overflow-hidden mt-6">

        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3">ID</th>
              <th className="p-3">NAME</th>
              <th className="p-3">ADDRESS</th>
              <th className="p-3">DATE</th>
              <th className="p-3">TYPE</th>
              <th className="p-3">STATUS</th>
            </tr>
          </thead>

          <tbody>

            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-t">

                <td className="p-3">000{order.id}</td>
                <td className="p-3">{order.name}</td>
                <td className="p-3">{order.address}</td>
                <td className="p-3">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="p-3">{order.type}</td>

                <td className="p-3">
                  <span className="px-3 py-1 text-xs rounded bg-blue-100 text-blue-600">
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