export default function DealsTable() {
  return (
    <div
      className="bg-white rounded-[14px] p-6"
      style={{
        width: "1138px",
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
          <tr className="border-b">
            <td className="py-4 flex items-center gap-3">
              <img
                src="/watch.png"
                className="w-8 h-8 rounded"
                alt="product"
              />
              Apple Watch
            </td>

            <td>New York</td>
            <td>12 Sep 2022 - 10:00 AM</td>
            <td>423</td>
            <td>$34,295</td>

            <td>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                Delivered
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}