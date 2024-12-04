import React, { useState } from "react";

// Static content for tabs
const content = {
  Buyer: [
    "Post your requirements.",
    "Sit back for multiple suppliers to contact you.",
    "Choose among the suppliers based on the ratings and reviews.",
  ],
  Supplier: [
    "List your products and services.",
    "Receive inquiries directly from potential buyers.",
    "Grow your business with verified leads.",
  ],
};

const VideoBuyer = () => {
  const [activeTab, setActiveTab] = useState("Buyer");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="w-full gap-12 md:gap-6 px-4 md:px-12 py-12 md:py-20 bg-[#072F57] flex flex-col md:flex-row items-start md:items-center justify-evenly">
        {/* Video Section */}
        <div className="flex w-full md:w-[48%]">
          <iframe
            className="w-full h-[250px] sm:h-[300px] md:h-[350px]"
            src="https://www.youtube.com/embed/IZLp-TZyDkQ"
            title="Introduction to Buyer and Supplier Platform"
            frameBorder="0"
            allowFullScreen
            aria-label="Introduction to Buyer and Supplier Platform Video"
          ></iframe>
        </div>

        {/* Tabs and Content Section */}
        <div className="flex flex-col w-full md:w-[48%] h-[250px] sm:h-[300px] md:h-[350px] gap-6">
          {/* Tabs */}
          <div className="flex gap-8 w-full" role="tablist">
            {["Buyer", "Supplier"].map((tab) => (
              <div
                key={tab}
                className={`flex flex-col items-center w-1/2 cursor-pointer ${
                  activeTab === tab ? "text-[#EB7150]" : "text-white"
                }`}
                onClick={() => handleTabClick(tab)}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`${tab.toLowerCase()}-panel`}
                id={`${tab.toLowerCase()}-tab`}
              >
                <span className="font-poppins text-[20px] sm:text-[24px] md:text-[26px] font-bold leading-[28px] sm:leading-[30px] md:leading-[32px] transition-all">
                  {tab}
                </span>
                {activeTab === tab && (
                  <div className="w-full rounded-[1px] h-1 bg-[#EB7150] mt-2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="w-full">
            <ul
              className="flex flex-col gap-4"
              role="tabpanel"
              id={`${activeTab.toLowerCase()}-panel`}
              aria-labelledby={`${activeTab.toLowerCase()}-tab`}
            >
              {content[activeTab].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-white font-poppins text-[16px] sm:text-[18px] md:text-[18.75px] font-medium leading-[28px] sm:leading-[35px] md:leading-[39px]"
                >
                  <img src="/checked.svg" alt="Checkmark" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBuyer;
