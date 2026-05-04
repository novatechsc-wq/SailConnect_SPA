// src/components/Navbar.jsx
import { useState, useEffect, useMemo } from 'react';
import { FaBars, FaTimes, FaShip } from 'react-icons/fa';

const Navbar = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home', ref: sections.home },
      { id: 'community', label: 'Community', ref: sections.community },
      { id: 'marketplace', label: 'Marketplace', ref: sections.marketplace },
      { id: 'about', label: 'About', ref: sections.about },
    ],
    [sections]
  );

  const scrollToSection = (ref, id) => {
    if (!ref.current) return;
    const offset = ref.current.offsetTop - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    setIsOpen(false);
    setActiveSection(id);
  };

  useEffect(() => {
    const onScrollY = () => setScrolled(window.scrollY > 10);
    onScrollY();
    window.addEventListener('scroll', onScrollY, { passive: true });
    return () => window.removeEventListener('scroll', onScrollY);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = 'home';
      for (const item of navItems) {
        if (item.ref.current) {
          const offset = item.ref.current.offsetTop;
          const height = item.ref.current.offsetHeight;
          if (scrollPosition >= offset && scrollPosition < offset + height) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8 lg:pt-5">
      <nav
        aria-label="Principale"
        className={`relative w-full overflow-hidden rounded-[1.125rem] border transition-[box-shadow,background-color,border-color,backdrop-filter] duration-500 ease-out sm:rounded-2xl ${
          scrolled
            ? 'border-slate-200/90 bg-white/[0.97] shadow-[0_10px_40px_-12px_rgba(15,35,70,0.12),0_0_0_1px_rgba(255,255,255,0.9)_inset] backdrop-blur-2xl backdrop-saturate-150'
            : 'border-white/45 bg-white/[0.76] shadow-[0_4px_30px_-8px_rgba(15,35,70,0.14),0_0_0_1px_rgba(255,255,255,0.55)_inset] backdrop-blur-xl backdrop-saturate-125'
        }`}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary-light/45 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-6 top-0 h-[120%] opacity-[0.65]"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -40%, rgba(111, 211, 218, 0.14), transparent 55%)',
          }}
        />

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-[3.5rem] items-center justify-between sm:h-[3.75rem] lg:h-16">
            <button
              type="button"
              onClick={() => scrollToSection(sections.home, 'home')}
              className="group flex min-w-0 items-center gap-3 rounded-lg py-1 text-left outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-primary-main/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:gap-3.5"
            >
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.65rem] bg-gradient-to-br from-primary-main via-[#3a7cbc] to-primary-dark text-white shadow-[0_2px_12px_-2px_rgba(47,111,175,0.45)] ring-1 ring-white/50 transition duration-300 group-hover:shadow-[0_4px_20px_-4px_rgba(47,111,175,0.5)] sm:h-10 sm:w-10 sm:rounded-[0.7rem]">
                <FaShip className="text-[1.05rem] opacity-95 sm:text-[1.15rem]" aria-hidden />
              </span>
              <span className="flex min-w-0 flex-col justify-center">
                <span className="font-semibold leading-none tracking-[-0.03em] text-primary-dark text-[1.0625rem] sm:text-lg">
                  VelaLink
                </span>
                <span className="mt-[0.2rem] hidden text-[0.625rem] font-medium uppercase leading-none tracking-[0.28em] text-slate-500 sm:block">
                  sailing social
                </span>
              </span>
            </button>

            <div className="hidden items-center md:flex">
              <ul className="flex items-center gap-0.5 lg:gap-1" role="list">
                {navItems.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(item.ref, item.id)}
                        className={`relative px-3 py-2 text-[0.8125rem] font-medium tracking-[0.01em] transition-colors duration-200 lg:px-3.5 ${
                          active
                            ? 'text-primary-dark'
                            : 'text-slate-500 hover:text-primary-dark'
                        }`}
                      >
                        <span className="relative z-[1]">{item.label}</span>
                        {active && (
                          <span
                            className="absolute inset-x-2 bottom-1.5 z-0 h-[2px] rounded-full bg-gradient-to-r from-primary-main via-primary-light to-secondary-main opacity-95 lg:inset-x-2.5"
                            aria-hidden
                          />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-nav-menu"
                className="flex h-10 w-10 items-center justify-center rounded-[0.65rem] border border-slate-200/90 bg-white/90 text-slate-700 shadow-[0_1px_2px_rgba(15,35,70,0.06)] transition hover:border-slate-300 hover:bg-white hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main/40"
              >
                <span className="sr-only">{isOpen ? 'Chiudi menu' : 'Apri menu'}</span>
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>

          <div
            id="mobile-nav-menu"
            className={`md:hidden ${isOpen ? 'border-t border-slate-200/80' : ''}`}
          >
            {isOpen && (
              <nav aria-label="Mobile" className="px-1 pb-4 pt-1">
                <ul className="flex flex-col gap-0.5" role="list">
                  {navItems.map((item) => {
                    const active = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(item.ref, item.id)}
                          className={`flex w-full items-center rounded-lg border py-3 pl-4 pr-4 text-left text-[0.9375rem] font-medium tracking-[0.01em] transition-colors duration-200 ${
                            active
                              ? 'border-slate-200/90 border-l-[3px] border-l-primary-main bg-slate-50/95 pl-[0.8125rem] text-primary-dark'
                              : 'border-transparent text-slate-600 hover:bg-slate-50/80 hover:text-primary-dark'
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;