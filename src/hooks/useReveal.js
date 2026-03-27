import { useEffect, useRef } from "react";

export function useReveal(threshold = 0.05) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return undefined;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("visible");
      return undefined;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return ref;
}
