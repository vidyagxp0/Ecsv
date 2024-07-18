import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSendOutline } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ScreenCapture from "../../components/ScreenCapture";
import ProgressBar from "../../components/ProgressBar";
import ESignatureModal from "../../components/ESignatureModal";
import TinyEditor from "../../components/TinyEditor";
import { updateForm } from "../../redux/formSlice";

export default function ReviewPanel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form.forms);

  const formToEdit = forms.find((form) => form.id === parseInt(id));
  // const today = new Date().toLocaleDateString();

  const [stage, setStage] = useState(1);

  const [formData, setFormData] = useState(
    formToEdit || {
      currentStatus: "",
      initiatorName: "",
      initiationDate: "",
      reviewer: "",
      reviewDate: "",
      revieweradditionalDocumentName: "",
      revieweradditionalDocumentDescription: "",
      reviewerComments: "",
      tinyContent: "",
    }
  );

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const updatedFormData = {
      ...formData,
      currentStatus: "Draft",
    };
    dispatch(updateForm(updatedFormData));
    setStage(2);
    navigate("/draft/" + id);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const editorContentFunction = (content) => {
    setFormData({
      ...formData,
      tinyContent: content,
    });
    // console.log("content", content);
  };
  return (
    <>
      <Header />
      <ProgressBar stage={stage} status={formData.currentStatus} />

      <div>
        <div className="px-16 py-12 pt-2 bg-gray-300 min-h-screen">
          <h6 className="text-2xl pt-12 px-16 font-bold bg-white rounded-t-lg text-orange-600">
            Review Task
          </h6>
          <div className="px-16 py-12 bg-white shadow-lg rounded-b-lg flex gap-6 flex-wrap justify-between">
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
                name="reviewDate"
                onChange={handleChange}
                type="date"
                value={formData.reviewDate}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="additionalDocumentName" className="mr-2 w-1/4">
                Additional Document Name
              </label>
              <input
                name="revieweradditionalDocumentName"
                type="text"
                value={formData.revieweradditionalDocumentName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12"></div>

            <div className="w-5/12">
              <label htmlFor="revieweradditionalDocumentDescription" className="mr-2 w-1/4">
                Additional Document Description
              </label>
              <textarea
                name="revieweradditionalDocumentDescription"
                rows="4"
                value={formData.revieweradditionalDocumentDescription}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              ></textarea>
            </div>

            <div className="w-5/12">
              <label htmlFor="reviewerComments" className="mr-2 w-1/4">
                Reviewer Comments
              </label>
              <textarea
                name="reviewerComments"
                rows="4"
                value={formData.reviewerComments}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              ></textarea>
            </div>

            <div className="w-full">
              <ScreenCapture />
            </div>

            <div className="w-full">
              <label htmlFor="" className="mb-11">
                Edit And Upload Document
              </label>
              <TinyEditor
                editorContentFunction={editorContentFunction}
                tinyContent={formData.tinyContent}
              />
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-green-800 text-white px-6 py-4 rounded-lg focus:outline-none hover:bg-green-600 transition duration-150 ease-in-out flex items-center w-1/4 justify-center"
                onClick={handleOpen}
              >
                <IoSendOutline className="mr-2 h-4 w-4" />
                Send for Draft
              </button>
            </div>
          </div>
        </div>
      </div>
      <ESignatureModal open={open} handleClose={handleClose} submitAction={handleSubmit} />
    </>
  );
}
