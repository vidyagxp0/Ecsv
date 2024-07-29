// // src/ScreenCapture.js
// import React, { useState } from "react";

// const ScreenCapture = () => {
//   const [imageSrc, setImageSrc] = useState(null);

//   // Function to capture the screen and set the captured image as the state
//   const captureScreen = async () => {
//     try {
//       // Get the display media stream with video set to screen
//       const stream = await navigator.mediaDevices.getDisplayMedia({
//         video: { mediaSource: "screen" },
//       });

//       // Get the first video track from the stream
//       const track = stream.getVideoTracks()[0];

//       // Create a new ImageCapture object with the video track
//       const imageCapture = new ImageCapture(track);

//       // Grab a frame from the video track and convert it to a bitmap
//       const bitmap = await imageCapture.grabFrame();

//       // Create a new canvas element
//       const canvas = document.createElement("canvas");

//       // Set the canvas dimensions to match the bitmap dimensions
//       canvas.width = bitmap.width;
//       canvas.height = bitmap.height;

//       // Get the 2D rendering context of the canvas
//       const context = canvas.getContext("2d");

//       // Draw the bitmap onto the canvas
//       context.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);

//       // Convert the canvas to a data URL
//       const imgData = canvas.toDataURL();

//       // Set the captured image as the state
//       setImageSrc(imgData);
// console.log(imgData);
//       // Stop the video track
//       track.stop();
//     } catch (error) {
//       // Log any errors that occur during the process
//       console.error("Error capturing screen:", error);
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={captureScreen}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full px-7"
//       >
//         Capture Screen
//       </button>
//       {imageSrc && <img src={imageSrc} width="100%" alt="Captured screen" />}
//     </div>
//   );
// };

// export default ScreenCapture;

import React from "react";

const ScreenCapture = ({ onCapture }) => {
  const captureScreen = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
      });

      const track = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);
      const bitmap = await imageCapture.grabFrame();

      const canvas = document.createElement("canvas");
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const context = canvas.getContext("2d");
      context.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);

      const imgData = canvas.toDataURL();
      onCapture(imgData); // Call the callback function with the captured image data
      track.stop();
    } catch (error) {
      console.error("Error capturing screen:", error);
    }
  };

  return (
    <button
      onClick={captureScreen}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
    >
      Capture Screen
    </button>
  );
};

export default ScreenCapture;
