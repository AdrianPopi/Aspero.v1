import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

export const Vision = () => {
  const { lang } = useLanguage();

  const content = {
    ro: {
      title: "Viziunea noastră",
      text: (
        <>
          Noi suntem de ferma părere că nu trebuie niciodată uitat faptul că, la
          nivel fundamental, educația este un proces holistic, proces care nu
          poate fi limitat la sala de curs sau la un unic sistem de predare. De
          asemenea, noi mai considerăm că, deși actualmente viciat de lipsa
          digitalizării, ineficienta gestiune a fondurilor și o generală frică
          de schimbare, sistemul educațional din România are totuși și niște
          părți bune care-i oferă premisele de a se putea îmbunătăți substanțial
          pe termen scurt, mediu și lung.
        </>
      ),
      button: "Citește mai mult",
    },
    en: {
      title: "Our Vision",
      text: (
        <>
          We firmly believe that, at its most fundamental level, education is a
          holistic process, which cannot be confined to the classroom or to a
          single delivery system. We also believe that, although currently
          marred by a lack of digitalization, inefficient fund management and a
          general fear of change, the Romanian education system still does have
          several great traits which would allow it to develop in a favourable
          direction both in a short-term and a long-term timeframe.
        </>
      ),
      button: "Read more",
    },
  };

  return (
    <section
      id="vision"
      className="w-full bg-hero5 flex flex-col items-center justify-center py-16 px-4 md:px-24"
      style={{ minHeight: "65vh" }}
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 font-poppins">
          {content[lang].title}
        </h2>
        <div className="text-[15px] md:text-base text-[#fff] text-justify leading-relaxed mb-6 font-poppins">
          {content[lang].text}
        </div>
        <Link href="/our-vision" legacyBehavior>
          <a className="bg-[#ffffff] text-hero5 font-poppins text-[15px] font-normal rounded-full px-6 py-2 shadow hover:bg-[#ffffff] transition">
            {content[lang].button}
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Vision;
