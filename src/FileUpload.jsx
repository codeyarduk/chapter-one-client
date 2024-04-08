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

  const [fileTypeValid, setFileTypeValid] = useState(true);

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

    if (file) {
      const fileType = file.type;
      const validImageTypes = ["application/pdf"];
      if (!validImageTypes.includes(fileType)) {
        // alert("Please upload a PDF file");
        setFileTypeValid(false);
        return;
      }
      setFileTypeValid(true);
    }

    setFileName(file ? file.name : "No file selected");

    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("jobTitle", jobTitle);
    const credential = Cookies.get("credential");
    setFileUploaded(true);

    fetch("https://chapteroneai.com/api/upload", {
      method: "POST",
      headers: {
        Authorization: credential,
      },
      body: formData,
    })
      // .then((response) => console.log(response))
      .then((response) => response.json()) // parse the response as text
      .then((data) => {
        setResponseObject(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    console.log(responseObject);
  }, [responseObject]);

  return (
    <div className="flex flex-col min-h-screen">
      {jobTitle && !fileUploaded && (
        <FileUploadSection
          fileInput={fileInput}
          onFileChange={onFileChange}
          fileTypeValid={fileTypeValid}
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
          <div className="w-full h-[344px] lg:h-[312px] xl:h-[442px] flex justify-center items-center bg-chapterOneLightBlue">
            <p className="w-small font-extrabold lg:pb-8 text-center text-5xl xl:text-6xl lg:w-[816px]">
              {firstName}, Here's Your Review
            </p>
          </div>
          {/* SECTION ONE: FORMATTING */}
          <div className="w-full bg-white flex justify-center py-[104px] flex-col items-center">
            <div className="w-small lg:w-[816px] xl:w-extraLarge ">
              <p className="text-2xl font-extrabold mb-4 xl:text-3.5xl">
                Formatting
              </p>
              <p>
                Here, we are just going to go over the 6 most important things
                when it comes the formatting of your resume. Going over each one
                and giving accurate suggestions based upon your resume,
                outlining what you can improve upon and what specific changes
                you can make to improve the formatting.
              </p>
            </div>
            <div className="w-small bg-white lg:w-[816px] lg:flex lg:flex-wrap lg:justify-between xl:w-extraLarge">
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Distinct Section Headings
                </p>
                <p className="">{responseObject.distinct_section_headings}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">Logical Section Flow</p>
                <p>{responseObject.logical_section_flow}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Separation of Past Work Experience
                </p>
                <p>{responseObject.separation_of_past_work_experience}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">Skill Categorization</p>
                <p>{responseObject.skill_categorization}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Clarity in Educational Background
                </p>
                <p>{responseObject.clarity_in_educational_background}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">Additional Sections</p>
                <p>{responseObject.additional_sections}</p>
              </div>
            </div>
          </div>
          {/* SECTION 2 */}
          <div className="w-full flex justify-center py-[104px] flex-col items-center">
            <div className="w-small lg:w-[816px] xl:w-extraLarge ">
              <p className="text-2xl font-extrabold mb-4 xl:text-3.5xl">
                Goal Alignment
              </p>
              <p>
                Now comes the task of optimising your resume to align with your
                goal job, or the job you want this resume to help you land. We
                do this by comparing your resume against others from the same
                field and other resumes from candidates who landed your job
              </p>
            </div>
            <div className="w-small lg:w-[816px] lg:flex lg:flex-wrap lg:justify-between xl:w-extraLarge">
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Your Given Career Objective
                </p>
                <p className="">{responseObject.your_given_career_objective}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">Relevant Work Experience</p>
                <p>{responseObject.relevant_work_experience}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Skills Section Tailored to the Job
                </p>
                <p>{responseObject.skills_section_tailored_to_the_job}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Education and Continuous Learning
                </p>
                <p>{responseObject.education_and_continuous_learning}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">Projects and Portfolio</p>
                <p>{responseObject.projects_and_portfolio}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Volunteer Work and Extracurricular Activities
                </p>
                <p>
                  {responseObject.volunteer_work_and_extracurricular_activities}
                </p>
              </div>
            </div>
          </div>
          {/* SECTION THREE: Keyword Optimisation and ATS Compatibility */}
          <div className="w-full bg-white flex justify-center py-[104px] flex-col items-center">
            <div className="w-small lg:w-[816px] xl:w-extraLarge ">
              <p className="text-2xl font-extrabold mb-4 xl:text-3.5xl">
                Keyword Optimisation and ATS Compatibility
              </p>
              <p>
                Looking at the keyword optimisation of your resume is extremely
                important if you want to get picked up by ATS systems that
                recruiters may be using to sort through resumes, below we will
                outline some specific changes you can make to your resume to
                increase their chance of being picked up by ATS systems and your
                resume being shown to recruiters.
              </p>
            </div>
            <div className="w-small bg-white lg:w-[816px] lg:flex lg:flex-wrap lg:justify-between xl:w-extraLarge">
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Job Description Alignment
                </p>
                <p className="">{responseObject.job_description_alignment}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Skills Section Optimization
                </p>
                <p>{responseObject.skills_section_optimization}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Professional Experience Keyword Integration
                </p>
                <p>
                  {responseObject.professional_experience_keyword_integration}
                </p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Education and Certifications
                </p>
                <p>{responseObject.education_and_certifications}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  Standard Formatting for ATS
                </p>
                <p>{responseObject.standard_formatting_for_ats}</p>
              </div>
              <div className="w-small xl:w-medium">
                <p className="font-bold mb-4 mt-16">
                  File Format and Naming Conventions
                </p>
                <p>{responseObject.file_format_and_naming_conventions}</p>
              </div>
            </div>
          </div>
          {/* CONCLUSION */}
          <div className="w-small lg:w-[816px] xl:w-extraLarge py-[104px]">
            <p className="text-2xl font-extrabold mb-4 xl:text-3.5xl">
              Conclusion
            </p>
            <p className="mt-7 font-light">
              In conclusion, this comprehensive review has provided invaluable
              insights into optimising your resume for success in today's
              dynamic job market. By strategically enhancing your work
              experience section, aligning with industry trends, and
              implementing tailored strategies, you're poised to stand out as a
              top candidate. Whether quantifying achievements, showcasing
              relevant skills, or offering innovative solutions, each aspect of
              your resume has been meticulously crafted to maximise impact and
              effectiveness.
            </p>
            <p className="mt-4 font-light">
              With these enhancements, you're well-equipped to navigate the
              competitive landscape with confidence and secure your desired
              career opportunities.
            </p>
            <p className="mt-4 font-light">Warm regards, Chapter One.</p>
            <p></p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default FileUpload;
