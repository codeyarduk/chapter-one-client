import { Routes, Route } from "react-router-dom";
import FileUpload from "./FileUpload";
import Home from "./Home";
import "./App.css";
import Nav from "./Nav";
import RegisterOauth from "./RegisterOauth";
import LoginOauth from "./LoginOauth.jsx";
import Profile from "./Profile";
import Packages from "./Packages";
import CookieConsent from "./CookiesConsent.jsx";
import CookiesPolicy from "./CookiesPolicy.jsx";
import OldReview from "./OldReview.jsx";
import { Helmet } from "react-helmet";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import TermsOfService from "./TermsOfService.jsx";
import RefundPolicy from "./RefundPolicy.jsx";
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chapter One</title>
        <meta
          name="description"
          content="Refine your CV with the power of AI"
        />
        <meta name="author" content="Chapter One" />
        <meta
          name="keywords"
          content="resume, cv, optimise, improve, hiring, recruiter, service"
        />
        <meta name="robots" content="index" />
      </Helmet>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/login" element={<LoginOauth />} />
        <Route path="/register" element={<RegisterOauth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/review" element={<OldReview />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <CookieConsent />
    </>
  );
}

export default App;
