import { Routes, Route } from "react-router-dom";
import FileUpload from "./FileUpload";
import Home from "./Home";
import "./App.css";
import Nav from "./Nav";
import RegisterOauth from "./RegisterOauth";
import LoginOauth from "./LoginOauth.jsx";
import Profile from "./Profile";
import Packages from "./Packages";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/login" element={<LoginOauth />} />
        <Route path="/register" element={<RegisterOauth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </>
  );
}

export default App;
