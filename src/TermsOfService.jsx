import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function TermsOfService() {
  const navigate = useNavigate();
  return (
    <div className="flex pt-[72px] bg-chapterOneLightBlue justify-center flex-col items-center font-sora">
      <div className="w-small pb-[144px] lg:w-[816px] xl:w-extraLarge mt-[104px]">
        <p className="text-2xl font-extrabold mb-4 xl:text-3.5xl">
          Terms of Service
        </p>
        <p>Last updated 15/04/2024</p>
        <p className="font-bold mb-4 mt-16">1. Acceptance of Terms</p>
        <p>
          Welcome to Chapter One! By accessing our website and using our
          services, you agree to be bound by these Terms of Service and our
          Privacy Policy. If you do not agree with any part of these terms,
          please do not use our website.
        </p>
        <p className="font-bold mb-4 mt-16">2. Account Registration</p>
        <p>
          To use certain features of our website, you must sign in using your
          Google account. When you sign in using Google, you authorize us to
          access and store your email address, first name, and last name. We do
          not have access to your Google password.
        </p>
        <p className="font-bold mb-4 mt-16">3. Privacy Policy</p>
        <p>
          Your privacy is important to us. The personal information we collect
          includes your email address, first name, last name, and any CV/resume
          you upload for analysis. For more detailed information on how we
          handle your personal data, please refer to our{" "}
          <span
            className="hover:cursor-pointer text-chapterOneBlue"
            onClick={() => {
              navigate("/privacy-policy");
            }}
          >
            Privacy Policy.
          </span>
        </p>
        <p className="font-bold mb-4 mt-16">4. Use of Services</p>

        <p>
          CV/Resume Analysis: You may upload your CV/resume to our website to
          receive a review detailing areas for improvement. We temporarily store
          your CV/resume to generate this review and delete the original file
          immediately after the review is generated. The review is stored on our
          servers as described in our Privacy Policy. You are responsible for
          maintaining the confidentiality of your account information and for
          all activities that occur under your account. You agree to use our
          services for lawful purposes only and comply with all applicable laws
          and regulations while using our website.
        </p>
        <p className="font-bold mb-4 mt-16">5. Intellectual Property</p>

        <p>
          The content you upload, and the reviews generated by our service,
          remain your intellectual property. However, by uploading your
          CV/resume, you grant us a temporary license to use, reproduce, and
          modify your content solely for the purpose of providing the services
          requested.
        </p>
        <p className="font-bold mb-4 mt-16">6. Modifications to Terms</p>
        <p>
          We reserve the right to modify these terms at any time. Changes will
          be posted on this page, and your continued use of our services after
          such changes have been posted will constitute your agreement to the
          modified Terms of Service and all of the changes.
        </p>
        <p className="font-bold mb-4 mt-16">7. Termination</p>

        <p>
          We may terminate or suspend access to our services immediately,
          without prior notice or liability, for any reason whatsoever,
          including without limitation if you breach the Terms of Service.
        </p>

        <p className="font-bold mb-4 mt-16">8. Contact Us</p>

        <p>
          If you have any questions or suggestions about our Terms of Service,
          do not hesitate to contact us at support@chapteroneai.com.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default TermsOfService;
