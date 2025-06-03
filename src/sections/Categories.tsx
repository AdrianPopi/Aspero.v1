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
      },
      { title: "Macroeconomie (economie)", image: "/images/macroeconomie.png" },
      {
        title: "Neurobiologie (biologie/medicină)",
        image: "/images/neuro.png",
      },
      { title: "Istoria limbii române", image: "/images/calinescu.png" },
      { title: "Ecuații diferențiale", image: "/images/ecuatii.png" },
      { title: "Franceză - A1-A2", image: "/images/franceza.png" },
    ],
  },
  en: {
    title: "Discover Learning Categories",
    description: "",
    courses: [
      {
        title: "Programming – Python (informatics/programming)",
        image: "/images/python.png",
      },
      {
        title: "Macroeconomics (economics)",
        image: "/images/macroeconomie.png",
      },
      { title: "Neurobiology (biology/medicine)", image: "/images/neuro.png" },
      { title: "History of Romanian Language", image: "/images/calinescu.png" },
      { title: "Differential equations", image: "/images/ecuatii.png" },
      { title: "French - A1-A2", image: "/images/franceza.png" },
    ],
  },
};

// Filter chips in both languages
const filterLabels = {
  ro: [
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
  en: [
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
};

export const Categories = () => {
  const { lang } = useLanguage();
  const t = courseContent[lang];
  const bubbleImage = "/images/categories-bubble.png"; // Make sure this is the correct path

  return (
    <section
      className="scroll-mt-24 relative py-8 px-4 bg-hero5 min-h-[600px] md:min-h-[750px] lg:min-h-[850px] overflow-hidden"
      id="courses"
    >
      {/* Bubble - absolute, left & up */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: "80px", // adjust as needed
          left: "-140px", // negative for overlap outside card
          width: "670px", // make big for soft fade
          height: "670px",
          opacity: 0.9,
        }}
      >
        <Image
          src={bubbleImage}
          alt=""
          width={670}
          height={670}
          draggable={false}
          style={{ width: "100%", height: "auto" }}
          priority
          suppressHydrationWarning
        />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <h2
          data-aos="fade-right"
          data-aos-duration="700"
          className="font-poppins font-bold text-white text-2xl md:text-3xl mb-5"
          style={{ letterSpacing: "0.03em" }}
        >
          {lang === "ro" ? "Exemple de cursuri" : "Course Examples"}
        </h2>

        {/* Separator line */}
        <div className="w-full h-[2px] bg-hero2 opacity-40 my-6" />

        {/* Filter chips row */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {filterLabels[lang].map((label, index) => (
            <button
              key={label}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className={`
        font-poppins font-normal     
        px-3 py-1
        rounded-full
        text-[11px]
        border border-white
        transition shadow-sm
        whitespace-nowrap
        bg-transparent text-white hover:bg-hero2 hover:text-hero5
      `}
              style={{
                minWidth: 110,
                fontWeight: 400,
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
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
              className="bg-[#181836] rounded-2xl border-2 border-hero2 flex flex-col overflow-hidden shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Responsive image container */}
              <div className="w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={250}
                  className="rounded-t-2xl object-cover w-full h-[250px]"
                  priority={idx === 0}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-poppins font-medium text-white text-lg mb-4 leading-snug">
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
