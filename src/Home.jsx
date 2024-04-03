import React from "react";

function Home() {
  return (
    <div className="z-[100] font-sora text-black">
      <div className=" bg-chapterOneLightBlue flex-col flex items-center pt-20">
        <div className=" flex-col flex justify-center max-w-[336px] lg:max-w-[816px] lg:w-[100%]">
          <div className=" text-5xl leading-[58px] font-extrabold pt-10 lg:text-[64px] lg:leading-[76px] lg:pt-28">
            <p>Hone Your Resume.</p>
            <p>Get The Job.</p>
            <p>Secure Your Future.</p>
          </div>
          <div className="mt-10 font-sora leading-[19.2px] lg:text-lg lg:leading-6 lg:max-w-[640px]">
            <p>
              We provide{" "}
              <span className="font-semibold">
                Implementable Expert Resume Reviews
              </span>{" "}
              that will help you with job application success and standout
              proficiency.
            </p>
            <p className="pt-5 text-sm lg:text-base">Powered by AI.</p>
          </div>
          <button class="py-3 mt-16 mb-24 text-sm w-[336px] text-center text-white self-center rounded-[10px] bg-chapterOneBlue lg:self-start">
            Login or Signup
          </button>
        </div>
        <img
          src="src\assets\hero-image.svg"
          alt=""
          className="absolute hidden"
        />
      </div>
      <div className="flex-col mb-20 flex justify-center items-center relative">
        <p className="text-[32px] font-extrabold pt-28 max-w-[336px]">
          How it works
        </p>
        <p className="text-center mt-3 mb-14 max-w-[336px] text-sm leading-4">
          Watch our video to understand the process of how we work
        </p>
        <img
          src="src\assets\temp_video.png"
          alt=""
          className="w-[336px] rounded-lg"
        />
        <a href="" className="text-chapterOneBlue text-sm font-semibold mt-6">
          Login or Signup
        </a>
        <div className=" bg-chapterOneLightBlue absolute h-52 top-[356px] w-[100%] -z-10"></div>
      </div>

      {/* OUR PACKAGES SECTION */}
      <div className="flex-col mb-20 flex justify-center items-center relative">
        <p className="text-[32px] font-extrabold pt-24 max-w-[336px]">
          Our packages
        </p>
        <p className="text-center mt-3 mb-14 max-w-[336px] text-sm leading-4">
          Check out the range of custom packages we offer to see which suits
          your needs best!
        </p>

        {/* Basic Package */}
        <div className="w-[336px] h-[400px] bg-chapterOneLightBlue flex flex-col text-center items-center text-chapterOneBlue rounded-xl mt-4">
          <p className="font-bold text-xl mt-16">Basic</p>
          <p className="font-extrabold text-5xl mt-10">£49</p>
          <p className="font-normal text-sm max-w-72 mt-10">
            Receive up to 5 comprehensive resume reviews and analyses.
          </p>
          <button class="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-white self-center rounded-[10px] text-chapterOneBlue">
            Buy now
          </button>
        </div>

        {/* Standard Package */}
        <div className="w-[336px] h-[400px] bg-chapterOneBlue flex flex-col text-center items-center text-chapterOneLightBlue rounded-xl mt-4">
          <p className="font-bold text-xl mt-16">Standard</p>
          <p className="font-extrabold text-5xl mt-10">£99</p>
          <p className="font-normal text-sm max-w-72 mt-10">
            Receive up to 25 comprehensive resume reviews and analyses.
          </p>
          <button class="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-white self-center rounded-[10px] text-chapterOneBlue">
            Buy now
          </button>
        </div>

        {/* Premium Package */}
        <div className="w-[336px] h-[400px] bg-chapterOneLightBlue flex flex-col text-center items-center text-chapterOneBlue rounded-xl mt-4">
          <p className="font-bold text-xl mt-16">Premium</p>
          <p className="font-extrabold text-5xl mt-10">£149</p>
          <p className="font-normal text-sm max-w-72 mt-10">
            Receive up to 100 comprehensive resume reviews and analyses.
          </p>
          <button class="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-white self-center rounded-[10px] text-chapterOneBlue">
            Buy now
          </button>
        </div>
      </div>
      <div className=" bg-chapterOneLightBlue flex-col flex items-center py-20">
        <div className=" flex-col flex justify-center max-w-[336px] text-2xl">
          <p>
            At Chapter <span className="text-chapterOneBlue">One</span> we
            prioritise your safety and privacy. Therefore all of your personal
            data gets deleted after use.
          </p>
        </div>
      </div>
      <div className=" bg-chapterOneBlue text-white flex-col flex items-center font-light pt-28">
        <div className="flex-col flex w-[300px]">
          <div className="flex flex-col">
            <p className="text-lg font-extrabold mb-3">Quick links</p>
            <a href="">Our packages</a>
            <a href="">How it works</a>
            <a href="">Contact us</a>
          </div>

          <div className="flex flex-col mt-14">
            <p className="text-lg font-extrabold mb-3">Legal</p>
            <a href="">Terms and conditions</a>
            <a href="">Privacy policy</a>
            <a href="">Refund policy</a>
          </div>

          <div className="flex flex-col mt-14">
            <p className="text-lg font-extrabold mb-3">Contact</p>
            <a href="">support@chapteroneai.com</a>
          </div>

          <div className="flex flex-col mt-14">
            <p className="text-lg font-extrabold mb-3">Take action</p>
            <a href="" className="underline">
              Login
            </a>
            <a href="" className="underline">
              Signup
            </a>
          </div>
          <p className="text-2xl font-extrabold mb-20 mt-28">Chapter One</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
