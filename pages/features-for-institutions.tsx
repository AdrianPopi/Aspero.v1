import Link from "next/link";
import { useRouter } from "next/router";
import { Header } from "@/sections/Header";
import { useLanguage } from "../src/context/LanguageContext";
import { useEffect } from "react";
import Image from "next/image";
import Footer from "@/sections/Footer";
import BackToTop from "../src/components/BackToTop";

const features = {
  ro: [
    {
      title: "COORDONARE A CURSURILOR INSTITUȚIEI",
      description: `Platforma permite administratorilor instituțiilor acces la statistici care cuprind atât implicarea studenților, cât și a profesorilor, în actul educațional pentru toate cursurile oferite de către aceste instituții; astfel acestea pot urmări ușor direcția pe care procesul educațional o ia.`,
      img: "/images/line.png",
    },
    {
      title: "ANALIZĂ A STATISTICILOR PENTRU INSTITUȚII",
      description: `Centralizând statisticile tuturor cursurilor oferite de către o instituție, platforma poate trimite conducerii acesteia rapoarte periodice întocmite de experți în științele educației care să descrie performanțele academice ale instituției, în tandem cu sugestii țintite pentru îmbunătățirea procesului educațional, cu scopuri de implementare pe termen scurt, mediu sau lung.`,
      img: "",
    },
    {
      title: "FUNCȚIE DE OBSERVATOR",
      description: `Administratorii instituțiilor pot accesa fiecare curs individual în baza funcției de observator care permite evaluarea amănunțită a fiecărui curs în parte (incluzând și exercițiile în parte), permițând astfel administratorilor să aibă și o perspectivă la firul ierbii asupra cursurilor instituției.`,
      img: "/images/observer.png",
    },
  ],
  en: [
    {
      title: "INSTITUTION COURSE COORDINATION",
      description: `The platform allows institution administrators access to statistics covering both student and teacher engagement in the educational act for all courses offered by these institutions; thus they can easily track the direction the educational process is taking.`,
      img: "/images/line.png",
    },
    {
      title: "ANALYSIS OF STATISTICS FOR INSTITUTIONS",
      description: `By centralizing the statistics of all the courses offered by an institution, the platform can provide reports prepared by experts in educational sciences describing the academic performance of the institution, in tandem with targeted suggestions for improving the educational process, with short, medium or long-term implementation goals.`,
      img: "",
    },
    {
      title: "OBSERVER FUNCTION",
      description: `The institution's administrators can access each individual course using the observer function. This allows a detailed evaluation of each individual course (including individual exercises), thus allowing administrators to have a bottom-up perspective of an institution's courses.`,
      img: "/images/observer.png",
    },
  ],
};

const FeaturesForInstitutionsPage = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const { lang } = useLanguage();
  const router = useRouter();
  const items = features[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hero panel copy
  const heroText =
    lang === "ro"
      ? `Aspero oferă instituțiilor un tablou complet al activității educaționale. Prin accesul la statistici centralizate privind gradul de implicare al profesorilor și studenților în toate cursurile, conducerea poate identifica cu ușurință punctele forte și zonele ce necesită îmbunătățiri. Rapoartele detaliate realizate de experți în educație ajută la planificarea strategică, iar funcția de observator permite vizualizarea detaliată a fiecărui curs, de la firul ierbii, în timp real.`
      : `Aspero offers institutions a complete dashboard for educational activity. With access to statistics centralizing the involvement of professors and students in all courses, managers can easily identify strong and weak points. Reports help guide strategic planning, and the observer function allows for detailed tracking of each course in real time.`;

  const sectionTitle =
    lang === "ro" ? "Funcționalități" : "Features for Institutions";
  const cardTitle = lang === "ro" ? "Pentru Instituții" : "For Institutions";

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero panel */}
      <section
        id="featuresforinstitutions"
        className="scroll-mt-24 pt-32 md:pt-24 w-full bg-hero5 flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-24 gap-8 md:gap-16"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left: Text & Icon */}
          <div className="flex-1 flex flex-col items-start z-10 w-full max-w-xl">
            <div className="flex items-center mb-3 gap-2">
              {/* Section title with icon */}
              <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight font-poppins">
                {sectionTitle}
              </h3>
              <Image
                src="/images/institution-icon-white.png"
                alt="institution icon"
                width={32}
                height={32}
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </div>

            {/* Sub-card title */}
            <div className="flex items-center mb-1 gap-2">
              <span className="text-xl md:text-xl font-bold text-[#5566b8] font-poppins">
                {cardTitle}
              </span>
            </div>

            <div style={{ height: "10px" }} />

            <div className="text-[15px] md:text-base text-white mb-5 text-justify font-poppins">
              {heroText}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="flex-1 flex items-center justify-center w-full md:h-[420px] mt-6 md:mt-12">
            <Image
              src="/images/institutions.png"
              alt="Institutions"
              width={600}
              height={420}
              className="image-section"
              priority
            />
          </div>
        </div>
      </section>

      {/* Actual feature breakdown */}
      <main className="bg-hero5 bg-cover bg-center text-white pt-8 md:pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-16 space-y-20 pt-0 md:pt-16">
          {/* 1) Coordonare: title above, image+text side by side */}
          <section className="space-y-6">
            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-4 text-center">
              {items[0].title}
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <Image
                  src={items[0].img}
                  alt={items[0].title}
                  width={600}
                  height={350}
                  className="image-section"
                  priority
                />
              </div>
              <div className="md:w-1/2">
                <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify">
                  {items[0].description}
                </p>
              </div>
            </div>
          </section>

          {/* 2) Analiză statistici: bordered card */}
          <section className="p-8 border border-blue-500 rounded-2xl">
            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-4 text-center">
              {items[1].title}
            </h3>
            <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed whitespace-pre-line text-justify">
              {items[1].description}
            </p>
          </section>

          {/* 3) Observator: title, image left + icon+text right */}
          <section className="space-y-6">
            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-4 text-center">
              {items[2].title}
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <Image
                  src={items[2].img}
                  alt={items[2].title}
                  width={600}
                  height={350}
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
              <div className="md:w-1/2 flex flex-col items-center">
                <Image
                  src="/images/observer-icon.png"
                  alt="Observer Icon"
                  width={54}
                  height={54}
                  className="w-16 h-16 mb-4" // echivalent cu 64px, fără conflicte
                  priority
                />

                <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify">
                  {items[2].description}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default FeaturesForInstitutionsPage;
