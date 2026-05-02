// src/components/Marketplace.jsx
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SuggestionCard = ({ name, location, price, status, image }) => (
  <div className="rounded-[2rem] bg-white/95 border border-slate-200 shadow-2xl overflow-hidden">
    <div className="relative h-56 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
      <div className="absolute bottom-5 left-5 text-white space-y-1">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Consigliata</p>
        <h3 className="text-2xl font-semibold">{name}</h3>
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-slate-900">{location}</p>
          <p className="text-sm text-slate-500">Marina esclusiva</p>
        </div>
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${status === 'Disponibile' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
          {status}
        </span>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-200 pt-4">
        <div>
          <span className="text-3xl font-bold text-slate-900">€{price}</span>
          <p className="text-sm text-slate-500">/ notte</p>
        </div>
        <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition">
          Prenota ora
        </button>
      </div>
    </div>
  </div>
);

const Marketplace = () => {
  const featuredMarina = {
    name: 'Marina di Porto Rotondo',
    location: 'Corsica, Francia',
    price: '1,05',
    status: 'Disponibile',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
  };

  const topMarinas = [
    {
      name: 'Porto Cervo Marina',
      location: 'Sardegna, Italia',
      price: '180',
      image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
    },
    {
      name: 'Marina di Varazze',
      location: 'Liguria, Italia',
      price: '120',
      image: 'https://images.unsplash.com/photo-1579031059598-1fef7e39126c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      name: 'Porto Turistico di Roma',
      location: 'Lazio, Italia',
      price: '150',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
    },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Marketplace Posti Barca
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trova il tuo posto barca, ovunque tu sia. Cerca, confronta e prenota in pochi secondi.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.95fr] items-start mb-16">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
              alt="Map overview"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            <div className="absolute inset-x-0 top-10 px-6 md:px-12">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
                <FaMapMarkerAlt className="text-blue-600" />
                5.000 marine in Europa
              </div>
            </div>
            <div className="absolute inset-x-0 top-28 px-6 md:px-12">
              <div className="max-w-2xl rounded-[2rem] bg-white/95 p-8 shadow-2xl ring-1 ring-slate-200">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Marketplace</p>
                <h3 className="mt-4 text-4xl font-bold text-slate-900 leading-tight">
                  Trova il tuo posto barca, ovunque tu sia.
                </h3>
                <p className="mt-4 max-w-xl text-slate-600">
                  Cerca, confronta e prenota in pochi secondi. Più di 5.000 marine ti aspettano per la tua prossima avventura in mare.
                </p>
              </div>
            </div>
            <div className="absolute right-8 bottom-8 w-full max-w-sm">
              <SuggestionCard {...featuredMarina} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Unisciti alla community e naviga insieme a noi.</h3>
              <p className="text-slate-600 mb-6">
                Esplora le migliori offerte di marina in costa italiana ed europea, con proposte verificate e feedback autentici.
              </p>
              <div className="grid gap-4">
                <div className="flex items-start gap-4 rounded-3xl bg-slate-50 p-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">1</span>
                  <div>
                    <h4 className="font-semibold text-slate-900">Vedi le offerte migliori</h4>
                    <p className="text-sm text-slate-500">Offerte selezionate per te in base alla posizione e al rating.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl bg-slate-50 p-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">2</span>
                  <div>
                    <h4 className="font-semibold text-slate-900">Confronta i prezzi</h4>
                    <p className="text-sm text-slate-500">Visualizza tariffe e recensioni per scegliere il posto perfetto.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl bg-slate-50 p-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">3</span>
                  <div>
                    <h4 className="font-semibold text-slate-900">Prenota in un click</h4>
                    <p className="text-sm text-slate-500">Completa la prenotazione in modo rapido e sicuro, senza complicazioni.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl ring-1 ring-slate-900">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Offerte top</p>
                  <h4 className="mt-2 text-2xl font-semibold">Top 3 marine consigliate</h4>
                </div>
                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">3 risultati</span>
              </div>
              <div className="space-y-4">
                {topMarinas.map((marina) => (
                  <div key={marina.name} className="rounded-3xl bg-slate-900/90 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-white">{marina.name}</p>
                        <p className="text-sm text-slate-400">{marina.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-white">€{marina.price}</p>
                        <p className="text-xs text-slate-500">/ notte</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-xl transition hover:bg-blue-700">
            Scopri il Marketplace
          </button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
