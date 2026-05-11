// src/components/Hero.jsx
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FaApple,
  FaChevronDown,
  FaGooglePlay,
  FaUsers,
  FaShip,
  FaStore,
  FaComments,
} from 'react-icons/fa';

import heroBgVideo from '../assets/hero/herobg.mp4';
import heroImage1 from '../assets/hero/image_1.webp';
import heroImage2 from '../assets/hero/image_2.webp';
import heroImage3 from '../assets/hero/image_3.webp';
import heroImage4 from '../assets/hero/image_4.webp';

const ROTATE_MS = 5500;

const features = [
  {
    icon: FaUsers,
    title: 'Community di velisti',
    description: 'Condividi passioni, consigli e avventure con una community sempre più grande.',
    image: heroImage1,
    imageAlt: 'Flotta di barche a vela in acqua',
  },
  {
    icon: FaShip,
    title: 'Esperienze in mare',
    description: 'Pubblica le tue uscite, scopri nuovi itinerari e lasciati ispirare.',
    image: heroImage2,
    imageAlt: 'Barca a vela in navigazione aperta',
  },
  {
    icon: FaStore,
    title: 'Marketplace posti barca',
    description: 'Trova e prenota il posto barca ideale tra migliaia di marine.',
    image: heroImage3,
    imageAlt: 'Yacht attraccato in marina',
  },
  {
    icon: FaComments,
    title: 'Chat e connessioni',
    description: 'Entra in contatto e crea nuove amicizie in mare e a terra.',
    image: heroImage4,
    imageAlt: 'Baia con acqua turchese e costa',
  },
];

const SWIPE_PX = 50;

function FeatureCarousel({ reduceMotion }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const next = useCallback(() => setActive((index) => (index + 1) % features.length), []);
  const prev = useCallback(
    () => setActive((index) => (index - 1 + features.length) % features.length),
    []
  );

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0].screenX;
    const dx = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < SWIPE_PX) return;
    if (dx < 0) next();
    else prev();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(next, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, next]);

  return (
    <div
      className="relative flex min-h-0 w-full min-w-0 flex-col max-xl:h-full max-xl:items-center max-xl:justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="In evidenza"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative mx-auto min-h-0 w-full max-w-[22rem] max-h-[min(39vh,20rem)] max-xl:flex-none max-xl:h-[min(39vh,20rem)] max-xl:max-h-full cursor-grab touch-manipulation overflow-visible outline-none focus-visible:ring-2 focus-visible:ring-primary-light/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:cursor-grabbing sm:max-h-[min(37vh,20.5rem)] sm:max-w-[22.5rem] md:max-w-[23rem] xl:mx-0 xl:h-[min(38vh,21rem)] xl:max-h-[21rem] xl:max-w-[23rem] xl:min-h-[13.5rem] xl:[@media(max-height:700px)]:h-[min(31vh,16rem)] xl:[@media(max-height:700px)]:max-h-[16rem] xl:[@media(max-height:700px)]:min-h-[11rem] [@media(max-height:700px)]:max-h-[min(31vh,16rem)]"
      >
        {features.map((feature, index) => {
          const offset = (index - active + features.length) % features.length;
          const isActive = index === active;
          // xShift: % of slide width (same box as translateX(-50%)); scales coverflow on all viewports.
          const coverflowStyles = [
            { xShift: 0, z: 90, scale: 1, rotateY: 0, opacity: 1, blur: 0 },
            { xShift: 42, z: 70, scale: 0.88, rotateY: -30, opacity: 0.72, blur: 0.2 },
            { xShift: -42, z: 70, scale: 0.88, rotateY: 30, opacity: 0.72, blur: 0.2 },
            { xShift: 74, z: 50, scale: 0.76, rotateY: -48, opacity: 0.42, blur: 0.9 },
          ][offset];

          return (
            <button
              key={feature.title}
              type="button"
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(index)}
              className={`absolute left-1/2 top-0 h-full w-[80%] origin-center transition-[transform,opacity,filter] duration-[820ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:w-[86%] md:w-[88%] ${
                isActive ? 'z-30' : 'z-10'
              }`}
              style={{
                transform: `translateX(calc(-50% + ${coverflowStyles.xShift}%)) perspective(1400px) translateZ(${coverflowStyles.z}px) rotateY(${coverflowStyles.rotateY}deg) scale(${coverflowStyles.scale})`,
                opacity: coverflowStyles.opacity,
                filter: `blur(${coverflowStyles.blur}px) saturate(${isActive ? 1 : 0.94}) brightness(${isActive ? 1 : 0.88})`,
              }}
            >
              <div className="group/card relative isolate flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[1.35rem] border border-white/25 shadow-[0_18px_48px_-22px_rgba(15,35,70,0.58)] ring-1 ring-white/40 ring-offset-0 sm:rounded-[1.65rem]">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/55 to-primary-dark/15" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/45 via-transparent to-primary-main/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/20 via-transparent to-primary-light/15" />
                {isActive && (
                  <div
                    className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
                    aria-hidden
                  >
                    <div className="absolute -inset-y-8 w-1/3 bg-gradient-to-r from-transparent via-white/22 to-transparent motion-safe:animate-feature-shine" />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-light/55 to-transparent opacity-90" />

                <div
                  className={`relative z-10 mt-auto flex min-h-0 flex-1 flex-col justify-end overflow-y-auto overscroll-contain px-3 py-3 sm:px-4 sm:py-4 [@media(max-height:700px)]:py-2.5 [@media(max-height:700px)]:[scrollbar-width:thin] ${
                    isActive ? 'opacity-100' : 'opacity-85'
                  }`}
                >
                  <div className="flex items-end gap-2.5 sm:gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/18 shadow-md ring-1 ring-white/40 backdrop-blur-md transition-transform duration-500 group-hover/card:scale-105 sm:h-10 sm:w-10 sm:rounded-xl">
                      <feature.icon className="text-white drop-shadow-md" size={20} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1 pb-0.5">
                      <h3
                        className={`text-base font-bold leading-snug tracking-tight text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] sm:text-[1.05rem] [@media(max-height:700px)]:!text-sm ${
                          isActive
                            ? 'motion-safe:animate-feature-reveal'
                            : 'select-none text-transparent opacity-0'
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`mt-1 max-w-lg text-xs leading-relaxed text-white/90 sm:mt-1.5 sm:text-[0.8125rem] [@media(max-height:700px)]:mt-1 [@media(max-height:700px)]:!text-[0.7rem] ${
                          isActive
                            ? 'motion-safe:animate-feature-reveal-delayed'
                            : 'select-none text-transparent opacity-0'
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {features[active].title}
      </p>
    </div>
  );
}

const Hero = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <section className="relative isolate box-border flex h-[min(100dvh,100svh)] min-h-0 max-h-[100dvh] flex-col overflow-hidden pt-8 sm:pt-0 pb-[env(safe-area-inset-bottom)]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="hidden h-full w-full motion-reduce:block"
          style={{ backgroundColor: 'var(--color-primary-dark)' }}
          aria-hidden
        />
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden motion-reduce:h-0 brightness-[1.07] saturate-[1.18] contrast-[1.04] sm:object-center max-sm:object-[center_30%]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary-dark/55 via-primary-dark/20 to-primary-dark/6 max-sm:via-primary-dark/35" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary-dark/45 via-primary-dark/6 to-primary-dark/8" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary-dark/60 via-primary-dark/18 to-primary-dark/1 max-lg:via-primary-dark/30" />
        <div
          className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-primary-dark/40 via-primary-dark/14 to-primary-dark/6 max-lg:from-primary-dark/60 lg:bg-gradient-to-r lg:from-black/30 lg:via-black/12 lg:to-transparent xl:from-black/22 xl:via-black/8"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2] shadow-[inset_0_0_90px_rgba(0,0,0,0.18),inset_0_-100px_140px_rgba(15,30,60,0.28),inset_0_0_200px_rgba(0,0,0,0.12)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2] mix-blend-soft-light opacity-10 bg-gradient-to-r from-cyan-200/8 via-transparent to-blue-300/5"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute -left-24 top-1/4 z-[1] h-64 w-64 rounded-full bg-primary-main/25 blur-[100px] motion-reduce:animate-none animate-float-soft sm:h-80 sm:w-80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-1/4 z-[1] h-56 w-56 rounded-full bg-primary-light/18 blur-[95px] motion-reduce:animate-none animate-float-soft [animation-delay:-3.5s] sm:h-72 sm:w-72"
          aria-hidden
        />

        {/* Removed subtle animated white overlay to reveal video more clearly */}
      </div>

      <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col overflow-hidden max-xl:overflow-visible px-4 pt-[calc(4.75rem+env(safe-area-inset-top))] sm:px-6 sm:pt-[calc(5.25rem+env(safe-area-inset-top))] lg:px-8 lg:pt-[calc(5.5rem+env(safe-area-inset-top))] xl:overflow-hidden xl:pt-[calc(5.75rem+env(safe-area-inset-top))] [@media(max-height:720px)]:pt-[calc(4rem+env(safe-area-inset-top))]">
        <div className="grid min-h-0 flex-1 gap-4 overflow-hidden max-xl:grid-rows-[auto_minmax(0,1fr)] max-xl:overflow-visible sm:gap-5 xl:grid-cols-12 xl:grid-rows-1 xl:items-center xl:overflow-hidden xl:gap-6 2xl:gap-10 [@media(max-height:720px)]:gap-3">
          {/* Copy — left half on desktop */}
          <div className="flex min-h-0 flex-col justify-center text-white xl:col-span-6 xl:overflow-y-auto xl:pr-4 2xl:pr-6 [@media(max-height:720px)]:justify-start">
            <div className="motion-reduce:animate-none animate-fade-in motion-reduce:opacity-100">
              <span className="relative inline-flex max-w-full rounded-full bg-gradient-to-r from-primary-light/85 via-secondary-main/70 to-primary-main/85 bg-[length:200%_100%] p-[1px] shadow-xl shadow-primary-dark/35 motion-reduce:animate-none animate-shimmer-border">
                <span className="group inline-flex min-h-[44px] max-w-full items-center gap-2.5 rounded-full bg-primary-dark/92 px-3.5 py-2.5 text-xs font-semibold text-white shadow-inner backdrop-blur-md ring-1 ring-white/15 transition duration-300 hover:ring-primary-light/45 sm:gap-3 sm:px-4 sm:text-sm">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-light opacity-70 motion-reduce:hidden" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-light shadow-[0_0_12px_rgba(111,211,218,0.9)]" />
                  </span>
                  <FaShip className="shrink-0 text-primary-light transition-transform duration-300 group-hover:scale-110" />
                  <span className="truncate sm:whitespace-normal">VelaLink — sailing social</span>
                </span>
              </span>
            </div>

            <h1 className="mt-4 text-[clamp(1.45rem,4.2vw,1.85rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white motion-reduce:animate-none animate-slide-up-hero [animation-delay:40ms] [text-wrap:balance] [text-shadow:0_2px_4px_rgba(0,0,0,0.85),0_4px_24px_rgba(0,0,0,0.55)] sm:mt-5 sm:text-4xl md:text-5xl lg:text-[clamp(2.25rem,4vw,3rem)] xl:mt-5 xl:text-[clamp(2.25rem,3.2vw,2.75rem)] 2xl:text-[clamp(2.5rem,3vw,3.25rem)] [@media(max-height:720px)]:mt-3 [@media(max-height:720px)]:leading-[1.12]">
              Il social network per chi{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-white via-white to-primary-light bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(111,211,218,0.35)]">
                  vive il mare
                </span>
                <span
                  className="absolute -bottom-1 left-0 h-[0.35em] w-full rounded-full bg-gradient-to-r from-primary-main/70 via-primary-light/60 to-transparent opacity-95 blur-[3px] motion-reduce:opacity-0 motion-reduce:animate-none animate-fade-in [animation-delay:700ms]"
                  aria-hidden
                />
              </span>
              .
            </h1>

            <p className="mt-3 max-w-xl text-[0.9rem] font-medium leading-snug text-white motion-reduce:animate-none animate-slide-up-hero [animation-delay:110ms] [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_14px_rgba(0,0,0,0.5)] sm:mt-4 sm:text-base sm:leading-relaxed md:text-lg xl:mt-4 xl:max-w-none 2xl:text-xl [@media(max-height:720px)]:mt-2 [@media(max-height:720px)]:!text-[0.82rem] [@media(max-height:720px)]:leading-snug">
              Connettiti con altri velisti, condividi esperienze e trova il posto barca perfetto direttamente dall&apos;app.
            </p>
          </div>

          {/* Rotating feature cards — right half, vertically centered on xl+ */}
          <div className="relative z-20 flex min-h-0 flex-1 flex-col items-center motion-reduce:animate-none animate-slide-up [animation-delay:200ms] max-xl:h-full max-xl:min-h-0 max-xl:pb-3 xl:z-auto xl:col-span-6 xl:min-h-0 xl:items-center xl:justify-center xl:pb-0 xl:pl-2 2xl:pl-4">
            <div className="mx-auto flex min-h-0 w-full max-w-[min(21.5rem,calc(100vw-2rem))] flex-col max-xl:h-full sm:max-w-[20rem] xl:max-w-[20rem] 2xl:max-w-[21rem]">
              <FeatureCarousel reduceMotion={reduceMotion} />
            </div>
          </div>
        </div>

        {/* Store CTAs */}
        <div className="relative z-10 mt-auto flex w-full shrink-0 flex-col gap-2 pt-3 sm:flex-row sm:flex-wrap sm:gap-3 sm:pt-4 max-xl:!pt-6 md:pt-5 xl:max-w-2xl [@media(max-height:720px)]:gap-2 [@media(max-height:720px)]:pt-2">
          <button
            type="button"
            className="group flex min-h-[52px] w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-primary-dark shadow-[0_20px_40px_-15px_rgba(30,58,109,0.45)] ring-2 ring-white/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_28px_50px_-12px_rgba(30,58,109,0.55)] active:translate-y-0 active:scale-[0.98] motion-reduce:animate-none animate-slide-up-hero [animation-delay:280ms] sm:min-h-[48px] sm:w-auto sm:min-w-[220px] sm:px-7 sm:py-4"
          >
            <FaApple
              size={26}
              className="shrink-0 transition-transform duration-300 group-hover:scale-105"
              aria-hidden
            />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.28em] text-primary-dark/45">Scarica su</p>
              <p className="text-base font-semibold">App Store</p>
            </div>
          </button>
          <button
            type="button"
            className="group relative flex min-h-[52px] w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-main via-primary-main to-primary-dark px-6 py-3.5 text-white shadow-[0_8px_32px_-6px_rgba(47,111,175,0.65),0_0_40px_-12px_rgba(111,211,218,0.35)] ring-2 ring-primary-light/45 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:from-secondary-main hover:via-primary-main hover:to-primary-dark hover:shadow-[0_16px_48px_-8px_rgba(47,111,175,0.75),0_0_48px_-8px_rgba(111,211,218,0.5)] hover:ring-primary-light/70 active:translate-y-0 active:scale-[0.98] motion-reduce:animate-none animate-slide-up-hero [animation-delay:340ms] sm:min-h-[48px] sm:w-auto sm:min-w-[220px] sm:px-7 sm:py-4"
          >
            <span
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <FaGooglePlay
              size={26}
              className="relative shrink-0 transition-transform duration-300 group-hover:scale-105"
              aria-hidden
            />
            <div className="relative text-left">
              <p className="text-[10px] uppercase tracking-[0.28em] text-primary-light/95">Disponibile su</p>
              <p className="text-base font-semibold">Google Play</p>
            </div>
          </button>
        </div>

        <a
          href="#community"
          className="motion-reduce:opacity-50 mx-auto mt-2 flex shrink-0 flex-col items-center gap-0.5 pb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white motion-reduce:animate-none animate-scroll-nudge [text-shadow:0_1px_4px_rgba(0,0,0,0.85)] hover:text-white/95 sm:mt-3 sm:text-xs [@media(max-height:720px)]:mt-1"
        >
          <span>Esplora</span>
          <FaChevronDown className="text-base opacity-90 sm:text-lg" aria-hidden />
        </a>
      </div>
    </section>
  );
};

export default Hero;
