import React from "react";

function Home() {
  return (
    <div className="z-[100]">
      <div className="h-96 bg-black text-white flex-col flex justify-center items-center pt-20">
        <h1 className="text-white text-4xl font-bold font-archivoBlack">
          Chapter One AI
        </h1>
        <p className="mt-5">
          Start the next chapter of your career with the power of AI
        </p>
      </div>
      <div>
        <h2 className="text-2xl italic font-semibold text-center h-96 flex justify-center items-center">
          /Video of me explaining how it works/
        </h2>
      </div>
      <div className="h-96 bg-black flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold font-archivoBlack">
          Tailor your resume for each different job that you apply for
        </h1>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-center h-96 flex justify-center items-center">
          Login to get started
        </h2>
      </div>
    </div>
  );
}

export default Home;
