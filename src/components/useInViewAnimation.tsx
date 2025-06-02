import { useEffect, useState, useRef, RefObject } from "react";

export const useInViewAnimation = <T extends HTMLElement = HTMLDivElement>(
  threshold = 0.4
): { ref: RefObject<T>; isVisible: boolean } => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return { ref, isVisible };
};
