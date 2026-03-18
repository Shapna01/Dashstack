"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";import { usePathname } from "next/navigation";
import { FiSearch, FiBell, FiChevronDown, FiMenu } from "react-icons/fi";

export default function ({ setIsOpen }) {
const [highlight, setHighlight] = useState(false);

const searchRef = useRef(null);
const pathname = usePathname();
useEffect(() => {
  if (pathname === "/dashboard") {
    setTimeout(() => {
      searchRef.current?.focus();
    }, 100);
  }
}, [pathname]);

useEffect(() => {
  const handleKey = (e) => {
    if (e.key === "/") {
      e.preventDefault();
      searchRef.current?.focus();
    }
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, []);


  return (
    <div className="w-full h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-8">
      <button
  onClick={() => setIsOpen(true)}
  className="lg:hidden text-[22px] text-gray-700 mr-2"
>
  <FiMenu />
</button>

      <div className="relative w-[160px] sm:w-[250px] md:w-[320px] lg:w-[388px] h-[38px]">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" />
        <input
          onFocus={() => {
          setHighlight(true);
          setTimeout(() => setHighlight(false), 60000);
          }}
          ref={searchRef}
          type="text"
          placeholder="Search..."
          className={`w-full h-full pl-10 pr-4 rounded-full bg-[#F5F6FA] text-sm outline-none
          ${highlight ? "border-2 border-blue-400" : "border border-transparent"}`}
        />
      </div>

      <div className="flex items-center gap-6">

        <div className="relative cursor-pointer">
          <FiBell className="text-gray-600 text-[20px]" />

          <span className="absolute -top-2 -right-2 w-[18px] h-[18px] bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-semibold">
            6
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 cursor-pointer">
          <Image
            src="/flags/us.png"
            alt="English"
            width={24}
            height={16}
          />
          <span className="text-sm text-gray-700">English</span>
          <FiChevronDown className="text-gray-500 text-[16px]" />
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/avatar.png"
            alt="User"
            width={38}
            height={38}
            className="rounded-full"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-gray-900">
              Moni Ray
            </span>
            <span className="text-xs text-gray-500">
              Admin
            </span>
          </div>

          <FiChevronDown className="text-gray-500 text-[16px]" />
        </div>

      </div>
    </div>
  );
}