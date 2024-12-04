import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle, items, onItemClick }) => (
  <div className="relative">
    <button
      onClick={toggle}
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls="dropdown-menu"
      aria-labelledby="dropdown-button"
      className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-poppins text-sm md:text-[15.25px] font-normal leading-[24px] transition-all"
      id="dropdown-button"
    >
      Find Service Tags
      <img
        src={isOpen ? "/up_arrow.svg" : "/down_arrow.svg"}
        alt="Toggle Dropdown"
      />
    </button>
    {isOpen && (
      <div
        id="dropdown-menu"
        role="menu"
        aria-labelledby="dropdown-button"
        className="absolute top-full left-0 w-40 bg-white border border-gray-200 shadow-lg z-10 rounded-md text-[15.25px] font-poppins transition-transform transform duration-300 ease-in-out opacity-100 mt-2 md:w-52"
      >
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            role="menuitem"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all"
            onClick={() => {
              onItemClick();
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default Dropdown;
