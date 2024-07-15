import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useState } from "react";

export default function TinyMCE() {
  const editorRef = useRef(null);
  const [apiKey, setApiKey] = useState(""); // State to store API key
  const [editorContent, setEditorContent] = useState(
    "<p>This is the initial content of the editor.</p>"
  );

  const handleEditorChange = (content, editor) => {
    setEditorContent(content); // Update editor content state                        
  };

  const handleLog = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleAIRequest = () => {
    const openAiOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`, // Use your OpenAI API key here
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        max_tokens: 800,
        messages: [{ role: "user", content: editorContent }],
      }),
    };

    fetch("https://api.openai.com/v1/chat/completions", openAiOptions)
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          if (data.choices && data.choices.length > 0) {
            const aiResponse = data.choices[0].message.content.trim();
            if (editorRef.current) {
              editorRef.current.setContent(editorContent + aiResponse);
            }
          } else {
            console.error("No response from AI model");
          }
        } else {
          throw new Error("Failed to communicate with the AI");
        }
      })
      .catch((error) => {
        console.error("Error requesting AI:", error);
      });
  };

  return (
    <>
      <Editor
        apiKey={apiKey}
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={editorContent}
        init={{
          height: 500,
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
            "ai",
            "code importword",
          ],
          toolbar:
            "undo redo | blocks | aidialog aishortcuts | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | importword code",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onChange={handleEditorChange}
      />
      <button onClick={handleLog}>Log editor content</button>
      <button onClick={handleAIRequest}>Request AI Response</button>
    </>
  );
}
