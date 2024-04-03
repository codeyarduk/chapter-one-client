import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// { email, name, uses }
function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;
  const firstName = location.state?.firstName;
  const lastName = location.state?.lastName;
  const uses = location.state?.uses;
  const credential = Cookies.get("credential");

  console.log("THIS IS: " + credential);
  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email, firstName, lastName, uses, navigate]);

  if (!email) {
    // navigate("/login");
    // return null;
    console.log("No email");
    return (
      <div className="pt-20">
        <h2>Profile</h2>
        <p>Not logged in</p>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <h2>Profile</h2>
      <p>Email: {email}</p>
      <p>Name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Uses: {uses}</p>
    </div>
  );
}

export default Profile;
