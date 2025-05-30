import { useLanguage } from "../context/LanguageContext";
import { useRouter } from "next/router";
import Image from "next/image";

export const Vision = () => {
  const { lang } = useLanguage();
  const router = useRouter();

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
      className="scroll-mt-24 w-full bg-hero5 flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-24 gap-10"
      style={{ minHeight: "65vh" }}
    >
      {/* Left: TEXT */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 font-poppins">
          {content[lang].title}
        </h2>
        <div className="text-[15px] md:text-base text-[#fff] text-justify leading-relaxed mb-6 font-poppins">
          {content[lang].text}
        </div>
        <button
          onClick={() => {
            sessionStorage.setItem(
              "scroll-position",
              window.scrollY.toString()
            );
            router.push("/our-vision");
          }}
          className="bg-[#ffffff] text-hero5 font-poppins text-[15px] font-normal rounded-full px-6 py-2 shadow hover:bg-[#ffffff] transition"
        >
          {content[lang].button}
        </button>
      </div>

      {/* Right: IMAGE */}
      <div className="flex-1 flex items-center justify-center min-w-[260px]">
        <Image
          src="/images/vision.png"
          alt="Vision"
          width={520}
          height={380}
          className="object-contain rounded-2xl shadow-2xl w-full md:w-[420px] h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default Vision;
