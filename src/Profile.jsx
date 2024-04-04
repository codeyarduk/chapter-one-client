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
    <div className="pt-extraLarge flex justify-center font-sora">
      <div className="flex border xl:w-extraLarge justify-between items-end">
        <div className="flex xl:flex-col xl:justify-between">
          <p className="xl:font-extrabold xl:text-5xl">Welcome Isabella!</p>
          <p className="xl:font-light">
            Let's get started with refining your resume.
          </p>
        </div>
        <div className="flex flex-row">
          <div className="px-6 py-[14px] border-1.6">
            <p>Reviews used: 0</p>
          </div>
          <div className="border px-6 py-[14px]">
            <p>Reviews left: 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
