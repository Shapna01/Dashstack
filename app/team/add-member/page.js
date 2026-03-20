"use client";

import { useState } from "react";

export default function AddMember() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    gender: ""
  });

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Member Added!");
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0f172a] min-h-screen py-6" >

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
          Add Team Member
        </h1>

        <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow p-6 sm:p-8 md:p-10 border border-gray-200 dark:border-gray-700 transition-colors duration-200">

          <div className="flex flex-col items-center mb-10">

            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200  dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300">
              📷
            </div>

            <p className="text-blue-500 mt-2 cursor-pointer hover:underline">
              Upload Photo
            </p>

          </div>

          <form onSubmit={handleSubmit}>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-300">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1 bg-white dark:bg-[#0f172a] border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-300">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1 bg-white dark:bg-[#0f172a] border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1 bg-white dark:bg-[#0f172a] border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-300">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1 bg-white dark:bg-[#0f172a] border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-300">
                  Position
                </label>

                <input
                  type="text"
                  name="position"
                  placeholder="CEO"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1 bg-white dark:bg-[#0f172a] border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-300">
                  Gender
                </label>

                <select
                  name="gender"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1 bg-white dark:bg-[#0f172a] border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

            </div>

            <div className="flex justify-center sm:justify-end">

              <button
                type="submit"
                className="bg-blue-500 text-white px-10 py-3 rounded-lg hover:bg-blue-600 active:scale-95 transition-all duration-150 w-full sm:w-auto"
              >
                Add Now
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}