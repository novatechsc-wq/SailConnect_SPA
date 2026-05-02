// src/components/Hero.jsx
import React from 'react';
import { FaApple, FaGooglePlay, FaUsers, FaShip, FaStore, FaComments } from 'react-icons/fa';

const features = [
  {
    icon: FaUsers,
    title: 'Community di velisti',
    description: 'Condividi passioni, consigli e avventure con una community sempre più grande.',
  },
  {
    icon: FaShip,
    title: 'Esperienze in mare',
    description: 'Pubblica le tue uscite, scopri nuovi itinerari e lasciati ispirare.',
  },
  {
    icon: FaStore,
    title: 'Marketplace posti barca',
    description: 'Trova e prenota il posto barca ideale tra migliaia di marine.',
  },
  {
    icon: FaComments,
    title: 'Chat e connessioni',
    description: 'Entra in contatto e crea nuove amicizie in mare e a terra.',
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Sailing boat on open sea"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-sm font-semibold text-slate-100 mb-6">
              <FaShip className="text-blue-400" />
              Sailing social network
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Il social network per chi vive il mare.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10">
              Connettiti con altri velisti, condividi esperienze e trova il posto barca perfetto con il nostro marketplace.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex items-center justify-center gap-3 rounded-2xl bg-slate-100 px-6 py-3 text-slate-950 shadow-xl transition hover:bg-white">
                <FaApple size={24} />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Scarica su</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-3 text-white shadow-xl transition hover:bg-blue-700">
                <FaGooglePlay size={24} />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.24em] text-blue-100">Disponibile su</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md animate-slide-up">
            <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-slate-900 bg-slate-900 shadow-2xl">
              <div className="absolute top-0 inset-x-0 h-10 bg-slate-900/95" />
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                alt="App preview on phone"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 w-32 -translate-x-1/2 rounded-full bg-slate-400 h-1" />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] bg-white/95 p-6 shadow-2xl ring-1 ring-slate-200 backdrop-blur-md">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
                  <feature.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
