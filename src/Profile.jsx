import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { HashLink } from "react-router-hash-link";
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
  // const uses = user?.uses;

  const [uses, setUses] = useState(1);

  console.log("THIS IS: " + credential);

  const getUses = () => {
    console.log(email);
    console.log(credential);
    // http://138.68.181.103:3000
    // http://localhost:3000
    fetch("https://chapteroneai.com/api/users/uses/" + email, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        user: credential,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        const jsonData = JSON.parse(data);
        setUses(jsonData.uses);
        return data;
      });
  };

  useEffect(() => {
    if (!credential || !user) {
      navigate("/login");
    }
    getUses();
    // /api/users/uses/:email
  }, []);

  if (!user) {
    return null; // Don't render the component
  }

  return (
    <>
      <div className="pt-[216px] lg:pt-extraLarge flex flex-col items-center justify-center font-sora">
        {/* Welcome User Section */}
        <div className="flex items-center lg:h-[83px] flex-col w-small lg:w-large lg:flex-row xl:w-extraLarge justify-between lg:items-end">
          <div className="">
            <p className="text-6xl font-extrabold xl:text-5xl text-center xl:text-start break-words w-small lg:w-full xl:w-full">
              Welcome {firstName}!
            </p>
            <p className="text-center font-extralight text-sm lg:text-base lg:text-start xl:font-light xl:mt-2">
              Let's get started with refining your resume.
            </p>
          </div>

          {/* Reviews used */}
          <div className="mt-20 xl:mt-0 w-small xl:w-fit flex flex-row justify-between">
            <div className="border-1.6 rounded-xl border-chapterOneLightBlue">
              <p className="text-sm text-center w-[162px] py-[14px]">
                Reviews used: {uses}
              </p>
            </div>
            {/* Reviews left */}
            <div className="border-1.6 rounded-xl xl:ml-[10px] border-chapterOneLightBlue">
              <p className="text-sm text-center w-[162px] py-[14px] ">
                Reviews left: {uses}
              </p>
            </div>
          </div>
        </div>
        {/* Start my review */}
        <div>
          {uses > 0 && (
            <div className="lg:mt-16 lg:w-large xl:w-extraLarge flex items-center justify-center lg:h-[95px] xl:h-[111px] rounded-2xl lg:bg-chapterOneLightBlue">
              <button
                className="h-[47px] mt-2 lg:mt-0 w-small rounded-xl font-semibold bg-chapterOneBlue text-white tracking-wide"
                onClick={() => navigate("/upload")}
              >
                Start my review
              </button>
            </div>
          )}
          {uses === 0 && (
            <div>
              <div className="lg:mt-16 lg:w-large xl:w-extraLarge flex items-center justify-center lg:h-[111px] rounded-2xl lg:bg-chapterOneLightBlue">
                <div className="h-[47px] flex justify-center items-center mt-2 lg:mt-0 w-small rounded-xl bg-chapterOneLightBlue">
                  <p className="text-sm text-chapterOneRed font-light">
                    Oh no, it appears you're all out of reviews
                  </p>
                </div>
              </div>
              <div className="lg:w-large xl:mt-[10px] xl:w-extraLarge flex items-center justify-center rounded-2xl">
                <HashLink
                  to="/#packages"
                  className="lg:w-large flex justify-center items-center xl:w-extraLarge h-[47px] mt-2 xl:mt-0 w-small rounded-xl font-semibold bg-chapterOneBlue text-white tracking-wide"
                >
                  Top up
                </HashLink>
              </div>
            </div>
          )}
        </div>
        <div className="mt-12 lg:w-large xl:w-extraLarge flex justify-start lg:mt-6">
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
          <div className=" xl:mt-16 mt-12 xl:w-extraLarge flex items-center justify-center rounded-2xl xl:bg-chapterOneLightBlue">
            <div className="h-[53px] flex justify-center items-center mt-2 xl:mt-0 w-small lg:w-large rounded-xl bg-chapterOneLightBlue">
              <p className="text-sm text-chapterOneRed font-light">
                Oh no, it appears you're all out of reviews
              </p>
            </div>
          </div>
          {/* Lets change that */}
          <div className="mt-10 xl:w-extraLarge lg:w-large font-medium text-chapterOneBlue flex justify-end underline mb-[160px]">
            {uses ? (
              <button onClick={() => navigate("/upload")}>
                Lets change that
              </button>
            ) : (
              <HashLink to="/#packages">Lets change that</HashLink>
            )}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Profile;
