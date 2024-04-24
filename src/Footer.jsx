import { Link } from "react-router-dom";
import React from "react";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <div className=" bg-[#141359] w-full text-white flex-col flex items-center font-light pt-28 lg:justify-between lg:text-sm xl:text-base">
      <div className="flex-col flex w-[300px] md:w-[420px] md:flex-row lg:max-w-[816px] lg:w-[100%] md:justify-between xl:max-w-[932px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:w-[350px]  xl:w-[400px]">
          <div className="flex  flex-col md:mt-14 ">
            <p className="text-lg font-extrabold mb-3 lg:text-base xl:text-lg">
              Quick links
            </p>

            <HashLink to="/#packages">Our packages</HashLink>
            <HashLink to="/#how-it-works">How it works</HashLink>
            <Link to="/profile">Profile</Link>
          </div>

          <div className="flex flex-col mt-14">
            <p className="text-lg font-extrabold mb-3 lg:text-base xl:text-lg">
              Legal
            </p>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy policy</Link>
            <Link to="/refund-policy">Refund policy</Link>
          </div>
        </div>

        <div className="flex flex-col  lg:flex-row lg:justify-between lg:w-[350px] xl:w-[400px]">
          <div className="flex flex-col mt-14">
            <p className="text-lg font-extrabold mb-3 lg:text-base xl:text-lg">
              Contact
            </p>
            <Link to="https://blog.chapteroneai.com/feedback410216">
              Contact form
            </Link>
          </div>

          <div className="flex flex-col mt-14">
            <p className="text-lg font-extrabold mb-3 lg:text-base md:mt-12 lg:mt-0 xl:text-lg">
              Take action
            </p>
            <Link to="/login" className="underline">
              Login
            </Link>
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <p className="text-2xl font-extrabold mb-20 mt-28">Chapter One</p>
    </div>
  );
}

export default Footer;
