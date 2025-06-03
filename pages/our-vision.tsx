import { Header } from "@/sections/Header";
import { useLanguage } from "../src/context/LanguageContext";
import { useEffect } from "react";
import Image from "next/image";
import Footer from "@/sections/Footer";
import BackToTop from "../src/components/BackToTop";

type Description = string | string[];

const vision: Record<
  "ro" | "en",
  { title: string; description: Description }[]
> = {
  ro: [
    {
      title: "",
      description: `Noi suntem de ferma părere că nu trebuie niciodată uitat faptul că, la nivel fundamental, educația este un proces holistic, proces care nu poate fi limitat la sala de curs sau la un unic sistem de predare. De asemenea, noi mai considerăm că, deși actualmente viciat de lipsa digitalizării, ineficienta gestiune a fondurilor și o generală frică de schimbare, sistemul educațional din România are totuși și niște părți bune care-i oferă premisele de a se putea îmbunătăți substanțial pe termen scurt, mediu și lung.`,
    },
    {
      title: "",
      // explicit newline after “internaționale.”
      description: `Suntem ferm convinși că schimbarea în domeniul educațional nu poate avea loc fără o strânsă colaborare între societatea civilă, mediul privat și stat - această schimbare trebuie să fie asumată de toți cei care sunt implicați în procesul educațional în toate etapele acestuia: studenți, elevi, profesori, părinți, administratori, decidenți politici, sectorul privat și toți cei care profită din buna educație a cetățenilor unei țări. Numai prin strînsa colaborare a tuturor acestor actori ne putem asigura că educația este ușor de înfăptuit, se conformează nevoilor în continuă schimbare ale pieței muncii și poate ajunge la înalte standarde internaționale.\n\nAcestea fiind spuse, am decis că cel mai bun mod prin care putem vedea această schimbare în societatea care ne-a format ar fi să o inițiem chiar noi - prin construirea unei platforme digitale menite să reactualizeze educația universitară de la noi care se folosește de tehnici educaționale care au fost demonstrate cu succes în cele mai bune universități ale continentului.`,
    },
    {
      title: "",
      description: `Numai astfel credem că putem aprinde scânteia care poate duce la rejuvenarea educației din România, reinstaurarea încrederii societății românești în educație și aducerea ei la un nivel de unde poate intra în competiție cu țări de renume la acest capitol - sperăm că și voi veți lua parte la această schimbare!`,
    },
    {
      title: "",
      description: [
        `Platforma noastră caută nu numai să fie un mediu de accesare a lecturilor sau un repertoriu de exerciții pe diverse subiecte, ci și să aducă mai ferm studentul în centrul actului educațional prin creșterea autonomiei sale fără a submina implicarea profesorului și să ofere profesorilor mai mult timp tocmai pentru rolurile lor esențiale: acelea de a preda și a construi legături pentru studenții lor pentru a forma cetățenii informați ai României de mâine.`,
        `Dorim de asemenea ca platforma noastră să stea la baza unui forum de dezbatere în domeniul educației - să permitem o discuție mai liberă și informală între studenți, profesori și administratori care să acționeze în sinergie cu diversele consilii studențești ale facultăților din România care să ducă la instituționalizarea ideii atât de importante de consiliere și dezbatere continuă pentru a adapta educația la un context aflat în perpetuă schimbare.`,
      ],
    },
  ],
  en: [
    {
      title: "",
      description: `We firmly believe that, at its most fundamental level, education is a holistic process, which cannot be confined to the classroom or to a single delivery system. We also believe that, although currently marred by a lack of digitalization, inefficient fund management and a general fear of change, the Romanian education system still does have several great traits which would allow it to develop in a favourable direction both in a short-term and a long-term timeframe.`,
    },
    {
      title: "",
      description: `We also believe that change in education cannot take place without close cooperation between civil society, the private sector and the state. This change must be embraced by all those who are involved in the educational process at all stages: students, pupils, teachers, parents, administrators, policy makers, the private sector and all those who benefit from a well-educated citizenship. Only with the close cooperation of all these actors can we ensure that education is easy to deliver, conforms to the changing needs of the market and can reach high international standards.\n\nThat being said, we decided that the best way we could get to see this change happen would be to bring it about ourselves - by building a digital platform designed to update our university education using educational techniques that have been successfully demonstrated across the continent's best universities.`,
    },
    {
      title: "",
      description: `This is the only way we believe we can ignite the spark that can lead to the rejuvenation of education in Romania, restoring Romanian society's confidence in education and bringing it to a level where it can compete with other countries of renown in this field - we hope that you will be part of this change!`,
    },
    {
      title: "",
      description: [
        `Our platform seeks not only to be a medium for accessing lectures or a repertoire of exercises on various subjects, but also to bring the student more firmly to the centre of the educational act by increasing their autonomy without undermining the teachers’ involvement.`,

        `We also want our platform to form the basis of a forum for debate in the field of education - to enable a freer and more informal discussion between students, teachers and administrators working in synergy with the various student councils of colleges in Romania, leading to institutionalizing the all-important idea of continuous advising and debate to adapt education to a constantly changing context.`,
      ],
    },
  ],
};

const OurVisionPage = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const { lang } = useLanguage();
  const text = vision[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="bg-hero5 bg-cover bg-center text-white pt-32 md:pt-40 pb-16">
        {/* unified container */}
        <div className="max-w-7xl mx-auto px-4 md:px-16 space-y-20">
          {/* 1) HERO */}
          <section className="flex flex-col lg:flex-row items-center gap-10">
            <div
              className="flex-1 text-center lg:text-left"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
                {lang === "ro" ? "Viziunea noastră" : "Our Vision"}
              </h1>
              <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify">
                {text[0].description}
              </p>
            </div>
            <div
              className="flex-1 flex justify-center"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <Image
                src="/images/vision.png"
                alt="Vision illustration"
                width={520}
                height={380}
                className="image-section"
                priority
              />
            </div>
          </section>

          {/* 2) Second card */}
          <section
            className="p-8 border border-blue-500 rounded-2xl"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed whitespace-pre-line text-justify">
              {text[1].description}
            </p>
          </section>

          {/* 3) Three-paragraph */}
          <section className="flex flex-col md:flex-row items-center gap-10">
            <div
              className="md:w-1/2"
              data-aos="fade-up-right"
              data-aos-duration="800"
            >
              <Image
                src="/images/vision2.png"
                alt="Group discussion"
                width={600}
                height={400}
                className="image-section"
              />
            </div>
            <div
              className="md:w-1/2 space-y-4"
              data-aos="fade-up-left"
              data-aos-delay="150"
              data-aos-duration="800"
            >
              {Array.isArray(text[3].description) ? (
                text[3].description.map((para, i) => (
                  <p
                    key={i}
                    className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify"
                  >
                    {para}
                  </p>
                ))
              ) : (
                <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify">
                  {text[3].description}
                </p>
              )}
            </div>
          </section>

          {/* 4) Bottom card + clipped bubble */}
          <div className="relative mt-16 overflow-hidden">
            {/* Card with translucent background, blur, and border */}
            <section
              className="relative z-10 rounded-2xl p-12 text-center"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="100"
              style={{
                backgroundColor: "rgba(64,65,84,0.2)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src="/images/icon-vision.png"
                  alt="Vision icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 md:w-14 md:h-14"
                  priority
                />
              </div>
              <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify">
                {text[2].description}
              </p>
            </section>

            {/* Bubble tucked under the card’s corner */}
            {/* <div className="absolute -bottom-8 -right-8 w-56 h-56 pointer-events-none z-0">
              <Image
                src="/images/bubble-contact-footer.png"
                alt="Bubble graphic"
                fill
                className="object-contain"
                priority
              />
            </div> */}
          </div>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default OurVisionPage;
