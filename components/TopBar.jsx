"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FiSearch, FiBell, FiChevronDown, FiMenu } from "react-icons/fi";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../app/context/ThemeContext";
export default function ({ setIsOpen }) {
const [highlight, setHighlight] = useState(false);
const { theme, toggleTheme } = useTheme();
const pathname = usePathname();
const isCalendar = pathname === "/calendar";
const searchRef = useRef(null);


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
<div
  className={`w-full h-[70px] border-b flex items-center justify-between px-8
  ${
    isCalendar
      ? "bg-white border-gray-200"
      : "bg-white dark:bg-[#1e293b] border-gray-200 dark:border-gray-700"
  }`}
>      <button
  onClick={() => setIsOpen(true)}
  className="lg:hidden text-[22px] text-gray-700 dark:text-gray-300 mr-2"
>
  <FiMenu />

</button>

      <div className="relative w-[160px] sm:w-[250px] md:w-[320px] lg:w-[388px] h-[38px]">
        <FiSearch
  className={`absolute left-3 top-1/2 -translate-y-1/2 text-[18px] ${
    isCalendar ? "text-gray-500" : "text-gray-400"
  }`}
/>
        <input
          onFocus={() => {
          setHighlight(true);
          setTimeout(() => setHighlight(false), 60000);
          }}
          ref={searchRef}
          type="text"
          placeholder="Search..."
          className={`w-full h-full pl-10 pr-4 rounded-full text-sm outline-none
${
  isCalendar
    ? "bg-[#F5F6FA] text-black"
    : "bg-[#F5F6FA] dark:bg-[#334155] dark:text-white"
}
${highlight ? "border-2 border-blue-400" : "border border-transparent"}`}
        />
      </div>
      

      <div className="flex items-center gap-6">
      <div
  onClick={!isCalendar ? toggleTheme : undefined}
  className={`w-14 h-7 flex items-center rounded-full p-1 transition-all
  ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}
  ${isCalendar ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `}
>
  <div
    className={`w-5 h-5 flex items-center justify-center rounded-full bg-white shadow-md transform transition-all
    ${theme === "dark" ? "translate-x-7" : "translate-x-0"}`}
  >
    {theme === "dark" ? <Moon size={12} /> : <Sun size={12} />}
  </div>
</div>
        <div className="relative cursor-pointer">
          <FiBell className="text-gray-600 dark:text-gray-300 text-[20px]" />

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
          <span className="text-sm text-gray-700 dark:text-gray-300">English</span>
          <FiChevronDown className="text-gray-500 dark:text-gray-400 text-[16px]" />
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
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Moni Ray
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Admin
            </span>
          </div>

          <FiChevronDown className="text-gray-500 dark:text-gray-400 text-[16px]" />
        </div>

      </div>
    </div>
  );
}