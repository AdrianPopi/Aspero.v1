import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useRouter } from "next/router";

export const TeamSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const { lang } = useLanguage();
  const router = useRouter();

  const teamSummary = {
    ro: {
      title: "Echipa Aspero",
      text: (
        <>
          Echipa noastră este compusă din studenți care studiază discipline
          diverse (de la Economie la Nanobiologie) la universități de top din
          Europa (precum TU Delft sau Bocconi) care au trecut prin sistemul
          educațional românesc, cunoscându-i atât meritele, dar și lacunele,
          unindu-ne totuși următorul lucru: dorința de a da ceva înapoi
          comunităților care ne-au format prin transformarea sistemului
          educațional din România într-unul competitiv la nivel european prin
          adaptarea practicilor educaționale digitalizate de care am avut
          oportunitatea să profităm la sistemul universitar din România.
        </>
      ),
      button: "Descoperă echipa",
    },
    en: {
      title: "The Aspero Team",
      text: (
        <>
          Our team is composed of students studying diverse disciplines (from
          Economics to Nanobiology) at top universities in Europe (such as TU
          Delft or Bocconi) who have gone through the Romanian education system,
          knowing both its merits and shortcomings. These experiences made us
          have one thing in common: the desire to give something back to the
          communities that formed us, and we want to achieve this by making the
          Romanian education system competitive at the European level by
          adapting the digitized educational practices that we had the
          opportunity to take advantage of abroad to the Romanian university
          system.
        </>
      ),
      button: "Meet the team",
    },
  };

  const t = teamSummary[lang];

  // 🎨 Dinamic theme styling
  const sectionBg = isDarkMode ? "bg-hero5" : "bg-light-background";
  const textColor = isDarkMode ? "text-white" : "text-light-text";
  const cardBg = isDarkMode ? "bg-[#b4c8ff]/15" : "bg-light-surface";
  const cardBorder = isDarkMode
    ? "border border-[#b4c8ff]/25"
    : "border border-light-border";
  const buttonClass = isDarkMode
    ? "bg-white text-hero5 hover:bg-hero2 hover:text-[#0c0c29]"
    : "bg-light-soft text-black hover:bg-[#0c0c29] hover:text-white";

  return (
    <section
      id="team"
      className={`w-full ${sectionBg} flex justify-center py-4 px-4 md:px-0 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]`}
    >
      <div className="max-w-7xl mx-auto px-0 md:px-2 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-32 w-full">
        {/* Right: CONTENT */}
        <div
          className="flex-1 flex flex-col items-start justify-center"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 font-poppins ${textColor}`}
          >
            {t.title}
          </h2>
          <div
            className={`rounded-[40px] shadow-2xl backdrop-blur-md p-6 mb-6 w-full ${cardBg} ${cardBorder}`}
          >
            <p
              className={`text-[15px] md:text-base ${textColor} text-justify leading-relaxed font-poppins`}
            >
              {t.text}
            </p>
          </div>

          <Link href="/team">
            <button
              onClick={() => {
                sessionStorage.setItem(
                  "scroll-position",
                  window.scrollY.toString()
                );
                router.push("/team");
              }}
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="700"
              className={`mt-2 px-6 py-2 rounded-full font-poppins text-[15px] shadow transition border ${buttonClass}`}
              style={{
                fontWeight: 500,
                fontFamily: "Poppins-Regular, Poppins, sans-serif",
              }}
            >
              {t.button}
            </button>
          </Link>
        </div>

        {/* Left: IMAGE */}
        <div
          className="flex-1 flex items-center justify-center min-w-[260px]"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <Image
            src="/images/aspero-team.png"
            alt="Aspero Team"
            width={520}
            height={390}
            className="image-section"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
