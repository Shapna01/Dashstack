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
    <div >

      <div className="w-[1190px] ">

        <h1 className="text-2xl font-semibold mb-6">
          Add Team Member
        </h1>

        <div className="bg-white rounded-xl shadow p-12">

          <div className="flex flex-col items-center mb-10">

            <div className="w-[80px] h-[80px] bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              📷
            </div>

            <p className="text-blue-500 mt-2 cursor-pointer">
              Upload Photo
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-2 gap-6 mb-6">

              <div>
                <label className="text-sm text-gray-600">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">

              <div>
                <label className="text-sm text-gray-600">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">

              <div>
                <label className="text-sm text-gray-600">
                  Position
                </label>

                <input
                  type="text"
                  name="position"
                  placeholder="CEO"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Gender
                </label>

                <select
                  name="gender"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

            </div>

            <div className="flex justify-center">

              <button
                type="submit"
                className="bg-blue-500 text-white px-10 py-3 rounded-lg hover:bg-blue-600"
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