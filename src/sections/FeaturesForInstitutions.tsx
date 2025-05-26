import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

// Content for both languages
const content = {
  en: {
    sectionTitle: "Features for Institutions",
    cardTitle: "For Institutions",
    subtitle: "Clear data. Better decisions.",
    features: [
      "Aspero offers institutions a complete dashboard for educational activity. With access to statistics centralizing the involvement of professors and students in all courses, managers can easily identify strong and weak points. Reports help guide strategic planning, and the observer function allows for detailed tracking of each course in real time.",
    ],
    cta: "Register",
    marquee:
      "Education should not be repetitive. It should be relevant, adaptable and human.",
  },
  ro: {
    sectionTitle: "Funcționalități",
    cardTitle: "Pentru Instituții",
    subtitle: "Date clare. Decizii mai bune.",
    features: [
      "Aspero oferă instituțiilor un tablou complet al activității educaționale. Prin accesul la statisticile centralizate privind gradul de implicare al profesorilor și studenților la toate cursurile, conducerea poate identifica cu ușurință punctele tari și slabe ale reacției instituționale. Rapoartele facilitează acțiuni strategice, iar funcția de observator permite vizualizarea detaliată a fiecărui curs, de la primul la ultimul, în timp real.",
    ],
    cta: "Înregistrează-te",
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
      className="w-full bg-[#dde3fc] px-0 py-0 relative overflow-hidden"
    >
      {/* Main flex row - no card, full width, no shadow, no rounded */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-4 py-10 md:py-16 px-4 md:px-24">
        {/* Left: Text & Icon */}
        <div className="flex-1 flex flex-col items-start z-10 w-full max-w-xl">
          <h2
            className="text-2xl md:text-4xl font-bold text-[#b3aaff] mb-3 tracking-tight"
            style={{ fontFamily: "Poppins-Bold, Poppins, sans-serif" }}
          >
            {t.sectionTitle}
          </h2>
          <hr className="w-24 md:w-44 border-t-2 border-[#b3aaff] mb-5" />
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
          <div
            className="text-base md:text-lg font-semibold text-[#7d88e3] mb-2"
            style={{ fontFamily: "Poppins-Regular, Poppins, sans-serif" }}
          >
            {t.subtitle}
          </div>
          <div
            className="text-[15px] md:text-base text-[#22223b] mb-5"
            style={{ maxWidth: 570 }}
          >
            <strong>{t.features[0].split(".")[0]}.</strong>
            {t.features[0].substring(t.features[0].indexOf(".") + 1)}
          </div>
          <button
            className="mt-2 px-6 py-2 rounded-full bg-white text-[#22223b] border border-[#aaa] hover:bg-[#ece8ff] font-poppins text-[15px] shadow transition"
            style={{ fontWeight: 500 }}
          >
            {t.cta}
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center w-full max-w-xl">
          <Image
            src="/images/institutions.png"
            alt="Institutions"
            width={600}
            height={400}
            className="rounded-[18px] object-cover w-full h-52 md:h-72"
            style={{
              minWidth: 240,
              maxWidth: 480,
              boxShadow: "0 8px 32px rgba(52,45,140,0.12)",
            }}
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
