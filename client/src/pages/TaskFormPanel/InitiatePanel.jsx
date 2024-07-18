import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSendOutline } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ScreenCapture from "../../components/ScreenCapture";
import ProgressBar from "../../components/ProgressBar";
import ESignatureModal from "../../components/ESignatureModal";
import TinyEditor from "../../components/TinyEditor";
import { addForm, updateForm } from "../../redux/formSlice";

export default function InitiatePanel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form.forms);

  const formToEdit = forms.find((form) => form.id === parseInt(id));

  const today = new Date().toLocaleDateString();
  const [stage, setStage] = useState(0);
  const [formData, setFormData] = useState(
    formToEdit || {
      currentStatus: "",
      id: Date.now(),
      initiatorName: "Gaurav Meena",
      initiationDate: today,
      reviewer: "",
      approver: "",
      drafter: "",
      executor: "",
      documentName: "",
      taskName: "",
      documentDescription: "",
      shortDescription: "",
      tinyContent: "",
    }
  );

  //modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const updatedFormData = {
      ...formData,
      currentStatus: "Review",
    };

    if (formToEdit) {
      dispatch(updateForm(updatedFormData));
    } else {
      dispatch(addForm(updatedFormData));
    }
    // console.log(updatedFormData);
    setStage(1);
    navigate(`/review/${updatedFormData.id}`);
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
            {formToEdit ? "Edit Task" : "Initiate New Task"}
          </h6>
          <div className="px-16 py-12 bg-white shadow-lg rounded-b-lg bg-gray-300 flex gap-4 flex-wrap justify-between">
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
                Choose Reviewer
              </label>
              <select
                name="reviewer"
                value={formData.reviewer}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              >
                <option key={0} value="">
                  Select
                </option>
                <option key={1} value="Reviewer 1">
                  Reviewer 1
                </option>
                <option key={2} value="Reviewer 2">
                  Reviewer 2
                </option>
                <option key={3} value="Reviewer 3">
                  Reviewer 3
                </option>
                <option key={4} value="Reviewer 4">
                  Reviewer 4
                </option>
                <option key={5} value="Reviewer 5">
                  Reviewer 5
                </option>
              </select>
            </div>
            <div className="w-5/12">
              <label htmlFor="approver" className="mr-2 w-1/4">
                Choose Approver
              </label>
              <select
                name="approver"
                value={formData.approver}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              >
                <option key={0} value="">
                  Select
                </option>
                <option key={1} value="Approver 1">
                  Approver 1
                </option>
                <option key={2} value="Approver 2">
                  Approver 2
                </option>
                <option key={3} value="Approver 3">
                  Approver 3
                </option>
                <option key={4} value="Approver 4">
                  Approver 4
                </option>
                <option key={5} value="Approver 5">
                  Approver 5
                </option>
              </select>
            </div>
            <div className="w-5/12">
              <label htmlFor="drafter" className="mr-2 w-1/4">
                Choose Drafter
              </label>
              <select
                name="drafter"
                value={formData.drafter}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              >
                <option key={0} value="">
                  Select
                </option>
                <option key={1} value="Drafter 1">
                  Drafter 1
                </option>
                <option key={2} value="Drafter 2">
                  Drafter 2
                </option>
                <option key={3} value="Drafter 3">
                  Drafter 3
                </option>
                <option key={4} value="Drafter 4">
                  Drafter 4
                </option>
                <option key={5} value="Drafter 5">
                  Drafter 5
                </option>
              </select>
            </div>
            <div className="w-5/12">
              <label htmlFor="executor" className="mr-2 w-1/4">
                Choose Executor
              </label>
              <select
                name="executor"
                value={formData.executor}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              >
                <option key={0} value="">
                  Select
                </option>
                <option key={1} value="Executor 1">
                  Executor 1
                </option>
                <option key={2} value="Executor 2">
                  Executor 2
                </option>
                <option key={3} value="Executor 3">
                  Executor 3
                </option>
                <option key={4} value="Executor 4">
                  Executor 4
                </option>
                <option key={5} value="Executor 5">
                  Executor 5
                </option>
              </select>
            </div>
            <div className="w-5/12">
              <label htmlFor="documentName" className="mr-2 w-1/4">
                Document Name
              </label>
              <input
                name="documentName"
                type="text"
                value={formData.documentName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>
            <div className="w-5/12">
              <label htmlFor="taskName" className="mr-2 w-1/4">
                Name of Task
              </label>
              <input
                name="taskName"
                type="text"
                value={formData.taskName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>
            <div className="w-5/12">
              <label htmlFor="documentDescription" className="mr-2 w-1/4">
                Document Description
              </label>
              <textarea
                name="documentDescription"
                rows="4"
                value={formData.documentDescription}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              ></textarea>
            </div>
            <div className="w-5/12">
              <label htmlFor="shortDescription" className="mr-2 w-1/4">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                rows="4"
                value={formData.shortDescription}
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
              <TinyEditor editorContentFunction={editorContentFunction} />
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-green-800 text-white px-6 py-4 rounded-lg focus:outline-none hover:bg-green-600 transition duration-150 ease-in-out flex items-center w-1/4 justify-center"
                onClick={handleOpen}
              >
                <IoSendOutline className="mr-2 h-4 w-4" />
                Send for Review
              </button>
            </div>
          </div>
        </div>
      </div>
      <ESignatureModal open={open} handleClose={handleClose} submitAction={handleSubmit} />
    </>
  );
}
