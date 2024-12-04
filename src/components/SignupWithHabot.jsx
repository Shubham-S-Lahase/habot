import React, { useState } from "react";

const SignupWithHabot = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  const cities = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];

  return (
    <div className="container w-full mx-auto flex flex-col md:flex-row items-center justify-between py-12 md:py-20 px-4">
      {/* Left Section */}
      <div className="flex flex-col gap-6 md:gap-6 lg:gap-8 xl:gap-12 w-[100%] md:w-[48%] items-center md:items-start">
        <h1 className="font-poppins text-[20px] md:text-[25px] lg:text-[28px] xl:text-[37.34px] font-bold text-[#000000]">
          Ready to dive into <span className="text-[#271555]">HABOT?</span>
        </h1>

        <p className="font-poppins md:text-[14px] lg:text-[16px] xl:text-[18px] font-light text-[#000000] text-center md:text-left">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>

        <button
          className={`flex justify-center items-center gap-3 font-poppins text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-bold text-white w-full md:w-[240px] lg:w-[300px] xl:w-[320px] h-[54px] rounded-[5px] border border-[#00732F] bg-[#00732F] transition-opacity duration-300 ${
            isClicked ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleClick}
          aria-label="Sign up today"
        >
          Sign up Today!
          <img src="/suarrow.svg" alt="Arrow icon" />
        </button>
      </div>

      {/* Locations Grid Section */}
      <div className="grid grid-cols-2 gap-4 md:w-[48%] w-[100%] mt-8 md:mt-0">
        {cities.map((location, index) => (
          <div
            key={index}
            className="bg-white border border-[#E7760D] rounded-[5px] w-full h-[70px] lg:h-[60px] flex items-center justify-center"
            role="region"
            aria-label={location}
          >
            <p className="font-bold text-[16px] md:text-[18px]">{location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignupWithHabot;
