"use client";

export default function AddContact() {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen p-10">

      <div className="w-[1140px]">

        <h1 className="text-2xl font-bold mb-6">
          Add New Contact
        </h1>

        <div className="bg-white rounded-xl shadow p-10">

          <div className="flex flex-col items-center mb-10">

            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-xl">
              📷
            </div>

            <p className="text-blue-500 mt-2 cursor-pointer">
              Edit Photo
            </p>

          </div>


          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-500">First Name</label>
              <input
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
                placeholder="Kevin"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Last Name</label>
              <input
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
                placeholder="Fleming"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Your Email</label>
              <input
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Phone Number</label>
              <input
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
                placeholder="546-933-2772"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Date of Birth</label>
              <input
                type="date"
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Gender</label>

              <select className="w-full border rounded-lg p-3 mt-1 bg-gray-50">
                <option>Male</option>
                <option>Female</option>
              </select>

            </div>

          </div>


          <div className="flex justify-center mt-10">

            <button className="bg-blue-600 text-white px-10 py-3 rounded-lg">
              Add Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}