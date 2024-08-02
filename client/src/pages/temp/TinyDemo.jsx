// import { Editor } from "@tinymce/tinymce-react";
// import React, { useRef, useState } from "react";
// import mammoth from "mammoth";
// import htmlToPdfmake from "html-to-pdfmake";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import { saveAs } from "file-saver";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// export default function TinyEditor() {
//   const editorRef = useRef(null);
//   const [editorContent, setEditorContent] = useState("");

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const arrayBuffer = await file.arrayBuffer();
//       const result = await mammoth.convertToHtml({ arrayBuffer });
//       setEditorContent(result.value);
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

//   const handleDownloadDocx = async () => {
//     if (editorRef.current) {
//       const content = editorRef.current.getContent();
//       const html = `<html><head><meta charset="utf-8"></head><body>${content}</body></html>`;

//       const { value: docxArrayBuffer } = await mammoth.convertToMarkdown(
//         { html: html },
//         {
//           convertImage: mammoth.images.inline((element) => {
//             return element.read("base64").then((imageBuffer) => {
//               return { src: "data:" + element.contentType + ";base64," + imageBuffer };
//             });
//           }),
//         }
//       );

//       const blob = new Blob([docxArrayBuffer], {
//         type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       });

//       saveAs(blob, "updated.docx");
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-evenly gap-5 items-center">
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
//       <div className="flex justify-end space-x-4">
//         <button
//           onClick={handleDownloadPDF}
//           className="px-4 py-2 text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-teal-900"
//         >
//           Download as PDF
//         </button>
//         <button
//           onClick={handleDownloadDocx}
//           className="px-4 py-2 text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-teal-900"
//         >
//           Download as DOCX
//         </button>
//       </div>
//     </>
//   );
// }


import React from 'react'

export default function TinyDemo() {
  return (
    <div>
      
    </div>
  )
}
