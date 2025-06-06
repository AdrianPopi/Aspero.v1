import { Header } from "@/sections/Header";
import { useLanguage } from "../src/context/LanguageContext";
import { useEffect } from "react";
import Image from "next/image";
import Footer from "@/sections/Footer";
import BackToTop from "../src/components/BackToTop";

const FeaturesForStudentsPage = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Texte pentru hero panel
  const sectionTitle =
    lang === "ro" ? "Funcționalități" : "Features for Students";
  const cardTitle = lang === "ro" ? "Pentru Studenți" : "For Students";

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* ---------------- HERO PANEL ---------------- */}
      <section
        id="featuresforstudents"
        className="
          scroll-mt-24
          pt-32 md:pt-40         /* spaţiu la început, după header */
          w-full bg-hero5        
          flex flex-col md:flex-row
          items-center justify-between
          py-8 px-4 md:px-24     /* spaţii sus/jos şi laterale */
          gap-10 md:gap-20
        "
      >
        <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          {/* --- Textul din stânga (titlu + subtitlu + paragraf) --- */}
          <div
            className="flex-1 flex flex-col items-start z-10 w-full max-w-xl"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="flex items-center mb-3 gap-2">
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight font-poppins">
                {sectionTitle}
              </h2>
              <Image
                src="/images/student-icon-white.png"
                alt="student icon"
                width={32}
                height={32}
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </div>

            <div className="flex items-center mb-1 gap-2">
              <span className="text-xl md:text-xl font-bold text-[#5566b8] font-poppins">
                {cardTitle}
              </span>
            </div>

            {/* spațiu între subtitlu și paragraful hero */}
            <div style={{ height: 10 }} />

            <p className="text-[15px] md:text-base text-white mb-5 text-justify font-poppins">
              {lang === "ro" ? (
                <>
                  Aspero le oferă studenților un mediu educațional flexibil,
                  modern și captivant. Cu ajutorul exercițiilor generate
                  procedural și a feedback-ului instantaneu, poți exersa
                  nelimitat până când stăpânești fiecare concept.
                  <br />
                  În plus, colaborarea pe grupuri te ajută să înveţi împreună cu
                  colegii, iar inteligența artificială îți oferă sfaturi
                  personalizate pe soluțiile tale.
                  <br />
                  Monitorizează-ți progresul cu statistici detaliate și
                  crește-ți rezultatele în ritmul tău!
                </>
              ) : (
                <>
                  Aspero offers students a flexible, modern and engaging
                  educational environment. With procedurally generated exercises
                  and instant feedback, you can practice endlessly until you
                  master every concept.
                  <br />
                  Additionally, collaborative group solving helps you learn with
                  peers, and AI-driven hints give personalized advice on your
                  solutions.
                  <br />
                  Track your progress through detailed statistics and improve at
                  your own pace!
                </>
              )}
            </p>
          </div>

          {/* --- Imaginea din dreapta (student la laptop) --- */}
          <div
            className="flex-1 flex items-center justify-center w-full md:h-[380px] mt-6 md:mt-12"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <Image
              src="/images/student.png"
              alt="student at laptop"
              width={600}
              height={380}
              className="image-section"
              priority
            />
          </div>
        </div>
      </section>

      {/* -------------- SECȚIUNI DETALIATE -------------- */}
      <main className="bg-hero5 bg-cover bg-center text-white pt-8 md:pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-16 space-y-20">
          {/* ---------------- 1) Exerciții generate procedural ---------------- */}
          <section className="space-y-6">
            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-4 text-center">
              {lang === "ro"
                ? "Exerciții generate procedural".toUpperCase()
                : "Procedurally generated exercises".toUpperCase()}
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Imaginea secțiunii */}
              <div
                className="md:w-1/2"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <Image
                  src="/images/student-exercises.png"
                  alt={
                    lang === "ro"
                      ? "EXERCIȚII GENERATE PROCEDURAL".toUpperCase()
                      : "PROCEDURALLY GENERATED EXERCISES".toUpperCase()
                  }
                  width={600}
                  height={350}
                  className="image-section"
                  priority
                />
              </div>

              {/* Textul descrierii */}
              <div
                className="md:w-1/2"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="150"
              >
                <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify">
                  {lang === "ro" ? (
                    <>
                      Una dintre funcțiile platformei noastre este selecția
                      virtual nelimitată de exerciții generate procedural în
                      cadrul diverselor cursuri: astfel este posibil pentru un
                      student să continue să se pregătească pentru examene
                      folosindu-se exerciții riguros pregătite în afara celor
                      produse de către profesori, extinzându-și astfel gama de
                      opțiuni.
                    </>
                  ) : (
                    <>
                      One of the features of our platform is the virtually
                      unlimited selection of procedurally generated exercises
                      within the various courses: this makes it possible for a
                      student to continue preparing for exams using rigorously
                      prepared exercises outside those produced by teachers,
                      thus expanding their range of options.
                    </>
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* ---------------- 2) Feedback instantaneu (card) ---------------- */}
          <section
            className="p-8 border border-blue-500 rounded-2xl"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h3 className="font-poppins font-bold text-xl md:text-3xl mb-4 text-center">
              {lang === "ro"
                ? "FEEDBACK INSTANTANEU".toUpperCase()
                : "INSTANT FEEDBACK".toUpperCase()}
            </h3>
            <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed whitespace-pre-line text-justify">
              {lang === "ro"
                ? `Platforma poate da un feedback instantaneu problemelor rezolvate, subliniind atât elementele corecte, cât și pe cele eronate ale rezolvării, propunând de la caz la caz și soluții de rezolvare.`
                : `The platform can provide instant feedback on solved problems, highlighting both correct and incorrect elements of the solution, proposing case-by-case and comprehensive answers.`}
            </p>
          </section>

          {/* ---------------- 3) Acces colaborativ la exerciții ---------------- */}
          <section className="space-y-6">
            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-4 text-center">
              {lang === "ro"
                ? "Acces colaborativ la exerciții".toUpperCase()
                : "Collaborative access to exercises".toUpperCase()}
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Imaginea secțiunii */}
              <div
                className="md:w-1/2"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <Image
                  src="/images/student-collaboration.png"
                  alt={
                    lang === "ro"
                      ? "Acces colaborativ la exerciții".toUpperCase()
                      : "Collaborative access to exercises".toUpperCase()
                  }
                  width={600}
                  height={350}
                  className="image-section"
                  priority
                />
              </div>

              {/* Textul descrierii */}
              <div
                className="md:w-1/2 flex flex-col items-center"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="150"
              >
                {/* Iconiță de colaborare */}
                <Image
                  src="/images/collaborative-icon.png"
                  alt="Collaborative icon"
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-4"
                  priority
                />
                <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify">
                  {lang === "ro"
                    ? `Dincolo de accesul la materiale multimedia și la exerciții, platforma noastră oferă și posibilitatea de a rezolva exerciții în comun prin funcțiile de chat și rezolvare cooperativă: astfel, dincolo de componenta de învățare autonomă, platforma încurajează și învățatul cooperativ.`
                    : `In addition to access to multimedia materials and exercises, our platform also offers the possibility to solve exercises together through cooperative solving features as well as a chat: thus, beyond the autonomous learning component, the platform also encourages cooperative learning.`}
                </p>
              </div>
            </div>
          </section>

          {/* ---------------- 4) Analiză a soluțiilor cu inteligență artificială ---------------- */}
          <section className="space-y-6">
            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-4 text-center">
              {lang === "ro"
                ? "Analiză a soluțiilor cu inteligență artificială".toUpperCase()
                : "Analysing solutions with artificial intelligence".toUpperCase()}
            </h3>
            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
              {/* Textul descrierii + iconiță AI */}
              <div
                className="md:w-1/2 flex flex-col items-center"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <Image
                  src="/images/ai-icon.png"
                  alt="AI icon"
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-4"
                  priority
                />
                <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify">
                  {lang === "ro"
                    ? `De asemenea, la cerere, platforma poate integra și sugestii compuse de inteligență artificială în analiza răspunsurilor: astfel un feedback exhaustiv poate fi accesat cu un singur click oricând de către student, care include nu doar răspunsul corect, ci și soluții de rezolvare, sugestii pentru îmbunătățirea textelor sau direcții pentru studiu aprofundat.`
                    : `Also, upon request, the platform can also integrate AI-created suggestions in the analysis of answers: an exhaustive feedback system can thus be accessed with only a click at any time by the student that includes not only the correct answer, but also means to resolve a question, suggestions for improving texts or directions for further study.`}
                </p>
              </div>

              {/* Imaginea secțiunii */}
              <div
                className="md:w-1/2"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="150"
              >
                <Image
                  src="/images/student-ai.png"
                  alt={lang === "ro" ? "Analiză AI" : "AI analysis"}
                  width={600}
                  height={350}
                  className="image-section"
                  priority
                />
              </div>
            </div>
          </section>

          {/* ---------------- 5) Statistici de verificare a progresului ---------------- */}
          <section className="space-y-6">
            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-4 text-center">
              {lang === "ro"
                ? "Statistici de verificare a progresului".toUpperCase()
                : "Progressing Statistics".toUpperCase()}
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Imaginea secțiunii */}
              <div
                className="md:w-1/2"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <Image
                  src="/images/student-stats.png"
                  alt={
                    lang === "ro" ? "Statistici progres" : "Progress statistics"
                  }
                  width={600}
                  height={350}
                  className="image-section"
                  priority
                />
              </div>

              {/* Textul descrierii + iconiță stats */}
              <div
                className="md:w-1/2 flex flex-col items-center"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="150"
              >
                <Image
                  src="/images/stats-icon.png"
                  alt="Statistics icon"
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-4"
                  priority
                />
                <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify">
                  {lang === "ro"
                    ? `Studenții pot vedea statistici detaliate despre studiile proprii, atât de la curs la curs, cât și global; de la cursurile la care au avut cel mai mare succes, la detalii minore ce trebuie amănunțite, aceste statistici îmbunătățesc calitatea procesului de învățare prin direcționarea eforturilor studenților.`
                    : `Students can see detailed statistics about their own studies, both course-by-course and comprehensive; from the courses in which they were most successful to minor details that require expanded focus, these statistics improve the quality of the learning process by targeting students' efforts.`}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <BackToTop />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default FeaturesForStudentsPage;
