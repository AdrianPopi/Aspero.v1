import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const Hero = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const { lang } = useLanguage();
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bubbleRef.current) {
        const { clientX, clientY } = e;
        bubbleRef.current.style.transform = `translate(${clientX * 0.02}px, ${
          clientY * 0.02
        }px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const content = {
    ro: {
      title: (
        <>
          Educația universitară a<br />
          viitorului. Astăzi.
        </>
      ),
      subtitle: (
        <>
          O platformă creată de studenți români din Europa pentru a aduce cele
          mai{" "}
          <span className="font-bold text-black dark:text-white">moderne</span>{" "}
          practici educaționale în învățământul superior din România.
        </>
      ),
    },
    en: {
      title: (
        <>
          The university education
          <br />
          of the future. Today.
        </>
      ),
      subtitle: (
        <>
          A platform created by Romanian students in Europe to bring the most{" "}
          <span className="font-bold text-black dark:text-white">modern</span>{" "}
          educational practices to higher education in Romania.
        </>
      ),
    },
  };

  const t = content[lang] || content.ro;

  // Fundalul întregii secțiuni
  const sectionBg = isDarkMode ? "bg-hero5" : "bg-light-background";
  // Culoarea titlului
  const titleColor = isDarkMode ? "text-white" : "text-black";
  // Culoarea subtitlului
  const subtitleColor = isDarkMode ? "text-hero6" : "text-black";

  // Stilul cardului (fundal + bordură) în funcție de temă
  const cardBg = isDarkMode ? "bg-[#b4c8ff]/15" : "bg-light-surface/80";
  const cardBorder = isDarkMode
    ? "border border-[#b4c8ff]/25"
    : "border border-light-border";

  return (
    <section
      id="home"
      className={`
        relative flex justify-center items-center
        min-h-[600px] md:min-h-[750px] lg:min-h-[850px]
        ${sectionBg} pt-20 md:pt-24 px-2 pb-0 overflow-hidden
      `}
    >
      {/* Bula din dreapta-sus */}
      <div
        className="absolute z-0 pointer-events-none"
        ref={bubbleRef}
        style={{
          top: "-180px",
          right: "-130px",
          width: "900px",
          height: "900px",
          maxWidth: "none",
          opacity: 1,
        }}
      >
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            top: "-180px",
            right: "-130px",
            width: "900px",
            height: "900px",
            maxWidth: "none",
            opacity: 1,
            position: "relative",
          }}
        >
          <Image
            src="/images/hero-bubble.png"
            alt=""
            fill
            draggable={false}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Conținutul principal (card-ul) */}
      <div className="relative z-10 w-full flex justify-center">
        <div
          className={`
            w-full max-w-7xl
            flex flex-col md:flex-row
            rounded-[40px] overflow-hidden shadow-2xl
            ${cardBg} ${cardBorder}
            backdrop-blur-md
          `}
        >
          {/* Partea cu text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 p-8 md:p-14 flex flex-col justify-center z-10 max-w-lg items-start"
          >
            {/* Titlu */}
            <h1
              className={`
                font-poppins font-bold text-lg md:text-2xl lg:text-2xl
                ${titleColor} leading-tight mb-10
              `}
            >
              {t.title}
            </h1>

            {/* Subtitlu */}
            <p
              className={`
                font-poppins font-normal ${subtitleColor}
                text-xs md:text-base mb-10 text-justify
              `}
            >
              {t.subtitle}
            </p>

            {/* CTA – butonul care arată săgeata */}
            <a
              href="#aboutaspero"
              className={`
                w-12 h-12 flex items-center justify-center rounded-full
                ${
                  isDarkMode
                    ? "bg-white/80 hover:bg-white text-hero5"
                    : "bg-light-soft hover:bg-white text-black"
                }
                transition-all shadow-md mt-4 animate-pulse hover:scale-110
              `}
              aria-label="Scroll to next section"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#181836"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </a>
          </motion.div>

          {/* Partea cu imaginea */}
          <div className="flex-1 flex items-center justify-center p-6 md:p-10 relative">
            <Image
              src="/images/hero.png"
              alt="Student at laptop"
              width={600}
              height={400}
              className="image-section"
              priority
            />
            <div
              className="absolute inset-0 rounded-[70px_0_70px_0/120px_0_120px_0] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 80% 20%, #b3aaff22 10%, transparent 70%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
