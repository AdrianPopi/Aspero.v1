import { Header } from "@/sections/Header";
import { useLanguage } from "../src/context/LanguageContext";
import { useEffect } from "react";

// Split your text into cards/sections
const features = {
  ro: [
    {
      title: "Coordonare a cursurilor instituției",
      description: `Platforma permite administratorilor instituțiilor acces la statistici care cuprind atât implicarea studenților, cât și a profesorilor, în actul educațional pentru toate cursurile oferite de către aceste instituții; astfel acestea pot urmări ușor direcția pe care procesul educațional o ia.`,
    },
    {
      title: "Analiză a statisticilor pentru instituții",
      description: `Centralizând statisticile tuturor cursurilor oferite de către o instituție, platforma poate trimite conducerii acesteia rapoarte periodice întocmite de experți în științele educației care să descrie performanțele academice ale instituției, în tandem cu sugestii țintite pentru îmbunătățirea procesului educațional, cu scopuri de implementare pe termen scurt, mediu sau lung.`,
    },
    {
      title: "Funcție de observator",
      description: `Administratorii instituțiilor pot accesa fiecare curs individual în baza funcției de observator care permite evaluarea amănunțită a fiecărui curs în parte (incluzând și exercițiile în parte), permițând astfel administratorilor să aibă și o perspectivă la firul ierbii asupra cursurilor instituției.`,
    },
  ],
  en: [
    {
      title: "Institution course coordination",
      description: `The platform allows institution administrators access to statistics covering both student and teacher engagement in the educational act for all courses offered by these institutions; thus they can easily track the direction the educational process is taking.`,
    },
    {
      title: "Analysis of statistics for institutions",
      description: `By centralizing the statistics of all the courses offered by an institution, the platform can provide reports prepared by experts in educational sciences describing the academic performance of the institution, in tandem with targeted suggestions for improving the educational process, with short, medium or long-term implementation goals.`,
    },
    {
      title: "Observer function",
      description: `The institution's administrators can access each individual course using the observer function. This allows a detailed evaluation of each individual course (including individual exercises), thus allowing administrators to have a bottom-up perspective of an institution's courses.`,
    },
  ],
};

const accentColors = [
  "from-[#5f67b2] to-[#ba71cf]",
  "from-[#5566b8] to-[#ac6dff]",
  "from-[#ac6dff] to-[#5f67b2]",
];

const FeaturesForInstitutionsPage = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="min-h-screen bg-[#ced6ff] text-[#22223b] px-2 md:px-12 py-20 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#131336] mb-16 mt-8 text-center">
          {lang === "ro"
            ? "Funcționalități - pentru instituții"
            : "Features for Institutions"}
        </h1>
        <div className="w-full max-w-4xl space-y-7">
          {features[lang].map((feature, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-white/90 shadow-lg p-6 border-l-8 bg-gradient-to-r ${
                accentColors[i % accentColors.length]
              }`}
              style={{ borderColor: "#5f67b2" }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#131336]">
                {feature.title}
              </h3>
              <div className="text-base md:text-lg text-[#353563] font-medium text-justify">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesForInstitutionsPage;
