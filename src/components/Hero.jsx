import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="bg-hero bg-cover w-full flex flex-col gap-10 items-center h-screen justify-center px-4 sm:px-[0]">
      <h1
        className="container mx-auto px-4  text-center font-poppins font-bold text-[#FFFFFF] text-[26px] sm:text-[40px] md:text-[55px] leading-[40px] sm:leading-[48px] md:leading-[66px]"
        aria-label="Main heading"
      >
        Are You a Supplier?
      </h1>

      <h1
        className="container mx-auto px-4 text-center font-poppins font-normal text-[#FFFFFF] text-[32px] sm:text-[40px] md:text-[55px] leading-[40px] sm:leading-[48px] md:leading-[66px]"
        aria-label="Subheading"
      >
        Explore Matching Opportunities.
      </h1>

      {/* Form Section */}
      <form
        className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4"
        aria-labelledby="supplier-heading opportunities-heading"
        role="search"
      >
        <SearchBar
          iconPath="/suitcase.svg"
          placeholderText="Search your required service here"
          aria-label="Search your required service here"
        />
        <SearchBar
          iconPath="/location.svg"
          placeholderText="Search your desired location here"
          aria-label="Search your desired location here"
        />
        <button
          type="submit"
          className="w-full md:w-[117.94px] h-[54px] bg-[#00732F] hover:bg-green-700 transition text-white font-inter text-[15.13px] font-bold leading-[24px] rounded-[5px] border border-green-700 px-[33px]"
          aria-label="Search"
        >
          Search
        </button>
      </form>

      <p className="text-[16px] md:text-[18px] leading-[22px] md:leading-[27px] text-[#FFFFFF] font-poppins flex flex-col sm:flex-row gap-2 text-center md:text-left" aria-labelledby="buyer-info">
        <span id="buyer-info" className="font-bold">Are you a buyer?</span>
        <span className="font-normal underline">
          Click here if you are looking to post a requirement
        </span>
      </p>
    </div>
  );
};

export default Hero;