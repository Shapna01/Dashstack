"use client";

import "./globals.css";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { Nunito_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400","600","700","800"]
});

export default function RootLayout({ children }) {

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isAuthPage =
    pathname === "/login" || pathname === "/register";

  return (
    <html lang="en">
      <body className={nunito.className}>

        {isAuthPage ? (

          <div className="w-full min-h-screen">
            {children}
          </div>

        ) : (

          <div className="flex w-full min-h-screen bg-[#F5F6FA]">

            {isOpen && (
  <div
    className="fixed inset-0 bg-black/30 z-40 lg:hidden"
    onClick={() => setIsOpen(false)}
  />
)}

<SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="flex flex-col flex-1 min-w-0">

              <TopBar setIsOpen={setIsOpen} />

              <main className="flex-1 p-4 md:p-6 overflow-y-auto min-w-0">
                {children}
              </main>

            </div>

          </div>

        )}

      </body>
    </html>
  );
}