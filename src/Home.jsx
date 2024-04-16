import React from "react";
import Footer from "./Footer";
import Package from "./Packages/Package";
import StandardPackageDesktop from "./Packages/StandardPackageDesktop";
import StandardPackage from "./Packages/StandardPackage";
import { HashLink } from "react-router-hash-link";
import Rating from "./Rating";
import ProcessBlock from "./ProcessBlock";

function Home() {
  return (
    <div className=" font-sora text-black z-10">
      {/* HERO SECTION */}
      <div className=" bg-chapterOneLightBlue flex-col flex items-center pt-20 justify-center">
        <div className="overflow-hidden relative w-full flex flex-col items-center lg:items-center">
          <div className=" flex-col flex justify-center max-w-[377px] lg:pl-5 lg:max-w-[816px] lg:w-[100%] xl:max-w-[1180px]">
            <img
              src="productOfDay8.svg"
              alt="Product of the day"
              className="mt-12 h-[30px] lg:self-start"
            />
            <div className="text-center text-6xl leading-[58px] font-extrabold pt-10 lg:text-[58px] lg:leading-[68px] lg:text-left lg:pt-6 xl:text-[72px] xl:leading-[86px]">
              <p>Perfect Your Resume.</p>
              <p>Get the job.</p>
              <p>Secure your future.</p>
            </div>
            <div className="text-center self-center mt-10 font-sora leading-[19.2px] max-w-[336px] lg:text-lg lg:leading-6 lg:text-left lg:self-start lg:max-w-[640px] xl:max-w-[752px]">
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
        <div className="flex flex-row lg:w-[816px] xl:w-[1130px]">
          <p className="font-extrabold text-2xl lg:text-left">
            Our four step process
          </p>
        </div>
        <div className="flex flex-col justify-between lg:mt-4 xl:flex-row xl:w-[1138px]">
          <div className="flex flex-col justify-between lg:flex-row">
            {/* Purchase Step */}
            <ProcessBlock
              title="Purchase"
              altTag="Credit Card"
              imgSrc="credit-card.svg"
              content="Purchase a resume review."
            />

            {/* Start Review Step */}
            <ProcessBlock
              title="Start review"
              altTag="Start Arrow"
              imgSrc="start.svg"
              content="Click ‘Start my review’ in your account dashboard."
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            {/* Upload Step */}
            <ProcessBlock
              title="Upload"
              altTag="Upload"
              imgSrc="upload.svg"
              content="Enter the title of your desired job, then upload your current
          resume."
            />
            {/* Receive Step */}
            <ProcessBlock
              title="Receive"
              altTag="Review Form"
              imgSrc="review-icon.svg"
              content="Receive your review with detailed, implementable advice on what to improve."
            />
          </div>
        </div>

        <div className="flex flex-col mb-32 w-[336px] lg:w-[816px] xl:w-[1138px]">
          {" "}
          <a
            href=""
            className="font mt-12 font-extrabold underline text-chapterOneBlue self-end"
          >
            Start Now
          </a>
        </div>
      </div>
      <div className="bg-chapterOneLightBlue relative flex flex-col items-center lg:pt-8 lg:h-[452px] lg:flex-row lg:justify-center">
        <img
          src="review-showcase.png"
          alt="Review Showcase"
          className="w-[336px] mt-16 lg:hidden"
        />
        <img
          src="review-showcase-tablet.png"
          alt="Review Showcase"
          className="w-[480px] absolute mt-16 hidden lg:flex bottom-0 transform translate-x-[270px] xl:w-[560px] xl:translate-x-[296px]"
        />

        <div className="w-[336px] leading-5 mb-24 lg:w-[816px] xl:pb-20 lg:mb-0 xl:w-[1130px]">
          <p className="font-bold text-2xl mt-8 lg:text-2xl lg:w-[416px]">
            What the review includes
          </p>
          <p className="mt-5 lg:w-[416px] xl:w-[560px]">
            An initial overview providing your resume's overall rating.
          </p>
          <p className="mt-2 lg:w-[416px] xl:w-[560px]">
            Three focused sections where we delve into specific areas of your
            resume needing improvement.
          </p>
          <p className="mt-2 lg:w-[416px] xl:w-[560px]">
            Each section includes an introduction, individual rating, and six
            implementable changes.
          </p>
          <p className="mt-2 lg:w-[416px] xl:w-[560px]">
            A conclusion to finish it off.
          </p>
        </div>
      </div>

      <div
        className="flex-col mb-20 flex justify-center items-center relative bg-white z-[20]"
        id="how-it-works"
      >
        <p className="text-[32px] font-extrabold pt-28 max-w-[336px] lg:text-[40px]">
          How it works
        </p>
        <p className="text-center mt-3 mb-14 max-w-[336px] text-sm leading-4 lg:text-base lg:max-w-[700px]">
          Understand what an AI Review is in this short video from our lead
          developer David
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
          Get your resume reviewed now! For just one pound per review
        </p>
        <div className="flex flex-col lg:flex-row">
          <StandardPackage />
        </div>
      </div>
      <div className=" bg-chapterOneLightBlue flex-col flex items-center py-20">
        <div className=" flex-col flex justify-center max-w-[336px] text-2xl lg:max-w-[800px] lg:py-16 xl:text-[32px] xl:max-w-[1100px]">
          <p className="font-bold lg:hidden">
            At Chapter <span className="text-chapterOneBlue">One</span> we
            prioritise your safety and privacy. Therefore all of your uploaded
            files get deleted after use.
          </p>
          <div className="hidden lg:flex lg:flex-col w-[816px] xl:w-[1136px]">
            <p className=" font-extrabold text-[32px]  ">Data Privacy</p>
            <p className="text-sm  mt-8">
              We don’t collect any user data besides the payment information
              which we store in stripe for legal reasons and First Name, Last
              Name, and User Email, which we do not provide to any third parties
              and we delete all data a year after your most recent review.{" "}
            </p>
            <p className="text-sm mt-3">
              Resumes are deleted after uploading and OpenAI doesn’t use the
              data we send to them for training purposes. Here is a link to the
              commitments OpenAI gave regarding the data we upload to them.
              https://openai.com/enterprise-privacy
            </p>
            <p className="text-sm  mt-3">
              Additionally we will not train or use your data for any AI Fine
              Tuning, or anything other than legal obligations.
            </p>
          </div>
        </div>
      </div>
      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

export default Home;
