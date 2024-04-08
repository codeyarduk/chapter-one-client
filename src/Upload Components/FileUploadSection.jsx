import React from "react";
import Footer from "../Footer";

const FileUploadSection = ({
  fileInput,
  onFileChange,
  handleFileUpload,
  onFileUpload,
  fileName,
  review,
  fileUploaded,
}) => {
  return (
    <div className="flex-grow">
      <div className="pt-extraLarge flex justify-center font-sora">
        <div className="w-small flex flex-col justify-center items-center text-center">
          <p className="font-extrabold text-3.5xl text-center">
            Resume Submission
          </p>
          <p className="font-light text-sm text-center mt-4 lg:text-base">
            Please upload your current resume in a pdf form to be reviewed.
          </p>
          <input
            type="file"
            ref={fileInput}
            onChange={onFileChange}
            style={{ display: "none" }}
          />
          {fileName && (
            <button
              onClick={handleFileUpload}
              className="mt-20 border-1.6 border-[#0E9F1D] w-small text-sm text-[#0E9F1D] lg:w-medium xl:w-[560px] h-[45px] font-light bg-[#F2FFF4] px-10 rounded-xl "
            >
              Your upload was successful
            </button>
          )}
          {!fileName && (
            <button
              onClick={handleFileUpload}
              className="mt-20 border-1.6 border-chapterOneBlue w-small text-sm text-chapterOneBlue lg:w-medium xl:w-[560px] h-[45px] font-light bg-chapterOneSuperLightBlue px-10 rounded-xl "
            >
              Upload pdf
            </button>
          )}

          <button
            onClick={onFileUpload}
            className="w-small font-light h-[45px] text-white bg-chapterOneBlue rounded-xl mt-[10px] mb-200 lg:w-medium xl:w-[560px]"
          >
            Continue
          </button>
          {/* <p>{fileName}</p> */}
          {/* <p>{review}</p> */}
        </div>
      </div>
    </div>
  );
};

export default FileUploadSection;
