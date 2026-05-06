import React from 'react';
import BaseModal from './BaseModal';

const TermsModal = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Termini di Servizio">
      <div className="text-slate-800 text-sm leading-relaxed space-y-5">
        <p className="text-slate-700">
          Welcome to VELALINK, the social network dedicated to the sailing
          community. By accessing or using our mobile application and services,
          you agree to be bound by these Terms and Conditions.
        </p>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            1. Acceptance of Terms
          </h3>
          <p className="text-slate-700">
            By creating an account, you represent that you are at least 18 years
            of age (or the age of majority in your jurisdiction) and that you
            have the legal capacity to enter into this agreement. If you do not
            agree to these terms, please do not use the App.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            2. User Accounts and Security
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>
              <strong>Accuracy:</strong> You must provide accurate and complete
              information when creating an account.
            </li>
            <li>
              <strong>Responsibility:</strong> You are solely responsible for
              maintaining the confidentiality of your login credentials and for
              all activities that occur under your account.
            </li>
            <li>
              <strong>Unauthorized Use:</strong> You must notify us immediately
              of any breach of security or unauthorized use of your account.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="text-base font-semibold text-slate-900">
              3. Maritime Safety & Navigation Disclaimer
            </h3>
            <p className="mt-2 font-semibold text-slate-900">
              CRITICAL: VELALINK is a social networking platform. It is NOT a
              professional navigation tool.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1 marker:text-amber-400">
              <li>
                <strong>Informational Purposes Only:</strong> Any coordinates,
                weather data, or route suggestions shared by users or the App
                are for informational and social purposes only.
              </li>
              <li>
                <strong>No Reliance:</strong> Never rely solely on this App for
                navigation, safety at sea, or emergency situations. Always use
                certified nautical charts, official AIS, and professional
                maritime equipment.
              </li>
              <li>
                <strong>Assumption of Risk:</strong> Sailing is inherently
                risky. You acknowledge that you use the App and any information
                shared within it at your own risk. VELALINK is not liable for
                any accidents, injuries, or property damage occurring at sea.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            4. User-Generated Content
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>
              <strong>Ownership:</strong> You retain ownership of the photos,
              videos, and logs you post.
            </li>
            <li>
              <strong>License:</strong> By posting content, you grant VELALINK a
              non-exclusive, royalty-free, worldwide license to use, display,
              and distribute your content within the platform.
            </li>
            <li>
              <strong>Prohibited Content:</strong> You may not post content that
              is illegal, defamatory, promotes unsafe maritime practices, or
              infringes on the intellectual property of others.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            5. Code of Conduct
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>Respect other sailors and users.</li>
            <li>Avoid spamming or commercial solicitation without prior consent.</li>
            <li>Refrain from uploading viruses or malicious code.</li>
            <li>Not "scrape" or harvest data from other users.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">6. Privacy</h3>
          <p className="text-slate-700">
            Your privacy is important to us. Please refer to our Privacy Policy
            to understand how we collect, use, and share your personal data and
            location information (GPS).
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            7. Limitation of Liability
          </h3>
          <p className="text-slate-700">
            To the maximum extent permitted by law, VELALINK and its affiliates
            shall not be liable for any indirect, incidental, or consequential
            damages, including but not limited to loss of profits, data, or
            vessel damage, arising out of your use of the service.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            8. Account Termination
          </h3>
          <p className="text-slate-700">
            We reserve the right to suspend or terminate your account at our
            sole discretion, without notice, for conduct that we believe
            violates these Terms or is harmful to other users or the maritime
            community.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            9. Changes to Terms
          </h3>
          <p className="text-slate-700">
            We may update these Terms from time to time. We will notify you of
            any significant changes by posting the new Terms within the App.
            Your continued use of the App after changes are made constitutes
            acceptance of the new Terms.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            10. Governing Law
          </h3>
          <p className="text-slate-700">
            These Terms are governed by and construed in accordance with the
            laws of Italy, without regard to its conflict of law principles.
          </p>
        </section>
      </div>
    </BaseModal>
  );
};

export default TermsModal;
