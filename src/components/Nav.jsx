import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger and close icons
import logo from "../images/sportslocLOGO.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-Ubuntu border-b border-gray-300 p-5 flex items-center justify-between">
      {/* Logo */}
      <img src={logo} alt="logo" className="w-[10rem]" />

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-[5rem] text-xl">
        <li className="border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300">
          <a href="#">Find Facilities</a>
        </li>
        <li className="border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300">
          <a href="#">Find Player</a>
        </li>
        <li className="border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300">
          <a href="#">Events</a>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4">
        <button className="text-lg font-semibold border-2 border-black hover:border-blue-500 px-4 py-1 rounded-md">
          Login
        </button>
        <button className="text-lg font-semibold border-2 border-black hover:border-blue-500 px-4 py-1 rounded-md">
          Sign Up
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={55} /> : <Menu size={55} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[90px] left-0 w-[28rem] bg-white shadow-md z-50 flex flex-col items-center gap-6 py-6 text-2xl font-medium md:hidden">
          <a href="#" onClick={() => setMenuOpen(false)}>
            Find Facilities
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Find Player
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Events
          </a>
          <button className="w-4/5 border-2 border-black hover:border-blue-500 py-2 rounded-md">
            Login
          </button>
          <button className="w-4/5 border-2 border-black hover:border-blue-500 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
