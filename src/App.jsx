// src/App.jsx
import React, { useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Marketplace from './components/Marketplace.jsx';
import AboutStats from './components/AboutStats.jsx';
import Gallery from './components/Gallery.jsx';
import Trust from './components/Trust.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const sections = {
    home: useRef(null),
    community: useRef(null),
    marketplace: useRef(null),
    about: useRef(null),
    contatti: useRef(null),
  };

  return (
    <div className="bg-white text-primary-dark">
      <Navbar sections={sections} />
      <section id="home" ref={sections.home}>
        <Hero />
      </section>
      <section id="community" ref={sections.community}>
        <Features />
      </section>
      <section id="marketplace" ref={sections.marketplace}>
        <Marketplace />
      </section>
      <section id="about" ref={sections.about}>
        <AboutStats />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="trust">
        <Trust />
      </section>
      <section id="contatti" ref={sections.contatti}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;