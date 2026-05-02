// src/components/AboutStats.jsx
import React from 'react';

const AboutStats = () => {
  const stats = [
    { number: '10K+', label: 'Velisti iscritti' },
    { number: '500+', label: 'Porti collaborativi' },
    { number: '50K+', label: 'Posti barca disponibili' },
    { number: '4.8/5', label: 'Valutazione media' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            La comunità in numeri
          </h2>
          <p className="text-xl text-blue-100">
            I numeri che dimostrano la nostra crescita
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
