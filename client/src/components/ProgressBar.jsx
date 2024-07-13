// src/ProgressBar.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const stages = ["Initiate", "Review", "Draft", "Execute", "Approve"];

const ProgressBar = (props) => {
  const { stage = 0 } = props;
  useEffect(() => {
    setCurrentStage(stage);
  }, [stage]);
  const [currentStage, setCurrentStage] = useState(0);
  const navigate = useNavigate();

  const moveToStage = (index, stage) => {
    // setCurrentStage(index);
    switch (stage) {
      case "Initiate":
        navigate("/initiate-task");
        break;
      case "Review":
        navigate("/review-task");
        break;
      case "Draft":
        navigate("/draft-task");
        break;
      case "Execute":
        navigate("/execute-task");
        break;
      case "Approve":
        navigate("/approve-task");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center p-4 pb-2 bg-slate-300">
      <div className="flex w-full max-w-4xl justify-between mb-2">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`flex-1 text-center p-2 cursor-pointer border rounded 
            ${index < currentStage ? "bg-green-500 text-white" : ""} 
            ${index === currentStage ? "bg-orange-500 text-white" : ""} 
            ${index > currentStage ? "bg-gray-200" : ""} 
            ${index < stages.length - 1 ? "mr-1" : ""}`}
            // onClick={() => moveToStage(index, stage)}
          >
            {stage}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
