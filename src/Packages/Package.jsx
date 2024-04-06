import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode as jwt_decode } from "jwt-decode";

function Package({ packageID, title, price, description }) {
  const [decoded, setDecoded] = useState(null);

  const navigate = useNavigate();
  const credential = Cookies.get("user");

  function stripeCallback(response) {
    console.log(response);
  }
  const loadStripe = () => {
    console.log(credential);
    console.log(decoded);

    if (!credential) {
      navigate("/login", { state: { to: "/" } });
      return null;
    }
    // 138.68.181.103
    // http://138.68.181.103:3000/api/payments/webhook
    // http://localhost:3000/api/payments/webhook
    fetch("http://138.68.181.103:3000/api/payments/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: { id: packageID, quantity: 1 },
        token: credential,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
      })
      .then(({ url }) => {
        console.log(url);
        if (!credential) {
          navigate("/login", { state: { to: url } });
          return null;
        } else {
          window.location.href = url;
        }
      })
      //   .then((data) => {
      //     if (data.paymentIntent.status === "succeeded") {
      //       console.log("Payment was successful");
      //     } else {
      //       console.log("Payment failed");
      //     }
      //   })
      .catch((error) => {
        // console.log(url);
        console.log("Problems in paradise");
        console.error(error);
      });
  };
  return (
    <div className="mx-2 w-[336px] h-[400px] bg-chapterOneLightBlue flex flex-col text-center items-center text-chapterOneBlue rounded-xl mt-4 lg:w-[400px] lg:h-[474px] xl:w-[368px] xl:h-[487px] xl:mt-10">
      <p className="font-bold text-xl mt-16 lg:text-[22px] lg:mt-20 xl:text-2xl">
        {title}
      </p>
      <p className="font-extrabold text-5xl mt-10 lg:text-[56px] lg:mt-14 xl:text-[64px]">
        £{price}
      </p>
      <p className="font-normal text-sm max-w-72 mt-10 lg:text-[16px] lg:mt-14">
        {description}
      </p>
      <button
        onClick={loadStripe}
        className="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-[#E4DFFA] self-center rounded-[10px] text-chapterOneBlue lg:text-base lg:w-[338px] lg:mt-10 xl:w-[304px]"
      >
        Buy now
      </button>
    </div>
  );
}

export default Package;
