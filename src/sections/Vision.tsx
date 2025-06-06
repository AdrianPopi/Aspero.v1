import { useLanguage } from "../context/LanguageContext";
import { useRouter } from "next/router";
import Image from "next/image";

export const Vision = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const { lang } = useLanguage();
  const router = useRouter();

  const content = {
    ro: {
      title: "Viziunea noastră",
      text: (
        <>
          Noi suntem de fermă părere că nu trebuie niciodată uitat faptul că, la
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

  // 🎨 Dinamic theme values
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
      id="vision"
      className={`scroll-mt-24 w-full ${sectionBg} py-12 md:py-16 px-4`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: TEXT */}
        <div
          className="flex-1 max-w-xl text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2
            className={`text-2xl md:text-3xl font-bold mb-6 font-poppins ${textColor}`}
          >
            {content[lang].title}
          </h2>

          <div className="relative mb-6 w-full">
            <div
              className={`w-full rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-md ${cardBg} ${cardBorder}`}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="p-6">
                <p
                  className={`text-[15px] md:text-base ${textColor} text-justify leading-relaxed font-poppins`}
                >
                  {content[lang].text}
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-start mt-4">
            <button
              onClick={() => {
                sessionStorage.setItem(
                  "scroll-position",
                  window.scrollY.toString()
                );
                router.push("/our-vision");
              }}
              className={`rounded-full px-6 py-2 font-poppins text-[15px] font-normal shadow transition ${buttonClass}`}
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              {content[lang].button}
            </button>
          </div>
        </div>

        {/* Right: IMAGE */}
        <div
          className="flex-1 flex items-center justify-center min-w-[260px]"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <Image
            src="/images/vision.png"
            alt="Vision"
            width={520}
            height={380}
            className="image-section"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
