"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if(data.token){
      localStorage.setItem("token",data.token);
      window.location.href="/dashboard";
    }else{
      alert(data.message);
    }
  };

  return(

    <div className="min-h-screen flex items-center justify-center bg-[#4880FF]">

  <div className="bg-white w-full max-w-[420px] p-10 rounded-xl shadow-lg">


        <h2 className="text-2xl font-bold text-center mb-2">
          Login to Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
  Please enter your email and password to continue
</p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded-lg"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />

          <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded-lg"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />

          <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
           Sign in
          </button>

          <p className="text-center text-sm">
            Don't have account?{" "}
            <Link href="/register" className="text-blue-500">
              Register
            </Link>
          </p>

        </form>

      </div>

    </div>

  );
}