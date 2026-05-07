import React, { useEffect, useId, useMemo, useRef } from 'react';

function getFocusableElements(container) {
  if (!container) return [];
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ];
  return Array.from(container.querySelectorAll(selectors.join(','))).filter(
    (el) => el.offsetParent !== null
  );
}

const BaseModal = ({
  isOpen,
  onClose,
  title,
  children,
  ariaDescriptionId,
}) => {
  const reactId = useId();
  const titleId = useMemo(() => `modal-title-${reactId}`, [reactId]);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current = document.activeElement;
    document.body.classList.add('overflow-hidden');

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus?.();
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.classList.remove('overflow-hidden');
      previouslyFocusedRef.current?.focus?.();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose?.();
        return;
      }

      if (e.key !== 'Tab') return;
      const focusables = getFocusableElements(dialogRef.current);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey) {
        if (active === first || !dialogRef.current.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={ariaDescriptionId}
        className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden animate-slide-up-sm"
      >
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200">
          <div className="flex items-start justify-between gap-4 px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <h2
                id={titleId}
                className="text-lg sm:text-xl font-semibold text-slate-900 truncate"
              >
                {title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Premi ESC per chiudere
              </p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-main focus-visible:ring-offset-2"
              aria-label="Chiudi"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                ×
              </span>
            </button>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-5 py-5 sm:px-6">
          {children}
        </div>

        <div className="sticky bottom-0 bg-white/90 backdrop-blur border-t border-slate-200">
          <div className="px-5 py-4 sm:px-6 flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-lg bg-primary-dark px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-main focus-visible:ring-offset-2"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
