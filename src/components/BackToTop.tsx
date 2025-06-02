"use client";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed 
        right-6 
        bottom-16        /* 4rem from bottom on small screens */
        md:bottom-6      /* 1.5rem from bottom on md+ screens */
        z-50 
        bg-white 
        text-black 
        rounded-full 
        shadow-md 
        p-3 
        flex 
        items-center 
        justify-center 
        hover:bg-[#5566b8] 
        hover:text-white 
        transition
      "
      aria-label="Back to top"
    >
      {/* Simple “chevron up” SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTop;
