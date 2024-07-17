import { IoSendOutline } from "react-icons/io5";
import Header from "../../components/Header";
import ScreenCapture from "../../components/ScreenCapture";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { useState } from "react";
import ESignatureModal from "../../components/ESignatureModal";
import TinyEditor from "../../components/TinyEditor";

export default function ExecuteTask() {
  const today = new Date().toLocaleDateString();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    // setStage(1);
    navigate("/approve-task");
  };
  return (
    <>
      <Header />
      <ProgressBar stage={3} />
      <div>
        <div className="px-16  py-12 pt-2 bg-gray-300 min-h-screen ">
          <h6 className="text-2xl pt-12 px-16 font-bold bg-white rounded-t-lg  text-orange-600">
            Execute Task
          </h6>
          <div className="px-16 py-12 bg-white shadow-lg rounded-b-lg bg-gray-300  flex  flex-wrap  justify-between  gap-6 ">
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
                Reviewer Name
              </label>
              <input
                disabled
                type="text"
                defaultValue="Pankaj Jat"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="" className="mr-2 w-1/4">
                Review Date
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
                Drafter Name
              </label>
              <input
                disabled
                type="text"
                defaultValue="My Jat"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>
            <div className="w-5/12">
              <label htmlFor="" className="mr-2 w-1/4">
                Draft Date
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
                Executor Name
              </label>
              <input
                disabled
                type="text"
                defaultValue="My Jat"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12">
              <label htmlFor="" className="mr-2 w-1/4">
                Execute Date
              </label>
              <input
                disabled
                type="text"
                defaultValue={today}
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>

            <div className="w-5/12 ">
              <label className="w-1/2 mr-2">Upload Additional Document</label>
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
              <label htmlFor=""> Additional Document Name</label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              />
            </div>
            <div className="w-5/12">
              <label htmlFor=""> Additional Document Description</label>
              <textarea
                rows="4"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              ></textarea>
            </div>
            <div className="w-5/12">
              <label htmlFor=""> Executor Comments</label>
              <textarea
                rows="4"
                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
              ></textarea>
            </div>
            <div className="w-full">
              <ScreenCapture />
            </div>

            <div className="w-full  shadow-2xl p-5 rounded-lg">
              <label htmlFor="" className="mb-11">
                Edit And Upload Document
              </label>
              {/* <TinyMCE /> */}
              <TinyEditor />
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-green-800 text-white  px-6 py-4 rounded-lg focus:outline-none hover:bg-green-600 transition duration-150 ease-in-out flex items-center  w-1/4 justify-center"
                // onClick={() => sendForReview()}
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
