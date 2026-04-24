import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if IntersectionObserver doesn't fire within 800ms, show anyway
    const fallback = setTimeout(() => {
      el.classList.add('opacity-100', 'translate-y-0');
    }, 800);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback);
          el.classList.add('opacity-100', 'translate-y-0');
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, [threshold]);
  return ref;
}
