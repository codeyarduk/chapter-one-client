import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full font-sora flex flex-row justify-center items-center absolute py-9 lg:py-12">
      <div className="w-full font-sora flex flex-row justify-between items-center absolute py-6 px-5 max-w-[377px] lg:max-w-[812px] xl:max-w-[1180px]">
        <div>
          <p className="font-extrabold text-xl text-chapterOneDarkBlue lg:text-2xl">
            Chapter <span className="text-chapterOneBlue">One</span>
          </p>
        </div>
        <div className="xl:hidden">
          <img src="src\assets\hamburger.svg" alt="" className="w-7 lg:w-9" />
        </div>
        <div className="hidden w-[400px] xl:flex justify-between">
          <a href="">Our packages</a>
          <a href="">How it works</a>
          <a href="">Home</a>
        </div>
        <div className="hidden xl:block">
          <button className="py-[11px] mt-[92px] mb-24 w-[240px] text-center text-white rounded-[10px] bg-chapterOneBlue">
            Login or Signup
          </button>
        </div>
      </div>
      <div className="hidden">
        <Link to="/" className="ml-5">
          Home
        </Link>
        <Link to="/login" className="ml-5">
          Upload
        </Link>
        <Link to="/login" className="ml-5">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Nav;
