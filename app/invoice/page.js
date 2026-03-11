"use client";

import { useEffect, useState } from "react";

export default function InvoicePage() {

  const [orders,setOrders] = useState([]);

  useEffect(()=>{

    fetch("/api/orders")
    .then(res=>res.json())
    .then(data=>setOrders(data));

  },[]);

  const total = orders.reduce((sum,order)=>{
    return sum + order.price * order.quantity;
  },0);

  return(

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">Invoice</h1>

      <table className="w-full border">

        <thead>
          <tr>
            <th>Serial</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>

        {orders.map((order,index)=>{

          const rowTotal = order.price * order.quantity;

          return(

          <tr key={order.id}>

            <td>{index+1}</td>
            <td>{order.name}</td>
            <td>{order.quantity}</td>
            <td>${order.price}</td>
            <td>${rowTotal}</td>

          </tr>

          )

        })}

        </tbody>

      </table>

      <h2 className="text-right mt-6 text-xl font-bold">
        Total : ${total}
      </h2>

    </div>

  );

}