import "./globals.css";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400","600","700","800"]
});

export const metadata = {
  title: "DashStack",
  description: "Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>

        <div className="flex min-h-screen bg-[#F5F6FA]">

          <SideBar />

          <div className="flex flex-col flex-1">

            <TopBar />

            <main className="flex-1 p-6">
              {children}
            </main>

          </div>

        </div>

      </body>
    </html>
  );
}