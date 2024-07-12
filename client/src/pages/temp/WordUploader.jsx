import React, { useState } from "react";

const WordUploader = () => {
  const [docUrl, setDocUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setDocUrl(url);
    }
  };

  return (
    <div>
      <input type="file" accept=".doc,.docx" onChange={handleFileChange} />
      {docUrl && (
        <iframe
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(docUrl)}`}
          width="100%"
          height="600px"
          style={{ border: "none" }}
        />
      )}
    </div>
  );
};

export default WordUploader;

// import React, { useState } from "react";
// import FileViewer from "react-file-viewer";
// import { CustomErrorComponent } from "custom-error";

// const FileViewerComponent = () => {
//   const [fileType, setFileType] = useState("");
//   const [filePath, setFilePath] = useState("");

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setFilePath(url);
//       setFileType(file.name.split(".").pop());
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       {filePath && (
//         <FileViewer
//           fileType={fileType}
//           filePath={filePath}
//           errorComponent={CustomErrorComponent}
//           onError={(e) => console.log(e)}
//         />
//       )}
//     </div>
//   );
// };

// export default FileViewerComponent;
