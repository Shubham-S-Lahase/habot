import React from "react";

const GetVerified = () => {
  return (
    <div className="bg-[#E8FBFF] bg-cover w-full flex flex-col items-center justify-center py-16 md:py-20 my-16 md:my-20">
      <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-16">
        {/* Heading */}
        <h1 className="flex flex-row items-start gap-2 font-poppins font-semibold text-[#000000] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[38px] leading-[1.2] text-center md:text-left">
          Let Supplier
          <span className="flex flex-col items-center md:items-start">
            Find You
            <div className="w-full rounded-[1px] h-1 bg-[#EB7150] mt-1"></div>
          </span>
        </h1>

        {/* Button */}
        <button className="w-full md:w-[216px] h-[54px] bg-[#EB7150] rounded-[5px] text-[#FFFFFF] font-poppins font-bold text-[16px] sm:text-[18px] text-center">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default GetVerified;
