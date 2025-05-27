import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

// Content in both languages
const content = {
  ro: {
    cardTitle: "Pentru Profesori",
    subtitle: "Date clare. Decizii mai bune.",
    description: (
      <>
        Aspero este gândit pentru a simplifica procesul educațional fără a-i
        diminua valoarea umană. Profesorii pot crea cu ușurință exerciții în
        formate diverse. De la grile și răspunsuri text, la matematică,
        programare sau selecții interactive și pot genera automat serii întregi
        de variante pentru fiecare temă. Platforma oferă{" "}
        <strong>feedback automatizat</strong>, analize detaliate despre
        progresul studenților și o interfață centralizată de gestionare a
        cursurilor. Astfel, profesorii pot investi mai mult timp în predare
        autentică, mentorat și inovație pedagogică.
      </>
    ),
    cta: "Optimizează-ți cursul",
  },
  en: {
    cardTitle: "For Teachers",
    subtitle: "Clear data. Better decisions.",
    description: (
      <>
        Aspero is designed to simplify the educational process without
        diminishing its human value. Teachers can easily create exercises in
        various formats, from quizzes and text responses to math, programming,
        and interactive selections, and can automatically generate entire sets
        of variants for each assignment. The platform offers{" "}
        <strong>automated feedback</strong>, detailed analytics on student
        progress, and a centralized course management interface. This way,
        teachers can invest more time in authentic teaching, mentoring, and
        pedagogical innovation.
      </>
    ),
    cta: "Optimize your course",
  },
};

export const FeaturesForTeachers = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section
      id="featuresforteachers"
      className="w-full bg-[#ced6ff] px-0 py-0 relative overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-4 py-10 md:py-16 px-4 md:px-24">
        {/* Image FIRST */}
        <div className="flex-1 flex items-center justify-center w-full md:h-[420px]">
          <Image
            src="/images/profesor.png"
            alt="Profesor"
            width={600}
            height={420}
            className="rounded-[22px] object-cover w-full h-64 md:h-[400px] md:w-[520px] shadow-xl"
            priority
          />
        </div>
        {/* Text/Content SECOND */}
        <div className="flex-1 flex flex-col items-start z-10 w-full max-w-xl">
          <div className="flex items-center mb-1 gap-2">
            <span
              className="text-xl md:text-3xl font-bold text-[#131336]"
              style={{ fontFamily: "Poppins-Bold, Poppins, sans-serif" }}
            >
              {t.cardTitle}
            </span>
            <Image
              src="/images/profesor-icon.png"
              alt="professor icon"
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
            {t.description}
          </div>
          <style jsx>{`
            @media (min-width: 768px) {
              .text-features-align {
                max-width: 30vw !important;
              }
            }
          `}</style>
          <button
            className="mt-2 px-6 py-2 rounded-full bg-[rgb(255,255,255)] text-[#22223b] border border-[#fff] hover:bg-white font-poppins text-[15px] shadow transition"
            style={{ fontWeight: 500 }}
          >
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesForTeachers;
