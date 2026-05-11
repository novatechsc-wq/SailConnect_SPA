import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const SafetyStandardPage = ({ onClose }) => {
  const handleGoHome = () => {
    window.location.hash = '#home';
  };

  return (
    <div className="min-h-screen bg-white text-primary-dark pt-24 pb-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={handleGoHome}
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-primary-dark transition-colors duration-200 hover:bg-slate-100"
        >
          <FaArrowLeft size={16} />
          <span>Torna a Home</span>
        </button>

        <div className="mb-6">
          <div>
            <h1 className="text-3xl font-bold text-primary-dark sm:text-4xl">
              Standard di Sicurezza - Protezione dei Minori
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              VelaLink — Standard di Sicurezza
            </p>
            <p className="mt-1 text-sm text-slate-500">Ultimo aggiornamento: maggio 2026</p>
          </div>
        </div>

        <div className="space-y-8 text-slate-800 leading-relaxed">
          <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Tolleranza Zero</h2>
            <p className="text-slate-700">
              VelaLink adotta una politica di tolleranza zero nei confronti di qualsiasi forma di
              sfruttamento e abuso sessuale sui minori (CSAE — Child Sexual Abuse and Exploitation).
              Qualsiasi contenuto, comportamento o account che violi questo standard verrà rimosso
              immediatamente e segnalato alle autorità competenti.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Contenuti Vietati</h2>
            <p className="text-slate-700">Sulla piattaforma VelaLink è severamente vietato:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
              <li>Pubblicare, condividere o distribuire qualsiasi contenuto sessualmente esplicito che coinvolga minori</li>
              <li>Utilizzare la piattaforma per contattare, adescare o manipolare minori a scopo sessuale</li>
              <li>Condividere materiale che promuova, glorifichi o normalizzi l'abuso o lo sfruttamento sessuale sui minori</li>
              <li>Utilizzare la chat o il feed social per distribuire immagini, video o testi di natura sessuale che coinvolgano persone minorenni</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Misure di Protezione</h2>
            <p className="text-slate-700">VelaLink adotta le seguenti misure per proteggere i minori sulla piattaforma:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
              <li>Moderazione dei contenuti generati dagli utenti (post, commenti, immagini)</li>
              <li>Possibilità per gli utenti di segnalare contenuti o comportamenti inappropriati</li>
              <li>Revisione e rimozione tempestiva dei contenuti segnalati</li>
              <li>Sospensione permanente degli account che violano questa politica</li>
              <li>Segnalazione alle autorità competenti in caso di violazioni gravi</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Come Segnalare una Violazione</h2>
            <p className="text-slate-700">
              Se riscontri contenuti o comportamenti che violano questa politica, ti invitiamo a
              segnalarli immediatamente contattandoci a:
            </p>
            <p className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-lg font-semibold text-primary-dark">
              support@velalink.app
            </p>
            <p className="text-slate-700">
              Ogni segnalazione verrà esaminata con la massima priorità e riservatezza.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Conformità Legale</h2>
            <p className="text-slate-700">
              VelaLink si impegna a rispettare tutte le leggi applicabili in materia di protezione
              dei minori, incluse le normative italiane ed europee. In caso di individuazione di
              materiale pedopornografico (CSAM), VelaLink provvederà a segnalarlo immediatamente
              alle autorità competenti, tra cui:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
              <li>Polizia Postale (Italia) — www.commissariatodips.it</li>
              <li>NCMEC (National Center for Missing & Exploited Children) — www.missingkids.org</li>
            </ul>
          </section>

          <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Aggiornamenti della Politica</h2>
            <p className="text-slate-700">
              VelaLink si riserva il diritto di aggiornare questa politica in qualsiasi momento per
              riflettere cambiamenti normativi o miglioramenti delle nostre pratiche di sicurezza.
            </p>
            <p className="pt-2 font-semibold text-slate-900">VelaLink — La community dei velisti</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SafetyStandardPage;