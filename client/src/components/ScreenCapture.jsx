// src/ScreenCapture.js
import React, { useState } from "react";

const ScreenCapture = () => {
  const [imageSrc, setImageSrc] = useState(null);

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
      setImageSrc(imgData);
      // console.log(imgData);
      track.stop();
    } catch (error) {
      console.error("Error capturing screen:", error);
    }
  };

  return (
    <div>
      <button
        onClick={captureScreen}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full px-7"
      >
        Capture Screen
      </button>
      {imageSrc && <img src={imageSrc} width="100%" alt="Captured screen" />}
    </div>
  );
};

export default ScreenCapture;
