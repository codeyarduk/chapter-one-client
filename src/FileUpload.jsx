import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Cookies from "js-cookie";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [review, setReview] = useState("");

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    const credential = Cookies.get("credential");

    fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: {
        Authorization: credential,
      },
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
    <div className="flex flex-col justify-start items-start text-white bg-[#10061f] h-svh p-10 w-full">
      <p className="text-8xl font-archivoBlack text-[#fbf5ec] text-start font-extrabold tracking-wide pt-20">
        Chapter One
      </p>
      <p className="mb-10 text-start ml-2 mt-10 text-2xl font-medium italic">
        Start the next chapter of your career with the power of AI
      </p>
      <input type="file" onChange={onFileChange} className="" />
      <button
        onClick={onFileUpload}
        className="py-4 px-20 border-2  mt-10 rounded-lg mb-10"
      >
        Upload
      </button>

      <p>{review}</p>
    </div>
  );
};

export default FileUpload;
