import React, { useState } from "react";
import Header from "../components/Header";
import { IoSendOutline } from "react-icons/io5";
import { FcApprove } from "react-icons/fc";
import ScreenCapture from "../components/ScreenCapture";
import ProgressBar from "../components/ProgressBar";

export default function InititateTask() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [pdfName, setPdfName] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPdfName(file.name);
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  const openPdfInNewTab = () => {
    if (pdfUrl) {
      window.open(pdfUrl);
    }
  };
  return (
    <>
      <Header />
      <div className="px-32 py-12 bg-gray-300 min-h-screen">
        <h6 className="text-2xl font-bold text-orange-600">New Task Details</h6>
        <table className="divide-y min-w-full divide-y divide-gray-300 border border-gray-300 mt-4 ">
          <thead className="bg-gray-100">
            <tr className="bg-slate-600">
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300 w-1/4"
              >
                Initiator Activity
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
              >
                Reviewer Activity
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
              >
                Drafter Activity
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
              >
                Approver Activity
              </th>
            </tr>
          </thead>
          <tbody className=" divide-gray-200 bg-slate-100 text-zinc-600 py-2 px-4 ">
            <tr className="">
              <td className="border-r border-gray-300 " style={{ verticalAlign: "top" }}>
                <div className="py-2 px-4">
                  <label htmlFor="" className="mr-2 w-1/4">
                    Initiator Name
                  </label>
                  <input
                    disabled
                    type="text"
                    defaultValue="Gaurav Meena"
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
                  />
                  <label htmlFor="">Document Name</label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
                  />

                  <label htmlFor="">Document Description</label>
                  <textarea
                    rows="4"
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
                  ></textarea>
                  <div className="py-2 ">
                    <label className="w-1/2 mr-2">Upload Document</label>
                    <input
                      type="file"
                      accept=".pdf"
                      //   multiple
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 mt-0"
                      onChange={handleFileChange}
                    />
                  </div>
                  {pdfUrl && (
                    <iframe src={pdfUrl} width="100%" height="300px" style={{ border: "none" }} />
                  )}

                  <div>
                    <ScreenCapture />
                  </div>
                  <label htmlFor="" className="mr-2 w-1/4">
                    Choose Reviewer
                  </label>
                  <select className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0">
                    <option key={0} value="Reviewer 1">
                      Select
                    </option>
                    <option key={0} value="Reviewer 1">
                      Reviewer 1
                    </option>
                    <option key={1} value="Reviewer 2">
                      Reviewer 2
                    </option>
                    <option key={2} value="Reviewer 3">
                      Reviewer 3
                    </option>
                    <option key={3} value="Reviewer 4">
                      Reviewer 4
                    </option>
                    <option key={4} value="Reviewer 5">
                      Reviewer 5
                    </option>
                  </select>
                  <label htmlFor="" className="mr-2 w-1/4">
                    Choose Approver
                  </label>
                  <select className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0">
                    <option key={0} value="Reviewer 1">
                      Select
                    </option>
                    <option key={0} value="Reviewer 1">
                      Reviewer 1
                    </option>
                    <option key={1} value="Reviewer 2">
                      Reviewer 2
                    </option>
                    <option key={2} value="Reviewer 3">
                      Reviewer 3
                    </option>
                    <option key={3} value="Reviewer 4">
                      Reviewer 4
                    </option>
                    <option key={4} value="Reviewer 5">
                      Reviewer 5
                    </option>
                  </select>
                  <label htmlFor="" className="mr-2 w-1/4">
                    Choose Drafter
                  </label>
                  <select className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0">
                    <option key={0} value="Reviewer 1">
                      Select
                    </option>
                    <option key={0} value="Reviewer 1">
                      Reviewer 1
                    </option>
                    <option key={1} value="Reviewer 2">
                      Reviewer 2
                    </option>
                    <option key={2} value="Reviewer 3">
                      Reviewer 3
                    </option>
                    <option key={3} value="Reviewer 4">
                      Reviewer 4
                    </option>
                    <option key={4} value="Reviewer 5">
                      Reviewer 5
                    </option>
                  </select>
                  <button
                    type="submit"
                    className="bg-green-800 text-white mt-4 px-4 py-2 rounded-lg focus:outline-none hover:bg-green-600 transition duration-150 ease-in-out flex items-center  w-full justify-center"
                  >
                    <IoSendOutline className="mr-2 h-4 w-4" />
                    Send for Review
                  </button>
                </div>
              </td>
              <td className="border-r border-gray-300 w-1/4 " style={{ verticalAlign: "top" }}>
                <div className="py-2 px-4 flex flex-col">
                  <label htmlFor="" className="mr-2">
                    Reviewer Name
                  </label>
                  <input
                    disabled
                    type="text"
                    defaultValue="Gaurav Meena"
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-1"
                  />
                  <label htmlFor="" className="mr-2">
                    Reviewer Comments
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-1"
                  />

                  <div>
                    <label htmlFor="">Available Documents</label>
                    {pdfUrl ? (
                      <div className="flex items-center justify-evenly text-black">
                        <p>{pdfUrl ? pdfName : ""}</p>
                        <button
                          onClick={openPdfInNewTab}
                          className="bg-blue-800 p-1 text-white mt-4   rounded-lg focus:outline-none hover:bg-blue-600 transition duration-150 ease-in-out flex items-center   justify-center"
                          disabled={!pdfUrl}
                        >
                          Open
                        </button>
                      </div>
                    ) : (
                      <p className="text-red-700">No Document Available</p>
                    )}
                  </div>

                  <label htmlFor="">Additional Document Description</label>
                  <textarea
                    rows="4"
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
                  ></textarea>
                  <div className="py-2 ">
                    <label className="w-1/2 mr-2">Upload Additional Document</label>
                    <input
                      type="file"
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 mt-0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-800 text-white mt-4 px-4 py-2 rounded-lg focus:outline-none hover:bg-green-600 transition duration-150 ease-in-out flex items-center  w-full justify-center"
                  >
                    <IoSendOutline className="mr-2 h-4 w-4" />
                    Send for Draft
                  </button>
                </div>
              </td>
              <td
                className=" pointer-events-none opacity-50 border-r border-gray-300   "
                style={{ verticalAlign: "top" }}
              >
                <div className="py-2 px-4 ">
                  <label htmlFor="" className="mr-2 w-1/4">
                    Drafter Name
                  </label>
                  <input
                    disabled
                    type="text"
                    defaultValue="Gaurav Meena"
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-1"
                  />
                  <label htmlFor="" className="mr-2">
                    Reviewer Comments
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-1"
                  />
                  <div>
                    <label htmlFor="">Available Documents</label>
                    {pdfUrl ? (
                      <div className="flex items-center justify-evenly text-black">
                        <p>{pdfUrl ? pdfName : ""}</p>
                        <button
                          onClick={openPdfInNewTab}
                          className="bg-blue-800 p-1 text-white mt-4   rounded-lg focus:outline-none hover:bg-blue-600 transition duration-150 ease-in-out flex items-center   justify-center"
                          disabled={!pdfUrl}
                        >
                          Open
                        </button>
                      </div>
                    ) : (
                      <p className="text-red-700">No Document Available</p>
                    )}
                  </div>

                  <label htmlFor="">Additional Document Description</label>
                  <textarea
                    rows="4"
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
                  ></textarea>
                  <div className="py-2 ">
                    <label className="w-1/2 mr-2">Upload Additional Document</label>
                    <input
                      type="file"
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 mt-0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-800 text-white mt-4 px-4 py-2 rounded-lg focus:outline-none hover:bg-green-600 transition duration-150 ease-in-out flex items-center  w-full justify-center"
                  >
                    <IoSendOutline className="mr-2 h-4 w-4" />
                    Send for Approval
                  </button>
                </div>
              </td>
              <td
                className=" cursor-not-allowed pointer-events-none border-r border-gray-300 opacity-50 "
                style={{ verticalAlign: "top" }}
              >
                <div className="py-2 px-4">
                  {/* <p className="text-red-500 opacity-100" style={{ opacity: 1  }}>
                    You Don't have Access to Edit this Section
                  </p> */}
                  <label htmlFor="" className="mr-2 w-1/4">
                    Approver Name
                  </label>
                  <input
                    disabled
                    type="text"
                    defaultValue="Gaurav Meena"
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-1"
                  />
                  <label htmlFor="" className="mr-2">
                    Approver Comments
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-1"
                  />

                  <div>
                    <label htmlFor="">Available Documents</label>
                    {pdfUrl ? (
                      <div className="flex items-center justify-evenly text-black">
                        <p>{pdfUrl ? pdfName : ""}</p>
                        <button
                          onClick={openPdfInNewTab}
                          className="bg-blue-800 p-1 text-white mt-4   rounded-lg focus:outline-none hover:bg-blue-600 transition duration-150 ease-in-out flex items-center   justify-center"
                          disabled={!pdfUrl}
                        >
                          Open
                        </button>
                      </div>
                    ) : (
                      <p className="text-red-700">No Document Available</p>
                    )}
                  </div>
                  <label htmlFor="">Additional Document Description</label>
                  <textarea
                    rows="4"
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
                  ></textarea>
                  <div className="py-2 ">
                    <label className="w-1/2 mr-2">Upload Additional Document</label>
                    <input
                      type="file"
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 mt-0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-800 text-white mt-4 px-4 py-2 rounded-lg focus:outline-none hover:bg-green-600 transition duration-150 ease-in-out flex items-center w-full justify-center"
                  >
                    <FcApprove className="mr-2 h-4 w-4" />
                    Approve
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
