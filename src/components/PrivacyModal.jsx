import React from 'react';
import BaseModal from './BaseModal';

const PrivacyModal = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="text-slate-800 text-sm leading-relaxed space-y-5">
        <p className="text-slate-700">
          At VELALINK, we are committed to protecting your privacy while providing a
          platform that enhances your sailing experience. This Privacy Policy
          explains how we collect, use, and protect your information, with a
          specific focus on your location data.
        </p>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            1. Information We Collect
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>
              <strong>Account Information:</strong> Name, email, profile picture,
              and sailing experience/vessel details.
            </li>
            <li>
              <strong>Location Data (GPS):</strong> Precise or approximate location
              for features like Live Map, Sailing Logs, and Nearby Sailors.
            </li>
            <li>
              <strong>User Content:</strong> Photos, videos, comments, and route
              logs you share.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, device type, and
              operating system.
            </li>
            <li>
              <strong>Social & Engagement Data:</strong> Events joined, comments,
              likes, and reactions.
            </li>
            <li>
              <strong>Multimedia Content:</strong> Photos and videos you upload.
            </li>
            <li>
              <strong>Vessel Profiles:</strong> Boat data (brand, model, length,
              home port, specs).
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            2. How We Use Your Location Data
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>Enable social features: show vessel position per your settings.</li>
            <li>Record logs: create automated sailing trip logs.</li>
            <li>Safety & Community: help nearby sailors connect.</li>
            <li>Analytics: understand popular routes and density.</li>
            <li>
              Community networking, vessel discovery, moderation, and event
              coordination.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            3. Your Control Over Privacy
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>Toggle Live Tracking on or off.</li>
            <li>Set Privacy Zones where location is never broadcast.</li>
            <li>Audience Selection: Only Me / My Crew / Whole Community.</li>
            <li>Request deletion of trip logs or your account.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            4. Data Sharing and Disclosure
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>With other users per your settings.</li>
            <li>Service providers (cloud hosting) for storage and processing.</li>
            <li>Legal requirements or emergency requests from authorities.</li>
            <li>We never sell your precise location to advertisers.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            5. Events and Gatherings
          </h3>
          <p className="text-slate-700">
            VELALINK allows users to create and join events. We are not event
            organizers and are not liable for what happens during events;
            attendance is at your own risk.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">6. Data Security</h3>
          <p className="text-slate-700">
            We implement industry-standard encryption (SSL/TLS) to protect data in
            transit and at rest, but no method is 100% secure.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            7. International Data Transfers
          </h3>
          <p className="text-slate-700">
            Your information may be transferred to and processed in Italy if you
            use the App outside Italy.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            8. Children’s Privacy
          </h3>
          <p className="text-slate-700">
            The App is not intended for individuals under 18. We do not knowingly
            collect information from children.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            9. Your Rights (GDPR/CCPA)
          </h3>
          <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
            <li>Access the personal data we hold about you.</li>
            <li>Correct inaccurate data.</li>
            <li>Object to processing of location data.</li>
            <li>Request portability of your sailing logs.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            10. Changes to This Policy
          </h3>
          <p className="text-slate-700">
            We may update this policy periodically and will notify you of material
            changes via the App or email.
          </p>
        </section>

        <section className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <h3 className="text-base font-semibold text-slate-900">Contact Us</h3>
          <p className="mt-1 text-slate-700">
            For privacy questions or to exercise your rights, contact:{' '}
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
