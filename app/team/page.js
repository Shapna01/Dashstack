"use client";

import { useState } from "react";
import Link from "next/link";
export default function Team() {

  const [members] = useState([
    {
      id:1,
      name:"Jason Price",
      role:"Admin",
      email:"janick_parisian@yahoo.com",
      image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      id:2,
      name:"Jukkoe Sisao",
      role:"CEO",
      email:"sibyl_kozey@gmail.com",
      image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      id:3,
      name:"Harriet King",
      role:"CTO",
      email:"nadia_block@hotmail.com",
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      id:4,
      name:"Lenora Benson",
      role:"Lead",
      email:"feil.wallace@kunde.us",
      image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    },
    {
      id:5,
      name:"Olivia Reese",
      role:"Strategist",
      email:"kemmer.hattie@cremin.us",
      image:"https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
    },
    {
      id:6,
      name:"Bertha Valdez",
      role:"CEO",
      email:"loraine.koelpin@tromp.io",
      image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
    },
    {
      id:7,
      name:"Harriet Payne",
      role:"Digital Marketer",
      email:"nannie.west@estrella.tv",
      image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
    },
    {
      id:8,
      name:"George Bryant",
      role:"Social Media",
      email:"delmer.kling@gmail.com",
      image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    },
    {
      id:9,
      name:"Lily French",
      role:"Strategist",
      email:"lucienne.herman@hotmail.com",
      image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    },
    {
      id:10,
      name:"Howard Adkins",
      role:"CEO",
      email:"wiegan.leone@herman.us",
      image:"https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    {
      id:11,
      name:"Earl Bowman",
      role:"Digital Marketer",
      email:"waino.altenwerth@nicolette.tv",
      image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    },
    {
      id:12,
      name:"Patrick Padilla",
      role:"Social Media",
      email:"octavia.nienow@gleichner.net",
      image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    }
  ]);

  return (
    <div >

        <div className="w-[1190px]  ">


        <div className="flex justify-between items-center mb-8">

  <h1 className="text-2xl font-bold">Team</h1>

  <Link href="/team/add-member">
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
      Add New Member
    </button>
  </Link>

</div>

        <div
         className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        

          {members.map((member) => (

            <div
              key={member.id}
              className="bg-white rounded-xl shadow flex flex-col items-center justify-center text-center p-6"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-[110px] h-[110px] rounded-full object-cover mb-3"
              />

              <h2 className="font-semibold">{member.name}</h2>

              <p className="text-gray-500 text-sm">{member.role}</p>

              <p className="text-gray-400 text-sm">{member.email}</p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}