import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { Home, Info, IndianRupee, TreeDeciduous, Layout, MapPin, Download, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', target: 'hero', icon: <Home size={18} /> },
    { name: 'About', target: 'about', icon: <Info size={18} /> },
    { name: 'Price', target: 'price', icon: <IndianRupee size={18} /> },
    { name: 'Amenities', target: 'amenities', icon: <TreeDeciduous size={18} /> },
    { name: 'Floor Plan', target: 'floorplan', icon: <Layout size={18} /> },
    { name: 'Location', target: 'location', icon: <MapPin size={18} /> },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-[100] font-sans">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Logo - Also scrolls to top */}
        <div className="flex items-center cursor-pointer">
          <Link to="hero" smooth={true} duration={500}>
            <img 
              src="https://tse4.mm.bing.net/th/id/OIP.6Zr0GvntbuQyIT5j7iLqHwHaEQ?w=1958&h=1125&rs=1&pid=ImgDetMain&o=7&rm=3" 
              alt="Logo" 
              className="h-12 w-30 border border-amber-900 p-1 bg-black"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.target}      // Matches the ID in your section
              spy={true}            // Makes the link "active" when scrolling
              smooth={true}         // Enables animation
              offset={-70}          // Offsets for the sticky header height
              duration={500}        // Animation speed
              activeClass="text-indigo-700 border-b-2 border-indigo-700" // UI indicator
              className="flex items-center gap-1 cursor-pointer hover:text-indigo-700 transition-colors py-5"
            >
              {link.icon} {link.name}
            </Link>
          ))}
          
          <button className="flex items-center gap-2 bg-[#FF7F5C] text-white px-4 py-2 rounded shadow-md hover:bg-[#e06b4a] transition-all ml-4">
            <Download size={16} /> BROCHURE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen border-t' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-6 py-4 space-y-4 bg-white shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.target}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="flex items-center gap-3 text-slate-700 font-medium py-2 border-b border-gray-50 cursor-pointer"
            >
              <span className="text-indigo-700">{link.icon}</span> {link.name}
            </Link>
          ))}
          <button className="w-full flex items-center justify-center gap-2 bg-[#FF7F5C] text-white px-4 py-3 rounded shadow-md">
            <Download size={18} /> DOWNLOAD BROCHURE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;