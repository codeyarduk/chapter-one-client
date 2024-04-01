import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/upload");
  };
  return (
    <>
      <div className="flex w-full flex-col h-screen justify-center items-center">
        <p class="text-4xl font-archivoBlack font-bold text-black mb-10">
          Login
        </p>
        <div>
          <input
            type="text"
            placeholder="Enter email"
            className="border-2 border-black p-2 rounded-lg"
          />
          <button
            className="border-2 border-black p-2 rounded-lg ml-2"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
