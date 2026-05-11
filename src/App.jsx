// src/App.jsx
import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Marketplace from './components/Marketplace.jsx';
import AboutStats from './components/AboutStats.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import PrivacyPage from './components/PrivacyPage.jsx';
import TermsPage from './components/TermsPage.jsx';
import SafetyStandardPage from './components/SafetyStandardPage.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const sections = {
    home: useRef(null),
    community: useRef(null),
    marketplace: useRef(null),
    about: useRef(null),
  };

  // Handle route changes based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange(); // Initial check
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleGoHome = () => {
    window.location.hash = '#home';
  };

  const handleShowPrivacy = () => {
    window.location.hash = '#privacy';
  };

  const handleShowTerms = () => {
    window.location.hash = '#terms';
  };

  const handleShowSafetyStandard = () => {
    window.location.hash = '#safety';
  };

  // Show Privacy Page
  if (currentPage === 'privacy') {
    return (
      <div className="bg-white text-primary-dark">
        <Navbar sections={sections} />
        <PrivacyPage onClose={handleGoHome} />
        <Footer onPrivacyClick={handleShowPrivacy} onTermsClick={handleShowTerms} />
      </div>
    );
  }

  // Show Terms Page
  if (currentPage === 'terms') {
    return (
      <div className="bg-white text-primary-dark">
        <Navbar sections={sections} />
        <TermsPage onClose={handleGoHome} />
        <Footer
          onPrivacyClick={handleShowPrivacy}
          onTermsClick={handleShowTerms}
          onSafetyClick={handleShowSafetyStandard}
        />
      </div>
    );
  }

  // Show Safety Standard Page
  if (currentPage === 'safety') {
    return (
      <div className="bg-white text-primary-dark">
        <Navbar sections={sections} />
        <SafetyStandardPage onClose={handleGoHome} />
        <Footer
          onPrivacyClick={handleShowPrivacy}
          onTermsClick={handleShowTerms}
          onSafetyClick={handleShowSafetyStandard}
        />
      </div>
    );
  }

  // Default Home Page
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
      <Footer
        onPrivacyClick={handleShowPrivacy}
        onTermsClick={handleShowTerms}
        onSafetyClick={handleShowSafetyStandard}
      />
    </div>
  );
}

export default App;