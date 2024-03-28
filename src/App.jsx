import { useState } from "react";
import FileUpload from "./FileUpload";
import "./App.css";

function App() {
  return (
    <div className="bg-[#10061f] h-svh p-10 w-full text-white">
      <p className="text-8xl font-archivoBlack text-[#fbf5ec] text-start font-extrabold tracking-wide ">
        Chapter One
      </p>
      <p className="mb-10 text-start ml-2 mt-10 text-2xl font-medium italic">
        Start the next chapter of your career with the power of AI
      </p>
      <FileUpload />
    </div>
  );
}

export default App;
