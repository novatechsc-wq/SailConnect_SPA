// src/components/Marketplace.jsx
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
// Import local marketplace images
import marinaImage1 from '../assets/Marketplace/Gemini_Generated_Image_cd57klcd57klcd57.png';

const SuggestionCard = ({ name, location, price, status, image }) => (
  <div className="h-full rounded-[2rem] bg-white/95 border border-primary-dark/12 shadow-2xl overflow-hidden flex flex-col">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/75 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white space-y-1">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/85">Consigliata</p>
        <h3 className="text-xl font-semibold line-clamp-2">{name}</h3>
      </div>
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-primary-dark break-words line-clamp-2">{location}</p>
            <p className="text-xs text-primary-dark/55 mt-1">Marina esclusiva</p>
          </div>
          <span className={`inline-flex rounded-full px-2.5 py-1 text-[0.6rem] font-semibold flex-shrink-0 ${status === 'Disponibile' ? 'bg-primary-light/25 text-primary-dark' : 'bg-primary-dark/10 text-primary-dark/75'}`}>
            {status}
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200 pt-3">
        <div>
          <span className="text-xl font-bold text-primary-dark">€{price}</span>
          <p className="text-xs text-primary-dark/55">/ notte</p>
        </div>
        <button className="rounded-full bg-primary-main px-4 py-2 text-xs font-semibold text-white shadow-lg hover:bg-primary-dark transition flex-shrink-0">
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
    image: marinaImage1,
  };

  const topMarinas = [
    {
      name: 'Porto Cervo Marina',
      location: 'Sardegna, Italia',
      price: '180',
      image: marinaImage1,
    },
    {
      name: 'Marina di Varazze',
      location: 'Liguria, Italia',
      price: '120',
      image: marinaImage1,
    },
    {
      name: 'Porto Turistico di Roma',
      location: 'Lazio, Italia',
      price: '150',
      image: marinaImage1,
    },
  ];

  return (
    <section className="py-20 bg-primary-main/[0.06]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Marketplace Posti Barca
          </h2>
          <p className="text-xl text-primary-dark/70 max-w-2xl mx-auto">
            Trova il tuo posto barca, ovunque tu sia. Cerca, confronta e prenota in pochi secondi.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.95fr] items-start mb-16">
          <div className="grid gap-6">
            <div className="rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-primary-dark/12 overflow-hidden h-[22rem] md:h-[24rem]">
              <div className="relative h-full overflow-hidden">
                <img
                  src={marinaImage1}
                  alt="Map overview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent" />

                <div className="absolute left-4 top-4 md:left-8 md:top-6">
                  <div className="inline-flex items-center gap-3 rounded-full bg-white/95 px-3 py-2 text-sm font-semibold text-primary-dark shadow-sm">
                    <FaMapMarkerAlt className="text-primary-main" />
                    5.000 marine in Europa
                  </div>
                </div>

                <div className="absolute left-4 right-4 top-24 md:left-8 md:right-8 md:top-28">
                  <div className="rounded-[2rem] bg-white p-5 md:p-6 shadow-2xl ring-1 ring-primary-dark/12">
                    <p className="text-xs uppercase tracking-[0.35em] text-primary-dark/50 mb-2">Marketplace</p>
                    <h3 className="text-xl md:text-2xl font-bold text-primary-dark leading-tight break-words line-clamp-3">
                      Trova il tuo posto barca, ovunque tu sia.
                    </h3>
                    <p className="mt-2 max-w-full text-primary-dark/70 text-sm leading-relaxed break-words line-clamp-3">
                      Cerca, confronta e prenota in pochi secondi. Più di 5.000 marine ti aspettano per la tua prossima avventura in mare.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-primary-dark/12 overflow-hidden h-[22rem] md:h-[24rem]">
              <div className="p-4 md:p-5 h-full">
                <SuggestionCard {...featuredMarina} />
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-white p-5 md:p-6 shadow-2xl ring-1 ring-primary-dark/12 h-[22rem] md:h-[24rem]">
              <h3 className="text-lg md:text-xl font-semibold text-primary-dark mb-2.5 break-words line-clamp-2">
                Unisciti alla community e naviga insieme a noi.
              </h3>
              <p className="text-sm text-primary-dark/70 mb-4 leading-relaxed break-words line-clamp-2">
                Esplora le migliori offerte di marina in costa italiana ed europea, con proposte verificate e feedback autentici.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-4 rounded-3xl bg-primary-main/[0.06] p-3.5">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary-main/15 text-primary-dark font-semibold text-sm flex-shrink-0">1</span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-primary-dark break-words text-sm">Vedi le offerte migliori</h4>
                    <p className="text-primary-dark/60 leading-relaxed break-words text-xs mt-0.5 line-clamp-2">Offerte selezionate per te in base alla posizione e al rating.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl bg-primary-main/[0.06] p-3.5">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary-main/15 text-primary-dark font-semibold text-sm flex-shrink-0">2</span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-primary-dark break-words text-sm">Confronta i prezzi</h4>
                    <p className="text-primary-dark/60 leading-relaxed break-words text-xs mt-0.5 line-clamp-2">Visualizza tariffe e recensioni per scegliere il posto perfetto.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl bg-primary-main/[0.06] p-3.5">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary-main/15 text-primary-dark font-semibold text-sm flex-shrink-0">3</span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-primary-dark break-words text-sm">Prenota in un click</h4>
                    <p className="text-primary-dark/60 leading-relaxed break-words text-xs mt-0.5 line-clamp-2">Completa la prenotazione in modo rapido e sicuro, senza complicazioni.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-primary-dark p-5 md:p-6 text-white shadow-2xl ring-1 ring-primary-dark h-[22rem] md:h-[24rem]">
              <div className="flex items-start justify-between mb-4 gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary-light/80">Offerte top</p>
                  <h4 className="mt-1.5 text-lg md:text-xl font-semibold leading-tight">Top 3 marine consigliate</h4>
                </div>
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-primary-light/95 ring-1 ring-white/15 flex-shrink-0">3 risultati</span>
              </div>
              <div className="space-y-3">
                {topMarinas.map((marina) => (
                  <div key={marina.name} className="rounded-3xl bg-white/10 p-3.5 ring-1 ring-white/10">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-base font-semibold text-white break-words line-clamp-2">{marina.name}</p>
                        <p className="text-xs text-primary-light/75 mt-0.5 break-words line-clamp-1">{marina.location}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-lg font-bold text-white">€{marina.price}</p>
                        <p className="text-[0.7rem] text-primary-light/65">/ notte</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Marketplace;
