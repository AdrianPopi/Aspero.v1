import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export const AboutAspero = () => {
  const { lang } = useLanguage();

  const content = {
    ro: {
      title: "Despre Aspero",
      subtitle: "Profesorii inspiră. Aspero optimizează.",
      text: (
        <>
          La <strong>Aspero</strong>, credem că profesorii sunt esența educației
          de calitate. Nu ne dorim să îi înlocuim, ci să le oferim mai mult timp
          pentru ceea ce contează: predare, ghidare și formarea gândirii
          critice. Aspero preia sarcinile repetitive și le transformă în procese
          automatizate, exerciții generate procedural, feedback instant și
          statistici clare despre progres.
          <br />
          <br />
          Astfel, platforma oferă studenților{" "}
          <strong>autonomie și acces la un mediu educațional flexibil</strong>,
          iar profesorilor un sprijin real în predare. Pentru educația din
          România, Aspero este un pas concret către un sistem mai modern, mai
          eficient și mai echilibrat.
        </>
      ),
      button: "Înregistrează-te",
    },
    en: {
      title: "About Aspero",
      subtitle: "Teachers inspire. Aspero optimizes.",
      text: (
        <>
          At <strong>Aspero</strong>, we believe that teachers are the essence
          of quality education. We do not wish to replace them, but to give them
          more time for what matters: teaching, mentoring, and cultivating
          critical thinking. Aspero takes over repetitive tasks and transforms
          them into automated processes, procedurally generated exercises,
          instant feedback, and clear progress statistics.
          <br />
          <br />
          Thus, the platform offers students{" "}
          <strong>
            autonomy and access to a flexible educational environment
          </strong>
          , while giving teachers real support in teaching. For education in
          Romania, Aspero is a concrete step towards a more modern, efficient,
          and balanced system.
        </>
      ),
      button: "Register now",
    },
  };

  return (
    <section
      id="aboutaspero"
      className="w-full bg-hero5 flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-24 gap-10 md:gap-20"
      style={{ minHeight: "75vh" }}
    >
      {/* Left: IMAGE */}
      <div className="flex-1 flex items-center justify-center min-w-[260px]">
        <Image
          src="/images/about-aspero.png"
          alt="Devices"
          width={520}
          height={380}
          className="object-contain rounded-2xl shadow-2xl bg-white w-full md:w-[520px] h-auto"
          style={{ height: "auto" }}
          priority
        />
      </div>

      {/* Right: CONTENT */}
      <div className="flex-1 max-w-xl flex flex-col items-start justify-center">
        <h2
          className="text-white text-2xl md:text-3xl font-bold mb-2"
          style={{ fontFamily: "Poppins-Bold, Poppins, sans-serif" }}
        >
          {content[lang].title}
        </h2>
        <div
          className="text-[#b3aaff] text-base md:text-lg font-normal mb-3"
          style={{ fontFamily: "Poppins-Regular, Poppins, sans-serif" }}
        >
          {content[lang].subtitle}
        </div>
        <div
          className="text-[15px] md:text-base text-[#fff] text-justify leading-relaxed mb-6"
          style={{ fontFamily: "Poppins-Regular, Poppins, sans-serif" }}
        >
          {content[lang].text}
        </div>
        <a
          href="#"
          className="bg-[#b3aaff] text-hero5 font-poppins text-[15px] font-normal rounded-full px-6 py-2 shadow hover:bg-[#a393fa] transition"
        >
          {content[lang].button}
        </a>
      </div>
    </section>
  );
};

export default AboutAspero;
