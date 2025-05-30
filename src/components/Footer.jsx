import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-10 mt-auto text-gray-500 sm:py-12 bg-secondary"
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info & Socials */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-gray-600 sm:text-3xl">
              Infinity BPO Solutions Inc.
            </h3>
            <p className="mb-4 text-base sm:text-lg">
              A premier Business Process Outsourcing company dedicated to
              providing high-quality services to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-600 sm:text-2xl">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-500 transition-colors hover:text-primary sm:text-lg"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-base text-gray-500 transition-colors hover:text-primary sm:text-lg"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-base text-gray-500 transition-colors hover:text-primary sm:text-lg"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-base text-gray-500 transition-colors hover:text-primary sm:text-lg"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-600 sm:text-2xl">
              Contact Us
            </h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span className="text-base text-gray-500 transition-colors hover:text-primary sm:text-lg">
                  ICEICO TECHNOLOGIES PVT. LTD
                </span>
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" />
                <a
                  href="tel:+11234567890"
                  className="text-base text-gray-500 transition-colors hover:text-primary sm:text-lg"
                >
                  +1 (123) 456-7890
                </a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:info@infinitybposolutions.com"
                  className="text-base text-gray-500 transition-colors hover:text-primary sm:text-lg"
                >
                  info@infinitybposolutions.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-gray-600">
          <p className="text-sm text-gray-500 sm:text-base">
            &copy; {new Date().getFullYear()} Infinity BPO Solutions Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
