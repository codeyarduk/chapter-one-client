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

  // const to = location.state?.to;
  // setToState(location.state?.to);

  function handleCallback(response) {
    // console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    // console.log(userObject);
    sendEmail(response.credential);
    Cookies.set("credential", response.credential, { expires: 7 });
    setUser(userObject);
  }

  const sendEmail = (userObject) => {
    fetch("http://138.68.181.103:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userObject,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        // const jsonData = JSON.parse(data);
        console.log("v");
        // console.log(to);
        Cookies.set("user", data, { expires: 7 });
        console.log(Cookies.get("user"));
        // console.log(data);
        setOutCome(data);

        // Save the session token in a cookie
        // Cookies.set("sessionToken", data, { expires: 7 });
        if (location.state?.to) {
          // console.log(location.state.to);
          // window.location.href = location.state.to;
          navigate("/");
          return null;
        }
        navigate("/profile", {
          state: {
            email: userObject.email,
            firstName: userObject.given_name,
            lastName: userObject.family_name,
            uses: 0,
          },
        });
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
    <>
      <div className="font-sora w-full flex justify-center flex-col items-center">
        <div className="flex justify-center flex-col items-center h-[500px] w-[560px] bg-chapterOneLightBlue rounded-2xl border-1.6 border-chapterOneBlue mt-[200px] mb-[120px]">
          <p className="font-extrabold text-5xl">Login</p>
          <p className="font-light mt-4 text-sm">
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
    </>
  );
}

export default LoginOauth;
