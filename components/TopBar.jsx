"use client";

import Image from "next/image";

export default function Topbar() {
  return (
    <div className="h-[70px] bg-white border-b border-gray-100 flex items-center px-6">

      <div className="flex items-center">
        <div className="relative w-[388px] h-[38px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full pl-10 pr-4 rounded-[19px] border-[0.6px] border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-[#F5F6FA]"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[16px] opacity-[0.1732]">
            🔍
          </span>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">

        <button className="relative w-[18px] h-[18px] p-0 rounded-lg hover:bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400 text-[18px] opacity-[0.1732]">🔔</span>
          <span className="absolute -top-1 -right-1 min-w-[16px] h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center px-1">
            3
          </span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100 text-[14px] font-semibold leading-[100%] border border-gray-100">
          <Image
            src="/flags/us.png"
            alt=""
            width={20}
            height={19}
            className="rounded-sm"
          />
          English
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/avatar.png"
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-gray-900 font-bold text-[14px] leading-[100%]">
              Moni Ray
            </span>
            <span className="text-gray-500 text-xs leading-[100%]">Admin</span>
          </div>
        </div>

      </div>
    </div>
  );
}