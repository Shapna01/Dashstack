"use client";

import { useEffect, useState } from "react";

export default function InvoicePage() {

  const [orders,setOrders] = useState([]);

  useEffect(()=>{

    const fetchOrders = async () => {
      try{
        const res = await fetch("/api/orders");

        if(!res.ok){
          throw new Error("Failed to fetch orders");
        }

        const data = await res.json();
        setOrders(data);

      }catch(error){
        console.error("Error fetching orders:",error);
        setOrders([]);
      }
    };

    fetchOrders();

  },[]);
  
  const sendInvoice = async () => {

  const res = await fetch("/api/send-invoice", {
    method: "POST",
  });

  if(res.ok){
    alert("Invoice Sent Successfully");
  }

};

  const total = orders.reduce((sum,order)=>{
    return sum + (order.price * order.quantity);
  },0);


  return(

    <div className="w-full max-w-[1200px] mx-auto px-4">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Invoice</h2>

        

      </div>


      <div className="bg-white dark:bg-[#1e293b] shadow rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div>
            <h3 className="font-semibold text-gray-600 dark:text-gray-300 mb-2 ">Invoice From</h3>
            <p className="text-sm text-gray-400">9694 Krajcik Locks Suite 635</p>
            <p className="text-sm text-gray-400">Brookview</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-600 dark:text-gray-300  mb-2">Invoice To</h3>
            <p className="text-sm text-gray-400">Virginia Walker</p>
            <p className="text-sm text-gray-400">Austin Miller</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-600 dark:text-gray-300   mb-2">Invoice Details</h3>
            <p className="text-sm text-gray-400">Invoice Date : 12 Nov 2026</p>
            <p className="text-sm text-gray-400">Due Date : 25 Dec 2026</p>
          </div>

        </div>


        <div className="bg-white dark:bg-[#1e293b] shadow rounded-lg overflow-x-autoborder border-gray-200 dark:border-gray-700">

          <table className="w-full min-w-[650px] text-sm">

            <thead className="bg-gray-100 dark:bg-[#334155] text-gray-600 dark:text-gray-300">
              <tr className="text-left">
                <th className="py-5 px-4">SERIAL</th>
                <th className="py-5 px-4">PRODUCT</th>
                <th className="py-5 px-4">QTY</th>
                <th className="py-5 px-4">BASE COST</th>
                <th className="py-5 px-4">TOTAL COST</th>
              </tr>
            </thead>

            <tbody>

{orders.length === 0 ? (

  <tr>
    <td colSpan="5" className="text-center py-10 text-gray-400 dark:text-gray-500">
      No orders found
    </td>
  </tr>

) : (

  orders.map((order,index)=>{

    const rowTotal = order.price * order.quantity;

    return(

      <tr
        key={order.id}
        className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e293b] hover:bg-gray-50 dark:hover:bg-[#2a3a4f] transition"
      >

        <td className="py-5 px-4 font-medium text-gray-800 dark:text-white">000{index+1}</td>

        <td className="py-5 px-4 font-medium text-gray-800 dark:text-white">
          {order.name}
        </td>

        <td className="py-5 px-4 font-medium text-gray-800 dark:text-white">
          {order.quantity}
        </td>

        <td className="py-5 px-4 font-medium text-gray-800 dark:text-white">
          ${order.price}
        </td>

        <td className="py-5 px-4 font-medium text-gray-800 dark:text-white">
          ${rowTotal}
        </td>

      </tr>

    )

  })

)}

</tbody>
            

          </table>

        </div>


        <div className="flex justify-end mt-6 text-right">

          <div className="text-right">

            

            <p className="text-xl font-bold mt-2 text-gray-800 dark:text-white">
              Total : ${total}
            </p>

          </div>

        </div>
        <br />
         <div className="flex flex-wrap justify-end gap-3 mb-6">


          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#334155] text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-[#2a3a4f] transition"
          >
            🖨 
          </button>

          <button
            onClick={sendInvoice}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition"
          >
            📤 Send 
          </button>

        </div>
      </div>

    </div>

  );

}

