import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const PrivacyPage = ({ onClose }) => {
  const handleGoHome = () => {
    window.location.hash = '#home';
  };

  return (
    <div className="min-h-screen bg-white text-primary-dark pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Home Button */}
        <button
          onClick={handleGoHome}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-primary-dark hover:bg-slate-100 transition-colors duration-200"
        >
          <FaArrowLeft size={16} />
          <span>Torna a Home</span>
        </button>

        <h1 className="mb-6 text-4xl font-bold text-primary-dark">Privacy Policy</h1>

        <div className="text-slate-800 leading-relaxed space-y-6">
          <p className="text-lg text-slate-700">
            VELALINK si impegna a proteggere la tua privacy offrendo una piattaforma
            che migliori la tua esperienza di navigazione a vela.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Informazioni che Raccogliamo
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
              <li>
                <strong>Dati dell'account:</strong> Nome, email, immagine del
                profilo, esperienza velica e dati dell'imbarcazione
              </li>
              <li>
                <strong>Dati di localizzazione (GPS):</strong> Posizione precisa o
                approssimativa per funzionalità come "Mappa Live", "Diari di
                Navigazione" e "Velisti nelle Vicinanze"
              </li>
              <li>
                <strong>Contenuti degli utenti:</strong> Foto, video, commenti e
                rotte condivise
              </li>
              <li>
                <strong>Dati tecnici:</strong> Indirizzo IP, tipo di dispositivo e
                sistema operativo
              </li>
              <li>
                <strong>Dati social e di interazione:</strong> Eventi a cui
                partecipi, commenti, like e reazioni
              </li>
              <li>
                <strong>Contenuti multimediali:</strong> Foto e video caricati sul
                profilo o nelle pagine evento
              </li>
              <li>
                <strong>Profili delle imbarcazioni:</strong> Marca, modello,
                lunghezza, porto di base e specifiche tecniche
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Utilizzo dei Dati di Localizzazione
            </h2>
            <p className="text-slate-700">
              I dati di posizione vengono utilizzati per:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
              <li>Abilitare funzionalità social</li>
              <li>Registrare automaticamente i diari di navigazione</li>
              <li>Facilitare connessioni tra velisti vicini</li>
              <li>Analisi e miglioramento dell'App</li>
              <li>Suggerire eventi pertinenti</li>
              <li>Ricerca e scoperta di imbarcazioni simili</li>
              <li>Moderazione dei contenuti</li>
              <li>Coordinamento degli eventi</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Controllo della Privacy
            </h2>
            <p className="text-slate-700">Puoi:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
              <li>Disattivare il tracciamento GPS</li>
              <li>Impostare "Zone Nascoste"</li>
              <li>Scegliere chi può vedere la tua posizione</li>
              <li>Richiedere la cancellazione dei dati o dell'account</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Condivisione dei Dati
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
              <li>
                <strong>Con altri utenti:</strong> In base alle impostazioni sulla
                privacy
              </li>
              <li>
                <strong>Fornitori di servizi:</strong> Provider cloud (es. AWS,
                Google Cloud)
              </li>
              <li>
                <strong>Obblighi di legge:</strong> Autorità competenti in caso di
                emergenze
              </li>
              <li>
                Non vendiamo mai i tuoi dati di localizzazione a terzi a fini commerciali
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Sicurezza dei Dati
            </h2>
            <p className="text-slate-700">
              Implementiamo misure di sicurezza avanzate per proteggere i tuoi dati, 
              inclusa la crittografia SSL/TLS e l'autenticazione multi-fattore.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Diritti dell'Utente
            </h2>
            <p className="text-slate-700">
              Hai diritto di accesso, rettifica e cancellazione dei tuoi dati personali. 
              Contattaci a privacy@velalink.it per esercitare questi diritti.
            </p>
          </section>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 mt-8">
            <p className="text-slate-700">
              <strong>Ultimo aggiornamento:</strong> Maggio 2026
            </p>
            <p className="text-slate-600 text-sm mt-2">
              Per domande sulla nostra Privacy Policy, contattaci a <a href="mailto:privacy@velalink.it" className="text-primary-main hover:underline">privacy@velalink.it</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
