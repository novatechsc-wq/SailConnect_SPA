import React, { useEffect, useMemo, useRef, useState } from 'react';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mediaQuery) return;

    const onChange = () => setReduced(Boolean(mediaQuery.matches));
    onChange();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    }

    // Safari fallback
    mediaQuery.addListener(onChange);
    return () => mediaQuery.removeListener(onChange);
  }, []);

  return reduced;
}

export function useInViewOnce(
  ref,
  { rootMargin = '0px 0px -15% 0px', threshold = 0.14 } = {}
) {
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, prefersReducedMotion, ref, rootMargin, threshold]);

  return inView;
}

const variantClasses = {
  up: {
    hidden: 'opacity-0 translate-y-6',
    shown: 'opacity-100 translate-y-0',
  },
  fade: {
    hidden: 'opacity-0',
    shown: 'opacity-100',
  },
  left: {
    hidden: 'opacity-0 -translate-x-6',
    shown: 'opacity-100 translate-x-0',
  },
  right: {
    hidden: 'opacity-0 translate-x-6',
    shown: 'opacity-100 translate-x-0',
  },
  scale: {
    hidden: 'opacity-0 scale-[0.98]',
    shown: 'opacity-100 scale-100',
  },
};

const ScrollReveal = ({
  as: Tag = 'div',
  children,
  className = '',
  variant = 'up',
  delayMs = 0,
  durationMs = 700,
  rootMargin,
  threshold,
}) => {
  const ref = useRef(null);
  const inView = useInViewOnce(ref, { rootMargin, threshold });

  const classes = useMemo(() => {
    const v = variantClasses[variant] ?? variantClasses.up;
    return [
      'transition-[transform,opacity] will-change-transform motion-reduce:transition-none',
      inView ? v.shown : v.hidden,
      className,
    ]
      .filter(Boolean)
      .join(' ');
  }, [className, inView, variant]);

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{
        transitionDelay: delayMs ? `${delayMs}ms` : undefined,
        transitionDuration: `${durationMs}ms`,
      }}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
