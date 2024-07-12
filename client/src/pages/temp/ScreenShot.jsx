// // Screenshot.js
// import React, { useState } from "react";
// import html2canvas from "html2canvas";

// const Screenshot = () => {
//   const [imgSrc, setImgSrc] = useState("");
//   const captureScreenshot = () => {
//     alert("You have 3 seconds to navigate to the screen you want to capture.");
//     setTimeout(() => {
//       html2canvas(document.body).then((canvas) => {
//         const imgData = canvas.toDataURL("image/png");
//         const link = document.createElement("a");
//         link.href = imgData;
//         link.download = "screenshot.png";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);

//         setImgSrc(imgData);
//       });
//     }, 3000);
//   };

//   return (
//     <div>
//       <button onClick={captureScreenshot}>Capture Screenshot</button>
//       {imgSrc && (
//         <img src={imgSrc} alt="screenshot" style={{ maxWidth: "100%" }} />
//       )}
//     </div>
//   );
// };

// export default Screenshot;

// Screenshot.js
import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";

const Screenshot = () => {
  const [imgSrc, setImgSrc] = useState("");

  const [countdown, setCountdown] = useState(null);

  const captureScreenshot = () => {
    setCountdown(3);
  };

  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      html2canvas(document.body).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "screenshot.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setCountdown(null);
      });
    } else {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div>
      <button onClick={captureScreenshot}>Capture Screenshot</button>
      {countdown !== null && <div>Taking screenshot in {countdown}...</div>}
      {imgSrc && <img src={imgSrc} alt="screenshot" style={{ maxWidth: "100%" }} />}
    </div>
  );
};

export default Screenshot;
