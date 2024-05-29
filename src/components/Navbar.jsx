import { React, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
// import { navItems } from "../constants";
// import logo from "../assets/logo.png";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex justify-end items-center flex-1">
            <Link
              to="footer"
              smooth={true}
              duration={500}
              className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-4 rounded-md text-white cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <Link
              to="footer"
              smooth={true}
              duration={500}
              className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-4 rounded-md text-white cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
