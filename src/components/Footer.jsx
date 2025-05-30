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
    <footer id="contact" className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Infinity BPO Solutions Inc.
            </h3>
            <p className="mb-4">
              A premier Business Process Outsourcing company dedicated to
              providing high-quality services to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 123 Business Avenue, Suite
                100
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" /> +1 (123) 456-7890
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" /> info@infinitybposolutions.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Infinity BPO Solutions Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
