import React from "react";
import Footer from "./Footer";

function PrivacyPolicy() {
  return (
    <div className="flex pt-[72px] bg-chapterOneLightBlue justify-center flex-col items-center font-sora">
      <div className="w-small pb-[144px] lg:w-[816px] xl:w-extraLarge mt-[104px]">
        <p className="text-2xl font-extrabold mb-4 xl:text-3.5xl">
          Privacy Policy
        </p>
        <p>Last updated 15/04/2024</p>
        <p className="font-bold mb-4 mt-16">1. Information We Collect</p>
        <p>
          When you use our services by signing in with your Google account, we
          collect the following information<br></br>
          <br></br>Email Address: To manage your account and for communication
          purposes.<br></br>
          <br></br>First Name and Last Name: To personalize your experience on
          our platform.<br></br>
          <br></br>CV/Resume: When you upload your CV/resume for review, we
          temporarily store the file to analyze and generate a review. This
          information is collected directly from your Google account and through
          your direct interactions with our website with your consent.
        </p>
        <p className="font-bold mb-4 mt-16">2. How We Use Your Information</p>
        <p>
          We use the information we collect for the following purposes: To
          provide and maintain our services, including analyzing your CV/resume
          and generating a review. To manage your account and registration. To
          communicate with you, including sending emails about your account or
          our services. To improve and optimize our services.
        </p>
        <p className="font-bold mb-4 mt-16">3. Sharing Your Information</p>
        <p>
          We do not share your personal information with third parties, except
          as necessary to provide our services or as required by law. This
          includes: Third-party service providers who assist us in operating our
          website, conducting our business, or serving our users, so long as
          those parties agree to keep this information confidential. Compliance
          with applicable laws, regulations, legal processes, or governmental
          requests.
        </p>
        <p className="font-bold mb-4 mt-16">4. Data Security</p>

        <p>
          We are committed to ensuring that your information is secure. We use
          appropriate security measures to protect against unauthorized access
          to or unauthorized alteration, disclosure, or destruction of data.
        </p>
        <p className="font-bold mb-4 mt-16">5. Data Retention and Deletion</p>

        <p>
          We retain the reviews generated from your CV/resume analyses on our
          servers. However, the original CV/resume files are deleted immediately
          after the review is generated to ensure your privacy and data
          security. Reviews are stored only as long as necessary to provide you
          with our services and comply with legal obligations.
        </p>
        <p className="font-bold mb-4 mt-16">6. Your Rights</p>
        <p>
          You have the right to access, update, or delete the information we
          have on you, including any reviews stored. If you wish to exercise
          these rights, please contact us at support@chapteroneai.com.
        </p>
        <p className="font-bold mb-4 mt-16">
          7. Changes to This Privacy Policy
        </p>

        <p>
          We may update our Privacy Policy periodically. We will notify you of
          any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
        </p>

        <p className="font-bold mb-4 mt-16">8. Contact Us</p>

        <p>
          If you have any questions about this Privacy Policy, please contact us
          at support@chapteroneai.com.
        </p>
        <p className="font-bold mb-4 mt-16">9. Google Analytics</p>
        <p>
          We use Google Analytics, a web analytics service provided by Google,
          Inc. ("Google") to understand how our website is used and to improve
          our service. Google Analytics collects information such as how often
          users visit this site, what pages they visit when they do so, and what
          other sites they used prior to coming to this site. Google's use of
          the data it collects is subject to Google's Privacy Policy. We do not
          combine the information collected through the use of Google Analytics
          with personally identifiable information.
        </p>
        <br></br>
        <p>
          Google Analytics plants a permanent cookie on your web browser to
          identify you as a unique user the next time you visit this site. This
          cookie cannot be used by anyone but Google. You can prevent Google
          Analytics from recognizing you on return visits to this site by
          disabling cookies on your browser.
        </p>
        <br></br>
        <p>
          If you wish to opt-out of Google Analytics tracking, you can set up an
          opt-out browser add-on which is available for most modern web
          browsers. You can also manage your preferences for how Google uses
          your data at Google's Ads Settings.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
