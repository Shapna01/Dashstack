"use client";

import "./globals.css";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { Nunito_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400","600","700","800"]
});

export default function RootLayout({ children }) {

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isAuthPage =
    pathname === "/login" || pathname === "/register";
  const isCalendar = pathname === "/calendar";
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-white dark:bg-[#0f172a]`}>
        <ThemeProvider>

        {isAuthPage ? (

          <div className="w-full min-h-screen">
            {children}
          </div>

        ) : (

          <div
  className={`flex w-full min-h-screen transition-colors duration-300
  ${
    isCalendar
      ? "bg-[#F5F6FA]"   
      : "bg-[#F5F6FA] dark:bg-[#0f172a]"
  }`}
>

            {isOpen && (
  <div
    className="fixed inset-0 bg-black/30 z-40 lg:hidden"
    onClick={() => setIsOpen(false)}
  />
)}

<SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

<div className="flex flex-col flex-1 min-w-0 lg:ml-[240px]">

  <TopBar setIsOpen={setIsOpen} />

  <main className="flex-1 p-4 md:p-6 overflow-y-auto min-w-0">
    {children}
  </main>

</div>

          </div>

        )}
      </ThemeProvider>
      </body>
    </html>
  );
}