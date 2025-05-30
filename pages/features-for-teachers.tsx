// pages/features-teachers.tsx

import { Header } from "@/sections/Header";
import { useLanguage } from "../src/context/LanguageContext";
import { useEffect } from "react";
import Image from "next/image";

// Definim feature-urile pentru profesori în română și engleză.
// La ultima secțiune, folosim cheie specială "__CUSTOM__" pentru a afișa conținutul manual,
// inclusiv iconița "teachers-icon-last.png".
const teacherFeatures = {
  ro: [
    {
      title: "EXERCIȚII ȘI MATERIALE DE CURS",
      description: `
 Formate variate de exerciții

 Profesorii pot genera în cadrul platformei exerciții în diverse formate, permițând astfel o evaluare holistică a studenților:
 ● Grile cu răspuns unic sau multiplu
 ● Răspunsuri text
 ● Exerciții de matematică
 ● Exerciții de programare
 ● Exerciții cu selecții de obiecte

 Generare procedurală de exerciții

 În baza unui model de exercițiu, sute de alte exerciții pot fi generate automat prin ajustarea parametrilor acestora: acest lucru permite studenților să-și consolideze cunoștințele asupra unui concept fără a fi nevoiți să repete același exercițiu cu aceleași valori și degrevează din sarcina profesorilor de a face manual asemenea exerciții, permițându-le să poată dedica mai mult timp predării și contactului cu studenții.

 Lecturi și exerciții cu materiale multimedia

 Cursurile pot conține diverse tipuri de fișiere care pot fi accesate de studenți în cadrul lecturilor: de la formate clasice precum fișiere text sau slide-uri de prezentare la videoclipuri sau tipuri de fișiere mai nișate, permițând astfel profesorilor să aibă diverse abordări de predare.
     `,
      img: "/images/teachers2.png",
    },
    {
      // Înlocuim secțiunea normală cu un card. Nu mai afișăm imaginea aici.
      title: "EVALUAREA CURSURILOR",
      description: `
Statistici despre implicarea studenților
Creatorii de cursuri au acces la statistici exhaustive despre interacțiunile cursanților cu exercițiile și lecturile dintr-un curs: statisticile includ, printre altele, detalii despre vizualizările lecturilor, gradul de rezolvare al exercițiilor și durata rezolvării testelor, oferindu-i astfel profesorului o largă perspectivă asupra modului în care studenții interacționează cu materialele de curs și cât de ușor le pot ei asimila.

Analiză a statisticilor pentru profesori
În baza statisticilor unei grupe, platforma poate evidenția părțile la care studenții excelează sau la care mai au de lucrat, oferind sugestii punctuale profesorului în ceea ce privește adaptarea cursului la nevoile dinamice ale studenților.
`,
      // Eliminăm câmpul img pentru această secțiune, nu vrem imagine.
      img: "",
    },
    {
      // Secțiunea "GESTIONAREA CURSURILOR" va fi tratată manual mai jos:
      title: "__CUSTOM__",
      description: "__CUSTOM__",
      img: "/images/teachers-management.png",
    },
  ],
  en: [
    {
      title: "EXERCISES AND COURSE MATERIALS",
      description: `
Multiple exercise formats

Teachers can generate exercises in various formats within the platform, enabling a holistic assessment of students:
● Single or multiple choice quizzes
● Open text responses
● Math problems
● Programming exercises
● Object selection tasks

Procedural exercise generation

Starting from an exercise template, hundreds of other variants can be automatically generated by adjusting parameters. This allows students to reinforce their understanding of a concept without repeating the same values, and relieves teachers from manually creating every exercise—freeing up more time for teaching and interaction with students.

Readings and exercises with multimedia materials

Courses can include a variety of files accessible to students during lectures: from classic formats like text documents or presentation slides, to videos and more niche file types. This flexibility allows teachers to approach instruction in diverse and creative ways.
`,

      img: "/images/teachers2.png",
    },
    {
      title: "COURSE EVALUATION",
      description: `
Student engagement statistics
Course developers have access to comprehensive statistics about learners' interactions with the exercises and lectures in a course: the statistics include, among other things, details about the number of views a lecture might have, the degree of completion of the exercises and how quizzes last, thus giving the teacher a broad insight into how students interact with the course materials and how easily they can assimilate them.

Analyzing statistics for teachers
Based on a group's stats, the platform can highlight where students are excelling or where they still have work to do, providing timely suggestions to the teacher on how to adapt the course to the dynamic needs of students.
`,
      img: "",
    },
    {
      title: "__CUSTOM__",
      description: "__CUSTOM__",
      img: "/images/teachers-management.png",
    },
  ],
};

const FeaturesForTeachersPage = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const { lang } = useLanguage();
  const items = teacherFeatures[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Texte pentru hero panel:
  const sectionTitle =
    lang === "ro" ? "Funcționalități" : "Features for Teachers";
  const cardTitle = lang === "ro" ? "Pentru Profesori" : "For Teachers";

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* ---------------- HERO PANEL ---------------- */}
      <section
        id="featuresforteachers"
        className="
          scroll-mt-24
          pt-32 md:pt-40    /* spațiu la început, după header */
          w-full bg-hero5
          flex flex-col md:flex-row
          items-center justify-between
          py-8 px-4 md:px-24 /* spații sus/jos și laterale */
          gap-10 md:gap-20
        "
      >
        {/* --- Textul din stânga (titlu + subtitlu + paragraf) --- */}
        <div className="flex-1 flex flex-col items-start z-10 w-full max-w-xl">
          <div className="flex items-center mb-3 gap-2">
            <h2 className="text-2xl md:text-4xl font-bold text-white font-poppins">
              {sectionTitle}
            </h2>
            <Image
              src="/images/profesor-icon-white.png"
              alt="teacher icon"
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
                Aspero este gândit pentru a simplifica procesul educațional fără
                a-i diminua valoarea umană.
                <br />
                Profesorii pot crea cu ușurință exerciții în formate diverse: de
                la grile și răspunsuri text, la matematică, programare sau
                selecții interactive și pot genera automat serii întregi de
                variante pentru fiecare temă.
                <br />
                Platforma oferă <strong>feedback automatizat</strong>, analize
                detaliate despre progresul studenților și o interfață
                centralizată de gestionare a cursurilor.
                <br />
                Astfel, profesorii pot investi mai mult timp în predare
                autentică, mentorat și inovație pedagogică.
              </>
            ) : (
              <>
                Aspero is designed to simplify the educational process without
                diminishing its human value.
                <br />
                Teachers can easily create exercises in diverse formats: from
                multiple choice and text answers, to math, programming, or
                interactive selections—and can automatically generate entire
                series of variants for each assignment.
                <br />
                The platform provides <strong>automated feedback</strong>,
                detailed analytics on student progress, and a centralized course
                management interface.
                <br />
                This way, teachers can invest more time in authentic teaching,
                mentoring, and pedagogical innovation.
              </>
            )}
          </p>
        </div>

        {/* --- Imaginea din dreapta (profesor la laptop) --- */}
        <div className="flex-1 flex items-center justify-center w-full md:h-[380px] mt-6 md:mt-12">
          <Image
            src="/images/profesor.png"
            alt="teacher at laptop"
            width={600}
            height={380}
            className="image-section"
            priority
          />
        </div>
      </section>

      {/* -------------- SECȚIUNI DETALIATE -------------- */}
      <main className="bg-hero5 bg-cover bg-center text-white pt-8 md:pt-16 pb-16">
        <div className="max-w-8xl mx-auto px-4 md:px-24 space-y-20">
          {items.map((f, i) => (
            <section key={i} className="space-y-6">
              {/* ... Pentru secțiunile normale (Exerciții, Gestionare), lăsăm <h3> ca înainte ... */}
              {!(
                f.title === "EVALUAREA CURSURILOR" ||
                f.title === "COURSE EVALUATION"
              ) && (
                <h3 className="font-poppins font-bold text-xl md:text-2xl mb-4 text-center">
                  {f.title !== "__CUSTOM__"
                    ? f.title
                    : lang === "ro"
                    ? "GESTIONAREA CURSURILOR"
                    : "COURSE MANAGEMENT"}
                </h3>
              )}

              <div className="flex flex-col md:flex-row items-center gap-10">
                {/* --- Coloană imagine (nutriție doar pentru secțiunile care au img) --- */}
                {!(
                  f.title === "EVALUAREA CURSURILOR" ||
                  f.title === "COURSE EVALUATION"
                ) && (
                  <div className="md:w-1/2">
                    <Image
                      src={f.img}
                      alt={
                        f.title !== "__CUSTOM__"
                          ? f.title
                          : lang === "ro"
                          ? "GESTIONAREA CURSURILOR"
                          : "COURSE MANAGEMENT"
                      }
                      width={600}
                      height={350}
                      className="image-section"
                      priority
                    />
                  </div>
                )}

                {/* --- Coloană text --- */}
                <div
                  className={`${
                    // Dacă e secțiunea „Evaluarea cursurilor”, extindem textul pe toată lățimea
                    f.title === "EVALUAREA CURSURILOR" ||
                    f.title === "COURSE EVALUATION"
                      ? "w-full"
                      : "md:w-1/2"
                  }`}
                >
                  {f.title === "EVALUAREA CURSURILOR" ||
                  f.title === "COURSE EVALUATION" ? (
                    // --- Card special pentru „Evaluarea cursurilor” ---
                    <section className="p-8 border border-blue-500 rounded-2xl">
                      <div className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify">
                        {lang === "ro" ? (
                          <>
                            {/* Titlul mutat în interiorul cardului, cu aceeași clasă de dimensiune */}
                            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-6 text-center">
                              EVALUAREA CURSURILOR
                            </h3>

                            {/* Subtitlul 1: Statistici despre implicarea studenților */}
                            <strong className="block mb-2">
                              Statistici despre implicarea studenților
                            </strong>
                            <p className="mb-6">
                              Creatorii de cursuri au acces la statistici
                              exhaustive despre interacțiunile cursanților cu
                              exercițiile și lecturile dintr-un curs:
                              statisticile includ, printre altele, detalii
                              despre vizualizările lecturilor, gradul de
                              rezolvare al exercițiilor și durata rezolvării
                              testelor, oferindu-i astfel profesorului o largă
                              perspectivă asupra modului în care studenții
                              interacționează cu materialele de curs și cât de
                              ușor le pot ei asimila.
                            </p>

                            {/* Subtitlul 2: Analiză a statisticilor pentru profesori */}
                            <strong className="block mb-2">
                              Analiză a statisticilor pentru profesori
                            </strong>
                            <p>
                              În baza statisticilor unei grupe, platforma poate
                              evidenția părțile la care studenții excelează sau
                              la care mai au de lucrat, oferind sugestii
                              punctuale profesorului în ceea ce privește
                              adaptarea cursului la nevoile dinamice ale
                              studenților.
                            </p>
                          </>
                        ) : (
                          <>
                            {/* Titlul mutat în interiorul cardului, cu aceeași clasă de dimensiune */}
                            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-6 text-center">
                              COURSE EVALUATION
                            </h3>

                            {/* Subtitlul 1: Student engagement statistics */}
                            <strong className="block mb-2">
                              Student engagement statistics
                            </strong>
                            <p className="mb-6">
                              Course developers have access to comprehensive
                              statistics about learners&apos; interactions with
                              the exercises and lectures in a course: the
                              statistics include, among other things, details
                              about the number of views a lecture might have,
                              the degree of completion of the exercises and how
                              quizzes last, thus giving the teacher a broad
                              insight into how students interact with the course
                              materials and how easily they can assimilate them.
                            </p>

                            {/* Subtitlul 2: Analyzing statistics for teachers */}
                            <strong className="block mb-2">
                              Analyzing statistics for teachers
                            </strong>
                            <p>
                              Based on a group&apos;s stats, the platform can
                              highlight where students are excelling or where
                              they still have work to do, providing timely
                              suggestions to the teacher on how to adapt the
                              course to the dynamic needs of students.
                            </p>
                          </>
                        )}
                      </div>
                    </section>
                  ) : f.description === "__CUSTOM__" ? (
                    // --- Secțiunea personalizată „Gestionarea cursurilor” (rămasă neschimbată) ---
                    lang === "ro" ? (
                      <div className="text-xs md:text-sm leading-relaxed text-justify font-poppins">
                        <div className="flex justify-center mb-4">
                          <Image
                            src="/images/teachers-icon-last.png"
                            alt="icon gestionare"
                            width={64}
                            height={64}
                            className="w-12 h-12 md:w-14 md:h-14"
                          />
                        </div>
                        <strong className="block mb-2">
                          Funcție de moderare a discuțiilor
                        </strong>
                        <p className="mb-4">
                          Prin intermediul platformei profesorii pot propune
                          teme de discuție sau subiecte de lucru cursanților pe
                          care aceștia să le poată urmări în mod autonom, putând
                          fi observați totuși de către profesori.
                        </p>
                        <strong className="block mb-2">
                          Gestiune centralizată a tuturor cursurilor
                        </strong>
                        <p className="mb-6">
                          Profesorii care creează mai multe cursuri le pot
                          gestiona ușor într-o interfață centralizată care le
                          permite să răspundă studenților din diferite cursuri
                          sau să implementeze modificări rapid și eficient.
                        </p>
                        <strong className="block mb-2">
                          Corecție asistată de AI
                        </strong>
                        <p>
                          Profesorii pot alege să activeze corecția automată cu
                          AI pe exerciții, astfel încât să primească feedback
                          instant și să se concentreze pe partea creativă sau pe
                          problemele cu adevărat complexe.
                        </p>
                      </div>
                    ) : (
                      <div className="text-xs md:text-sm leading-relaxed text-justify font-poppins">
                        <div className="flex justify-center mb-4">
                          <Image
                            src="/images/teachers-icon-last.png"
                            alt="icon management"
                            width={64}
                            height={64}
                            className="w-12 h-12 md:w-14 md:h-14"
                          />
                        </div>
                        <strong className="block mb-2">
                          Discussion moderation function
                        </strong>
                        <p className="mb-4">
                          Through the platform, teachers can propose topics for
                          discussion or subjects for students to follow
                          autonomously, while still being able to be observed by
                          the teachers.
                        </p>
                        <strong className="block mb-2">
                          Centralized management of all a teacher&apos;s courses
                        </strong>
                        <p className="mb-6">
                          Teachers who create multiple courses can easily manage
                          them in a centralized interface that allows them to
                          respond to students in different courses or implement
                          course changes quickly and easily.
                        </p>
                        <strong className="block mb-2">
                          Optional AI-assisted grading
                        </strong>
                        <p>
                          Teachers can decide, on a case-by-case basis, to
                          delegate the platform&apos;s AI to automatically
                          generate feedback on one-off exercises, allowing
                          course creators to focus on more complex or creative
                          tasks.
                        </p>
                      </div>
                    )
                  ) : (
                    // --- Pentru celelalte secțiuni (Exerciții etc.) afișăm doar descrierea normală ---
                    <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify whitespace-pre-line">
                      {f.description}
                    </p>

                    // // …în interiorul map-ului, pentru secțiunile care NU sunt "__CUSTOM__" și NU sunt „EVALUAREA CURSURILOR”:
                    // <div className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify">
                    //   {/*
                    //     Despărțim textul pe linii și le procesăm una câte una. Dacă linia conține exact
                    //     unul dintre cele trei subtitluri, o afișăm cu <strong>, altfel afișăm conținutul normal
                    //     (cu păstrarea spațiilor).
                    //   */}
                    //   {f.description
                    //     .split("\n")
                    //     .map((line, idx) => {
                    //       const trimmed = line.trim();

                    //       // Verificăm dacă linia corespunde unuia dintre subtitluri:
                    //       if (
                    //         trimmed === "Formate variate de exerciții" ||
                    //         trimmed === "Generare procedurală de exerciții" ||
                    //         trimmed === "Lecturi și exerciții cu materiale multimedia"
                    //       ) {
                    //         return (
                    //           <p key={idx} className="mb-2">
                    //             <strong>{trimmed}</strong>
                    //           </p>
                    //         );
                    //       }

                    //       // Dacă linia este goală, inserăm un break
                    //       if (trimmed === "") {
                    //         return <br key={idx} />;
                    //       }

                    //       // Orice alt text („paragraf” sau bullet) îl afișăm normal
                    //       return (
                    //         <p key={idx} className="mb-2">
                    //           {line.trimStart()}
                    //         </p>
                    //       );
                    //     })}
                    // </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default FeaturesForTeachersPage;
