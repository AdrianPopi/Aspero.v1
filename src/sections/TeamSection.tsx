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
      className="w-full bg-hero5 flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-24 gap-10 md:gap-20"
      style={{ minHeight: "75vh" }}
    >
      {/* Right: CONTENT (moved first) */}
      <div className="flex-1 max-w-xl flex flex-col items-start justify-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 font-poppins">
          {t.title}
        </h2>
        <div className="text-[15px] md:text-base text-[#fff] text-justify leading-relaxed mb-6 font-poppins">
          {t.text}
        </div>
        <Link href="/team" legacyBehavior>
          <button
            onClick={() => {
              sessionStorage.setItem(
                "scroll-position",
                window.scrollY.toString()
              );
              router.push("/team");
            }}
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

      {/* Left: IMAGE (moved second) */}
      <div className="flex-1 flex items-center justify-center min-w-[260px]">
        <Image
          src="/images/aspero-team.png"
          alt="Aspero Team"
          width={520}
          height={380}
          className="object-contain rounded-2xl shadow-2xl w-full md:w-[480px] h-auto"
          style={{ height: "auto" }}
          priority
        />
      </div>
    </section>
  );
};

export default TeamSection;
