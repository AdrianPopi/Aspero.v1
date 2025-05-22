import { Section } from "../components/Section";
import { Title } from "../components/Title";
import { GradientText } from "../components/GradientText";
import { useLanguage } from "../context/LanguageContext";
import { FaBookOpen, FaBookReader } from "react-icons/fa";
import { Card } from "../components/Card";

// Courses in both languages
const courseContent = {
  ro: {
    title: "Sample-uri de cursuri",
    description: "Exemple de cursuri disponibile în platforma noastră:",
    samples: [
      "Istoria mișcării politice țărăniste din România interbelică",
      "Ecuații diferențiale",
      "Termodinamică",
      "Franceză - A1-A2",
      "Macroeconomie",
      "Drept constituțional",
      "Neurobiologie",
      "Elemente de fizică cuantică",
      "Programare - Python",
      "Istoria limbii române",
    ],
  },
  en: {
    title: "Course Samples",
    description: "Examples of courses available on our platform:",
    samples: [
      "The history of the interbellum peasant political movement in Romania",
      "Differential equations",
      "Thermodynamics",
      "French - A1-A2",
      "Macroeconomics",
      "Constitutional law",
      "Neurobiology",
      "Quantum Physics",
      "Programming - Python",
      "History of Romanian Language",
    ],
  },
};

export const CourseSamples = () => {
  const { lang } = useLanguage();
  const t = courseContent[lang];

  return (
    <Section
      id="coursesamples"
      className="gap-12 py-20 px-4 min-h-[60vh] bg-gradient-to-b from-gray-900 via-gray-950 to-black"
    >
      <div className="text-center col gap-4 mb-8">
        <Title size="md">
          <GradientText className="pink-blue drop-shadow-lg">
            {t.title}
          </GradientText>
        </Title>
        <p className="text-xl text-light">{t.description}</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {t.samples.map((course, idx) => (
          <Card
            key={course}
            className="flex items-center gap-4 p-6 hover:scale-[1.04] transition-transform duration-200 bg-gray-900/80 dark:bg-gray-800/70 shadow-2xl rounded-2xl border border-primary-700/20"
          >
            <span className="text-4xl text-primary-400 dark:text-primary-300 flex-shrink-0">
              {idx % 2 === 0 ? <FaBookOpen /> : <FaBookReader />}
            </span>
            <span className="font-semibold text-lg text-strong text-left">
              {course}
            </span>
          </Card>
        ))}
      </div>
    </Section>
  );
};
