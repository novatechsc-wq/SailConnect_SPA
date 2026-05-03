import React from 'react';
import logo from '../assets/logo.png';

const Navbar = ({ sections }) => {
  const handleScroll = (section) => {
    const target = sections[section]?.current;
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo + Brand Name - Left Side */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="VelaLink Logo" className="h-12 w-auto" />
          <span className="text-xl font-bold text-primary-dark hidden sm:block">VelaLink</span>
        </div>

        {/* Navigation Links - Right Side */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => handleScroll('home')}
            className="text-sm font-medium text-primary-dark hover:text-primary-main transition-colors"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleScroll('community')}
            className="text-sm font-medium text-primary-dark hover:text-primary-main transition-colors"
          >
            Community
          </button>
          <button
            type="button"
            onClick={() => handleScroll('marketplace')}
            className="text-sm font-medium text-primary-dark hover:text-primary-main transition-colors"
          >
            Marketplace
          </button>
          <button
            type="button"
            onClick={() => handleScroll('about')}
            className="text-sm font-medium text-primary-dark hover:text-primary-main transition-colors"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleScroll('gallery')}
            className="text-sm font-medium text-primary-dark hover:text-primary-main transition-colors"
          >
            Gallery
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
