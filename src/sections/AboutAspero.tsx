import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useRouter } from "next/router";

export const AboutAspero = () => {
  const { lang } = useLanguage();
  const router = useRouter();

  const content = {
    ro: {
      title: "Despre Aspero",
      text: (
        <>
          Platforma noastră caută să combine lucrurile la care în mod
          tradițional educația universitară din România excelează - printre
          altele, aptitudinile înalte pentru aspectele teoretice ale materiilor
          STEM (Science, Technology, Engineering and Mathematics - Știință,
          Tehnologie, Inginerie și Matematică) - și noua revoluție digitală din
          educație adusă de accesul cvasi-universal la internet și generalizarea
          aplicațiilor inteligenței artificiale.
          <br />
          <br />
          Printre funcțiile fundamentale ale platformei se pot număra generarea
          procedurală de exerciții bazate pe un input al profesorului, prin care
          platforma poate genera un număr virtual infinit de exerciții corecte
          pentru studenți care să le permită să-și consolideze exercițiile fără
          a face exact același exercițiu de mai multe ori și feedback-ul
          instantaneu scris în prealabil sau generat automat pentru exerciții
          care permite atât studentului să-și corecteze exercițiile autonom
          oricând și de oriunde s-ar afla, dar și profesorului să se concentreze
          pe aspecte mai puțin repetitive ale educației.
        </>
      ),
      button: "Contactează-ne",
    },
    en: {
      title: "About Aspero",
      text: (
        <>
          Our platform seeks to combine the abilities and qualities the Romanian
          university education traditionally excels at - which are, among
          others, the high aptitude for STEM theory (Science, Technology,
          Engineering and Mathematics) subjects - along with the new digital
          revolution in education brought by the quasi-universal access to the
          internet and the simplification of access to artificial intelligence
          applications.
          <br />
          <br />
          Among the platform&apos;s core functions there are procedurally
          generated exercises based on teacher input, whereby the platform can
          generate a virtually infinite number of correct exercises for students
          to use to consolidate their studies without having to repeat exactly
          the same exercise multiple times, as well as instant pre-written or
          automatically generated feedback for exercises. This allows both the
          student to correct their exercises autonomously anytime and from
          anywhere, and for the teacher to be able to focus on the less
          repetitive aspects of education.
        </>
      ),
      button: "Contact Us",
    },
  };

  return (
    <section
      id="aboutaspero"
      className="scroll-mt-24 w-full bg-hero5 pt-4 md:pt-6 pb-8 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Right: IMAGE */}
        <div
          className="flex-1 flex items-center justify-center min-w-[260px]"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <Image
            src="/images/about-aspero.png"
            alt="Devices"
            width={520}
            height={380}
            className="image-section"
            priority
          />
        </div>
        {/* Left: TEXT */}
        <div
          className="flex-1 max-w-xl text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 font-poppins">
            {content[lang].title}
          </h2>

          <div className="relative mb-6 w-full">
            <div
              className="
                w-full rounded-[40px] overflow-hidden shadow-2xl
                bg-[#22223b]/30 backdrop-blur-md
              "
              style={{
                backgroundColor: "rgba(180, 200, 255, 0.15)",
                border: "1px solid rgba(180, 200, 255, 0.25)",
              }}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="p-6">
                <p className="text-[15px] md:text-base text-[#fff] text-justify leading-relaxed font-poppins">
                  {content[lang].text}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start md:justify-start mt-4">
            <a
              href="#contact"
              onClick={() =>
                sessionStorage.setItem(
                  "scroll-position",
                  window.scrollY.toString()
                )
              }
              className="bg-[#ffffff] text-hero5 font-poppins text-[15px] font-normal rounded-full px-6 py-2 shadow hover:bg-[#ffffff] transition"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              {content[lang].button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAspero;
