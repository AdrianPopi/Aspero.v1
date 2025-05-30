import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export const AboutAspero = () => {
  const { lang } = useLanguage();

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
      className="scroll-mt-24 w-full bg-hero5 flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-24 gap-10 md:gap-20"
      style={{ minHeight: "75vh", scrollMarginTop: "6rem" }}
    >
      {/* Left: IMAGE */}
      <div className="flex-1 flex items-center justify-center min-w-[260px]">
        <Image
          src="/images/about-aspero.png"
          alt="Devices"
          width={520}
          height={380}
          className="image-section"
          style={{ height: "auto" }}
          priority
        />
      </div>

      {/* Right: CONTENT */}
      <div className="flex-1 max-w-xl flex flex-col items-start justify-center">
        <h2
          className="text-white text-2xl md:text-3xl font-bold mb-4"
          style={{ fontFamily: "Poppins-Bold, Poppins, sans-serif" }}
        >
          {content[lang].title}
        </h2>

        <div
          className="text-[15px] md:text-base text-[#fff] text-justify leading-relaxed mb-6"
          style={{ fontFamily: "Poppins-Regular, Poppins, sans-serif" }}
        >
          {content[lang].text}
        </div>
        <a
          href="#contact"
          onClick={() =>
            sessionStorage.setItem("scroll-position", window.scrollY.toString())
          }
          className="bg-[#b3aaff] text-hero5 font-poppins text-[15px] font-normal rounded-full px-6 py-2 shadow hover:bg-[#a393fa] transition"
        >
          {content[lang].button}
        </a>
      </div>
    </section>
  );
};

export default AboutAspero;
