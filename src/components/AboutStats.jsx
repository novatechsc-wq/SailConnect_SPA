// src/components/AboutStats.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ScrollReveal, { useInViewOnce } from './ScrollReveal';

function useCountUp({ target, start, durationMs = 1200 }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const from = 0;
    const to = target;

    const tick = (now) => {
      const t = Math.min(1, (now - startTime) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + (to - from) * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, durationMs]);

  return value;
}

const AboutStats = () => {
  const stats = useMemo(
    () => [
      {
        target: 10000,
        label: 'Velisti iscritti',
        format: (v) => `${Math.round(v / 1000)}K+`,
      },
      { target: 500, label: 'Porti collaborativi', format: (v) => `${Math.round(v)}+` },
      {
        target: 50000,
        label: 'Posti barca disponibili',
        format: (v) => `${Math.round(v / 1000)}K+`,
      },
      {
        target: 4.8,
        label: 'Valutazione media',
        format: (v) => `${Math.min(5, Math.max(0, v)).toFixed(1)}/5`,
      },
    ],
    []
  );

  const sectionRef = useRef(null);
  const inView = useInViewOnce(sectionRef, { rootMargin: '0px 0px -22% 0px', threshold: 0.16 });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary-dark to-primary-main text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">La comunità in numeri</h2>
          <p className="text-xl text-primary-light/95">I numeri che dimostrano la nostra crescita</p>
        </ScrollReveal>

        <ScrollReveal variant="up" delayMs={120}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} start={inView} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const StatItem = ({ stat, start }) => {
  const raw = useCountUp({
    target: stat.target,
    start,
    durationMs: stat.target >= 1000 ? 1300 : 1100,
  });

  const displayValue = stat.format(raw);

  return (
    <div
      className={[
        'text-center transition-transform duration-700 will-change-transform',
        start ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
      ].join(' ')}
      style={{ transitionProperty: 'transform, opacity' }}
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums tracking-tight">
        {displayValue}
      </div>
      <div className="text-primary-light/85">{stat.label}</div>
    </div>
  );
};

export default AboutStats;
