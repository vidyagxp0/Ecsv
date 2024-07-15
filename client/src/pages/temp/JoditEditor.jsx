// import React, { useRef } from "react";
// import JoditEditor from "jodit-react";

// const JoditEditorComponent = () => {
//   const editor = useRef(null);
//   const [content, setContent] = React.useState("");

//   return (
//     <JoditEditor
//       ref={editor}
//       value={content}
//       config={{
//         readonly: false, // all options from https://xdsoft.net/jodit/doc/
//         toolbar: true,
//       }}
//       onChange={(newContent) => setContent(newContent)}
//     />
//   );
// };

// export default JoditEditorComponent;













import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import mammoth from "mammoth";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";

const FileEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [fileName, setFileName] = useState("edited-document.docx");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        const result = await mammoth.convertToHtml({ arrayBuffer });
        setContent(result.value);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleDownload = () => {
    const zip = new PizZip();
    zip.file("word/document.xml", content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });
    try {
      doc.render();
      const blob = doc.getZip().generate({
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      saveAs(blob, fileName);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <input type="file" accept=".docx" onChange={handleFileUpload} />
      <JoditEditor
        ref={editor}
        value={content}
        config={{
          readonly: false,
          toolbar: true,
        }}
        onChange={(newContent) => setContent(newContent)}
      />
      <button onClick={handleDownload}>Download Edited File</button>
    </div>
  );
};

export default FileEditor;

