import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import "./App.css";
import Cookies from "js-cookie";
import Footer from "./Footer";
import FileUploadSection from "./Upload Components/FileUploadSection";
import JobSpecification from "./Upload Components/JobSpec";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [review, setReview] = useState("");
  const [review2, setReview2] = useState("");
  const [tempJobTitle, setTempJobTitle] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [inputSelected, setInputSelected] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const [responseObject, setResponseObject] = useState({});

  // COOKIES USER v

  const navigate = useNavigate();

  const credential = Cookies.get("credential");
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  const email = user?.email;
  const firstName = user?.name;
  const lastName = user?.lastName;
  const uses = user?.uses;

  console.log("THIS IS: " + credential);
  useEffect(() => {
    if (!credential || !user) {
      navigate("/login");
    }
  }, []);

  if (!user) {
    return null; // Don't render the component
  }

  // COOKIES USER ^

  // TEST CODE FOR UPLOADING FILE

  const fileInput = useRef();
  const [fileName, setFileName] = useState("");

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

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    const credential = Cookies.get("credential");
    setFileUploaded(true);

    fetch("https://138.68.181.103:3000/upload", {
      method: "POST",
      headers: {
        Authorization: credential,
      },
      body: formData,
    })
      .then((response) => response.json()) // parse the response as text
      .then((data) => {
        // console.log(data);
        setResponseObject(data);
        // data is the response string from the server
        // console.log(responseObject);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    console.log(responseObject);
  }, [responseObject]);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  return (
    <div>
      {jobTitle && !fileUploaded && (
        <FileUploadSection
          fileInput={fileInput}
          onFileChange={onFileChange}
          handleFileUpload={handleFileUpload}
          onFileUpload={onFileUpload}
          fileName={fileName}
          review={review}
        />
      )}
      {!jobTitle && (
        <JobSpecification
          tempJobTitle={tempJobTitle}
          handleInputChange={handleInputChange}
          setInputSelected={setInputSelected}
          inputSelected={inputSelected}
          handleContinueClick={handleContinueClick}
        />
      )}
      {fileUploaded && (
        <div className="flex pt-[72px] bg-chapterOneLightBlue justify-center flex-col items-center font-sora">
          <div className="w-full h-[344px] flex justify-center items-center bg-chapterOneLightBlue">
            <p className="w-small font-extrabold text-center text-5xl">
              {firstName}, Here's Your Review
            </p>
          </div>
          <div className="w-full bg-white flex justify-center flex-col items-center">
            <div className="w-small bg-white mt-[104px]">
              <p className="text-2xl font-extrabold mb-4">
                Work Experience Analysis
              </p>
              <p>{responseObject.ats_formatting}</p>
              <p>{}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
