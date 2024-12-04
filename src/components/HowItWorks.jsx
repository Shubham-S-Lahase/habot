import React from "react";
import Steps from "./StepCards";

const HowItWorks = () => {
  return (
    <div
      className="container mx-auto flex flex-col px-4 sm:px-16"
      role="main"
      aria-labelledby="how-it-works-heading"
    >
      <h1
        id="how-it-works-heading"
        className="text-[#222222] font-bold text-[38px] w-full text-center font-poppins"
        aria-label="How it works?"
      >
        How it works?
      </h1>
      <p
        className="text-[#000000] font-normal font-poppins text-[18px] text-center mt-4"
        aria-labelledby="how-it-works-heading"
      >
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>
      <Steps />
    </div>
  );
};

export default HowItWorks;
