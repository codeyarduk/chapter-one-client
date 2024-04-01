import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-white w-full h-20 p-10 flex justify-between items-center fixed z-10">
      <div>
        <p className="font-bold font-archivoBlack">Chapter One</p>
      </div>
      <div>
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
