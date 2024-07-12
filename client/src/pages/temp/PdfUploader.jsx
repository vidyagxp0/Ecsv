// import React, { useState } from "react";

// const PdfUploader = () => {
//   const [pdfUrl, setPdfUrl] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setPdfUrl(url);
//     }
//   };

//   const openPdfInNewTab = () => {
//     if (pdfUrl) {
//       window.open(pdfUrl);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept="application/pdf" onChange={handleFileChange} />
//       <button onClick={openPdfInNewTab} disabled={!pdfUrl}>
//         Open PDF in New Tab
//       </button>
//     </div>
//   );
// };

// export default PdfUploader;

import React, { useState } from "react";

const PdfUploader = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFileChange = (event) => {
    console.log("something");
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      {pdfUrl && <iframe src={pdfUrl} width="20%" height="300px" style={{ border: "none" }} />}
    </div>
  );
};

export default PdfUploader;
