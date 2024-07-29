import React from "react";
import ScreenCapture from "../../components/ScreenCapture";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function OQForm() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div>
        <div className="px-16 py-12 pt-2 bg-gray-300 min-h-screen">
          <h6 className="text-3xl pt-12 px-16 font-bold bg-white rounded-t-lg text-orange-600">
            Create new OQ
          </h6>
          <p className="text-xl pt-12 px-16 font-bold bg-white rounded-t-lg text-orange-400">
            Details of the Test Scenario, Case and Test results:
          </p>
          <div className="px-16 py-12 bg-white shadow-lg rounded-b-lg flex gap-4 flex-wrap justify-between">
            <div className="w-5/12">
              <label htmlFor="initiatorName" className="mr-2 w-1/4">
                System Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>
            <div className="w-5/12">
              <label htmlFor="initiatorName" className="mr-2 w-1/4">
                Document No.
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>
            <div className="w-5/12">
              <label htmlFor="initiatorName" className="mr-2 w-1/4">
                Document Title
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>
            <div className="w-5/12">
              <label htmlFor="initiatorName" className="mr-2 w-1/4">
                Test Description
              </label>
              <textarea className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0" />
            </div>
            <div className="w-5/12">
              <label htmlFor="initiatorName" className="mr-2 w-1/4">
                Section 2:- Test Prerequisites
              </label>
              <textarea className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0" />
            </div>
            <div className="w-5/12">
              <label htmlFor="initiatorName" className="mr-2 w-1/4">
                Test Data Set up
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>
            <div className="w-5/12">
              <label htmlFor="initiatorName" className="mr-2 w-1/4">
                Examples
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>
            <div id="buttonDiv" className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-green-800 text-white px-6 py-4 rounded-lg focus:outline-none hover:bg-green-600 transition duration-150 ease-in-out flex items-center w-1/4 justify-center"
                onClick={() => navigate("/Oq-Steps")}
              >
                Start OQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
