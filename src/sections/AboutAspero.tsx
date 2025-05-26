import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { poppinsBold, poppinsRegular } from "../components/fonts";

export const AboutAspero = () => {
  const { lang } = useLanguage();

  const content = {
    ro: {
      title: "Despre Aspero",
      subtitle: "Profesorii inspiră. Aspero optimizează.",
      text: (
        <>
          La <b>Aspero</b>, credem că profesorii sunt esența educației de
          calitate. Nu ne dorim să îi înlocuim, ci să le oferim mai mult timp
          pentru ceea ce contează: predare, ghidare și formarea gândirii
          critice. Aspero preia sarcinile repetitive și le transformă în procese
          automatizate, exerciții generate procedural, feedback instant și
          statistici clare despre progres.
          <br />
          <br />
          Astfel, platforma oferă studenților{" "}
          <b>autonomie și acces la un mediu educațional flexibil</b>, iar
          profesorilor un sprijin real în predare. Pentru educația din România,
          Aspero este un pas concret către un sistem mai modern, mai eficient și
          mai echilibrat.
        </>
      ),
      button: "Înregistrează-te",
    },
    en: {
      title: "About Aspero",
      subtitle: "Teachers inspire. Aspero optimizes.",
      text: (
        <>
          At <b>Aspero</b>, we believe that teachers are the essence of quality
          education. We do not wish to replace them, but to give them more time
          for what matters: teaching, mentoring, and cultivating critical
          thinking. Aspero takes over repetitive tasks and transforms them into
          automated processes, procedurally generated exercises, instant
          feedback, and clear progress statistics.
          <br />
          <br />
          Thus, the platform offers students{" "}
          <b>autonomy and access to a flexible educational environment</b>,
          while giving teachers real support in teaching. For education in
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
      className="w-full bg-hero5 flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-24 gap-10"
      style={{ minHeight: "75vh" }}
    >
      {/* Left: IMAGE */}
      <div className="flex-1 flex items-center justify-center min-w-[260px]">
        <Image
          src="/images/about-aspero.png"
          alt="Devices"
          width={400}
          height={330}
          className="object-contain rounded-2xl shadow-2xl bg-white w-full md:w-[380px] h-auto"
          style={{ height: "auto" }}
          priority
        />
      </div>
      {/* Right: CONTENT */}
      <div className="flex-1 max-w-2xl flex flex-col items-start justify-center">
        <h2
          className={`${poppinsBold.className} text-white text-3xl md:text-4xl mb-2`}
        >
          {content[lang].title}
        </h2>
        <div
          className={`${poppinsRegular.className} text-hero2 text-lg md:text-xl mb-5`}
        >
          {content[lang].subtitle}
        </div>
        <div
          className={`${poppinsRegular.className} text-white text-base md:text-lg leading-relaxed mb-7`}
        >
          {content[lang].text}
        </div>
        <a
          href="#"
          className="bg-[#b3aaff] text-hero5 font-poppins text-base md:text-lg font-semibold rounded-full px-8 py-3 shadow hover:bg-hero2 transition"
        >
          {content[lang].button}
        </a>
      </div>
    </section>
  );
};

export default AboutAspero;
