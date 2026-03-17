"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
      setLoading(true);

    const res = await fetch("/api/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await res.json();
      setLoading(false);

    alert(data.message);
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-blue-500 px-4">

      <div className="bg-white w-full max-w-[420px] p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />

          <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          
          <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />

          <button
          type="submit"
            disabled={loading}

          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition font-medium"
          >
          {loading ? "Creating..." : "Sign up"}
          </button>

          <p className="text-center text-sm">
            Already have account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>

        </form>

      </div>

    </div>

  );
}