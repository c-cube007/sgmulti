import React from "react";
import { resourcesLinks } from "../constants";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"; // Import Lucide React icons
import logo from "../assets/logoi.png"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer id="footer" className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Contact Details Column */}
        <div className="flex flex-col items-start text-left">
          <img src={logo} alt="Website Logo" className="w-32 mb-4" />
          <div className="text-neutral-300 space-y-4">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <Phone className="mr-2" size={24} />
                <p className="text-sm sm:text-base">+1 (682) 221-8020</p>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="mr-2" size={24} />
                <p className="text-sm sm:text-base">gbolly76010@yahoo.com</p>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="mr-2" size={24} />
                <p className="text-sm sm:text-base">info@sgmultinational.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links Column */}
        <div className="text-left">
          <h3 className="text-md font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <br />
          <div className="flex items-center mb-2">
            <MapPin className="mr-2" size={24} />
            <p className="text-sm sm:text-base">
              2307 OAK LANE SUITE 201, GRAND PRAIRIE TEXAS 75051-8286, U.S.A
            </p>
          </div>
          <div className="flex items-center mb-2">
            <Mail className="mr-2" size={24} />
            <p className="text-sm sm:text-base">
              802 SOUTH CARRIER PKWY # 530395, GRAND PRAIRIE TEXAS 75053-0395,
              U.S.A
            </p>
          </div>
        </div>

        {/* Social Media Column */}
        <div className="flex flex-col items-start">
          <div className="w-full h-64 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.0477227128827!2d-97.00690482368958!3d32.71135957369102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e85fdab82e09f%3A0xf885c743d551fa8f!2s2307%20Oak%20Ln%20%23201%2C%20Grand%20Prairie%2C%20TX%2075051%2C%20USA!5e0!3m2!1sen!2sng!4v1717000269826!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>
          <h3 className="text-md font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
