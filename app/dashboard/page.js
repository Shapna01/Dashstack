"use client";

import { useEffect, useState } from "react";
import StatCard from "../../components/StatCard";
import SalesChart from "../../components/SalesChart";
import DealsTable from "../../components/DealsTable";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalSales: 0,
    totalPending: 0
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/dashboard"); 
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Failed to fetch dashboard stats:", err);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F6FA] p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <StatCard title="Total Users" value={stats.totalUsers} />
        <StatCard title="Total Orders" value={stats.totalOrders} />
        <StatCard title="Total Sales" value={`$${stats.totalSales}`} />
        <StatCard title="Total Pending" value={stats.totalPending} />
      </div>

      <div className="mb-6">
        <SalesChart />
      </div>

      <div>
        <DealsTable />
      </div>
    </div>
  );
}