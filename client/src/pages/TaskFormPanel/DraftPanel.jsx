import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSendOutline } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ScreenCapture from "../temp/ScreenCapture";
import ProgressBar from "../../components/ProgressBar";
import ESignatureModal from "../../components/ESignatureModal";
import TinyEditor from "../../components/TinyEditor";
import { updateForm } from "../../redux/formSlice";

export default function DraftPanel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form.forms);

  const formToEdit = forms.find((form) => form.id === parseInt(id));
  const today = new Date().toLocaleDateString();

  const [formData, setFormData] = useState(
    formToEdit || {
      initiatorName: "Gaurav Meena",
      initiationDate: today,
      reviewer: "Pankaj Jat",
      reviewDate: today,
      drafterName: "My Jat",
      draftDate: today,
      draftAdditionalDocumentName: "",
      draftAdditionalDocumentDescription: "",
      drafterComments: "",
      // Add other fields here as needed
    }
  );

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    dispatch(updateForm(formData));
    navigate("/execute-task");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <ProgressBar stage={2} />

      <div>
        <div className="px-16 py-12 pt-2 bg-gray-300 min-h-screen">
          <h6 className="text-2xl pt-12 px-16 font-bold bg-white rounded-t-lg text-orange-600">
            Draft Task
          </h6>
          <div className="px-16 py-12 bg-white shadow-lg rounded-b-lg bg-gray-300 flex gap-6 flex-wrap justify-between">
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
              <label htmlFor="reviewer" className="mr-2 w-1/4">
                Reviewer Name
              </label>
              <input
                disabled
                type="text"
                value={formData.reviewer}
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
              <label htmlFor="drafter" className="mr-2 w-1/4">
                Drafter Name
              </label>
              <input
                disabled
                type="text"
                value={formData.drafter}
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
              <label htmlFor="draftAdditionalDocumentName" className="mr-2 w-1/4">
                Additional Document Name
              </label>
              <input
                name="draftAdditionalDocumentName"
                type="text"
                value={formData.draftAdditionalDocumentName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="draftAdditionalDocumentDescription" className="mr-2 w-1/4">
                Additional Document Description
              </label>
              <textarea
                name="draftAdditionalDocumentDescription"
                rows="4"
                value={formData.draftAdditionalDocumentDescription}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              ></textarea>
            </div>

            <div className="w-5/12">
              <label htmlFor="drafterComments" className="mr-2 w-1/4">
                Drafter Comments
              </label>
              <textarea
                name="drafterComments"
                rows="4"
                value={formData.drafterComments}
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
                Send for Execution
              </button>
            </div>
          </div>
        </div>
      </div>
      <ESignatureModal open={open} handleClose={handleClose} submitAction={handleSubmit} />
    </>
  );
}
