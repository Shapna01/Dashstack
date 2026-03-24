"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

 const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  setLoading(false);

  if (res.ok && data.token) {
    localStorage.setItem("token", data.token);
    router.push("/dashboard");
  } else {
    alert(data.message || "Login failed");
  }
};


  
  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-[#0f172a] dark:to-[#020617] px-4 transition-colors duration-200">

  <div className="bg-white dark:bg-[#1e293b] w-full max-w-[420px] p-6 sm:p-8 md:p-10 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-200">


        <h2 className="text-xl sm:text-2xl font-bold text-center mb-2 text-gray-800 dark:text-white">
          Login to Account
        </h2>
        <p className="text-gray-500  dark:text-gray-400  text-center mb-6">
  Please enter your email and password to continue
</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2.5 rounded-lg bg-white dark:bg-[#0f172a] border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2.5 rounded-lg bg-white dark:bg-[#0f172a] border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <div className="flex justify-end text-sm">
           <a href="#" className="text-blue-500 hover:underline ">
           Forgot password?
          </a>
          </div>
          <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2.5 rounded-lg hover:bg-blue-600 active:scale-95 transition-all duration-150 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
          {loading ? "Signing in..." : "Sign in"}
          </button>

          <p  className="text-center text-sm text-gray-600 dark:text-gray-300">
            Don't have account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline ">
              Register
            </Link>
          </p>

        </form>

      </div>

    </div>

  );
}