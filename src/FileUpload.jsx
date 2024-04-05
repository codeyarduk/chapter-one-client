import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import Cookies from "js-cookie";
import Footer from "./Footer";
import FileUploadSection from "./Upload Components/FileUploadSection";
import JobSpecification from "./Upload Components/JobSpec";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [review, setReview] = useState("");
  const [tempJobTitle, setTempJobTitle] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [inputSelected, setInputSelected] = useState(false);

  // TEST CODE FOR UPLOADING FILE

  const fileInput = useRef();
  const [fileName, setFileName] = useState("No file selected");

  const handleFileUpload = () => {
    fileInput.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file selected");
    // Handle the file here
    setFile(event.target.files[0]);
  };

  // TEST CODE FOR UPLOADING FILE

  // setJobTitle("Software Engineer");
  const handleInputChange = (event) => {
    setTempJobTitle(event.target.value);
  };

  const handleContinueClick = () => {
    // Handle the continue button click here
    setJobTitle(tempJobTitle);
  };
  useEffect(() => {
    // setJobTitle("");
  }, [jobTitle]);

  const onFileChange = (event) => {
    const file = event.target.files[0];

    setFileName(file ? file.name : "No file selected");

    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    const credential = Cookies.get("credential");

    fetch("http://138.68.181.103:3000/upload", {
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

  return jobTitle ? (
    <div>
      <FileUploadSection
        fileInput={fileInput}
        onFileChange={onFileChange}
        handleFileUpload={handleFileUpload}
        onFileUpload={onFileUpload}
        fileName={fileName}
        review={review}
      />
    </div>
  ) : (
    <JobSpecification
      tempJobTitle={tempJobTitle}
      handleInputChange={handleInputChange}
      setInputSelected={setInputSelected}
      inputSelected={inputSelected}
      handleContinueClick={handleContinueClick}
    />
  );
};

export default FileUpload;
