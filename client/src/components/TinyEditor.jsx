import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";
import mammoth from "mammoth";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function TinyEditor({ tinyContent, editorContentFunction }) {
  const editorRef = useRef(null);
  const [editorContent, setEditorContent] = useState(tinyContent);

  useEffect(() => {
    editorContentFunction(editorContent);
  }, [editorContent]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setEditorContent(result.value);
    }
  };

  const handleDownloadPDF = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      const contentElement = document.createElement("div");
      contentElement.innerHTML = content;
      contentElement.style.width = "210mm"; // A4 size width
      contentElement.style.padding = "10mm";
      contentElement.style.boxSizing = "border-box";
      document.body.appendChild(contentElement);

      // Wait for styles to apply
      await new Promise((resolve) => setTimeout(resolve, 0));

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();

      // Calculate the height needed for the content
      const canvas = await html2canvas(contentElement, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let position = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();

      while (position < pdfHeight) {
        pdf.addImage(imgData, "PNG", 0, -position, pdfWidth, pdfHeight);
        position += pageHeight;
        if (position < pdfHeight) {
          pdf.addPage();
        }
      }

      pdf.save("updated.pdf");
      document.body.removeChild(contentElement);
    }
  };

  return (
    <>
      <div className="flex justify-evenly gap-5 items-center">
        <div className="relative inline-block w-full">
          <input
            type="file"
            accept=".doc,.docx"
            onChange={handleFileUpload}
            className="block w-2/4 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      <div className="my-4">
        <Editor
          // apiKey="5vbh0y1nq5y6uokc071mjvy9n4fnss5ctasrjft7x7ajm9fl"
          apiKey="6lgqyc4wcm89pj8427e8vcfs7nmu7d3t7hk7692ipn5lazye"
          onInit={(_evt, editor) => (editorRef.current = editor)}
          value={editorContent}
          onEditorChange={(newValue) => setEditorContent(newValue)}
          init={{
            height: 400,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
              "powerpaste",
            ],
            toolbar:
              "undo redo | blocks | bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-teal-900"
        >
          Download as File
        </button>
      </div>
    </>
  );
}

// import { Editor } from "@tinymce/tinymce-react";
// import React, { useEffect, useRef, useState } from "react";
// import mammoth from "mammoth";
// import htmlToPdfmake from "html-to-pdfmake";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// export default function TinyEditor({ tinyContent, editorContentFunction }) {
//   const editorRef = useRef(null);
//   const [editorContent, setEditorContent] = useState(tinyContent);

//   useEffect(() => {
//     editorContentFunction(editorContent);
//   }, [editorContent]);
//   // useEffect(() => {
//   //   console.log();
//   //   setEditorContent(formData);
//   // }, [formData]);
//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const arrayBuffer = await file.arrayBuffer();
//       const result = await mammoth.convertToHtml({ arrayBuffer });
//       setEditorContent(result.value);
//       // console.log("editorContent" , editorContent);
//     }
//   };

//   const handleDownloadPDF = () => {
//     if (editorRef.current) {
//       const content = editorRef.current.getContent();
//       const pdfContent = htmlToPdfmake(content);
//       const docDefinition = { content: pdfContent };

//       pdfMake.createPdf(docDefinition).download("updated.pdf");
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-evenly gap-5 items-center">
//         {/* <p className="text-lg font-medium text-gray-900">Choose a .docx file to view here</p> */}
//         <div className="relative inline-block w-full">
//           <input
//             type="file"
//             accept=".doc,.docx"
//             onChange={handleFileUpload}
//             className="block w-2/4 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//           />
//         </div>
//       </div>
//       <div className="my-4">
//         <Editor
//           apiKey="5vbh0y1nq5y6uokc071mjvy9n4fnss5ctasrjft7x7ajm9fl"
//           onInit={(_evt, editor) => (editorRef.current = editor)}
//           value={editorContent}
//           onEditorChange={(newValue) => setEditorContent(newValue)}
//           init={{
//             height: 500,
//             menubar: false,
//             plugins: [
//               "advlist",
//               "autolink",
//               "lists",
//               "link",
//               "image",
//               "charmap",
//               "preview",
//               "anchor",
//               "searchreplace",
//               "visualblocks",
//               "code",
//               "fullscreen",
//               "insertdatetime",
//               "media",
//               "table",
//               "code",
//               "help",
//               "wordcount",
//               "powerpaste",
//             ],
//             toolbar:
//               "undo redo | blocks | bold italic forecolor | alignleft aligncenter " +
//               "alignright alignjustify | bullist numlist outdent indent | " +
//               "removeformat | help",
//             content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//           }}
//         />
//       </div>
//       <div className="flex justify-end">
//         <button
//           onClick={handleDownloadPDF}
//           className="px-4 py-2 text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-teal-900"
//         >
//           Download as File
//         </button>
//       </div>
//     </>
//   );
// }
