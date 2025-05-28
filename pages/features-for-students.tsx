import { Header } from "@/sections/Header";
import { useLanguage } from "../src/context/LanguageContext";
import { useEffect } from "react";

const features = {
  ro: [
    {
      title: "Exerciții generate procedural",
      description: (
        <>
          Una dintre funcțiile ale platformei noastre este selecția virtual
          nelimitată de exerciții generate procedural în cadrul diverselor
          cursuri: astfel este posibil pentru un student să continue să se
          pregătească pentru examene folosindu-se exerciții riguros pregătite în
          afara celor produse de către profesori, extinzându-și astfel gama de
          opțiuni.
        </>
      ),
    },
    {
      title: "Feedback instantaneu",
      description: (
        <>
          Platforma poate da un feedback instantaneu problemelor rezolvate,
          subliniind atât elementele corecte, cât și pe cele eronate ale
          rezolvării, propunând de la caz la caz și soluții de rezolvare.
        </>
      ),
    },
    {
      title: "Acces colaborativ la exerciții",
      description: (
        <>
          Dincolo de accesul la materiale multimedia și la exerciții, platforma
          noastră oferă și posibilitatea de a rezolva exerciții în comun prin
          funcțiile de chat și rezolvare cooperativă: astfel, dincolo de
          componenta de învățare autonomă, platforma încurajează și învățatul
          cooperativ.
        </>
      ),
    },
    {
      title: "Analiză a soluțiilor cu inteligență artificială",
      description: (
        <>
          De asemenea, la cerere, platforma poate integra și sugestii compuse de
          inteligență artificială în analiza răspunsurilor: astfel un feedback
          exhaustiv poate fi accesat la un click distanță oricând de către
          student care include nu doar răspunsul corect, cât și soluții de
          rezolvare, sugestii pentru îmbunătățirea textelor sau direcții pentru
          studiu aprofundat.
        </>
      ),
    },
    {
      title: "Statistici de verificare a progresului",
      description: (
        <>
          Studenții pot vedea statistici detaliate despre studiile proprii, atât
          de la curs la curs, cât și global; de la cursurile la care au avut cel
          mai mare succes, la detalii minore ce trebuie amănunțite, aceste
          statistici îmbunătățesc calitatea procesului de învățare prin
          direcționarea eforturilor studenților.
        </>
      ),
    },
  ],
  en: [
    {
      title: "Procedurally generated exercises",
      description: (
        <>
          One of the features of our platform is the virtually unlimited
          selection of procedurally generated exercises within the various
          courses: this makes it possible for a student to continue preparing
          for exams using rigorously prepared exercises outside those produced
          by teachers, thus expanding their range of options.
        </>
      ),
    },
    {
      title: "Instant feedback",
      description: (
        <>
          The platform can provide instant feedback on solved problems,
          highlighting both correct and incorrect elements of the solution,
          proposing case-by-case and comprehensive answers.
        </>
      ),
    },
    {
      title: "Collaborative access to exercises",
      description: (
        <>
          In addition to access to multimedia materials and exercises, our
          platform also offers the possibility to solve exercises together
          through cooperative solving features as well as a chat: thus, beyond
          the autonomous learning component, the platform also encourages
          cooperative learning.
        </>
      ),
    },
    {
      title: "Analysing solutions with artificial intelligence",
      description: (
        <>
          Also, upon request, the platform can also integrate AI-created
          suggestions in the analysis of answers: an exhaustive feedback system
          can thus be accessed with only a click at any time by the student that
          includes not only the correct answer, but also means to resolve a
          question, suggestions for improving texts or directions for further
          study.
        </>
      ),
    },
    {
      title: "Progressing Statistics",
      description: (
        <>
          Students can see detailed statistics about their own studies, both
          course-by-course and comprehensive; from the courses in which they
          were most successful to minor details that require expanded focus,
          these statistics improve the quality of the learning process by
          targeting students&apos; efforts.
        </>
      ),
    },
  ],
};

const accentColors = [
  "from-[#5f67b2] to-[#ba71cf]",
  "from-[#5566b8] to-[#ac6dff]",
  "from-[#7ba5fa] to-[#5f67b2]",
  "from-[#ba71cf] to-[#ac6dff]",
  "from-[#ac6dff] to-[#5f67b2]",
];

const FeaturesForStudentsPage = ({
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
      <div className="min-h-screen bg-[#ced6ff] text-[#22223b] px-4 md:px-24 py-20 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#131336] mb-16 mt-8">
          {lang === "ro"
            ? "Funcționalități - pentru studenți"
            : "Features for Students"}
        </h1>
        <div className="w-full max-w-3xl space-y-7">
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
              <div className="text-base md:text-lg text-[#353563] font-medium whitespace-pre-line text-justify">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesForStudentsPage;
