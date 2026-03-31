import StatCard from "../../components/StatCard";
import SalesChart from "../../components/SalesChart";
import DealsTable from "../../components/DealsTable";

export default async function Dashboard() {
  const res = await fetch("http://localhost:3000/api/dashboard", {
    cache: "no-store"
  });

  const stats = await res.json();

  return (
    <div className="w-full text-gray-800 dark:text-gray-200">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 place-items-center">
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