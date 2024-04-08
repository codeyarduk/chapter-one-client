import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Package from "./Packages/Package";
import StandardPackageDesktop from "./Packages/StandardPackageDesktop";
import StandardPackageTablet from "./Packages/StandardPackageTablet";
import { HashLink } from "react-router-hash-link";
function Home() {
  return (
    <div className=" font-sora text-black z-10">
      {/* HERO SECTION */}
      <div className=" bg-chapterOneLightBlue flex-col flex items-center pt-20 justify-center">
        <div className="overflow-hidden relative w-full flex flex-col items-center lg:items-center">
          <div className=" flex-col flex justify-center pl-5 max-w-[377px] lg:max-w-[816px] lg:w-[100%] xl:max-w-[1180px]">
            <div className=" text-5xl leading-[58px] font-extrabold pt-10 lg:text-[64px] lg:leading-[76px] lg:pt-[108px] xl:text-[72px] xl:leading-[86px]">
              <p>Hone Your Resume.</p>
              <p>Get The Job.</p>
              <p>Secure Your Future.</p>
            </div>
            <div className="mt-10 font-sora leading-[19.2px] max-w-[336px] lg:text-lg lg:leading-6 lg:max-w-[640px]">
              <p>
                We provide{" "}
                <span className="font-semibold">
                  Implementable Expert Resume Reviews
                </span>{" "}
                that will help you with job application success and standout
                proficiency.
              </p>
              <p className="pt-5 text-sm lg:text-base xl:mb-36">
                Powered by AI.
              </p>
            </div>
            <button className="py-3 mt-16 mb-24 text-sm w-[336px] text-center text-white self-start rounded-[10px] mr-5 bg-chapterOneBlue lg:self-start lg:py-[14px] lg:w-[296px] xl:hidden">
              View Packages
            </button>
            <img
              src="hero-image.svg"
              alt=""
              className="absolute top-1/2 left-[60%] transform translate-x-[230px] translate-y-[-230px] hidden lg:block z-[10] "
            />
          </div>
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
        <img
          src="temp_video.png"
          alt=""
          className="w-[336px] rounded-lg lg:w-[820px]"
        />
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
      {/* packageID, title, price, description */}

      <div
        className="flex-col mb-20 flex justify-center items-center relative "
        id="packages"
      >
        <p className="text-[32px] font-extrabold pt-24 max-w-[336px] lg:text-[40px]">
          Our packages
        </p>
        <p className="text-center mt-3 mb-14 max-w-[336px] text-sm leading-4 lg:text-base lg:max-w-[800px]">
          Check out the range of custom packages we offer to see which suits
          your needs best!
        </p>
        <div className="flex flex-col lg:flex-row">
          {/* Basic Package */}
          <Package
            packageID={1}
            title={"Basic"}
            price={"49"}
            description={
              "Receive up to 5 comprehensive resume reviews and analyses."
            }
          />
          {/* Standard Package */}
          {/* <div className="mx-2 w-[336px] h-[400px] bg-chapterOneBlue flex flex-col text-center items-center text-chapterOneLightBlue rounded-xl mt-4 lg:w-[400px] lg:h-[474px] lg:hidden xl:flex  xl:w-[368px] xl:h-[535px]">
            <p className="font-bold text-xl mt-16 lg:text-[22px] lg:mt-20 xl:text-2xl">
              Standard
            </p>
            <p className="font-extrabold text-5xl mt-10 lg:text-[56px] lg:mt-14 xl:text-[64px]">
              £99
            </p>
            <p className="font-normal text-sm max-w-72 mt-10 lg:text-[16px] lg:mt-14">
              Receive up to 25 comprehensive resume reviews and analyses.
            </p>
            <button className="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-[#E4DFFA] self-center rounded-[10px] text-chapterOneBlue  lg:text-base lg:w-[338px] lg:mt-10 xl:w-[304px]">
              Buy now
            </button>
          </div> */}
          <StandardPackageDesktop packageID={2} />
          {/* Premium Package */}
          <Package
            packageID={3}
            title={"Premium"}
            price={"149"}
            description={
              "Receive up to 100 comprehensive resume reviews and analyses."
            }
          />
        </div>
        {/* Standard Package (Tablet View Only) */}
        {/* <div className="mx-2 w-[336px] h-[400px] bg-chapterOneBlue flex-col text-center items-center text-chapterOneLightBlue rounded-xl mt-6 hidden lg:w-[400px] lg:h-[474px] lg:flex xl:hidden">
          <p className="font-bold text-xl mt-16 lg:text-[22px] lg:mt-20">
            Standard
          </p>
          <p className="font-extrabold text-5xl mt-10 lg:text-[56px] lg:mt-14">
            £99
          </p>
          <div className=" flex justify-center">
            <p className="font-normal text-sm max-w-72 mt-10 lg:text-[16px] lg:mt-14">
              Receive up to 25 comprehensive resume reviews and analyses.
            </p>
          </div>
          <button className="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-white self-center rounded-[10px] text-chapterOneBlue  lg:text-base lg:w-[338px] lg:mt-10">
            Buy now
          </button>
        </div> */}
        <StandardPackageTablet packageID={2} />
      </div>
      <div className=" bg-chapterOneLightBlue flex-col flex items-center py-20">
        <div className=" flex-col flex justify-center max-w-[336px] text-2xl lg:max-w-[800px] lg:py-16 xl:text-[32px] xl:max-w-[1100px]">
          <p>
            At Chapter <span className="text-chapterOneBlue">One</span> we
            prioritise your safety and privacy. Therefore all of your personal
            data gets deleted after use.
          </p>
        </div>
      </div>
      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

export default Home;
