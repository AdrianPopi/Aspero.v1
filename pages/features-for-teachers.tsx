// pages/features-teachers.tsx

import { Header } from "@/sections/Header";
import { useLanguage } from "../src/context/LanguageContext";
import { useEffect } from "react";
import Image from "next/image";

const teacherFeatures = {
  ro: [
    {
      title: "EXERCIȚII ȘI MATERIALE DE CURS",
      description: `Formate variate de exerciții
Profesorii pot genera în cadrul platformei exerciții în diverse formate, permițând astfel o evaluare holistică a studenților:
● Grile cu răspuns unic sau multiplu
● Răspunsuri text
● Exerciții de matematică
● Exerciții de programare
● Exerciții cu selecții de obiecte
Generare procedurală de exerciții
În baza unui model de exercițiu, sute de alte exerciții pot fi generate automat prin ajustarea parametrilor acestora: acest lucru permite studenților să-și consolideze cunoștințele asupra unui concept fără a fi nevoiți să repete același exercițiu cu aceleași valori și degrevează din sarcina profesorilor de a face manual asemenea exerciții, permițându-le să poată dedica mai mult timp predării și contactului cu studenții.
Lecturi și exerciții cu materiale multimedia
Cursurile pot conține diverse tipuri de fișiere care pot fi accesate de studenți în cadrul lecturilor: de la formate clasice precum fișiere text sau slide-uri de prezentare la videoclipuri sau tipuri de fișiere mai nișate, permițând astfel profesorilor să aibă diverse abordări de predare.`,
      img: "/images/teachers2.png",
    },
    {
      title: "EVALUAREA CURSURILOR",
      description: `Statistici despre implicarea studenților
Creatorii de cursuri au acces la statistici exhaustive despre interacțiunile cursanților cu exercițiile și lecturile dintr-un curs: statisticile includ, printre altele, detalii despre vizualizările lecturilor, gradul de rezolvare al exercițiilor și durata rezolvării testelor, oferindu-i astfel profesorului o largă perspectivă asupra modului în care studenții interacționează cu materialele de curs și cât de ușor le pot ei asimila.
Analiză a statisticilor pentru profesori
În baza statisticilor unei grupe, platforma poate evidenția părțile la care studenții excelează sau la care mai au de lucrat, oferind sugestii punctuale profesorului în ceea ce privește adaptarea cursului la nevoile dinamice ale studenților.`,
      img: "/images/teachers-evaluation.png",
    },
    {
      title: "GESTIONAREA CURSURILOR",
      description: `Funcție de moderare a discuțiilor
Prin intermediul platformei profesorii pot propune teme de discuție sau subiecte de lucru cursanților pe care aceștia să le poată urmări în mod autonom, putând fi observați totuși de către profesori.
Gestiune centralizată a tuturor cursurilor
Profesorii care creează mai multe cursuri le pot gestiona ușor într-o interfață centralizată care le permite să răspundă studenților din diferite cursuri sau să implementeze modificări rapid și eficient.
Corecție asistată de AI
Profesorii pot alege să activeze corecția automată cu AI pe exerciții, astfel încât să primească feedback instant și să se concentreze pe partea creativă sau pe problemele cu adevărat complexe.`,
      img: "/images/teachers-management.png",
    },
  ],
  en: [
    {
      title: "EXERCISES AND COURSE MATERIALS",
      description: `Various exercise formats
Teachers can generate exercises in various formats within the platform, allowing for a holistic assessment of students:
● Single and multiple choice quizzes
● Text-based answers
● Math problems
● Programming tasks
● Object-selection exercises
Procedural generation
Based on an exercise template, the system can spin up hundreds of variants by tweaking parameters—so students get endless practice and teachers save manual effort.
Readings & multimedia
Courses can embed text, slides, video and other media so instructors can deliver rich, multimodal lessons.`,
      img: "/images/teachers2.png",
    },
    {
      title: "COURSE EVALUATION",
      description: `Student engagement stats
Course creators get deep analytics on how learners interact with lectures and exercises—views, completion rates, time-on-task, etc.—to see how well content is landing.
Teacher-focused insights
Group-level reporting highlights strengths and gaps, with actionable suggestions for adapting your course to evolving learner needs.`,
      img: "/images/teachers-evaluation.png",
    },
    {
      title: "COURSE MANAGEMENT",
      description: `Discussion moderation
Instructors can post prompts or open discussion threads for learners to engage asynchronously—while still retaining oversight.
Centralized dashboard
Manage all your courses from one interface: reply to students across courses, update content, or bulk-apply settings in seconds.
AI-assisted grading
Optionally let our AI suggest feedback on one-off exercises, freeing you to focus on higher-order tasks or more nuanced student support.`,
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

  const sectionTitle =
    lang === "ro" ? "Funcționalități" : "Features for Teachers";
  const cardTitle = lang === "ro" ? "Pentru Profesori" : "For Teachers";

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero panel */}
      <section
        id="featuresforteachers"
        className="scroll-mt-24 pt-32 md:pt-40 w-full bg-hero5 flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-24 gap-10 md:gap-20"
      >
        {/* Left: text */}
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
            <span className="text-xl md:text-3xl font-bold text-white font-poppins">
              {cardTitle}
            </span>
          </div>
          <div style={{ height: 10 }} />
          <p className="text-[15px] md:text-base text-white mb-5 text-justify font-poppins">
            {lang === "ro"
              ? `Aspero este gândit pentru a simplifica procesul educațional “all-in-one” pentru profesori: generați exerciții procedurale, publicați materiale multimedia, urmăriți statisticile studenților și gestionați toate cursurile dintr-o singură platformă.`
              : `Aspero is designed to streamline every step of teaching: procedurally generate exercises, publish multimedia materials, track student analytics, and manage all your courses from one unified platform.`}
          </p>
        </div>

        {/* Right: illustration */}
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

      {/* Detailed sections */}
      <main className="bg-hero5 bg-cover bg-center text-white pt-8 md:pt-16 pb-16">
        <div className="max-w-8xl mx-auto px-4 md:px-24 space-y-20">
          {items.map((f, i) => (
            <section key={i} className="space-y-6">
              <h3 className="font-poppins font-bold text-xl md:text-2xl mb-4 text-center">
                {f.title}
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                  <Image
                    src={f.img}
                    alt={f.title}
                    width={600}
                    height={350}
                    className="image-section"
                    priority
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify whitespace-pre-line">
                    {f.description}
                  </p>
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
