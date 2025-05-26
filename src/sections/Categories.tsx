import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

// Course data
const courseContent = {
  ro: {
    title: "Descoperă Categoriile de învățare",
    description: "",
    courses: [
      {
        title: "Programare – Python (informatică/programare)",
        image: "/images/python.png",
        teacher: "PROF: MARIA ANA",
        duration: "2 ORE",
      },
      {
        title: "Macroeconomie (economie)",
        image: "/images/macroeconomie.png",
        teacher: "PROF: MARIA ANA",
        duration: "2 ORE",
      },
      {
        title: "Neurobiologie (biologie/medicină)",
        image: "/images/neuro.png",
        teacher: "PROF: MARIA ANA",
        duration: "2 ORE",
      },
    ],
  },
  en: {
    title: "Discover Learning Categories",
    description: "",
    courses: [
      {
        title: "Programming – Python (informatics/programming)",
        image: "/images/python.png",
        teacher: "PROF: MARIA ANA",
        duration: "2 HOURS",
      },
      {
        title: "Macroeconomics (economics)",
        image: "/images/macroeconomie.png",
        teacher: "PROF: MARIA ANA",
        duration: "2 HOURS",
      },
      {
        title: "Neurobiology (biology/medicine)",
        image: "/images/neuro.png",
        teacher: "PROF: MARIA ANA",
        duration: "2 HOURS",
      },
    ],
  },
};

// Filter chips in both languages
const filterLabels = {
  ro: [
    "TOATE",
    "INFORMATICĂ/PROGRAMARE",
    "FIZICĂ APLICATĂ/INGINERIE",
    "DESCOPERIREA MEDIULUI",
    "DREPT",
    "BIOLOGIE/MEDICINĂ",
    "LIMBI STRĂINE",
    "MATEMATICĂ",
    "MAI MULT",
  ],
  en: [
    "ALL",
    "COMPUTING/PROGRAMMING",
    "APPLIED PHYSICS/ENGINEERING",
    "ENVIRONMENTAL DISCOVERY",
    "LAW",
    "BIOLOGY/MEDICINE",
    "FOREIGN LANGUAGES",
    "MATHEMATICS",
    "MORE",
  ],
};

export const Categories = () => {
  const { lang } = useLanguage();
  const t = courseContent[lang];

  return (
    <section className="py-16 px-4 bg-hero5 min-h-screen" id="categories">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-poppins font-semibold text-white text-3xl md:text-4xl mb-8">
          {t.title}
        </h2>
        {/* Separator line */}
        <div className="w-full h-[2px] bg-hero2 opacity-40 my-6" />

        {/* Filter chips row */}
        <div className="flex flex-wrap gap-4 mb-10">
          {filterLabels[lang].map((label, idx) => (
            <button
              key={label}
              className={`font-poppins font-medium px-6 py-2 rounded-full text-base border-2 border-white transition shadow-sm
                whitespace-nowrap
                ${
                  idx === 0 || idx === filterLabels[lang].length - 1
                    ? "bg-white text-hero5"
                    : "bg-transparent text-white hover:bg-hero2 hover:text-hero5"
                }
              `}
              style={{
                minWidth:
                  idx === 0 || idx === filterLabels[lang].length - 1 ? 90 : 170,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Course Card Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {t.courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-[#181836] rounded-2xl border-2 border-hero2 flex flex-col overflow-hidden shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Responsive image container */}
              <div className="relative w-full h-56 md:h-80">
                {" "}
                {/* control the height */}
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw" // Responsive image sizes
                  className="object-cover rounded-t-2xl"
                  priority={idx === 0}
                />
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-poppins font-medium text-white text-2xl mb-6 leading-snug">
                  {course.title}
                </h3>
                <div className="flex items-center text-hero2 gap-6 mt-auto text-base font-poppins">
                  <span className="flex items-center gap-1">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    {course.teacher}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3"></path>
                      <path d="M22 2 12 12.01"></path>
                    </svg>
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
