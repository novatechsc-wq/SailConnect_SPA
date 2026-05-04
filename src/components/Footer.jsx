// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">⛵</span>
              <span className="font-bold text-xl">VelaLink</span>
            </div>
            <p className="text-white/70 max-w-md">
              La community definitiva per velisti italiani. Connettiti, condividi, vivi la mare.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Link rapidi</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#home" className="hover:text-primary-light transition-colors">Home</a></li>
              <li><a href="#community" className="hover:text-primary-light transition-colors">Community</a></li>
              <li><a href="#marketplace" className="hover:text-primary-light transition-colors">Marketplace</a></li>
              <li><a href="#about" className="hover:text-primary-light transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4"> legale</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-primary-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Termini di Servizio</a></li>
              <li><a href="#contatti" className="hover:text-primary-light transition-colors">Contatti</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/15 pt-8 text-center text-white/55">
          <p>&copy; 2024 VelaLink. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;