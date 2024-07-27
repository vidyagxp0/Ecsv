import React from "react";
import ScreenCapture from "../../components/ScreenCapture";
import Header from "../../components/Header";

export default function OQForm() {
  return (
    <>
      <Header />
      <div>
        <div className="px-16 py-12 pt-2 bg-gray-300 min-h-screen">
          <h6 className="text-2xl pt-12 px-16 font-bold bg-white rounded-t-lg text-orange-600">
            Create new OQ
          </h6>
          <div className="px-16 py-12 bg-white shadow-lg rounded-b-lg flex gap-4 flex-wrap justify-between">
            <div className="w-full">
              <ScreenCapture />
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-green-800 text-white px-6 py-4 rounded-lg focus:outline-none hover:bg-green-600 transition duration-150 ease-in-out flex items-center w-1/4 justify-center"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
