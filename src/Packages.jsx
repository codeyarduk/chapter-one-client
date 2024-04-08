import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Packages() {
  const navigate = useNavigate();

  function stripeCallback(response) {
    console.log(response);
  }

  const loadStripe = () => {
    fetch("https://chapteroneai.com/api/payments/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: { id: 1, quantity: 1 },
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
          //   .then((json) => Promise.reject(json));
        }
      })
      .then(({ url }) => {
        console.log(url);
        window.location.href = url;
      })
      .catch((error) => {
        // console.log(url);
        console.log("Problems in paradise");
        console.error(error);
      });
  };
  return (
    <div className="pt-40 text-black">
      <button onClick={loadStripe}>Checkout</button>
      {/* <h1>Hi</h1> */}
    </div>
  );
}

export default Packages;
