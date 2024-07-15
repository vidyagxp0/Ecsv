import React, { useEffect, useRef, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import { saveAs } from "file-saver";

const FileEditor = () => {
  const viewerRef = useRef(null);
  const [instance, setInstance] = useState(null);
  const [fileName, setFileName] = useState("");

  //   useEffect(() => {
  //     WebViewer(
  //       {
  //         path: "/webviewer/lib",
  //         licenseKey: "demo:1720861889553:7f9e1e7c0300000000d8c7d31f4b1d5ad2bb34c14689755aea1131f271",
  //         initialDoc: "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
  //       },
  //       viewerRef.current
  //     ).then((instance) => {
  //       setInstance(instance);
  //       const { documentViewer } = instance.Core;
  //       // you can now call WebViewer APIs here...
  //     });
  //   }, []);

  useEffect(() => {
    const initializeWebViewer = async () => {
      const viewerInstance = await WebViewer(
        {
          path: "/lib", // Path to the PDFTron 'lib' folder on your server
          licenseKey:
            "demo:1720861889553:7f9e1e7c0300000000d8c7d31f4b1d5ad2bb34c14689755aea1131f271",
          initialDoc: "", // No initial document
        },
        viewerRef.current
      );
      setInstance(viewerInstance);
    };

    initializeWebViewer().catch((error) => {
      console.error("Error initializing WebViewer:", error);
    });
  }, []);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = function () {
      const arrayBuffer = this.result;
      instance.UI.loadDocument(arrayBuffer, { extension: "docx" });
    };
    reader.readAsArrayBuffer(file);
  };

  const handleDownload = async () => {
    if (!instance) return;
    const doc = instance.Core.documentViewer.getDocument();
    const data = await doc.getFileData({ downloadType: "docx" });
    const blob = new Blob([new Uint8Array(data)], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    saveAs(blob, fileName);
  };

  return (
    <div>
      <input type="file" accept=".docx" onChange={handleFileUpload} />
      <div ref={viewerRef} style={{ height: "80vh", border: "1px solid black" }}></div>
      <button onClick={handleDownload}>Download Edited File</button>
    </div>
  );
};

export default FileEditor;
