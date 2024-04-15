import { useEffect, useState } from "react";
import { jwtDecode as jwt_decode } from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "./Footer";

import React from "react";
// import Nav from "./Nav";

function LoginOauth() {
  const [user, setUser] = useState({});
  const [outcome, setOutCome] = useState("");
  const [isGoogleApiLoaded, setIsGoogleApiLoaded] = useState(false);
  const [toState, setToState] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  function handleCallback(response) {
    sendEmail(response.credential);
    Cookies.set("credential", response.credential, { expires: 7 });
  }

  const sendEmail = (credential) => {
    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: credential,
      },
      // body: JSON.stringify({
      //   user: credential,
      // }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("v");
        console.log(data);
        Cookies.set("user", data, { expires: 7 });
        setOutCome(data);
        navigate("/profile");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => setIsGoogleApiLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    /* global google */
    if (isGoogleApiLoaded) {
      google.accounts.id.initialize({
        client_id:
          "886756526696-8pc6lu70409d3uu0jvfkojk02kjoak7t.apps.googleusercontent.com",
        callback: handleCallback,
        //   prompt: "select_account",
      });
      /* global google */

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "filled_white",
        size: "large",
        prompt_parent_id: "signInDiv",
      });
    }
  }, [isGoogleApiLoaded, handleCallback]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow font-sora w-full flex justify-center flex-col items-center">
        <div className="w-small flex justify-center flex-col items-center h-[500px] lg:w-[560px] bg-chapterOneLightBlue rounded-2xl border-1.6 border-chapterOneBlue mt-[120px] lg:mt-[200px] mb-[120px]">
          <p className="font-extrabold text-3.5xl lg:text-5xl">Login</p>
          <p className="w-[240px] text-center lg:w-full font-light mt-4 text-sm">
            Login to your existing Chapter One account
          </p>
          <div id="signInDiv" className="my-12"></div>
          <p className="font-light text-sm mb-5 hover:cursor-default">
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigate("/register");
              }}
              className="underline text-chapterOneBlue hover:cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginOauth;
