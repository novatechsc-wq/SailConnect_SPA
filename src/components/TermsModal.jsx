import React from 'react';
import BaseModal from './BaseModal';

const TermsModal = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Termini di Servizio">
      <div className="text-slate-800 text-sm leading-relaxed space-y-5">
        <p className="text-slate-700">
          Benvenuto su VELALINK, il social network dedicato alla comunità della
          vela. Accedendo o utilizzando la nostra applicazione mobile e i nostri
          servizi, accetti di essere vincolato dai presenti Termini e
          Condizioni.
        </p>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            1. Accettazione dei Termini
          </h3>
          <p className="text-slate-700">
            Creando un account, dichiari di avere almeno 18 anni di età (o
            l’età della maggiore età prevista nella tua giurisdizione) e di
            avere la capacità legale di stipulare il presente accordo. Se non
            accetti tali termini, ti invitiamo a non utilizzare l’App.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            2. Account Utente e Sicurezza
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>
              <strong>Accuratezza:</strong> Devi fornire informazioni accurate e
              complete al momento della creazione dell’account.
            </li>
            <li>
              <strong>Responsabilità:</strong> Sei l’unico responsabile della
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

        <section className="space-y-2">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="text-base font-semibold text-slate-900">
              3. Dichiarazione di esclusione di responsabilità su Sicurezza
              Marittima e Navigazione
            </h3>
            <p className="mt-2 font-semibold text-slate-900">
              CRITICO: VELALINK è una piattaforma di social networking. NON è
              uno strumento professionale di navigazione.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1 marker:text-amber-400">
              <li>
                <strong>Solo a scopo informativo:</strong> Qualsiasi coordinata,
                dato meteo o suggerimento di rotta condiviso dagli utenti o
                dall’App ha finalità esclusivamente informative e sociali.
              </li>
              <li>
                <strong>Nessun affidamento:</strong> Non fare mai affidamento
                esclusivo sull’App per la navigazione, la sicurezza in mare o le
                situazioni di emergenza. Utilizza sempre carte nautiche
                certificate, AIS ufficiale e strumenti marittimi professionali.
              </li>
              <li>
                <strong>Assunzione del rischio:</strong> La navigazione a vela
                comporta rischi intrinseci. Riconosci di utilizzare l’App e
                tutte le informazioni condivise al suo interno a tuo esclusivo
                rischio. VELALINK non è responsabile per incidenti, lesioni o
                danni a persone o cose avvenuti in mare.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            4. Contenuti Generati dagli Utenti
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>
              <strong>Proprietà:</strong> Mantieni la proprietà delle foto, dei
              video e dei diari di bordo che pubblichi.
            </li>
            <li>
              <strong>Licenza:</strong> Pubblicando contenuti, concedi a
              VELALINK una licenza non esclusiva, gratuita, mondiale per
              utilizzare, visualizzare e distribuire tali contenuti all’interno
              della piattaforma.
            </li>
            <li>
              <strong>Contenuti vietati:</strong> Non è consentito pubblicare
              contenuti illegali, diffamatori, che promuovano pratiche marittime
              non sicure o che violino i diritti di proprietà intellettuale di
              terzi.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            5. Codice di Condotta
          </h3>
          <p className="text-slate-700">
            Come membro della comunità velica, accetti di:
          </p>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>Rispettare gli altri velisti e utenti.</li>
            <li>Evitare spam o sollecitazioni commerciali senza previo consenso.</li>
            <li>Non caricare virus o codice dannoso.</li>
            <li>Non raccogliere o estrarre dati (“scraping”) dagli altri utenti.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">6. Privacy</h3>
          <p className="text-slate-700">
            La tua privacy è importante per noi. Consulta la nostra Informativa
            sulla Privacy per comprendere come raccogliamo, utilizziamo e
            condividiamo i tuoi dati personali e di localizzazione (GPS).
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            7. Limitazione di Responsabilità
          </h3>
          <p className="text-slate-700">
            Nella misura massima consentita dalla legge, VELALINK e le sue
            affiliate non saranno responsabili per danni indiretti, incidentali
            o consequenziali, inclusi, a titolo esemplificativo, perdita di
            profitti, dati o danni all’imbarcazione, derivanti dall’uso del
            servizio.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            8. Cessazione dell’Account
          </h3>
          <p className="text-slate-700">
            Ci riserviamo il diritto di sospendere o chiudere il tuo account, a
            nostra esclusiva discrezione e senza preavviso, nel caso di
            comportamenti ritenuti in violazione dei presenti Termini o dannosi
            per altri utenti o per la comunità marittima.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            9. Modifiche ai Termini
          </h3>
          <p className="text-slate-700">
            Possiamo aggiornare periodicamente questi Termini. Le modifiche
            significative saranno comunicate tramite pubblicazione dei nuovi
            Termini all’interno dell’App. L’uso continuato dell’App dopo tali
            modifiche costituisce accettazione dei nuovi Termini.
          </p>
        </section>
      </div>
    </BaseModal>
  );
};

export default TermsModal;
