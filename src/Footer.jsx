import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <div className=" bg-[#141359] w-full text-white flex-col flex items-center font-light pt-28 lg:justify-between lg:text-sm xl:text-base">
      <div className="flex-col flex w-[300px] lg:flex-row lg:max-w-[816px] lg:w-[100%] lg:justify-between xl:max-w-[932px]">
        <div className="flex  flex-col lg:mt-14">
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
          <Link to="/login" className="underline">
            Login
          </Link>
          <Link to="/register" className="underline">
            Sign up
          </Link>
        </div>
      </div>
      <p className="text-2xl font-extrabold mb-20 mt-28">Chapter One</p>
    </div>
  );
}

export default Footer;
