import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [review, setReview] = useState("");

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");

        reader.read().then(function process({ done, value }) {
          if (done) return;
          setReview((prevReview) => prevReview + decoder.decode(value));
          return reader.read().then(process);
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col justify-start items-start">
      <input type="file" onChange={onFileChange} className=""/>
      <button onClick={onFileUpload} className="py-4 px-20 border-2  mt-10 rounded-lg mb-10">
        Upload
      </button>

      <p>{review}</p>
    </div>
  );
};

export default FileUpload;
