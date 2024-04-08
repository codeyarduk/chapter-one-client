import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    // <div className="font-sora fixed bottom-0 h-10 items-center bg-chapterOneLightBlue text-black z-20 w-full flex justify-start flex-row">
    //   <p>
    //     We use cookies to enhance your experience. By continuing to visit this
    //     site you agree to our use of cookies.
    //   </p>
    //   <button onClick={acceptCookies}>Accept</button>
    // </div>

    <div className="min-h-screen fixed bg-gray-100 flex flex-col justify-center sm:py-12 z-20">
      <div className="max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-5 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
        <div className="w-full ">
          <p className="min-w-small lg:w-[700px]">
            This website uses cookies to ensure you get the best experience on
            our website. By continuing to use this site, you agree to our use of
            essential cookies.
            <span>
              {" "}
              <button
                className="text-indigo-600 whitespace-nowrap  hover:underline"
                onClick={() => navigate("/cookies-policy")}
              >
                {" "}
                Learn more
              </button>
            </span>
          </p>
        </div>
        <div className="flex gap-4 items-center flex-shrink-0">
          {/* <button className="text-indigo-600 focus:outline-none hover:underline">
            Decline
          </button> */}
          <button
            className="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
            onClick={acceptCookies}
          >
            Allow and Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
