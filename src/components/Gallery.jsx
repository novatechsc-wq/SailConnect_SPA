// src/components/Gallery.jsx
import React from 'react';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1569263979104-865a08df8dd9?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1605281317010-fe5ffe79ba8b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559600519-da7f14f2a2e9?w=400&h=300&fit=crop',
  ];

  return (
    <section className="py-20 bg-primary-main/[0.04]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Gallery
          </h2>
          <p className="text-xl text-primary-dark/70 max-w-2xl mx-auto">
            Momenti indimenticabili dalla nostra community
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
