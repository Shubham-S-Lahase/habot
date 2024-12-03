import React from "react";

const SearchBar = ({ iconPath, placeholderText }) => {
  return (
    <div
      className="flex items-center border border-gray-300 rounded-tl-[5px] w-full md:w-[400px] h-[56px] px-[19px] gap-0 bg-white opacity-100"
      style={{
        padding: "10px 18px 6px 19px",
      }}
    >
      <img
        src={iconPath}
        alt="Search Icon"
        className="h-6 w-6 text-orange-500 mr-2"
      />
      <input
        type="text"
        placeholder={placeholderText}
        className="bg-transparent w-full outline-none text-gray-500 text-[15.13px] font-light font-poppins leading-[22.69px] placeholder-gray-500"
        style={{
          textAlign: "left",
        //   textDecoration: "underline from-font",
          textUnderlinePosition: "under",
        }}
      />
    </div>
  );
};

export default SearchBar;