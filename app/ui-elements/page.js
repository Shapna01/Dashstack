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

  const bars = [40, 70, 55, 80, 65, 50, 90];

  return (
    <div >

      <div className="flex justify-between items-center mb-6">

  <h1 className="text-2xl font-bold">UI Elements</h1>

  <div className="relative">

    <div
      onClick={() => setOpen(!open)}
      className="flex items-center bg-white border rounded-lg w-[350px] h-[45px] cursor-pointer overflow-hidden text-sm"
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
     
     
  <div className="bg-white rounded-xl shadow-sm p-6 w-full h-[318px] ">
  <h2 className="font-semibold text-[22px] mb-16">Bar Chart</h2>

{(chartType === "bar" || chartType === "all") && (

  <div className="flex items-end gap-35 w-[600px] h-[140px] ">

    <div className="flex items-end gap-3">
      {[80,40,30,70,55,35,45].map((h,i)=>(
        <div key={i} className="w-2 h-32 bg-blue-200 rounded-full flex items-end">
          <div
            className="w-full bg-blue-500 rounded-full"
            style={{height:`${h}%`}}
          />
        </div>
      ))}
    </div>


    <div className="flex items-end gap-3">
      {[20,30,25,35,28,22,27].map((h,i)=>(
        <div key={i} className="w-2 h-32 bg-gray-200 rounded-full flex items-end gap-4">
          <div
            className="w-full bg-teal-500 rounded-full"
            style={{height:`${h}%`}}
          />
        </div>
      ))}
    </div>


    <div className="flex items-end gap-3">
      {[40,60,50,70,45,55,65].map((h,i)=>(
        <div key={i} className="flex gap-4 items-end">
          
          <div className="w-2 h-32 bg-blue-200 rounded-full flex items-end">
            <div
              className="w-full bg-blue-600 rounded-full"
              style={{height:`${h}%`}}
            />
          </div>

          <div className="w-2 h-32 bg-orange-200 rounded-full flex items-end">
            <div
              className="w-full bg-orange-500 rounded-full"
              style={{height:`${h+10}%`}}
            />
          </div>

        </div>
      ))}
    </div>
     
     <div className="flex items-end gap-3">
      {[25,30,28,35,40,32,38].map((h,i)=>(
        <div key={i} className="w-2 h-32 bg-pink-200 rounded-full flex gap-4 items-end">
          <div
            className="w-full bg-pink-500 rounded-full"
            style={{height:`${h}%`}}
          />
        </div>
      ))}
    </div>

  </div>)}
</div>
<br />

      {(chartType === "pie" || chartType === "all") && (

      <div className="bg-white rounded-xl shadow-sm p-6 w-full h-[318px]">
        <h2 className="font-semibold text-[22px] mb-16">Pie Chart</h2>

        <div className="flex justify-between">

          {pieCharts.map((chart, i) => (
            <div
              key={i}
              className="w-[155px] h-[155px] rounded-full"
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
 
      <div className="bg-white rounded-xl shadow-sm p-6 w-full h-[318px]">

        <h2 className="font-semibold text-[22px] mb-16">Donut Chart</h2>

        <div className="flex justify-between">

          {donutCharts.map((chart, i) => (
            <div
              key={i}
              className="relative w-[156px] h-[156px] rounded-full"
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