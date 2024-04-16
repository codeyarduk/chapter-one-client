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
    <div className="flex relative">
      <div className="mx-2 w-[330px] h-[394px] border-[1px] border-chapterOneBlue bg-chapterOneLightBlue flex flex-col text-center z-50 items-center text-chapterOneDarkBlue rounded-xl mt-6 lg:w-[504px] lg:h-[439px] ">
        <p className="font-extrabold text-lg mt-16 lg:text-[20px] lg:mt-[75px]">
          Standard
        </p>
        <p className="text-chapterOneBlue font-extrabold text-6xl mt-10 lg:text-[64px] lg:mt-4 ">
          £1
        </p>
        <div className="flex justify-center">
          <p className="text-chapterOneDarkBlue font-light text-sm max-w-72 mt-10 lg:text-[16px] lg:mt-4">
            1 Resume Review
          </p>
        </div>
        <button
          onClick={loadStripe}
          className="py-3 mb-24 mt-8 font-semibold text-sm w-72 text-center bg-chapterOneBlue self-center rounded-[10px] text-white  lg:text-base lg:w-[338px] lg:mt-10"
        >
          Buy now
        </button>
      </div>
      <div
        className="absolute mx-2 w-[330px] h-[394px] border-[1px] bg-chapterOneBlue flex flex-col text-chapterOneDarkBlue rounded-xl mt-6 lg:w-[504px] lg:h-[439px]
                    translate-x-[-7px] translate-y-[7px]
                            lg:translate-x-[-8px] lg:translate-y-[8px] "
      ></div>
    </div>
  );
}

export default Package;
