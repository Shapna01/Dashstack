"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function UnitsGraph() {
  const [month, setMonth] = useState("October");

  const labels = [
    "5k","10k","15k","20k","25k","30k",
    "35k","40k","45k","50k","55k","60k"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: [20,30,50,35,60,55,45,70,60,50,55,65],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59,130,246,0.08)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#3B82F6"
      }
    ]
  };

  const options = {
    responsive: true,
maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (v) => v + "%",
          color: "#6B7280"
        },
        grid: {
          color: "#F1F5F9"
        }
      },
      x: {
        ticks: {
          color: "#6B7280"
        },
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-[14px] w-full p-4 md:p-6 shadow-[6px_6px_54px_rgba(0,0,0,0.05)]">

  <div className="flex items-center justify-between mb-6">
    <h2 className="text-[22px] font-bold text-gray-700">
      Sales Details
    </h2>

    <select
      value={month}
      onChange={(e) => setMonth(e.target.value)}
      className="border border-gray-200 rounded-md px-3 py-1 text-sm"
    >
      <option>January</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>October</option>
      <option>September</option>
      <option>August</option>
    </select>
  </div>

  <div className="w-full h-[280px] md:h-[320px] lg:h-[350px]">
    <Line data={data} options={options} />
  </div>

</div>
  );
}