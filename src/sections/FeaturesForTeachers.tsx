import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const content = {
  ro: {
    cardTitle: "Pentru Profesori",
    subtitle: "Date clare. Decizii mai bune.",
    description:
      "Aspero simplifică procesul educațional cu instrumente moderne pentru profesori.",
    cta: "Citește mai mult",
  },
  en: {
    cardTitle: "For Teachers",
    subtitle: "Clear data. Better decisions.",
    description:
      "Aspero streamlines the educational process with modern tools for teachers.",
    cta: "Read more",
  },
};

export const FeaturesForTeachers = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="w-full bg-[#ced6ff] px-0 py-0 relative overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-4 py-10 md:py-16 px-4 md:px-24">
        <div className="flex-1 flex items-center justify-center w-full md:h-[420px]">
          <Image
            src="/images/profesor.png"
            alt="Profesor"
            width={600}
            height={420}
            className="rounded-[22px] object-cover w-full h-64 md:h-[400px] md:w-[520px] shadow-xl"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col items-start z-10 w-full max-w-xl">
          <div className="flex items-center mb-1 gap-2">
            <span className="text-xl md:text-3xl font-bold text-[#131336]">
              {t.cardTitle}
            </span>
            <Image
              src="/images/profesor-icon.png"
              alt="professor icon"
              width={32}
              height={32}
              className="w-7 h-7 md:w-8 md:h-8"
            />
          </div>
          <div className="text-base md:text-lg text-[#5566b8] mb-2">
            {t.subtitle}
          </div>
          <div className="text-[15px] md:text-base text-[#22223b] mb-5 text-justify">
            {t.description}
          </div>
          <Link
            href="/features-for-teachers"
            className="mt-2 px-6 py-2 rounded-full bg-white text-[#22223b] border border-[#fff] hover:bg-gray-100 font-poppins text-[15px] shadow transition inline-block"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesForTeachers;
