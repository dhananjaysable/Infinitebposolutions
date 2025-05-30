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
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B3B7F]">
          <a href="#" onClick={() => handleLinkClick("home")}>
            INFINITY BPO SOLUTIONS, INC.
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-4 md:flex lg:space-x-8">
          {[
            { label: "Home", href: "#", key: "home" },
            { label: "About Us", href: "#about", key: "about" },
            { label: "Services", href: "#services", key: "services" },
            {
              label: "Mission & Vision",
              href: "#mission-vision",
              key: "mission-vision",
            },
            { label: "Contact Us", href: "#contact", key: "contact" },
          ].map((item) => (
            <div key={item.key} className="flex flex-col items-center">
              <a
                href={item.href}
                className={`transition-colors text-base sm:text-lg hover:text-primary ${
                  activeLink === item.key
                    ? "font-semibold text-[#0B3B7F]"
                    : "text-gray-500"
                }`}
                onClick={() => handleLinkClick(item.key)}
              >
                {item.label}
              </a>
              {activeLink === item.key && (
                <div className="h-2 w-2 bg-[#0B3B7F] rounded-full mt-1"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#0B3B7F] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 w-full px-4 py-4 bg-white shadow-lg md:hidden top-full">
          <div className="flex flex-col space-y-4">
            {[
              { label: "Home", href: "#", key: "home" },
              { label: "About Us", href: "#about", key: "about" },
              { label: "Services", href: "#services", key: "services" },
              {
                label: "Mission & Vision",
                href: "#mission-vision",
                key: "mission-vision",
              },
              { label: "Contact Us", href: "#contact", key: "contact" },
            ].map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`transition-colors text-base sm:text-lg ${
                  activeLink === item.key
                    ? "text-[#0B3B7F] font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => handleLinkClick(item.key)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
