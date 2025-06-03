import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <section
      id="featuresforinstitutions"
      className="scroll-mt-24 w-full bg-[#ced6ff] py-8 md:py-12 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-4">
        {/* Main flex row - no card, full width, no shadow, no rounded */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-32 px-0 md:px-2">
          {/* Left: Text & Icon */}
          <div
            className="flex-1 flex flex-col items-start z-10 w-full "
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h2
              className="text-2xl md:text-4xl font-bold text-[#ffffff] mb-3 tracking-tight"
              style={{ fontFamily: "Poppins-Bold, Poppins, sans-serif" }}
            >
              {t.sectionTitle}
            </h2>
            <hr className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 border-t-2 border-white mb-5" />

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

            <div className="glass-card-light p-6 mb-5 w-full text-features-align">
              <p className="text-[15px] md:text-base text-[#22223b] text-justify font-poppins leading-relaxed m-0">
                {t.features[0]}
              </p>
            </div>

            <style jsx>{`
              @media (min-width: 768px) {
                .text-features-align {
                  max-width: 30vw !important;
                }
              }
            `}</style>

            <button
              onClick={() => {
                sessionStorage.setItem(
                  "scroll-position",
                  String(window.scrollY)
                );
                router.push("/features-for-institutions");
              }}
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="700"
              className="mt-2 px-6 py-2 rounded-full bg-[rgb(255,255,255)] text-[#22223b] border border-[#fff] hover:bg-white font-poppins text-[15px] shadow transition"
              style={{ fontWeight: 500 }}
            >
              {t.cta}
            </button>
          </div>
          {/* Right: Image */}
          <div
            className="flex-1 flex items-start justify-center w-full md:h-[420px] mt-6 md:mt-12"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="relative w-full max-w-[580px] aspect-[4/3]">
              <Image
                src="/images/institutions.png"
                alt="Institutions"
                fill
                className="image-section"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesForInstitutions;
