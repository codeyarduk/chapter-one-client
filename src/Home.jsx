import React from "react";

function Home() {
  return (
    <div className=" font-sora text-black">
      <div className=" bg-chapterOneLightBlue flex-col flex items-center pt-20 justify-center">
        <div className="overflow-hidden relative w-full flex flex-col items-center lg:items-center">
          <div className=" flex-col flex justify-center pl-5 max-w-[377px] lg:max-w-[816px] lg:w-[100%] xl:max-w-[1180px]">
            <div className=" text-5xl leading-[58px] font-extrabold pt-10 lg:text-[64px] lg:leading-[76px] lg:pt-[108px] xl:text-[72px] xl:leading-[86px]">
              <p>Hone Your Resume.</p>
              <p>Get The Job.</p>
              <p>Secure Your Future.</p>
            </div>
            <div className="mt-10 font-sora leading-[19.2px] max-w-[300px] lg:text-lg lg:leading-6 lg:max-w-[640px]">
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
            <button class="py-3 mt-16 mb-24 text-sm w-[336px] text-center text-white self-start rounded-[10px] mr-5 bg-chapterOneBlue lg:self-start lg:py-[14px] lg:w-[296px] xl:hidden">
              Login or Signup
            </button>
            <img
              src="src\assets\hero-image.svg"
              alt=""
              className="absolute top-1/2 left-[60%] transform translate-x-[230px] translate-y-[-230px] hidden lg:block z-[10] "
            />
          </div>
        </div>
      </div>
      <div className="flex-col mb-20 flex justify-center items-center relative bg-white z-[20]">
        <p className="text-[32px] font-extrabold pt-28 max-w-[336px] lg:text-[40px]">
          How it works
        </p>
        <p className="text-center mt-3 mb-14 max-w-[336px] text-sm leading-4 lg:text-base lg:max-w-[600px]">
          Watch our video to understand the process of how we work
        </p>
        <img
          src="src\assets\temp_video.png"
          alt=""
          className="w-[336px] rounded-lg lg:w-[820px]"
        />
        <a
          href=""
          className="text-chapterOneBlue text-sm font-semibold mt-6 lg:hidden"
        >
          View Packages
        </a>
        <button class=" mt-12 mb-24  text-center text-white  hidden rounded-[10px] mr-5 bg-chapterOneBlue self-center py-[12px] w-[296px] lg:block lg:w-[368px]">
          View Packages
        </button>
        <div className=" bg-chapterOneLightBlue absolute h-52 top-[356px] w-[100%] -z-10 lg:h-[545px]"></div>
      </div>

      {/* OUR PACKAGES SECTION */}
      <div className="flex-col mb-20 flex justify-center items-center relative ">
        <p className="text-[32px] font-extrabold pt-24 max-w-[336px] lg:text-[40px]">
          Our packages
        </p>
        <p className="text-center mt-3 mb-14 max-w-[336px] text-sm leading-4 lg:text-base lg:max-w-[800px]">
          Check out the range of custom packages we offer to see which suits
          your needs best!
        </p>
        <div className="flex flex-col lg:flex-row">
          {/* Basic Package */}
          <div className="mx-2 w-[336px] h-[400px] bg-chapterOneLightBlue flex flex-col text-center items-center text-chapterOneBlue rounded-xl mt-4 lg:w-[400px] lg:h-[474px] xl:w-[368px] xl:h-[487px] xl:mt-10">
            <p className="font-bold text-xl mt-16 lg:text-[22px] lg:mt-20 xl:text-2xl">
              Basic
            </p>
            <p className="font-extrabold text-5xl mt-10 lg:text-[56px] lg:mt-14 xl:text-[64px]">
              £49
            </p>
            <p className="font-normal text-sm max-w-72 mt-10 lg:text-[16px] lg:mt-14">
              Receive up to 5 comprehensive resume reviews and analyses.
            </p>
            <button class="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-[#E4DFFA] self-center rounded-[10px] text-chapterOneBlue lg:text-base lg:w-[338px] lg:mt-10 xl:w-[304px]">
              Buy now
            </button>
          </div>

          {/* Standard Package */}
          <div className="mx-2 w-[336px] h-[400px] bg-chapterOneBlue flex flex-col text-center items-center text-chapterOneLightBlue rounded-xl mt-4 lg:w-[400px] lg:h-[474px] lg:hidden xl:flex  xl:w-[368px] xl:h-[535px]">
            <p className="font-bold text-xl mt-16 lg:text-[22px] lg:mt-20 xl:text-2xl">
              Standard
            </p>
            <p className="font-extrabold text-5xl mt-10 lg:text-[56px] lg:mt-14 xl:text-[64px]">
              £99
            </p>
            <p className="font-normal text-sm max-w-72 mt-10 lg:text-[16px] lg:mt-14">
              Receive up to 25 comprehensive resume reviews and analyses.
            </p>
            <button class="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-[#E4DFFA] self-center rounded-[10px] text-chapterOneBlue  lg:text-base lg:w-[338px] lg:mt-10 xl:w-[304px]">
              Buy now
            </button>
          </div>

          {/* Premium Package */}
          <div className="mx-2 w-[336px] h-[400px] bg-chapterOneLightBlue flex flex-col text-center items-center text-chapterOneBlue rounded-xl mt-4  lg:w-[400px] lg:h-[474px]  xl:w-[368px] xl:h-[487px] xl:mt-10">
            <p className="font-bold text-xl mt-16 lg:text-[22px] lg:mt-20 xl:text-2xl">
              Premium
            </p>
            <p className="font-extrabold text-5xl mt-10 lg:text-[56px] lg:mt-14 xl:text-[64px]">
              £149
            </p>
            <p className="font-normal text-sm max-w-72 mt-10 lg:text-[16px] lg:mt-14">
              Receive up to 100 comprehensive resume reviews and analyses.
            </p>
            <button class="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-[#E4DFFA] self-center rounded-[10px] text-chapterOneBlue  lg:text-base lg:w-[338px] lg:mt-10 xl:w-[304px]">
              Buy now
            </button>
          </div>
        </div>
        {/* Standard Package (Tablet View Only) */}
        <div className="mx-2 w-[336px] h-[400px] bg-chapterOneBlue flex-col text-center items-center text-chapterOneLightBlue rounded-xl mt-6 hidden lg:w-[400px] lg:h-[474px] lg:flex xl:hidden">
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
          <button class="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-white self-center rounded-[10px] text-chapterOneBlue  lg:text-base lg:w-[338px] lg:mt-10">
            Buy now
          </button>
        </div>
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
      <div className=" bg-[#141359] text-white flex-col flex items-center font-light pt-28 lg:justify-between lg:text-sm xl:text-base">
        <div className="flex-col flex w-[300px] lg:flex-row lg:max-w-[816px] lg:w-[100%] lg:justify-between xl:max-w-[932px]">
          <div className="flex  flex-col lg:mt-14">
            <p className="text-lg font-extrabold mb-3 lg:text-base xl:text-lg">
              Quick links
            </p>
            <a href="">Our packages</a>
            <a href="">How it works</a>
            <a href="">Contact us</a>
          </div>

          <div className="flex flex-col mt-14">
            <p className="text-lg font-extrabold mb-3 lg:text-base xl:text-lg">
              Legal
            </p>
            <a href="">Terms and conditions</a>
            <a href="">Privacy policy</a>
            <a href="">Refund policy</a>
          </div>

          <div className="flex flex-col mt-14">
            <p className="text-lg font-extrabold mb-3 lg:text-base xl:text-lg">
              Contact
            </p>
            <a href="">support@chapteroneai.com</a>
          </div>

          <div className="flex flex-col mt-14">
            <p className="text-lg font-extrabold mb-3 lg:text-base xl:text-lg">
              Take action
            </p>
            <a href="" className="underline">
              Login
            </a>
            <a href="" className="underline">
              Signup
            </a>
          </div>
        </div>
        <p className="text-2xl font-extrabold mb-20 mt-28">Chapter One</p>
      </div>
    </div>
  );
}

export default Home;
