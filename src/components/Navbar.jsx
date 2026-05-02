// src/components/Navbar.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { FaBars, FaTimes, FaShip } from 'react-icons/fa';

const Navbar = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home', ref: sections.home },
      { id: 'community', label: 'Community', ref: sections.community },
      { id: 'marketplace', label: 'Marketplace', ref: sections.marketplace },
      { id: 'about', label: 'About', ref: sections.about },
      { id: 'contatti', label: 'Contatti', ref: sections.contatti },
    ],
    [sections]
  );

  const scrollToSection = (ref, id) => {
    if (!ref.current) return;
    const offset = ref.current.offsetTop - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    setIsOpen(false);
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = 'home';
      for (const item of navItems) {
        if (item.ref.current) {
          const offset = item.ref.current.offsetTop;
          const height = item.ref.current.offsetHeight;
          if (scrollPosition >= offset && scrollPosition < offset + height) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <FaShip className="text-2xl text-blue-700" />
            <span className="font-bold text-xl text-gray-800">VelaSocial</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref, item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg pb-4">
            <div className="flex flex-col space-y-3 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref, item.id)}
                  className={`px-4 py-2 text-left text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;