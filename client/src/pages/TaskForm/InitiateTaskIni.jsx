import { IoSendOutline } from "react-icons/io5";
import Header from "../../components/Header";
import ScreenCapture from "../temp/ScreenCapture";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { useState } from "react";
import ESignatureModal from "../../components/ESignatureModal";

export default function InitiateTaskIni() {
  const today = new Date().toLocaleDateString();
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);

  //modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    setStage(1);
    navigate("/review-task");
  };
  return (
    <>
      <Header />
      <ProgressBar stage={stage} />

      <div>
        <div className="px-16  py-12 pt-2 bg-gray-300 min-h-screen">
          <h6 className="text-2xl pt-12 px-16 font-bold bg-white rounded-t-lg  text-orange-600">
            Initiate New Task
          </h6>
          <div className="px-16 py-12 bg-white shadow-lg rounded-b-lg bg-gray-300  flex gap-12 flex-wrap  justify-between">
            <div className="w-5/12">
              <label htmlFor="" className="mr-2 w-1/4">
                Initiator Name
              </label>
              <input
                disabled
                type="text"
                defaultValue="Gaurav Meena"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>
            <div className="w-5/12">
              <label htmlFor="" className="mr-2 w-1/4">
                Initiation Date
              </label>
              <input
                disabled
                type="text"
                defaultValue={today}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
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
            </div>
            <div className="w-5/12">
              <label htmlFor="" className="mr-2 w-1/4">
                Choose Approver
              </label>
              <select className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0">
                <option key={0} value="Approver 1">
                  Select
                </option>
                <option key={0} value="Approver 1">
                  Approver 1
                </option>
                <option key={1} value="Approver 2">
                  Approver 2
                </option>
                <option key={2} value="Approver 3">
                  Approver 3
                </option>
                <option key={3} value="Approver 4">
                  Approver 4
                </option>
                <option key={4} value="Approver 5">
                  Approver 5
                </option>
              </select>
            </div>
            <div className="w-5/12">
              <label htmlFor="" className="mr-2 w-1/4">
                Choose Executor
              </label>
              <select className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0">
                <option key={0} value="Drafter 1">
                  Select
                </option>
                <option key={0} value="Drafter 1">
                  Drafter 1
                </option>
                <option key={1} value="Drafter 2">
                  Drafter 2
                </option>
                <option key={2} value="Drafter 3">
                  Drafter 3
                </option>
                <option key={3} value="Drafter 4">
                  Drafter 4
                </option>
                <option key={4} value="Drafter 5">
                  Drafter 5
                </option>
              </select>
            </div>
            <div className="w-5/12">
              <label htmlFor="" className="mr-2 w-1/4">
                Choose Executor
              </label>
              <select className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0">
                <option key={0} value="Executor 1">
                  Select
                </option>
                <option key={0} value="Executor 1">
                  Executor 1
                </option>
                <option key={1} value="Executor 2">
                  Executor 2
                </option>
                <option key={2} value="Executor 3">
                  Executor 3
                </option>
                <option key={3} value="Executor 4">
                  Executor 4
                </option>
                <option key={4} value="Executor 5">
                  Executor 5
                </option>
              </select>
            </div>
            <div className="w-5/12 ">
              <label className="w-1/2 mr-2">Upload Document</label>
              <input
                type="file"
                accept=".pdf"
                //   multiple
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 mt-0"
                // onChange={handleFileChange}
              />
            </div>
            {/* <div className="w-5/12"> */}
            {/* {pdfUrl && (
                <iframe src={pdfUrl} width="100%" height="300px" style={{ border: "none" }} />
              )} */}
            {/* </div> */}
            <div className="w-5/12">
              <label htmlFor="">Document Name</label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>
            <div className="w-5/12">
              <label htmlFor="">Document Description</label>
              <textarea
                rows="4"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              ></textarea>
            </div>
            <div className="w-5/12">
              <label htmlFor="">Short Description</label>
              <textarea
                rows="4"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              ></textarea>
            </div>
            <div className="w-5/12">
              <button
                type="submit"
                className="bg-green-800 text-white  px-4 py-2 rounded-lg focus:outline-none hover:bg-green-600 transition duration-150 ease-in-out flex items-center  w-full justify-center"
                // onClick={() => sendForReview()}
                onClick={handleOpen}
              >
                <IoSendOutline className="mr-2 h-4 w-4" />
                Send for Review
              </button>
            </div>
            <div className="w-5/12">
              <ScreenCapture />
            </div>
          </div>
        </div>
      </div>
      <ESignatureModal open={open} handleClose={handleClose} submitAction={handleSubmit} />
    </>
  );
}
