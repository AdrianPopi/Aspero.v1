import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export const TeamSection = () => {
  const { lang } = useLanguage();

  // Short summary for the main page
  const teamSummary = {
    ro: {
      title: "Echipa Aspero",
      subtitle: "Inovație și experiență europeană.",
      text: (
        <>
          Echipa Aspero este formată din studenți la universități de top din
          Europa, cu experiență în educația românească și internațională. Suntem
          dedicați digitalizării și modernizării învățământului superior
          românesc.
        </>
      ),
      button: "Descoperă echipa",
    },
    en: {
      title: "The Aspero Team",
      subtitle: "Innovation & European experience.",
      text: (
        <>
          The Aspero team is made up of students from top European universities,
          with experience in both Romanian and international education. We are
          dedicated to digitalization and modernizing higher education in
          Romania.
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
      {/* Left: IMAGE */}
      <div className="flex-1 flex items-center justify-center min-w-[260px]">
        <Image
          src="/images/team.png"
          alt="Aspero Team"
          width={520}
          height={380}
          className="object-contain rounded-2xl shadow-2xl w-full md:w-[420px] h-auto"
          style={{ height: "auto" }}
          priority
        />
      </div>
      {/* Right: CONTENT */}
      <div className="flex-1 max-w-xl flex flex-col items-start justify-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 font-poppins">
          {t.title}
        </h2>
        <div className="text-[#b3aaff] text-base md:text-lg font-normal mb-3 font-poppins">
          {t.subtitle}
        </div>
        <div className="text-[15px] md:text-base text-[#fff] text-justify leading-relaxed mb-6 font-poppins">
          {t.text}
        </div>
        <Link href="/team" legacyBehavior>
          <a className="bg-white text-black font-poppins text-[15px] font-normal rounded-full px-6 py-2 shadow hover:bg-gray-200 transition">
            {t.button}
          </a>
        </Link>
      </div>
    </section>
  );
};

export default TeamSection;
