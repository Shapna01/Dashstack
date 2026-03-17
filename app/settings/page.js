"use client";

export default function Settings() {
  return (
    <div>

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
          General Settings
        </h1>

        <div className="bg-white rounded-xl shadow p-6 sm:p-8 md:p-10">

          <div className="flex flex-col items-center mb-10">

            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
              📷
            </div>

            <p className="text-blue-500 mt-2 cursor-pointer">
              Upload Logo
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-500">
                Site Name
              </label>

              <input
                type="text"
                defaultValue="Bright Web"
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
              />
            </div>


            <div>
              <label className="text-sm text-gray-500">
                Copy Right
              </label>

              <input
                type="text"
                defaultValue="All rights Reserved@brightweb"
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
              />
            </div>


            <div>
              <label className="text-sm text-gray-500">
                SEO Title
              </label>

              <input
                type="text"
                defaultValue="Bright web is a hybrid dashboard"
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
              />
            </div>


            <div>
              <label className="text-sm text-gray-500">
                SEO Description
              </label>

              <textarea
                defaultValue="Bright web is a hybrid dashboard"
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50 h-[100px] sm:h-[120px]"
              />
            </div>


            <div>
              <label className="text-sm text-gray-500">
                SEO Keywords
              </label>

              <input
                type="text"
                defaultValue="CEO"
                className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
              />
            </div>

          </div>


          <div className="flex justify-center sm:justify-end mt-6">

            <button className="bg-blue-500 text-white px-8 sm:px-12 py-3 rounded-lg hover:bg-blue-600 transition w-full sm:w-auto">
              Save
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}