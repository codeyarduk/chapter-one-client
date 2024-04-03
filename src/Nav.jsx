import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full font-sora flex justify-between items-center absolute py-6 px-7">
      <div>
        <p className="font-extrabold text-xl">
          Chapter <span className="text-chapterOneBlue">One</span>
        </p>
      </div>
      <div>
        <img src="src\assets\hamburger.svg" alt="" className="h-3.5" />
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
