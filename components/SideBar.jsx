"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Products", path: "/products" },
    { name: "Favorites", path: "/favorites" },
    { name: "Inbox", path: "/inbox" },
    { name: "Order Lists", path: "/orders" },
    { name: "Product Stock", path: "/stock" }
  ];

  const pages = [
    { name: "Pricing" },
    { name: "Calendar" },
    { name: "To-Do" },
    { name: "Contact" },
    { name: "Invoice" },
    { name: "UI Elements" },
    { name: "Team" },
    { name: "Table" }
  ];

  return (
    <div className="w-[240px] h-screen bg-white border-r border-[#F1F1F1] px-6 py-6 flex flex-col">

      <h1 className="text-[20px] font-extrabold leading-none text-[#202224] mb-10">
        DashStack
      </h1>

      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className={`flex items-center h-[44px] px-4 text-[14px] font-semibold rounded-lg ${
                pathname === item.path
                  ? "bg-blue-500 text-white"
                  : "text-[#202224] hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="border-t border-[#F1F1F1] my-6"></div>

      <p className="text-xs text-gray-400 mb-3">PAGES</p>

      <ul className="space-y-2">
        {pages.map((item) => (
          <li key={item.name}>
            <Link
              href="#"
              className="flex items-center h-[44px] px-4 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto">

        <div className="border-t border-[#F1F1F1] my-6"></div>

        <Link
          href="/settings"
          className="flex items-center h-[44px] px-4 text-[14px] text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          Settings
        </Link>

        <Link
          href="/logout"
          className="flex items-center h-[44px] px-4 text-[14px] text-red-500 hover:bg-red-50 rounded-lg"
        >
          Logout
        </Link>

      </div>

    </div>
  );
}