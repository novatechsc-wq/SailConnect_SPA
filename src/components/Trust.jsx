// src/components/Trust.jsx
import React from 'react';

const Trust = () => {
  const partners = [
    { name: 'Partner 1', logo: 'P1' },
    { name: 'Partner 2', logo: 'P2' },
    { name: 'Partner 3', logo: 'P3' },
    { name: 'Partner 4', logo: 'P4' },
  ];

  return (
    <section className="py-16 bg-white border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
            Partner fidati
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-32 h-20 bg-primary-main/10 rounded-lg flex items-center justify-center text-primary-dark/45 font-bold text-xl ring-1 ring-primary-main/10"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
