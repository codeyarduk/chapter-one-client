import React from "react";
import RatingCircle from "./RatingCircle";

function Rating({ rating }) {
  rating = 5;
  //console.log(rating);
  const sectionNumber = "1";
  const sectionTitle = "Let’s begin!";
  const sectionContent =
    "Starting with the most important statistic, is the overall state of your current resume.";
  const sectionBoxText = "Overall, your resume received an average rating of ";
  let arr = [
    "#E3E1EF",
    "#E3E1EF",
    "#E3E1EF",
    "#E3E1EF",
    "#E3E1EF",
    "#E3E1EF",
    "#E3E1EF",
    "#E3E1EF",
    "#E3E1EF",
    "#E3E1EF",
  ];

  let dotColour = "";
  if (rating >= 9) {
    dotColour = "#16D429";
  } else if (rating >= 7) {
    dotColour = "#DAEA1C";
  } else if (rating >= 5) {
    dotColour = "#FFD02A";
  } else if (rating >= 3) {
    dotColour = "#FB7513";
  } else {
    dotColour = "#F61E1E";
  }

  for (let dotIndex in arr) {
    console.log(dotIndex);
    if (dotIndex > rating - 1) {
      arr[dotIndex] = "#E3E1EF";
    } else {
      arr[dotIndex] = dotColour;
    }
  }

  let iterKey = 0;

  return (
    <div className="w-[336px] lg:w-[816px] xl:w-[1136]">
      <p className="text-chapterOneBlue font-extrabold xl:text-lg">
        Section {sectionNumber}
      </p>
      <p className="font-extrabold text-2xl pt-7 lg:text-[28px] lg:pt-11 xl:text-[32px]  xl:pt-16">
        {sectionTitle}
      </p>
      <p className="text-sm font-light pt-3 lg:pt-5 xl:pt-6">
        {sectionContent}
      </p>

      {/* MOBILE */}
      <div className="h-28 w-[336px] bg-chapterOneBlue mt-9 rounded-lg lg:hidden">
        <div className="ml-6 pt-6 flex flex-row justify-between w-[175px]">
          {arr.map((colour) => {
            return (
              <RatingCircle rgbColour={colour} size="12" key={iterKey++} />
            );
          })}
        </div>
        <p className="ml-6 pt-4 w-[287px] font-bold text-sm text-white leading-[16.8px]">
          {sectionBoxText} {rating}/10
        </p>
      </div>
      {/* MOBILE */}

      {/* TABLET AND DESKTOP */}
      <div className="h-16 w-[816px] bg-chapterOneBlue mt-9 rounded-lg hidden lg:flex flex-row justify-between xl:w-[1136px] xl:mt-10">
        <p className="ml-8 font-bold text-sm text-white leading-[16.8px] mt-6">
          {sectionBoxText} {rating}/10
        </p>
        <div className="mr-8 text-sm flex flex-row justify-between w-[194px] mt-6">
          {arr.map((colour) => {
            return (
              <RatingCircle rgbColour={colour} size="14" key={iterKey++} />
            );
          })}
        </div>
      </div>
      {/* TABLET AND DESKTOP */}
    </div>
  );
}

export default Rating;
