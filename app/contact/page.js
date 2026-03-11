"use client";

import { FiMail } from "react-icons/fi";

export default function ContactPage() {

const contacts = [
{
   id:1,
   name:"Jason Price",
   email:"jasonprice@yahoo.com",
   image:"https://randomuser.me/api/portraits/men/32.jpg"
},
{
   id:2,
   name:"Duane Dean",
   email:"duanedean@gmail.com",
   image:"https://randomuser.me/api/portraits/men/45.jpg"
},
{
   id:3,
   name:"Jonathan Barker",
   email:"jonathan@gmail.com",
   image:"https://randomuser.me/api/portraits/men/12.jpg"
},
{
   id:4,
   name:"Rosie Glover",
   email:"rosie@gmail.com",
   image:"https://randomuser.me/api/portraits/women/44.jpg"
},
{
   id:5,
   name:"Patrick Greer",
   email:"patrick@gmail.com",
   image:"https://randomuser.me/api/portraits/men/36.jpg"
},
{
   id:6,
   name:"Darrell Ortega",
   email:"darrell@gmail.com",
   image:"https://randomuser.me/api/portraits/men/55.jpg"
}
];

return (

     <div className="p-6">

       <div className="flex justify-between items-center mb-6">

         <h2 className="text-2xl font-bold">
          Contact
         </h2>

         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
           Add New Contact
         </button>

        </div>


       <div className="grid grid-cols-3 gap-6">

          {contacts.map((contact)=>(

       <div
         key={contact.id}
          className="bg-white rounded-xl shadow-sm overflow-hidden text-center"
       >

        <img
           src={contact.image}
           className="w-full h-48 object-cover"
        />

<div className="p-4">

<h3 className="font-semibold">
{contact.name}
</h3>

<p className="text-gray-500 text-sm mb-3">
{contact.email}
</p>

<button className="border rounded-lg px-4 py-2 text-sm flex items-center gap-2 mx-auto hover:bg-gray-100">
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