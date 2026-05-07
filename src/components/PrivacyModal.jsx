import React from 'react';
import BaseModal from './BaseModal';

const PrivacyModal = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="text-slate-800 text-sm leading-relaxed space-y-5">
        <p className="text-slate-700">
          VELALINK si impegna a proteggere la tua privacy offrendo una piattaforma
          che migliori la tua esperienza di navigazione a vela.
        </p>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            1. Informazioni che Raccogliamo
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>
              <strong>Dati dell’account:</strong> Nome, email, immagine del
              profilo, esperienza velica e dati dell’imbarcazione
            </li>
            <li>
              <strong>Dati di localizzazione (GPS):</strong> Posizione precisa o
              approssimativa per funzionalità come “Mappa Live”, “Diari di
              Navigazione” e “Velisti nelle Vicinanze”
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

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            2. Utilizzo dei Dati di Localizzazione
          </h3>
          <p className="text-slate-700">
            I dati di posizione vengono utilizzati per:
          </p>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>Abilitare funzionalità social</li>
            <li>Registrare automaticamente i diari di navigazione</li>
            <li>Facilitare connessioni tra velisti vicini</li>
            <li>Analisi e miglioramento dell’App</li>
            <li>Suggerire eventi pertinenti</li>
            <li>Ricerca e scoperta di imbarcazioni simili</li>
            <li>Moderazione dei contenuti</li>
            <li>Coordinamento degli eventi</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            3. Controllo della Privacy
          </h3>
          <p className="text-slate-700">Puoi:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>Disattivare il tracciamento GPS</li>
            <li>Impostare “Zone Nascoste”</li>
            <li>Scegliere chi può vedere la tua posizione</li>
            <li>Richiedere la cancellazione dei dati o dell’account</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            4. Condivisione dei Dati
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
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
              Non vendiamo mai i tuoi dati di localizzazione a terzi a fini
              pubblicitari.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            5. Eventi e Raduni
          </h3>
          <p className="text-slate-700">
            VELALINK consente la creazione di eventi da parte degli utenti, ma
            non è un organizzatore di eventi e non è responsabile per la
            sicurezza, le condizioni meteo o eventuali controversie.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            6. Sicurezza dei Dati
          </h3>
          <p className="text-slate-700">
            Utilizziamo standard di sicurezza avanzati (SSL/TLS), pur riconoscendo
            che nessun sistema è totalmente sicuro.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            7. Trasferimenti Internazionali di Dati
          </h3>
          <p className="text-slate-700">
            I dati possono essere trattati in Italia anche se utilizzi l’App
            dall’estero.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            8. Privacy dei Minori
          </h3>
          <p className="text-slate-700">
            L’App non è destinata a minori di 18 anni.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            9. Diritti dell’Utente (GDPR/CCPA)
          </h3>
          <p className="text-slate-700">Hai diritto a:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>Accedere ai tuoi dati</li>
            <li>Correggere dati inesatti</li>
            <li>Opporti al trattamento dei dati GPS</li>
            <li>Richiedere la portabilità dei dati</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            10. Modifiche all’Informativa
          </h3>
          <p className="text-slate-700">
            Eventuali modifiche saranno comunicate tramite App o email.
          </p>
        </section>

        <section className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <h3 className="text-base font-semibold text-slate-900">Contatti</h3>
          <p className="mt-1 text-slate-700">
            Per domande o richieste sui dati personali:{' '}
            <a
              className="text-primary-dark hover:underline"
              href="mailto:customerservice@velalink.it"
            >
              customerservice@velalink.it
            </a>
          </p>
        </section>
      </div>
    </BaseModal>
  );
};

export default PrivacyModal;
