// src/components/Features.jsx
import React from 'react';
import { FaUsers, FaShip, FaStore, FaComments } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-main/10">
    <div className="w-16 h-16 bg-primary-main/10 rounded-2xl flex items-center justify-center mb-6 text-primary-main">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold text-primary-dark mb-3">{title}</h3>
    <p className="text-primary-dark/70 leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: FaUsers,
      title: "Community di velisti",
      description: "Unisciti a migliaia di marinai italiani, condividi esperienze e organizza uscite in gruppo."
    },
    {
      icon: FaShip,
      title: "Esperienze in mare",
      description: "Prenota giornate in barca, corsi di navigazione e regate con skipper esperti."
    },
    {
      icon: FaStore,
      title: "Marketplace posti barca",
      description: "Trova e affitta posti barca in tutta Italia, direttamente da altri velisti."
    },
    {
      icon: FaComments,
      title: "Chat e connessioni",
      description: "Messaggistica istantanea, crea gruppi e rimani sempre in contatto con la community."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary-main/[0.06] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Tutto ciò di cui hai bisogno
          </h2>
          <p className="text-xl text-primary-dark/70 max-w-2xl mx-auto">
            Una piattaforma completa per vivere la tua passione per il mare al massimo
          </p>
        </ScrollReveal>

        <ScrollReveal variant="up" delayMs={120}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
