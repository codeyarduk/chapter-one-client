import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode as jwt_decode } from "jwt-decode";

function Package({ packageID, title, price, description }) {
  const [decoded, setDecoded] = useState(null);

  const navigate = useNavigate();
  const credential = Cookies.get("credential");

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

    // http://localhost:3000/api/payments/webhook
    fetch("https://chapteroneai.com/api/payments/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: credential,
      },
      body: JSON.stringify({
        item: { id: packageID, quantity: 1 },
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
    <div className=" relative mx-2 w-[336px] h-[422px] border-1.6 border-chapterOneBlue bg-chapterOneLightBlue flex flex-col text-center items-center text-chapterOneDarkBlue rounded-xl mt-4 lg:w-[400px] lg:h-[474px] lg:hidden xl:flex  xl:w-[504px] xl:h-[439px]">
      <p className="font-bold text-xl mt-[85px] lg:text-[22px] lg:mt-20 xl:text-2xl">
        Standard
      </p>
      <p className="font-extrabold text-chapterOneBlue text-5xl mt-10 lg:text-[56px] lg:mt-6 xl:text-[64px]">
        £1.00
      </p>
      <p className="text-chapterOneDarkBlue text-sm font-light max-w-72 mt-4 lg:text-[16px] lg:mt-0">
        {/* Receive one comprehensive resume review and analysis. */}
        One resume review
      </p>
      <button
        onClick={loadStripe}
        className="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-chapterOneBlue self-center rounded-[10px] text-white  lg:text-base lg:w-[338px] lg:mt-10 xl:w-[440px]"
      >
        Buy now
      </button>
      <div className=" relative mx-2 w-[336px] h-[422px] border-1.6 bg-chapterOneBlue  flex flex-col text-center items-center text-chapterOneDarkBlue rounded-xl mt-4 lg:w-[400px] lg:h-[474px] lg:hidden xl:flex  xl:w-[504px] xl:h-[439px]"></div>
    </div>
  );
}

export default Package;
