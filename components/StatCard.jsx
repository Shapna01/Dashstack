"use client";

import React from "react";
import { FaUsers, FaBoxOpen, FaDollarSign, FaClock } from "react-icons/fa";

export default function StatCard({ title, value }) {
  let icon, bgColor;
  switch (title) {
    case "Total Users":
      icon = <FaUsers className="text-white text-xl" />;
      bgColor = "bg-blue-500";
      break;
    case "Total Orders":
      icon = <FaBoxOpen className="text-white text-xl" />;
      bgColor = "bg-purple-500";
      break;
    case "Total Sales":
      icon = <FaDollarSign className="text-white text-xl" />;
      bgColor = "bg-green-500";
      break;
    case "Total Pending":
      icon = <FaClock className="text-white text-xl" />;
      bgColor = "bg-yellow-500";
      break;
    default:
      icon = <FaUsers className="text-white text-xl" />;
      bgColor = "bg-gray-500";
  }

  return (
    <div className="relative bg-white rounded-[14px] shadow w-[262px] h-[161px] p-4">
      <div className="absolute top-4 left-4 flex flex-col">
        <span
          className="text-gray-700 font-semibold text-[16px] leading-[22px] opacity-70"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          {title}
        </span>
        <span
          className="text-gray-900 font-bold text-[22px] leading-[26px] mt-2"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          {value}
        </span>
      </div>

      <div className={`absolute top-4 right-4 p-3 rounded-lg ${bgColor} flex items-center justify-center`}>
        {icon}
      </div>
    </div>
  );
}

