import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useRouter } from "next/router";

export const TeamSection = () => {
  const { lang } = useLanguage();
  const router = useRouter();

  // Short summary for the main page
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

  return (
    <section
      id="team"
      className="w-full bg-hero5 flex justify-center py-8 px-4 md:px-0" // Eliminăm px-24 de pe section
      style={{ minHeight: "75vh" }}
    >
      {/* Container centrat cu max-width */}
      <div className="max-w-7xl mx-auto px-4 md:px-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 w-full">
        {/* Right: CONTENT */}
        <div
          className="flex-1 max-w-xl flex flex-col items-start justify-center"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 font-poppins">
            {t.title}
          </h2>
          <div className="glass-card p-6 mb-6 w-full">
            <p className="text-[15px] md:text-base text-[#fff] text-justify leading-relaxed font-poppins">
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
              className="mt-2 px-6 py-2 rounded-full bg-[rgb(255,255,255)] text-[#22223b] border border-[#fff] hover:bg-white font-poppins text-[15px] shadow transition"
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
            height={390} // sau ce dimensiune ai reală pentru 4:3
            className="image-section"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
