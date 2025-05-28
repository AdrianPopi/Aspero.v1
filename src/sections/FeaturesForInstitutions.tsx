import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

// Content for both languages
const content = {
  en: {
    sectionTitle: "Features for Institutions",
    cardTitle: "For Institutions",
    subtitle: "Clear data. Better decisions.",
    features: [
      <>
        Aspero offers institutions a complete dashboard for educational
        activity. With access to{" "}
        <strong>
          statistics centralizing the involvement of professors and students in
          all courses
        </strong>
        , managers can easily identify strong and weak points. Reports help
        guide strategic planning, and the observer function allows for detailed
        tracking of each course in real time.
      </>,
    ],

    cta: "Read more",
    marquee:
      "Education should not be repetitive. It should be relevant, adaptable and human.",
  },
  ro: {
    sectionTitle: "Funcționalități",
    cardTitle: "Pentru Instituții",
    subtitle: "Date clare. Decizii mai bune.",
    features: [
      <>
        Aspero oferă instituțiilor un tablou complet al activității
        educaționale. Prin accesul la{" "}
        <strong>
          statistici centralizate privind gradul de implicare al profesorilor și
          studenților în toate cursurile
        </strong>
        , conducerea poate identifica cu ușurință punctele forte și zonele ce
        necesită îmbunătățiri. Rapoartele detaliate realizate de experți în
        educație ajută la planificarea strategică, iar funcția de observator
        permite vizualizarea detaliată a fiecărui curs, de la firul ierbii, în
        timp real.
      </>,
    ],

    cta: "Citește mai mult",
    marquee:
      "Educația nu trebuie să fie repetitivă. Trebuie să fie relevantă, adaptabilă și umană.",
  },
};

export const FeaturesForInstitutions = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section
      id="featuresforinstitutions"
      className="w-full bg-[#ced6ff] px-0 py-0 relative overflow-hidden"
    >
      {/* Main flex row - no card, full width, no shadow, no rounded */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-4 py-10 md:py-16 px-4 md:px-24">
        {/* Left: Text & Icon */}
        <div className="flex-1 flex flex-col items-start z-10 w-full max-w-xl">
          <h2
            className="text-2xl md:text-4xl font-bold text-[#ffffff] mb-3 tracking-tight"
            style={{ fontFamily: "Poppins-Bold, Poppins, sans-serif" }}
          >
            {t.sectionTitle}
          </h2>
          <hr className="w-[90vw] md:w-[30vw] border-t-2 border-[#ffffff] mb-5" />

          <div className="flex items-center mb-1 gap-2">
            <span
              className="text-xl md:text-3xl font-bold text-[#131336]"
              style={{ fontFamily: "Poppins-Bold, Poppins, sans-serif" }}
            >
              {t.cardTitle}
            </span>
            <Image
              src="/images/institution-icon.png"
              alt="institution icon"
              width={32}
              height={32}
              className="w-7 h-7 md:w-8 md:h-8"
            />
          </div>
          <div style={{ height: "10px" }}></div>

          <div
            className="text-base md:text-lg font-normal text-[#5566b8] mb-2"
            style={{ fontFamily: "Poppins-Regular, Poppins, sans-serif" }}
          >
            {t.subtitle}
          </div>
          <div style={{ height: "10px" }}></div>

          <div
            className="text-[15px] md:text-base text-[#22223b] mb-5 text-justify text-features-align"
            style={{ maxWidth: "90vw", width: "100%" }}
          >
            {t.features[0]}
          </div>
          <style jsx>{`
            @media (min-width: 768px) {
              .text-features-align {
                max-width: 30vw !important;
              }
            }
          `}</style>

          <Link href="/features-for-institutions" legacyBehavior>
            <button
              className="mt-2 px-6 py-2 rounded-full bg-[rgb(255,255,255)] text-[#22223b] border border-[#fff] hover:bg-white font-poppins text-[15px] shadow transition"
              style={{ fontWeight: 500 }}
            >
              {t.cta}
            </button>
          </Link>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-start justify-center w-full md:h-[420px] mt-6 md:mt-12">
          <Image
            src="/images/institutions.png"
            alt="Institutions"
            width={600}
            height={420}
            className="rounded-[22px] object-cover w-full h-64 md:h-[400px] md:w-[520px] shadow-xl"
            priority
          />
        </div>
      </div>
      {/* Animated Marquee Bar */}
      <div className="w-full bg-gradient-to-r from-[#5f67b2] via-[#ba71cf] to-[#ac6dff] overflow-hidden h-10 flex items-center">
        <div className="marquee whitespace-nowrap text-white text-base md:text-lg font-poppins font-medium px-8">
          <span>
            {t.marquee} &nbsp; {t.marquee} &nbsp; {t.marquee} &nbsp;
          </span>
        </div>
        <style jsx>{`
          .marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 18s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default FeaturesForInstitutions;
