import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// import { jwtDecode as jwt_decode } from "jwt-decode";
import Footer from "./Footer";

function Profile() {
  const navigate = useNavigate();

  const credential = Cookies.get("credential");
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  const email = user?.email;
  const firstName = user?.name;
  const lastName = user?.lastName;
  const uses = user?.uses;

  console.log("THIS IS: " + credential);
  useEffect(() => {
    if (!credential || !user) {
      navigate("/login");
    }
  }, []);

  if (!user) {
    return null; // Don't render the component
  }

  // <h2>Profile</h2>
  // <p>Email: {email}</p>
  // <p>Name: {firstName}</p>
  // <p>Last name: {lastName}</p>
  // <p>Uses: {uses}</p>

  return (
    <>
      <div className="pt-[216px] xl:pt-extraLarge flex flex-col items-center justify-center font-sora">
        {/* Welcome User Section */}
        <div className="flex items-center xl:h-[83px] flex-col w-small xl:flex-row xl:w-extraLarge justify-between xl:items-end">
          <div className="">
            <p className="text-6xl font-extrabold xl:text-5xl text-center xl:text-start break-words w-small xl:w-full">
              Welcome {firstName}!
            </p>
            <p className="text-center font-extralight text-sm xl:text-base xl:text-start xl:font-light xl:mt-2">
              Let's get started with refining your resume.
            </p>
          </div>

          {/* Reviews used */}
          <div className="mt-20 xl:mt-0 w-small xl:w-fit flex flex-row justify-between">
            <div className="border-1.6 rounded-xl border-chapterOneLightBlue">
              <p className="text-sm text-center w-[162px] py-[14px]">
                Reviews used: 0
              </p>
            </div>
            {/* Reviews left */}
            <div className="border-1.6 rounded-xl xl:ml-[10px] border-chapterOneLightBlue">
              <p className="text-sm text-center w-[162px] py-[14px] ">
                Reviews left: 5
              </p>
            </div>
          </div>
        </div>
        {/* Start my review */}
        <div>
          <div className=" xl:mt-16 xl:w-extraLarge flex items-center justify-center xl:h-[111px] rounded-2xl xl:bg-chapterOneLightBlue">
            <button
              className="h-[47px] mt-2 xl:mt-0 w-small rounded-xl font-semibold bg-chapterOneBlue text-white tracking-wide"
              onClick={() => navigate("/upload")}
            >
              Start my review
            </button>
          </div>
        </div>
        <div className="mt-12 xl:w-extraLarge flex justify-start xl:mt-6">
          <p>Powered by AI.</p>
        </div>
        {/* My past reviews */}
        <div className="mt-200 w-full flex flex-col items-center justify-center bg-chapterOneSuperLightBlue">
          {/* My past reviews text */}
          <div className="flex flex-col mt-[120px] xl:w-extraLarge">
            <p className="font-extrabold text-2.5xl">My past reviews</p>
            <p className="font-light mt-2">All past reviews I've received</p>
          </div>
          {/* Past reviews list */}
          <div className="mt-16 xl:w-extraLarge h-[59px] items-center flex justify-center bg-chapterOneLightBlue rounded-2xl">
            <p className="text-chapterOneRed font-light">
              You have no past reviews
            </p>
          </div>
          {/* Lets change that */}
          <div className="mt-10 xl:w-extraLarge font-medium text-chapterOneBlue flex justify-end underline mb-[160px]">
            <p>Lets change that</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Profile;
