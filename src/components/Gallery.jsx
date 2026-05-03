import React from 'react';

// Import gallery images from assets folder
import gallery1 from '../assets/Gallery/Image_1.webp';
import gallery2 from '../assets/Gallery/Image_2.png';
import gallery3 from '../assets/Gallery/Image_3.png';
import gallery4 from '../assets/Gallery/Image_4.png';

const Gallery = () => {
  const images = [
    { src: gallery1, alt: 'Sailing experience 1' },
    { src: gallery2, alt: 'Sailing experience 2' },
    { src: gallery3, alt: 'Sailing experience 3' },
    { src: gallery4, alt: 'Sailing experience 4' },
  ];

  return (
    <section className="py-20 bg-primary-main/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Gallery
          </h2>
          <p className="text-xl text-primary-dark/70 max-w-2xl mx-auto">
            Momenti indimenticabili dalla nostra community
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
