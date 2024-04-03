import { useEffect, useState } from "react";
import { jwtDecode as jwt_decode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "./Footer";

import React from "react";

function RegisterOauth() {
  const [user, setUser] = useState({});
  const [outcome, setOutCome] = useState("");

  const navigate = useNavigate();

  function handleCallback(response) {
    // console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    // console.log(userObject);
    sendEmail(response.credential);
    Cookies.set("credential", response.credential, { expires: 7 });
    setUser(userObject);
    navigate("/profile", {
      state: {
        email: userObject.email,
        firstName: userObject.given_name,
        lastName: userObject.family_name,
        uses: 0,
      },
    });
  }

  const sendEmail = (userObject) => {
    fetch("http://localhost:3000/api/users/register", {
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
        console.log(data);
        setOutCome(data);

        // Save the session token in a cookie
        // Cookies.set("sessionToken", data, { expires: 7 });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "886756526696-8pc6lu70409d3uu0jvfkojk02kjoak7t.apps.googleusercontent.com",
      callback: handleCallback,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="pt-20">
      <div id="signInDiv"></div>
      {user && (
        <div>
          {/* <img src={user.picture}></img> */}
          <h3>{outcome}</h3>

          {/* <h4 >{user.email}</h4> */}
        </div>
      )}
    </div>
  );
}

export default RegisterOauth;
