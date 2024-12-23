import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    if (!mobileMenuOpen) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const serviceTags = [
    { path: "/tag1", label: "Tag 1" },
    { path: "/tag2", label: "Tag 2" },
    { path: "/tag3", label: "Tag 3" },
  ];

  return (
    <header className="bg-white w-full fixed top-0 left-0 shadow-[0px_9px_26px_0px_#7373731A] z-50">
      <div className="container mx-auto flex items-center justify-between h-[86px] px-4">
        <div className="flex items-center">
          <Link to="/" aria-label="Go to homepage">
            <img
              src="/logo.svg"
              alt="HABOT Logo"
              className="h-8 md:h-10 lg:h-12 transition-all"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/suppliers"
            className="text-gray-600 hover:text-gray-900 font-poppins text-sm md:text-[15.25px] font-normal leading-[24px] transition-all"
            aria-label="Find Suppliers"
          >
            Find Suppliers
          </Link>
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggleDropdown}
            items={serviceTags}
            onItemClick={handleDropdownItemClick}
          />
          <button className="border border-[#00732F] rounded-[5px] w-[195px] h-[50px] font-inter text-sm md:text-[15px] font-bold leading-[24px] text-[#00732F] text-center hover:bg-[#00732F] hover:border-[#00732F] hover:text-[#FFFFFF] active:bg-[#005624] transition-all" aria-label="Login or Sign Up">
            Login / Sign Up
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <img
              src={mobileMenuOpen ? "/close.svg" : "/hamburger.svg"}
              alt="Menu Icon and Close Icon"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[86px] left-0 w-full bg-white shadow-lg z-20 transition-transform duration-500 ease-in-out">
          <div className="container mx-auto flex flex-col items-start p-4 space-y-4">
            <Link
              to="/suppliers"
              className="text-gray-600 hover:text-gray-900 font-poppins text-sm font-normal transition-all"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Find Suppliers"
            >
              Find Suppliers
            </Link>
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggleDropdown}
              items={serviceTags}
              onItemClick={handleDropdownItemClick}
            />
            <button className="border border-[#00732F] rounded-[5px] w-full py-2 font-inter text-sm font-bold leading-[24px] text-[#00732F] text-center hover:bg-[#00732F] hover:border-[#00732F] hover:text-[#FFFFFF] active:bg-[#005624] transition-all" aria-label="Login or Sign Up">
              Login / Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
