import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white shadow-md py-2"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-[#0B3B7F]">
          <a href="#" onClick={() => handleLinkClick("home")}>
            INFINITY BPO SOLUTIONS, INC.
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          <div className="flex flex-col items-center">
            <a
              href="#home"
              className={`text-[#0B3B7F] hover:text-primary transition-colors ${
                activeLink === "home" ? "font-semibold" : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
            {activeLink === "home" && (
              <div className="h-2 w-2 bg-[#0B3B7F] rounded-full mt-1"></div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <a
              href="#about"
              className={`hover:text-primary transition-colors ${
                activeLink === "about"
                  ? "font-semibold text-[#0B3B7F]"
                  : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("about")}
            >
              About Us
            </a>
            {activeLink === "about" && (
              <div className="h-2 w-2 bg-[#0B3B7F] rounded-full mt-1"></div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <a
              href="#services"
              className={`hover:text-primary transition-colors ${
                activeLink === "services"
                  ? "font-semibold text-[#0B3B7F]"
                  : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("services")}
            >
              Services
            </a>
            {activeLink === "services" && (
              <div className="h-2 w-2 bg-[#0B3B7F] rounded-full mt-1"></div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <a
              href="#mission-vision"
              className={`hover:text-primary transition-colors ${
                activeLink === "mission-vision"
                  ? "font-semibold text-[#0B3B7F]"
                  : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("mission-vision")}
            >
              Mission & Vision
            </a>
            {activeLink === "mission-vision" && (
              <div className="h-2 w-2 bg-[#0B3B7F] rounded-full mt-1"></div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <a
              href="#contact"
              className={`hover:text-primary transition-colors ${
                activeLink === "contact"
                  ? "font-semibold text-[#0B3B7F]"
                  : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("contact")}
            >
              Contact Us
            </a>
            {activeLink === "contact" && (
              <div className="h-2 w-2 bg-[#0B3B7F] rounded-full mt-1"></div>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#0B3B7F] focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className={`${
                activeLink === "home"
                  ? "text-[#0B3B7F] font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={`${
                activeLink === "about"
                  ? "text-[#0B3B7F] font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("about")}
            >
              About Us
            </a>
            <a
              href="#services"
              className={`${
                activeLink === "services"
                  ? "text-[#0B3B7F] font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("services")}
            >
              Services
            </a>
            <a
              href="#mission-vision"
              className={`${
                activeLink === "mission-vision"
                  ? "text-[#0B3B7F] font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("mission-vision")}
            >
              Mission & Vision
            </a>
            <a
              href="#contact"
              className={`${
                activeLink === "contact"
                  ? "text-[#0B3B7F] font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("contact")}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
