import React from "react";
import Footer from "./Footer";
import Package from "./Packages/Package";
import StandardPackageDesktop from "./Packages/StandardPackageDesktop";
import StandardPackageTablet from "./Packages/StandardPackageTablet";
import { HashLink } from "react-router-hash-link";
import Rating from "./Rating";

function Home() {
  return (
    <div className=" font-sora text-black z-10">
      {/* HERO SECTION */}
      <div className=" bg-chapterOneLightBlue flex-col flex items-center pt-20 justify-center">
        <div className="overflow-hidden relative w-full flex flex-col items-center lg:items-center">
          <img src="productOfDay8.svg" alt="Product of the day" />
          <div className=" flex-col flex justify-center max-w-[377px] lg:pl-5 lg:max-w-[816px] lg:w-[100%] xl:max-w-[1180px]">
            <div className="text-center text-6xl leading-[58px] font-extrabold pt-10 lg:text-[58px] lg:leading-[68px] lg:pt-[108px] xl:text-[72px] xl:leading-[86px]">
              <p>Perfect Your Resume.</p>
              <p>Stand out in the crowd.</p>
              <p>Get The Job.</p>
            </div>
            <div className="text-center self-center mt-10 font-sora leading-[19.2px] max-w-[336px] lg:text-lg lg:leading-6 lg:max-w-[640px] xl:max-w-[752px]">
              <p>
                We provide{" "}
                <span className="font-semibold">
                  easy to use in depth resume reviews
                </span>{" "}
                that will help you with job application success, in a highly
                competitive market. Learn how we do this below.
              </p>
              <p className="pt-5 text-sm lg:text-base xl:mb-36">
                Powered by AI.
              </p>
            </div>

            <HashLink
              to="/#packages"
              className="py-3 mt-16 mb-24 text-sm w-[336px] text-center self-center text-white rounded-[10px] lg:mr-5 bg-chapterOneBlue lg:self-start lg:py-[14px] lg:w-[296px] xl:hidden"
            >
              View Packages
            </HashLink>
            <img
              src="hero-image.svg"
              alt=""
              className="absolute top-1/2 left-[60%] transform translate-x-[230px] translate-y-[-230px] hidden lg:block z-[10] "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-32">
        <p className="font-extrabold text-2xl self-center">
          Our four step process
        </p>
        {/* Purchase Step */}
        <div className="flex flex-col pt-5 w-[336px] h-72 bg-chapterOneSuperLightBlue mt-14 rounded-lg items-center">
          <img
            src="credit-card.svg"
            alt="Credit Card"
            className="self-center w-[67px] mt-7"
          />
          <p className="font-bold text-lg mt-8">Purchase</p>
          <p className="font-light text-sm mt-1 w-72 self-center text-center">
            Purchase a resume review.
          </p>
        </div>
        {/* Start Review Step */}
        <div className="flex flex-col pt-5 w-[336px] h-72 bg-chapterOneSuperLightBlue rounded-lg mt-4 items-center">
          <img
            src="credit-card.svg"
            alt="Credit Card"
            className="self-center w-[67px] mt-7"
          />
          <p className="font-bold text-lg mt-8">Start review</p>
          <p className="font-light text-sm mt-1 w-72 self-center text-center">
            Click ‘Start my review’ in your account dashboard.
          </p>
        </div>
        {/* Upload Step */}
        <div className="flex flex-col pt-5 w-[336px] h-72 bg-chapterOneSuperLightBlue rounded-lg mt-4 items-center">
          <img
            src="start.svg"
            alt="Credit Card"
            className="self-center w-[67px] mt-7"
          />
          <p className="font-bold text-lg mt-8">Upload</p>
          <p className="font-light text-sm mt-1 w-72 self-center text-center">
            Enter the title of your desired job, then upload your current
            resume.
          </p>
        </div>
        {/* Receive Step */}
        <div className="flex flex-col pt-5 w-[336px] h-72 bg-chapterOneSuperLightBlue rounded-lg mt-4 items-center">
          <img
            src="review-icon.svg"
            alt="Credit Card"
            className="self-center w-[67px] mt-7"
          />
          <p className="font-bold text-lg mt-8">Receive </p>
          <p className="font-light text-sm mt-1 w-72 self-center text-center">
            Receive your review with detailed, implementable advice on what to
            improve.
          </p>
        </div>
        <div className="flex flex-col w-[336px]">
          {" "}
          <a
            href=""
            className="font mt-12 font-extrabold underline text-chapterOneBlue self-end"
          >
            Start Now
          </a>
        </div>
      </div>
      <div className="bg-chapterOneLightBlue flex flex-col items-center">
        <img
          src="review-showcase.png"
          alt="Review Showcase"
          className="w-[336px] mt-16"
        />

        <div className="w-[336px] mb-24 leading-5">
          <p className="font-bold  text-2xl mt-8">What the review includes</p>
          <p className="mt-5">
            An initial overview providing your resume's overall rating.
          </p>
          <p className="mt-2">
            Three focused sections where we delve into specific areas of your
            resume needing improvement.
          </p>
          <p className="mt-2">
            Each section includes an introduction, individual rating, and six
            implementable changes.
          </p>
          <p className="mt-2">A conclusion to finish it off.</p>
        </div>
      </div>

      <div
        className="flex-col mb-20 flex justify-center items-center relative bg-white z-[20]"
        id="how-it-works"
      >
        <p className="text-[32px] font-extrabold pt-28 max-w-[336px] lg:text-[40px]">
          How it works
        </p>
        <p className="text-center mt-3 mb-14 max-w-[336px] text-sm leading-4 lg:text-base lg:max-w-[600px]">
          Watch our video to understand the process of how we work
        </p>
        {/* <img
          src="temp_video.png"
          alt=""
          className="w-[336px] rounded-lg lg:w-[820px]"
        /> */}
        <iframe
          className="w-[336px] h-[189px] lg:w-[820px] lg:h-[461px] border-0 rounded-lg"
          src="https://www.youtube.com/embed/kRo3RhIZU4w?si=sgzIXPi3k5MFyHj0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <HashLink
          to="/#packages"
          className="text-chapterOneBlue text-sm font-semibold mt-6 lg:hidden"
        >
          View Packages
        </HashLink>
        <HashLink
          to="/#packages"
          className=" mt-12 mb-24  text-center text-white  hidden rounded-[10px] mr-5 bg-chapterOneBlue self-center py-[12px] w-[296px] lg:block lg:w-[368px]"
        >
          View Packages
        </HashLink>
        <div className=" bg-chapterOneLightBlue absolute h-52 top-[356px] w-[100%] -z-10 lg:h-[545px]"></div>
      </div>

      {/* OUR PACKAGES SECTION */}

      <div
        className="flex-col mb-[160px] flex justify-center items-center relative "
        id="packages"
      >
        <p className="text-[32px] font-extrabold pt-24 max-w-[336px] lg:text-[40px]">
          Pricing
        </p>
        <p className="text-center mt-3 mb-14 max-w-[336px] text-sm leading-4 lg:text-base lg:max-w-[800px]">
          One pound for one review
        </p>
        <div className="flex flex-col lg:flex-row">
          {/* Basic Package */}
          {/* <Package
            packageID={1}
            title={"Basic"}
            price={"4.95"}
            description={"Receive 1 comprehensive resume review and analysis."}
          /> */}
          {/* Standard Package */}
          <StandardPackageDesktop packageID={2} />
          {/* Premium Package */}
          {/* <Package
            packageID={3}
            title={"Premium"}
            price={"19.95"}
            description={"Receive 5 comprehensive resume reviews and analyses."}
          /> */}
        </div>
        {/* Standard Package (Tablet View Only) */}
        <StandardPackageTablet packageID={2} />
      </div>
      <div className=" bg-chapterOneLightBlue flex-col flex items-center py-20">
        <div className=" flex-col flex justify-center max-w-[336px] text-2xl lg:max-w-[800px] lg:py-16 xl:text-[32px] xl:max-w-[1100px]">
          <p>
            At Chapter <span className="text-chapterOneBlue">One</span> we
            prioritise your safety and privacy. Therefore all of your uploaded
            files get deleted after use.
          </p>
        </div>
      </div>
      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

export default Home;
