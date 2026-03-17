"use client";
import React from "react";
export default function UIElementsPage() {
const [chartType, setChartType] = React.useState("all");
const [open, setOpen] = React.useState(false);

  const pieCharts = [
    { value: 25, color: "#4F46E5" },
    { value: 30, color: "#A855F7" },
    { value: 40, color: "#FB923C" },
    { value: 35, color: "#3B82F6" },
  ];

  const donutCharts = [
    { value: 70, color: "#14B8A6" },
    { value: 65, color: "#3B82F6" },
    { value: 60, color: "#F59E0B" },
    { value: 75, color: "#10B981" },
  ];
  
  const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-pink-500"
];
  const bars = [40, 70, 55, 80, 65, 50, 90];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">

      <div className="flex justify-between items-center mb-6">

  <h1 className="text-2xl font-bold">UI Elements</h1>

  <div className="relative">

    <div
      onClick={() => setOpen(!open)}
      className="flex items-center bg-white border rounded-lg w-full sm:w-[350px] h-[45px] cursor-pointer overflow-hidden text-sm"
    >

      <div className="w-[70px] flex justify-center items-center border-r">
        🔎
      </div>

      <div className="px-5 text-gray-600 border-r">
        Filter By
      </div>

      <div className="flex items-center px-6 gap-2 font-medium">
        {chartType === "all"
          ? "Charts"
          : chartType === "bar"
          ? "Bar Chart"
          : chartType === "pie"
          ? "Pie Chart"
          : "Donut Chart"}
        ▼
      </div>

    </div>
  {open && (
    <div className="absolute right-0 mt-2 w-[150px] bg-white border rounded-lg shadow-md">

      <div
        className="p-3 hover:bg-gray-100 cursor-pointer"
        onClick={() => { setChartType("bar"); setOpen(false); }}
      >
        Bar Chart
      </div>

      <div
        className="p-3 hover:bg-gray-100 cursor-pointer"
        onClick={() => { setChartType("pie"); setOpen(false); }}
      >
        Pie Chart
      </div>

      <div
        className="p-3 hover:bg-gray-100 cursor-pointer"
        onClick={() => { setChartType("donut"); setOpen(false); }}
      >
        Donut Chart
      </div>

      <div
        className="p-3 hover:bg-gray-100 cursor-pointer"
        onClick={() => { setChartType("all"); setOpen(false); }}
      >
        All Charts
      </div>

    </div>
  )}

</div></div>
     
     
  <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 w-full h-auto min-h-[250px] sm:min-h-[318px] ">
  <h2 className="font-semibold text-[22px] mb-6 sm:mb-10">Bar Chart</h2>

{(chartType === "bar" || chartType === "all") && (

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">

    {[
      [80,40,30,70,55,35,45],
      [20,30,25,35,28,22,27],
      [40,60,50,70,45,55,65],
      [25,30,28,35,40,32,38]
    ].map((group, index) => (

      <div key={index} className="flex items-end gap-2 h-[140px]">

        {group.map((h, i) => (
          <div key={i} className="w-2 h-full bg-gray-200 rounded-full flex items-end">
            <div
              className={`w-full ${colors[index]} rounded-full`}
              style={{ height: `${h}%` }}
            />
          </div>
        ))}

      </div>

    ))}

  </div>

)}
</div>
<br />

      {(chartType === "pie" || chartType === "all") && (

      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 w-full sm:min-h-[318px]">
        <h2 className="font-semibold text-[22px] mb-6 sm:mb-10">Pie Chart</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center ">

          {pieCharts.map((chart, i) => (
            <div
              key={i}
              className="rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[155px] md:h-[155px]"
              style={{
                background: `conic-gradient(${chart.color} ${chart.value}%, #e5e7eb ${chart.value}% 100%)`,
              }}
            />
          ))}

        </div>
        
      </div>
    )}
       
<br />
      {(chartType === "donut" || chartType === "all") && (
 
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 w-full sm:min-h-[318px]">

        <h2 className="font-semibold text-[22px] mb-6 sm:mb-10">Donut Chart</h2>

        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">

          {donutCharts.map((chart, i) => (
            <div
              key={i}
              className="relative rounded-full w-[120px] h-[120px] md:w-[156px] md:h-[156px]"
              style={{
                background: `conic-gradient(${chart.color} ${chart.value}%, #e5e7eb ${chart.value}% 100%)`,
              }}
            >
              <div className="absolute inset-6 bg-white rounded-full"></div>
            </div>
          ))}

        </div>
      </div>
      )}
    </div>
  );
}