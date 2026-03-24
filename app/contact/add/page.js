"use client";

export default function AddContact() {
  return (
    <div className="w-full px-4">

      <div className="w-full max-w-[1190px] mx-auto">

        <h1 className="text-2xl font-bold mb-6  text-gray-800 dark:text-white">
          Add New Contact
        </h1>

        <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow p-5 md:p-10 border border-gray-200 dark:border-gray-700">

         <div className="flex flex-col items-center mb-8 md:mb-10">

            <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-[#334155] flex items-center justify-center text-xl text-gray-600 dark:text-gray-300">
              📷
            </div>

            <p className="text-blue-500 hover:text-blue-600 mt-2 cursor-pointer transition">
              Edit Photo
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-500">First Name</label>
              <input
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50 dark:bg-[#334155] text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Kevin"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Last Name</label>
              <input
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50 dark:bg-[#334155] text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Fleming"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Your Email</label>
              <input
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50 dark:bg-[#334155] text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Phone Number</label>
              <input
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50 dark:bg-[#334155] text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="546-933-2772"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Date of Birth</label>
              <input
                type="date"
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50 dark:bg-[#334155] text-gray-800 dark:text-white border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:[color-scheme:dark]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Gender</label>

              <select className="w-full border rounded-lg p-3 mt-1 bg-gray-50 dark:bg-[#334155] text-gray-800 dark:text-white border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Male</option>
                <option>Female</option>
              </select>

            </div>

          </div>


          <div className="flex justify-center mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg w-full md:w-auto transition">
              Add Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}