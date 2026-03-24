"use client";

import { FiMail } from "react-icons/fi";
import Link from "next/link";
export default function ContactPage() {

const contacts = [
{
   id:1,
   name:"Jason Price",
   email:"jasonprice@yahoo.com",
   image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e" 
},
{
   id:2,
   name:"Duane Dean",
   email:"duanedean@gmail.com",
   image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
},
{
   id:3,
   name:"Jonathan Barker",
   email:"jonathan@gmail.com",
   image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330"
},
{
   id:4,
   name:"Rosie Glover",
   email:"rosie@gmail.com",
   image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb"
},
{
   id:5,
   name:"Patrick Greer",
   email:"patrick@gmail.com",
   
   image:"https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
},
{
   id:6,
   name:"Darrell Ortega",
   email:"darrell@gmail.com",
   image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
}
];

return (

    <div className="w-full max-w-[1300px] mx-auto px-4">

       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

         <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Contact
         </h2>

         <Link href="/contact/add">
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
    Add New Contact
  </button>
</Link>

        </div>


       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {contacts.map((contact)=>(

       <div
         key={contact.id}
          className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm overflow-hidden text-center border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
       >

        <img
           src={contact.image}
           alt={contact.name}
           className="w-full h-40 md:h-48 object-cover object-[center_30%] rounded-t-xl"
        />

<div className="p-4">
<h3 className="font-semibold text-gray-800 dark:text-white">
{contact.name}
</h3>



<p className="text-gray-500 dark:text-gray-300 text-sm mb-3">
{contact.email}
</p>

<button className="border rounded-lg px-4 py-2 text-sm flex items-center gap-2 mx-auto border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#2a3a4f] transition">
<FiMail/>
Message
</button>

</div>

</div>

))}

</div>

</div>

);
}