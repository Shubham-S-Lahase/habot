import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#123557] bg-cover w-full flex flex-col items-center justify-center py-16 md:py-12 mt-16 md:mt-20">
      <div className="container flex flex-col md:flex-row items-center md:justify-between border-y border-[#FFFFFF33] py-8">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-[65%] md:flex-row items-center md:items-start gap-10 md:gap-12 lg:gap-20">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img src="/flogo.svg" alt="Logo For the Footer" />
            <span className="text-[#FFFFFF] font-light text-sm sm:text-lg md:text-base">
              © R Singhania
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-8 lg:gap-12 xl:gap-20 md:justify-start justify-evenly w-full">
            <div className="flex flex-col gap-2 text-sm sm:text-lg md:text-base text-[#FFFFFF]">
              <span className="font-bold">Company</span>
              <ul className="font-light flex flex-col gap-2">
                <li>About</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 text-sm sm:text-lg md:text-base text-[#FFFFFF]">
              <span className="font-bold">Terms</span>
              <ul className="font-light flex flex-col gap-2">
                <li>Data privacy</li>
                <li>Terms</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 text-sm sm:text-lg md:text-base text-[#FFFFFF]">
              <span className="font-bold">Related</span>
              <ul className="font-light flex flex-col gap-2">
                <li>Find Buyer</li>
                <li>Feedback</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap gap-4 mt-8 md:mt-0 justify-center md:justify-start">
          <img
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
            src="/LinkedIn.svg"
            alt="LinkedIn Icon"
          />
          <img
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
            src="/Twitter.svg"
            alt="Twitter Icon"
          />
          <img
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
            src="/Facebook.svg"
            alt="Facebook Icon"
          />
          <img
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
            src="/Instagram.svg"
            alt="Instagram Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
