import { Routes, Route } from "react-router-dom";
import FileUpload from "./FileUpload";
import Home from "./Home";
import "./App.css";
import Nav from "./Nav";
import Login from "./Login";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
