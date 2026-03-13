"use client";

import "./globals.css";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { Nunito_Sans } from "next/font/google";
import { usePathname } from "next/navigation";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400","600","700","800"]
});

export default function RootLayout({ children }) {

  const pathname = usePathname();

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


              <SideBar />

              <div className="flex flex-col flex-1">

                <TopBar />

                <main className="flex-1 p-6 overflow-y-auto">
                  {children}
                </main>

              </div>

            
          </div>

        )}

      </body>
    </html>
  );
}