import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="mr-2" size={24} />
              <p className="text-sm sm:text-base font-light">
                +1 (682) 221-8020
              </p>
            </div>
            <div className="border-r border-neutral-500 h-6"></div>
            <div className="flex items-center">
              <Mail className="mr-2" size={24} />
              <p className="text-sm sm:text-base font-light">
                info@sgmultinational.com
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-end items-center flex-1">
            <Link
              to="contact-form"
              smooth={true}
              duration={500}
              className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-4 rounded-md text-white cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleNavbar} className="focus:outline-none">
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-col space-y-4 items-left">
                <div className="flex items-center">
                  <Phone className="mr-2" size={24} />
                  <p className="text-sm sm:text-base font-light">
                    +1 (682) 221-8020
                  </p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2" size={24} />
                  <p className="text-sm sm:text-base font-light">
                    info@sgmultinational.com
                  </p>
                </div>
              </div>
              <Link
                to="contact-form"
                smooth={true}
                duration={500}
                className="bg-gradient-to-r items-center from-blue-500 to-blue-800 py-2 px-4 rounded-md text-white cursor-pointer"
                onClick={toggleNavbar}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
