import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

// Content in both languages
const content = {
  ro: {
    sectionTitle: "Funcționalități",
    cardTitle: "Pentru Profesori",
    subtitle: "Date clare. Decizii mai bune.",
    description: (
      <>
        Aspero este gândit pentru a simplifica procesul educațional fără a-i
        diminua valoarea umană. Profesorii pot crea cu ușurință exerciții în
        formate diverse. De la grile și răspunsuri text, la matematică,
        programare sau selecții interactive și pot genera automat serii întregi
        de variante pentru fiecare temă. Platforma oferă{" "}
        <b>feedback automatizat</b>, analize detaliate despre progresul
        studenților și o interfață centralizată de gestionare a cursurilor.
        Astfel, profesorii pot investi mai mult timp în predare autentică,
        mentorat și inovație pedagogică.
      </>
    ),
    cta: "Optimizează-ți cursul",
  },
  en: {
    sectionTitle: "Features",
    cardTitle: "For Teachers",
    subtitle: "Clear data. Better decisions.",
    description: (
      <>
        Aspero is designed to simplify the educational process without
        diminishing its human value. Teachers can easily create exercises in
        various formats, from quizzes and text responses to math, programming,
        and interactive selections, and can automatically generate entire sets
        of variants for each assignment. The platform offers{" "}
        <b>automated feedback</b>, detailed analytics on student progress, and a
        centralized course management interface. This way, teachers can invest
        more time in authentic teaching, mentoring, and pedagogical innovation.
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
      className="w-full bg-[#dde3fc] px-0 py-0 relative overflow-hidden"
    >
      <div className="w-full flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-8 py-10 md:py-16 px-4 md:px-24">
        {/* Left: Image */}
        <div className="flex-1 flex items-center justify-center w-full max-w-xl">
          <Image
            src="/images/profesor.png"
            alt="Profesor"
            width={550}
            height={380}
            className="rounded-[18px] object-cover w-full h-52 md:h-[350px]"
            style={{
              minWidth: 240,
              maxWidth: 500,
              boxShadow: "0 8px 32px rgba(52,45,140,0.12)",
            }}
            priority
          />
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col items-start gap-3 z-10 w-full max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#131336] tracking-tight"
              style={{ fontFamily: "Poppins-Bold, Poppins, sans-serif" }}
            >
              {t.cardTitle}
            </h2>
            <Image
              src="/images/profesor-icon.png"
              alt="professor icon"
              width={28}
              height={28}
              className="w-6 h-auto"
            />
          </div>
          <div
            className="text-base md:text-lg font-semibold text-[#5b6a8c] mb-2"
            style={{ fontFamily: "Poppins-Regular, Poppins, sans-serif" }}
          >
            {t.subtitle}
          </div>
          <div className="text-[15px] md:text-base text-[#22223b] mb-4 max-w-2xl">
            {t.description}
          </div>
          <button
            className="mt-2 px-5 py-2 rounded-full bg-white text-[#22223b] border border-[#aaa] hover:bg-[#ece8ff] font-poppins text-[15px] shadow transition"
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
