import React, { useState } from "react";
import { IoSendOutline } from "react-icons/io5";
import Header from "../../components/Header";
import ScreenCapture from "../temp/ScreenCapture";
import { FcApprove } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams
import ProgressBar from "../../components/ProgressBar";
import ESignatureModal from "../../components/ESignatureModal";
import TinyEditor from "../../components/TinyEditor";

export default function ApprovePanel() {
  const today = new Date().toLocaleDateString();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { id } = useParams(); // Use useParams to get route parameters

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    navigate("/dashboard");
  };

  // Example state to manage form data
  const [formData, setFormData] = useState({
    initiatorName: "Gaurav Meena",
    initiationDate: today,
    reviewerName: "",
    reviewDate: today,
    drafterName: "",
    draftDate: today,
    executorName: "",
    executeDate: today,
    approverName: "",
    approveDate: today,
    additionalDocumentName: "",
    additionalDocumentDescription: "",
    approverComments: "",
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <ProgressBar stage={4} />

      <div>
        <div className="px-16 py-12 pt-2 bg-gray-300 min-h-screen">
          <h6 className="text-2xl pt-12 px-16 font-bold bg-white rounded-t-lg text-orange-600">
            Approve Task
          </h6>
          <div className="px-16 py-12 bg-white shadow-lg rounded-b-lg bg-gray-300 flex gap-12 flex-wrap justify-between gap-6">
            <div className="w-5/12">
              <label htmlFor="initiatorName" className="mr-2 w-1/4">
                Initiator Name
              </label>
              <input
                disabled
                type="text"
                value={formData.initiatorName}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="initiationDate" className="mr-2 w-1/4">
                Initiation Date
              </label>
              <input
                disabled
                type="text"
                value={formData.initiationDate}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="reviewerName" className="mr-2 w-1/4">
                Reviewer Name
              </label>
              <input
                disabled
                type="text"
                value={formData.reviewerName}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="reviewDate" className="mr-2 w-1/4">
                Review Date
              </label>
              <input
                disabled
                type="text"
                value={formData.reviewDate}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="drafterName" className="mr-2 w-1/4">
                Drafter Name
              </label>
              <input
                disabled
                type="text"
                value={formData.drafterName}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="draftDate" className="mr-2 w-1/4">
                Draft Date
              </label>
              <input
                disabled
                type="text"
                value={formData.draftDate}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="executorName" className="mr-2 w-1/4">
                Executor Name
              </label>
              <input
                disabled
                type="text"
                value={formData.executorName}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="executeDate" className="mr-2 w-1/4">
                Execute Date
              </label>
              <input
                disabled
                type="text"
                value={formData.executeDate}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="approverName" className="mr-2 w-1/4">
                Approver Name
              </label>
              <input
                disabled
                type="text"
                value={formData.approverName}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="approveDate" className="mr-2 w-1/4">
                Approve Date
              </label>
              <input
                disabled
                type="text"
                value={formData.approveDate}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12 ">
              <label className="w-1/2 mr-2">Upload Additional Document</label>
              <input
                type="file"
                accept=".pdf"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="additionalDocumentName" className="mr-2 w-1/4">
                Additional Document Name
              </label>
              <input
                name="additionalDocumentName"
                type="text"
                value={formData.additionalDocumentName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="additionalDocumentDescription" className="mr-2 w-1/4">
                Additional Document Description
              </label>
              <textarea
                name="additionalDocumentDescription"
                rows="4"
                value={formData.additionalDocumentDescription}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              ></textarea>
            </div>

            <div className="w-5/12">
              <label htmlFor="approverComments" className="mr-2 w-1/4">
                Approver Comments
              </label>
              <textarea
                name="approverComments"
                rows="4"
                value={formData.approverComments}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              ></textarea>
            </div>

            <div className="w-full">
              <ScreenCapture />
            </div>

            <div className="w-full shadow-2xl p-5 rounded-lg">
              <label htmlFor="" className="mb-11">
                Edit And Upload Document
              </label>
              <TinyEditor />
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-green-800 text-white px-6 py-4 rounded-lg focus:outline-none hover:bg-green-600 transition duration-150 ease-in-out flex items-center w-1/4 justify-center"
                onClick={handleOpen}
              >
                <IoSendOutline className="mr-2 h-4 w-4" />
                Send for Approval
              </button>
            </div>
          </div>
        </div>
      </div>
      <ESignatureModal open={open} handleClose={handleClose} submitAction={handleSubmit} />
    </>
  );
}
