import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const TermsPage = ({ onClose }) => {
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

        <h1 className="mb-6 text-4xl font-bold text-primary-dark">Termini di Servizio</h1>

        <div className="text-slate-800 leading-relaxed space-y-6">
          <p className="text-lg text-slate-700">
            Benvenuto su VELALINK, il social network dedicato alla comunità della
            vela. Accedendo o utilizzando la nostra applicazione mobile e i nostri
            servizi, accetti di essere vincolato dai presenti Termini e
            Condizioni.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Accettazione dei Termini
            </h2>
            <p className="text-slate-700">
              Creando un account, dichiari di avere almeno 18 anni di età (o
              l'età della maggiore età prevista nella tua giurisdizione) e di
              avere la capacità legale di stipulare il presente accordo. Se non
              accetti tali termini, ti invitiamo a non utilizzare l'App.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Account Utente e Sicurezza
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
              <li>
                <strong>Accuratezza:</strong> Devi fornire informazioni accurate e
                complete al momento della creazione dell'account.
              </li>
              <li>
                <strong>Responsabilità:</strong> Sei l'unico responsabile della
                riservatezza delle tue credenziali di accesso e di tutte le
                attività svolte tramite il tuo account.
              </li>
              <li>
                <strong>Uso non autorizzato:</strong> Devi comunicarci
                immediatamente qualsiasi violazione della sicurezza o utilizzo
                non autorizzato del tuo account.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Dichiarazione di esclusione di responsabilità su Sicurezza
                Marittima e Navigazione
              </h2>
              <p className="font-semibold text-slate-900 mb-4">
                CRITICO: VELALINK è una piattaforma di social networking. NON è
                uno strumento professionale di navigazione.
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-amber-400">
                <li>
                  <strong>Solo a scopo informativo:</strong> Qualsiasi coordinata,
                  dato meteo o suggerimento di rotta condiviso dagli utenti o
                  dall'App ha finalità esclusivamente informative e sociali.
                </li>
                <li>
                  <strong>Nessun affidamento:</strong> Non fare mai affidamento
                  esclusivo sull'App per la navigazione, la sicurezza in mare o le
                  situazioni di emergenza. Utilizza sempre carte nautiche
                  certificate, AIS ufficiale e strumenti marittimi professionali.
                </li>
                <li>
                  <strong>Assunzione del rischio:</strong> La navigazione a vela
                  comporta rischi intrinseci. Riconosci di utilizzare l'App e
                  tutte le informazioni condivise al suo interno a tuo esclusivo
                  rischio. VELALINK non è responsabile per incidenti, lesioni o
                  danni a persone o cose avvenuti in mare.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Contenuti Generati dagli Utenti
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
              <li>
                <strong>Proprietà:</strong> Mantieni la proprietà delle foto, dei
                video e dei diari di bordo che pubblichi.
              </li>
              <li>
                <strong>Licenza:</strong> Pubblicando contenuti, concedi a
                VELALINK una licenza non esclusiva, gratuita, mondiale per
                utilizzare, visualizzare e distribuire tali contenuti all'interno
                della piattaforma.
              </li>
              <li>
                <strong>Contenuti vietati:</strong> Non è consentito pubblicare
                contenuti illegali, diffamatori, che promuovano pratiche marittime
                non sicure o che violino i diritti di proprietà intellettuale di terzi.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Limitazione della Responsabilità
            </h2>
            <p className="text-slate-700">
              VELALINK fornisce il servizio "così come è" senza garanzie di alcun tipo. 
              Non saremo responsabili per eventuali danni diretti, indiretti, incidentali 
              o conseguenti derivanti dall'uso della piattaforma.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Modifiche ai Termini
            </h2>
            <p className="text-slate-700">
              Ci riserviamo il diritto di modificare questi Termini di Servizio in qualsiasi momento. 
              Le modifiche entreranno in vigore al momento della loro pubblicazione sulla piattaforma.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              7. Legge Applicabile
            </h2>
            <p className="text-slate-700">
              Questi Termini di Servizio sono regolati dalle leggi italiane e dalle leggi dell'Unione Europea.
            </p>
          </section>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 mt-8">
            <p className="text-slate-700">
              <strong>Ultimo aggiornamento:</strong> Maggio 2026
            </p>
            <p className="text-slate-600 text-sm mt-2">
              Per domande sui nostri Termini di Servizio, contattaci a <a href="mailto:legal@velalink.it" className="text-primary-main hover:underline">legal@velalink.it</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
