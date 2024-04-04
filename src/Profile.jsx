import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode as jwt_decode } from "jwt-decode";

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
      <div className="pt-extraLarge flex flex-col items-center justify-center font-sora">
        {/* Welcome User Section */}
        <div className="flex xl:w-extraLarge justify-between items-end">
          <div className="flex xl:flex-col xl:justify-between">
            <p className="xl:font-extrabold xl:text-5xl">
              Welcome {firstName}!
            </p>
            <p className="xl:font-light">
              Let's get started with refining your resume.
            </p>
          </div>
          <div className="flex flex-row">
            <div className="border-1.6 rounded-xl border-chapterOneLightBlue">
              <p className="text-sm text-center px-6 py-[14px]">
                Reviews used: 0
              </p>
            </div>
            <div className="border-1.6 rounded-xl ml-[10px] border-chapterOneLightBlue">
              <p className="text-sm text-center px-6 py-[14px] ">
                Reviews left: 5
              </p>
            </div>
          </div>
        </div>
        {/* Start my review */}
        <div>
          <div className="mt-16 xl:w-extraLarge flex items-center justify-center h-[111px] rounded-2xl bg-chapterOneLightBlue">
            <button className="h-[47px] px-20 rounded-xl font-semibold bg-chapterOneBlue text-white tracking-wide">
              Start my review
            </button>
          </div>
        </div>
        {/* Powered by AI. */}
        <div className="w-extraLarge flex justify-start mt-6">
          <p>Powered by AI.</p>
        </div>
        {/* My past reviews */}
        <div className="mt-200 w-full flex justify-center bg-chapterOneLightBlue">
          <div className="flex flex-col mt-[120px] w-extraLarge">
            <p className="font-extrabold text-2.5xl">My past reviews</p>
            <p className="font-light mt-2">All past reviews I've received</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
