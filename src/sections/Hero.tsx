import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export const Hero = () => {
  const { lang } = useLanguage();

  const content = {
    ro: {
      hashtag: "#haicunoi",
      title: (
        <>
          Educația universitară a<br />
          viitorului. Astăzi.
        </>
      ),
      subtitle: (
        <>
          O platformă creată de studenți români din Europa pentru a aduce cele
          mai <span className="font-bold text-white">moderne</span> practici
          educaționale în învățământul superior din România.
        </>
      ),
    },
    en: {
      hashtag: "#joinus",
      title: (
        <>
          The university education
          <br />
          of the future. Today.
        </>
      ),
      subtitle: (
        <>
          A platform created by Romanian students in Europe to bring the most
          <span className="font-bold text-white"> modern</span> educational
          practices to higher education in Romania.
        </>
      ),
    },
  };

  const t = content[lang] || content.ro;

  return (
    <section
      id="home"
      className="relative flex justify-center items-center min-h-screen bg-hero5 pt-20 md:pt-24 px-2 pb-10 overflow-hidden"
    >
      {/* Top-right big bubble, only a part visible */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: "-180px",
          right: "-130px",
          width: "900px",
          height: "900px",
          maxWidth: "none",
          opacity: 1,
        }}
      >
        <Image
          src="/images/hero-bubble.png"
          alt=""
          width={900}
          height={900}
          draggable={false}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      {/* Main hero content - your card (unchanged) */}
      <div className="relative z-10 w-full flex justify-center">
        <div
          className="
            w-full max-w-7xl
            flex flex-col md:flex-row
            rounded-[40px]
            overflow-hidden
            shadow-2xl
            bg-[#22223b]/30
            backdrop-blur-md
          "
          style={{
            backgroundColor: "rgba(64, 65, 84, 0.2)", // grey + 50% opacity
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Left: Text content */}
          <div className="flex-1 p-8 md:p-14 flex flex-col justify-center z-10 max-w-lg items-start">
            {/* Title */}
            <h1
              className="font-poppins font-bold text-lg md:text-xl lg:text-2xl text-white leading-tight mb-10"
              style={{ fontWeight: 700 }}
            >
              {t.title}
            </h1>

            {/* Subtitle */}
            <p
              className="font-poppins font-normal text-hero6 text-xs md:text-base mb-10 text-justify"
              style={{ fontWeight: 400 }}
            >
              {t.subtitle}
            </p>

            {/* CTA */}
            <a
              href="#aboutaspero"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-all shadow-md mt-4"
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
          </div>
          {/* Right: Hero Image */}
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
