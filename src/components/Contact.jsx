// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-primary-main/[0.04]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Contattaci
          </h2>
          <p className="text-xl text-primary-dark/70">
            Hai domande? Siamo qui per aiutarti.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-primary-dark/80 mb-2">
                Nome
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-primary-dark/15 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-primary-main/30 outline-none"
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-dark/80 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-primary-dark/15 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-primary-main/30 outline-none"
                placeholder="tua@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-dark/80 mb-2">
                Messaggio
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 border border-primary-dark/15 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-primary-main/30 outline-none resize-none"
                placeholder="Il tuo messaggio..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-main text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
            >
              Invia Messaggio
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;