export async function GET() {
  const data = {
    totalUsers: 1240,
    totalOrders: 856,
    totalSales: 15420,
    totalPending: 23
  };

  return Response.json(data);
}