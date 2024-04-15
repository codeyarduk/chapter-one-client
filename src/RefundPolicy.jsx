import React from "react";
import Footer from "./Footer";

function RefundPolicy() {
  return (
    <div className="flex pt-[72px] bg-chapterOneLightBlue justify-center flex-col items-center font-sora">
      <div className="w-small pb-[144px] lg:w-[816px] xl:w-extraLarge mt-[104px]">
        <p className="text-2xl font-extrabold mb-4 xl:text-3.5xl">
          Refund Policy
        </p>
        <p>Last updated 15/04/2024</p>
        <p className="font-bold mb-4 mt-16">1. No Refund Policy</p>
        <p>
          Due to the nature of our services, which involve significant
          operational costs to analyze and generate reviews of CVs/resumes, we
          do not offer refunds once a review has been generated. When you submit
          your CV/resume for analysis, you acknowledge and agree to this no
          refund policy.
        </p>
        <p className="font-bold mb-4 mt-16">2. Service Delivery</p>
        <p>
          Our service is deemed to be delivered and complete once you receive
          the generated review of your uploaded CV/resume. You will have access
          to your review through our platform, which is accessible with your
          account credentials.
        </p>
        <p className="font-bold mb-4 mt-16">3. Cancellation of Service</p>
        <p>
          If you wish to cancel your request for a CV/resume review, you must do
          so before the review process has begun. Once our system has started
          the review process, we cannot cancel the request and no refunds will
          be provided.
        </p>
        <p className="font-bold mb-4 mt-16">4. Exceptions</p>

        <p>
          While our policy is firm, we will consider exceptions in cases of
          service failure or errors on our part, such as if the review is not
          generated due to technical problems in our system. If you believe your
          situation warrants an exception, please contact us at
          support@chapteroneai.com with a detailed explanation, and we will
          review your case on an individual basis.
        </p>
        <p className="font-bold mb-4 mt-16">5. Contact Us</p>

        <p>
          If you have any questions or concerns regarding our Refund Policy,
          please contact us at support@chapteroneai.com. We are here to assist
          and ensure your satisfaction with our services.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default RefundPolicy;
