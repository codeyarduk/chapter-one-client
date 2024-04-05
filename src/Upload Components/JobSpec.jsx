// JobSpecification.jsx
import React from "react";
import Footer from "../Footer"; // Assuming Footer is in the same directory

const JobSpecification = ({
  tempJobTitle,
  handleInputChange,
  setInputSelected,
  inputSelected,
  handleContinueClick,
}) => {
  return (
    <div>
      <div className="pt-extraLarge flex justify-center font-sora flex-col items-center">
        <div className="w-small lg:w-medium xl:w-[560px]">
          <p className="font-extrabold text-3.5xl text-center">
            Job Specification
          </p>
          <p className="font-light text-sm text-center mt-4 lg:text-base">
            Please enter the job title that you will be applying for.
          </p>
        </div>
        <div className="flex flex-col w-small lg:w-medium justify-center items-center mt-20">
          <input
            type="text"
            value={tempJobTitle}
            onChange={handleInputChange}
            onFocus={() => setInputSelected(true)}
            placeholder="Enter your job title"
            className={`border-1.6 caret-chapterOneBlue border-chapterOneLightBlue w-small lg:w-medium xl:w-[560px] h-[45px] font-light bg-chapterOneSuperLightBlue px-10 rounded-xl ${
              inputSelected
                ? "border-chapterOneBlue"
                : "border-chapterOneLightBlue"
            }`}
          />
          <button
            onClick={handleContinueClick}
            className="w-small font-light h-[45px] text-white bg-chapterOneBlue rounded-xl mt-[10px] mb-200 lg:w-medium xl:w-[560px]"
          >
            Continue
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobSpecification;
