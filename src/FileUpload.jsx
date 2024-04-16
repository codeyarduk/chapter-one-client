import React, { useState, useEffect, useRef, CSSProperties } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import axios from "axios";
import "./App.css";
import Cookies from "js-cookie";
import Footer from "./Footer";
import FileUploadSection from "./Upload Components/FileUploadSection";
import JobSpecification from "./Upload Components/JobSpec";
import Rating from "./Rating";
import RatingSubHeading from "./RatingSubHeading";
import { jwtDecode as jwt_decode } from "jwt-decode";

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

  let [color, setColor] = useState("#141359");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: { color },
  };
  // COOKIES USER v

  const navigate = useNavigate();

  const credential = Cookies.get("credential");

  // console.log("CRED: ", jwt_decode(credentials));
  const user = credential ? jwt_decode(credential) : null;
  console.log(user?.email);
  const firstName = user?.name;

  console.log("THIS IS: " + credential);
  useEffect(() => {
    if (!credential) {
      navigate("/login");
    }
  }, []);

  // if (!user) {
  //   return null; // Don't render the component
  // }

  // COOKIES USER ^

  // TEST CODE FOR UPLOADING FILE

  const fileInput = useRef();
  const [fileName, setFileName] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [formatRating, setFormatRating] = useState(0);
  const [goalRating, setGoalRating] = useState(0);
  const [keyWordRating, setKeyWordRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);

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
  const handleInputChange = (event) => {
    setTempJobTitle(event.target.value);
  };

  const handleContinueClick = () => {
    // Handle the continue button click here
    setJobTitle(tempJobTitle);
  };
  useEffect(() => {
    if (!credential) {
      navigate("/login");
    }
  }, [jobTitle]);

  const onFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileType = file.type;
      const validImageTypes = ["application/pdf"];
      if (!validImageTypes.includes(fileType)) {
        setFileTypeValid(false);
        return;
      }
      setFileTypeValid(true);
    }

    setFileName(file ? file.name : "No file selected");

    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    if (!file) {
      alert("Please upload a file");
      return;
    }

    setIsLoading(true);
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
      .then((response) => response.json()) // parse the response as text
      .then((data) => {
        setResponseObject(data);
        setFormatRating(parseInt(data.formatting_rating[0]));
        setGoalRating(parseInt(data.goal_alignment_rating[0]));
        setKeyWordRating(parseInt(data.key_word_rating[0]));
        const overallRating = Math.round(
          (parseInt(data.formatting_rating[0]) +
            parseInt(data.goal_alignment_rating[0]) +
            parseInt(data.key_word_rating[0])) /
            3
        );
        setOverallRating(overallRating);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(true);
      });
  };

  // useEffect(() => {
  //   if (!credential) {
  //     navigate("/login");
  //   }
  //   console.log(responseObject);
  // }, [responseObject]);

  return (
    <div>
      {isLoading ? (
        <div className="min-h-screen flex items-center pb-[300px] justify-center">
          <ClimbingBoxLoader
            color={color}
            loading={isLoading}
            cssOverride={override}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
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
                  {/* {firstName}, Here's Your Review */} Your Resume Review
                </p>
              </div>
              <div className="w-full py-[104px] lg:py-36 xl:py-40 flex justify-center items-center bg-white">
                <div className=" w-small lg:w-[816px] xl:w-extraLarge">
                  <p className="font-extrabold text-2xl text-center">
                    {firstName}, here's an outline of what's coming
                  </p>
                  <p className="text-center mt-4 lg:mt-5">
                    This review consists of four sections: the first section
                    provides an overall rating of how good your resume is for
                    the job you are looking to get, the other three focus on
                    specific areas of your resume that can be improved. Within
                    each of the three sections, you'll find six sub headings
                    that will outline where you can implement changes to better
                    your resume.
                  </p>
                  <p></p>
                </div>
              </div>

              {/* SECTION ONE: FORMATTING */}
              <Rating
                rating={overallRating}
                sectionNumber={"1"}
                sectionTitle="Let's begin!"
                sectionContent={
                  "Starting with the most important statistic, is the overall state of your current resume."
                }
                sectionBoxText={"Overall, your resume received a rating of"}
              />
              <div className="w-full bg-white pb-[104px] flex justify-center flex-col items-center">
                <RatingSubHeading
                  rating={formatRating}
                  sectionNumber={"2"}
                  sectionTitle="Formatting"
                  sectionContent={""}
                  sectionBoxText={
                    "The formatting of your resume received a rating of"
                  }
                />
                <div className="w-small lg:w-[816px] xl:w-extraLarge ">
                  <p className="text-xl font-extrabold mb-4 xl:text-2xl">
                    Overview
                  </p>
                  <p>
                    Here, we are just going to go over the 6 most important
                    things when it comes the formatting of your resume. Going
                    over each one and giving accurate suggestions based upon
                    your resume, outlining what you can improve upon and what
                    specific changes you can make to improve the formatting.
                  </p>
                </div>
                <div className="w-small bg-white lg:w-[816px] lg:flex lg:flex-wrap lg:justify-between xl:w-extraLarge">
                  <div className="w-small xl:w-medium">
                    <p className="font-bold mb-4 mt-16">
                      Distinct Section Headings
                    </p>
                    <p className="">
                      {responseObject.distinct_section_headings}
                    </p>
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
              <div className="w-full flex justify-center pb-[104px] flex-col items-center">
                <RatingSubHeading
                  rating={goalRating}
                  sectionNumber={"3"}
                  sectionTitle="Goal Alignment"
                  sectionContent={""}
                  sectionBoxText={
                    "The goal alignment of your resume received a rating of"
                  }
                />
                <div className="w-small lg:w-[816px] xl:w-extraLarge ">
                  <p className="text-xl font-extrabold mb-4 xl:text-2xl">
                    Overview
                  </p>
                  <p>
                    Now comes the task of optimising your resume to align with
                    your goal job, or the job you want this resume to help you
                    land. We do this by comparing your resume against others
                    from the same field and other resumes from candidates who
                    landed your job
                  </p>
                </div>
                <div className="w-small lg:w-[816px] lg:flex lg:flex-wrap lg:justify-between xl:w-extraLarge">
                  <div className="w-small xl:w-medium">
                    <p className="font-bold mb-4 mt-16">
                      Your Given Career Objective
                    </p>
                    <p className="">
                      {responseObject.your_given_career_objective}
                    </p>
                  </div>
                  <div className="w-small xl:w-medium">
                    <p className="font-bold mb-4 mt-16">
                      Relevant Work Experience
                    </p>
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
                    <p className="font-bold mb-4 mt-16">
                      Projects and Portfolio
                    </p>
                    <p>{responseObject.projects_and_portfolio}</p>
                  </div>
                  <div className="w-small xl:w-medium">
                    <p className="font-bold mb-4 mt-16">
                      Volunteer Work and Extracurricular Activities
                    </p>
                    <p>
                      {
                        responseObject.volunteer_work_and_extracurricular_activities
                      }
                    </p>
                  </div>
                </div>
              </div>
              {/* SECTION THREE: Keyword Optimisation and ATS Compatibility */}
              <div className="w-full bg-white flex justify-center pb-[104px] flex-col items-center">
                <RatingSubHeading
                  rating={keyWordRating}
                  sectionNumber={"4"}
                  sectionTitle="Keyword Optimisation and ATS Compatibility"
                  sectionContent={""}
                  sectionBoxText={
                    "The keyword optimisation of your resume received a rating of"
                  }
                />
                <div className="w-small lg:w-[816px] xl:w-extraLarge ">
                  <p className="text-xl font-extrabold mb-4 xl:text-2xl">
                    Overview
                  </p>
                  <p>
                    Looking at the keyword optimisation of your resume is
                    extremely important if you want to get picked up by ATS
                    systems that recruiters may be using to sort through
                    resumes, below we will outline some specific changes you can
                    make to your resume to increase their chance of being picked
                    up by ATS systems and your resume being shown to recruiters.
                  </p>
                </div>
                <div className="w-small bg-white lg:w-[816px] lg:flex lg:flex-wrap lg:justify-between xl:w-extraLarge">
                  <div className="w-small xl:w-medium">
                    <p className="font-bold mb-4 mt-16">
                      Job Description Alignment
                    </p>
                    <p className="">
                      {responseObject.job_description_alignment}
                    </p>
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
                      {
                        responseObject.professional_experience_keyword_integration
                      }
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
                  Thank you for using our resume analysis tool. Our goal is to
                  empower you with insights that can help you refine your resume
                  and stand out in your job search. We hope that the feedback
                  provided has been valuable in highlighting areas of strength
                  and opportunities for improvement. Remember, a well-crafted
                  resume is just the first step in your professional journey.
                  Keep learning, keep improving, and keep striving for your
                  goals.
                </p>
                <p className="mt-4 font-light"></p>
                <p className="mt-4 font-light">Warm regards, Chapter One.</p>
                <p></p>
              </div>
            </div>
          )}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
