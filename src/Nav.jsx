import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Cookies from "js-cookie";

function Nav() {
  const credential = Cookies.get("credential");

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function clearCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="w-full font-sora flex flex-row justify-center items-center absolute py-9 lg:py-12">
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-start items-center flex-col  top-0 dropdown-menu fixed text-black bg-white w-full h-screen z-30 xl:hidden"
        >
          {/* Add your menu items here */}
          <div className="w-small flex flex-col items-center absolute pt-[100px]">
            {credential ? (
              <Link to="/profile">
                <button className="h-[51px] w-screen hover:bg-chapterOneSuperLightBlue active:bg-chapterOneLightBlue">
                  Profile
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="h-[51px] w-screen hover:bg-chapterOneSuperLightBlue active:bg-chapterOneLightBlue">
                  Login
                </button>
              </Link>
            )}

            <HashLink to="/#packages">
              <button className="h-[51px] w-screen hover:bg-chapterOneSuperLightBlue active:bg-chapterOneLightBlue">
                Our packages
              </button>
            </HashLink>
            <HashLink to="/#how-it-works">
              <button
                onClick={() => navigate("/#how-it-works")}
                className="h-[51px] w-screen hover:bg-chapterOneSuperLightBlue active:bg-chapterOneLightBlue"
              >
                How it works
              </button>
            </HashLink>
            {credential ? (
              <Link to="/">
                <button
                  className="h-[51px] w-screen hover:bg-chapterOneSuperLightBlue active:bg-chapterOneLightBlue"
                  onClick={() => {
                    clearCookies();
                    navigate("/");
                  }}
                >
                  Sign out
                </button>
              </Link>
            ) : (
              <Link to="/register">
                <button
                  className="h-[51px] w-screen hover:bg-chapterOneSuperLightBlue active:bg-chapterOneLightBlue"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign up
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
      <div className="w-full font-sora flex flex-row justify-between items-center absolute py-6 px-5 max-w-[377px] lg:max-w-[812px] xl:max-w-[1180px]">
        <div
          className="z-50 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <p className="font-extrabold text-xl text-chapterOneDarkBlue lg:text-2xl ">
            Chapter <span className="text-chapterOneBlue">One</span>
          </p>
        </div>
        <div className="xl:hidden z-40 " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img
              src="hamburger-open.svg"
              alt="open burger menu"
              className="w-7 lg:w-9 hover:cursor-pointer py-3"
            />
          ) : (
            <img
              src="hamburger.svg"
              alt="closed burger menu"
              className="w-7 lg:w-9 hover:cursor-pointer py-3"
            />
          )}
        </div>

        <div className="hidden w-[400px] xl:flex justify-between">
          <HashLink to="/#packages">Our packages</HashLink>
          <HashLink to="/#how-it-works">How it works</HashLink>
          <button onClick={() => navigate("/")}>Home</button>
        </div>
        <div className="hidden xl:block">
          {credential ? (
            <div className="flex flex-row">
              <p
                className="text-black font-bold hover:cursor-pointer"
                onClick={() => {
                  clearCookies();
                  navigate("/");
                }}
              >
                Sign out
              </p>

              <button
                onClick={() => {
                  navigate("/profile");
                }}
                className="pl-[32px] flex justify-end font-bold text-center text-chapterOneBlue"
              >
                <p>My Account</p>
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="py-[11px] mt-[92px] mb-24 w-[240px] text-center text-white rounded-[10px] bg-chapterOneBlue"
            >
              Login or Sign up
            </button>
          )}
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
