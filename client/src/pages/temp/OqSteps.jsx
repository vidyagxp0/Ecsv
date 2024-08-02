import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ScreenCapture from "../../components/ScreenCapture";

export default function OqSteps() {
  const navigate = useNavigate();

  const [steps, setSteps] = useState([{ imgData: [] }]); // Initial single step with an empty imgData array

  const addStep = () => {
    setSteps([...steps, { imgData: [] }]); // Add new step with an empty imgData array
  };

  const updateStepImage = (index, newImgData) => {
    const updatedSteps = [...steps];
    updatedSteps[index].imgData.push(newImgData);
    setSteps(updatedSteps);
  };

  return (
    <>
      <Header />
      <div className="flex bg-white justify-between items-center px-20 pb-10">
        <h6 className="text-3xl pt-12 px-16 font-bold bg-white rounded-t-lg text-orange-600">
          Create new OQ
        </h6>
        <button
          onClick={addStep}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 h-10"
        >
          Add Step
        </button>
      </div>
      {steps.map((step, index) => (
        <div key={index}>
          <div className="px-16 py-12 pt-2 bg-gray-300 bg-white">
            <p className="text-xl pt-12 px-16 font-bold bg-gray-200 rounded-t-lg text-orange-400">
              Step {index + 1}
            </p>
            <div className="px-16 py-12 bg-gray-200 shadow-lg rounded-b-lg flex gap-4 flex-wrap justify-between">
              <div className="w-5/12">
                <label htmlFor="procedure" className="mr-2 w-1/4">
                  Test Procedure
                </label>
                <textarea className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0" />
              </div>
              <div className="w-5/12">
                <label htmlFor="expectedResults" className="mr-2 w-1/4">
                  Expected Results
                </label>
                <textarea className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0" />
              </div>
              <div className="w-5/12">
                <label htmlFor="dataSetup" className="mr-2 w-1/4">
                  Test Data Setup
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
                />
              </div>
              <div className="w-5/12">
                <label htmlFor="outputValues" className="mr-2 w-1/4">
                  Output Values
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
                />
              </div>
              <div className="w-5/12">
                <label htmlFor="passFail" className="mr-2 w-1/4">
                  Pass/Fail
                </label>
                <select className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0">
                  <option value="">Select</option>
                  <option value="pass">Pass</option>
                  <option value="fail">Fail</option>
                </select>
              </div>
              <div className="w-5/12">
                <label htmlFor="comments" className="mr-2 w-1/4">
                  Comments / PR Reference
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-0"
                />
              </div>
              <div className="w-full flex flex-col items-center">
                <ScreenCapture onCapture={(imgData) => updateStepImage(index, imgData)} />
                <div className="flex items-center  justify-evenly gap-10 flex-wrap pt-5">
                  {step.imgData.length > 0 ? (
                    step.imgData.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`Step ${index + 1} - Capture ${imgIndex + 1}`}
                        className="w-5/12 object-cover shadow-xl"
                      />
                    ))
                  ) : (
                    <div className="text-center font-semibold text-red-700">
                      <p>No image Captured Till Now</p>
                    </div>
                  )}
                </div>
                {/* {step.imgData.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`Step ${index + 1} - Capture ${imgIndex + 1}`}
                    className="mt-10"
                  />
                ))} */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
