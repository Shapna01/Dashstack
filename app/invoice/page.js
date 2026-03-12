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

    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">Invoice</h2>

        

      </div>


      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between mb-8">

          <div>
            <h3 className="font-semibold text-gray-600 mb-2">Invoice From</h3>
            <p className="text-sm text-gray-500">9694 Krajcik Locks Suite 635</p>
            <p className="text-sm text-gray-500">Brookview</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-600 mb-2">Invoice To</h3>
            <p className="text-sm text-gray-500">Virginia Walker</p>
            <p className="text-sm text-gray-500">Austin Miller</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-600 mb-2">Invoice Details</h3>
            <p className="text-sm text-gray-500">Invoice Date : 12 Nov 2026</p>
            <p className="text-sm text-gray-500">Due Date : 25 Dec 2026</p>
          </div>

        </div>


        <div className="bg-white shadow rounded-lg overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-gray-100 text-gray-600">
              <tr className="text-left">
                <th className="py-5 px-4">SERIAL</th>
                <th className="py-5 px-4">PRODUCT</th>
                <th className="py-5 px-4">QTY</th>
                <th className="py-5 px-4">BASE COST</th>
                <th className="py-5 px-4">TOTAL COST</th>
              </tr>
            </thead>

            <tbody>

              {orders.map((order,index)=>{

                const rowTotal = order.price * order.quantity;

                return(

                  <tr
                    key={order.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >

                    <td className="py-5 px-4">000{index+1}</td>

                    <td className="py-5 px-4 font-medium">
                      {order.name}
                    </td>

                    <td className="py-5 px-4">
                      {order.quantity}
                    </td>

                    <td className="py-5 px-4">
                      ${order.price}
                    </td>

                    <td className="py-5 px-4 font-semibold">
                      ${rowTotal}
                    </td>

                  </tr>

                )

              })}

            </tbody>

          </table>

        </div>


        <div className="flex justify-end mt-6">

          <div className="text-right">

            

            <p className="text-xl font-bold mt-2">
              Total : ${total}
            </p>

          </div>

        </div>
        <br />
         <div className="flex justify-end gap-3 mb-6">


          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium"
          >
            🖨 
          </button>

          <button
            onClick={sendInvoice}
            className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg text-sm font-medium"
          >
            📤 Send 
          </button>

        </div>
      </div>

    </div>

  );

}

