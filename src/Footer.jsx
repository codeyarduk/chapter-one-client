import React from "react";

function Footer() {
  return (
    <div className=" bg-[#141359] w-full text-white flex-col flex items-center font-light pt-28 lg:justify-between lg:text-sm xl:text-base">
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
  );
}

export default Footer;
