import { Routes, Route } from "react-router-dom";
import FileUpload from "./FileUpload";
import Home from "./Home";
import "./App.css";
import Nav from "./Nav";
import LoginOauth from "./LoginOauth";
import Profile from "./Profile";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/login" element={<LoginOauth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
