import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useRouter } from "next/router";

const content = {
  ro: {
    cardTitle: "Pentru Profesori",
    subtitle: "Date clare. Decizii mai bune.",
    description: (
      <>
        Aspero este gândit pentru a simplifica procesul educațional fără a-i
        diminua valoarea umană.
        <br />
        Profesorii pot crea cu ușurință exerciții în formate diverse: de la
        grile și răspunsuri text, la matematică, programare sau selecții
        interactive și pot genera automat serii întregi de variante pentru
        fiecare temă.
        <br />
        Platforma oferă <strong>feedback automatizat</strong>, analize detaliate
        despre progresul studenților și o interfață centralizată de gestionare a
        cursurilor.
        <br />
        Astfel, profesorii pot investi mai mult timp în predare autentică,
        mentorat și inovație pedagogică.
      </>
    ),
    cta: "Citește mai mult",
  },
  en: {
    cardTitle: "For Teachers",
    subtitle: "Clear data. Better decisions.",
    description: (
      <>
        Aspero is designed to simplify the educational process without
        diminishing its human value.
        <br />
        Teachers can easily create exercises in diverse formats: from multiple
        choice and text answers, to math, programming, or interactive
        selections—and can automatically generate entire series of variants for
        each assignment.
        <br />
        The platform provides <strong>automated feedback</strong>, detailed
        analytics on student progress, and a centralized course management
        interface.
        <br />
        This way, teachers can invest more time in authentic teaching,
        mentoring, and pedagogical innovation.
      </>
    ),
    cta: "Read more",
  },
};

export const FeaturesForTeachers = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  const router = useRouter();

  return (
    <section
      id="featuresforteachers"
      className="scroll-mt-24 w-full bg-[#ced6ff] py-8 md:py-12 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-4">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-32 px-0 md:px-2">
          <div
            className="flex-1 flex items-center justify-center w-full md:h-[420px]"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Image
              src="/images/profesor.png"
              alt="Profesor"
              width={600}
              height={420}
              className="image-section"
              priority
            />
          </div>
          <div
            className="flex-1 flex flex-col items-start z-10 w-full"
            data-aos="fade-left"
            data-aos-duration="800"
          >
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
            <div className="glass-card-light p-6 mb-5 w-full">
              <p className="text-[15px] md:text-base text-[#22223b] text-justify font-poppins leading-relaxed m-0">
                {t.description}
              </p>
            </div>

            <Link href="/features-for-teachers">
              <button
                onClick={() => {
                  sessionStorage.setItem(
                    "scroll-position",
                    String(window.scrollY)
                  );
                  router.push("/features-for-teachers");
                }}
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="700"
                className="mt-2 px-6 py-2 rounded-full bg-[rgb(255,255,255)] text-[#22223b] border border-[#fff] hover:bg-white font-poppins text-[15px] shadow transition"
                style={{ fontWeight: 500 }}
              >
                {t.cta}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesForTeachers;
