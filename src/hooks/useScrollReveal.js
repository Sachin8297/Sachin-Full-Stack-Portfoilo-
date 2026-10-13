import { useEffect, useRef, useState } from "react";

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Returns a ref to attach to an element and a boolean `isVisible`.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // fire once
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? "0px 0px -60px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
}
