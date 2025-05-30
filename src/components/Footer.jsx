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
    <footer id="contact" className="py-12 mt-auto text-gray-500 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-gray-600">
              Infinity BPO Solutions Inc.
            </h3>
            <p className="mb-4">
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

          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-600">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition-colors hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-500 transition-colors hover:text-primary"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-500 transition-colors hover:text-primary"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-500 transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-600">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span className="text-gray-500 transition-colors hover:text-primary">
                  ICEICO TECHNOLOGIES PVT. LTD
                </span>
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" />
                <a
                  href="tel:+11234567890"
                  className="text-gray-500 transition-colors hover:text-primary"
                >
                  +1 (123) 456-7890
                </a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:info@infinitybposolutions.com"
                  className="text-gray-500 transition-colors hover:text-primary"
                >
                  info@infinitybposolutions.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-gray-600">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Infinity BPO Solutions Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
