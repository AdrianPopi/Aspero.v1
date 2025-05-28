import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const detailedContent = {
  ro: `Features - pentru profesori: 
EXERCIȚII ȘI MATERIALE DE CURS
Formate variate de exerciții
Profesorii pot genera în cadrul platformei exerciții în diverse formate, permițând astfel o
evaluare holistică a studenților:
● Grile cu răspuns unic sau multiplu
● Răspunsuri text
● Exerciții de matematică
● Exerciții de programare
● Exerciții cu selecții de obiecte
Generare procedurală de exerciții
În baza unui model de exercițiu, sute de alte exerciții pot fi generate automat prin ajustarea
parametrilor acestora: acest lucru permite studenților să-și consolideze cunoștințele asupra
unui concept fără a fi nevoiți să repete același exercițiu cu aceleași valori și degrevează din
sarcina profesorilor de a face manual asemenea exerciții, permițându-le să poată dedica mai
mult timp predării și contactului cu studenții.
Lecturi și exerciții cu materiale multimedia
Cursurile pot conține diverse tipuri de fișiere care pot fi accesate de studenți în cadrul
lecturilor: de la formate clasice precum fișiere text sau slide-uri de prezentare la videoclipuri
sau tipuri de fișiere mai nișate, permițând astfel profesorilor să aibă diverse abordări de
predare.
EVALUAREA CURSURILOR
Statistici despre implicarea studenților
Creatorii de cursuri au acces la statistici exhaustive despre interacțiunile cursanților cu
exercițiile și lecturile dintr-un curs: statisticile includ, printre altele, detalii despre vizualizările
lecturilor, gradul de rezolvare al exercițiilor și durata rezolvării testelor, oferindu-i astfel
profesorului o largă perspectivă asupra modului în care studenții interacționează cu
materialele de curs și cât de ușor le pot ei asimila.
Analiză a statisticilor pentru profesori
În baza statisticilor unei grupe, platforma poate evidenția părțile la care studenții excelează
sau la care mai au de lucrat, oferind sugestii punctuale profesorului în ceea ce privește
adaptarea cursului la nevoile dinamice ale studenților.
GESTIONAREA CURSURILOR
Funcție de moderare a discuțiilor
Prin intermediul platformei profesorii pot propune teme de discuție sau lucru cursanților pe
care aceștia să le poată urmări în mod autonom, putând fi observați totuși de către profesori:
astfel, profesorii pot permite studenților să-și consolideze cunoștințele sau să-și completeze
proiectele cu diverse grade de implicare directă, de la caz la caz.
Gestiune centralizată a tuturor cursurilor unui profesor
Profesorii care crează mai multe cursuri le pot gestiona ușor într-o interfață centralizată care
le permite să răspundă studenților din diferite cursuri sau să implementeze schimbări în
cursuri rapid și ușor.
Corecție opțională cu inteligență artificială
Profesorii pot decide, de la caz la caz, să delege inteligența artificială a platformei să
genereze automat feedback-ul pentru studenți în cadrul unor exerciții punctuale,
permițându-le astfel creatorilor de curs să-și concentreze atenția asupra corectării și
generării de soluții pentru exerciții mai complexe sau de nișă.
`,
  en: `Features for Teachers
Various exercise formats
Teachers can generate exercises in various formats within the platform, allowing for a holistic
assessment of students:
● Single and multiple choice grids
● Text answers
● Math exercises
● Programming exercises
● Object selection exercises
Procedural generation of exercises
Based on the model of an exercise, hundreds of others can be generated automatically by
adjusting their parameters: this allows students to consolidate their knowledge of a concept
without having to repeat the same exercise with the same values and relieves teachers of
the burden of manually creating them, allowing educators to devote more time to teaching
and contact with students.
Readings and exercises with multimedia materials
Courses can contain various types of files that can be accessed by students during lectures:
from classic formats such as text files or presentation slides to videos or more niche file
types, thus enabling different teaching approaches.
Student engagement statistics
Course developers have access to comprehensive statistics about learners' interactions with
the exercises and lectures in a course: the statistics include, among other things, details
about the number of views a lecture might have, the degree of completion of the exercises
and how quizzes last, thus giving the teacher a broad insight into how students interact with
the course materials and how easily they can assimilate them.
Analyzing statistics for teachers
Based on a group's stats, the platform can highlight where students are excelling or where
they still have work to do, providing timely suggestions to the teacher on how to adapt the
course to the dynamic needs of students.
COURSE MANAGEMENT
Discussion moderation function
Through the platform, teachers can propose topics for discussion or subjects for students to
follow autonomously, while still being able to be observed by the teachers: in this way,
teachers can allow students to consolidate their knowledge or complete their projects with
varying degrees of direct involvement, on an individual basis.
Centralized management of all a teacher's courses
Teachers who create multiple courses can easily manage them in a centralized interface that
allows them to respond to students in different courses or implement course changes quickly
and easily.
Optional correction with artificial intelligence
Teachers can decide, on a case-by-case basis, to delegate the platform's artificial
intelligence to automatically generate feedback for students on one-off exercises, allowing
course creators to focus their attention on correcting and generating solutions for more
complex or niche exercises.

`,
};

const content = {
  ro: {
    cardTitle: "Pentru Profesori",
    subtitle: "Date clare. Decizii mai bune.",
    description:
      "Aspero simplifică procesul educațional cu instrumente moderne pentru profesori.",
    cta: "Citește mai mult",
  },
  en: {
    cardTitle: "For Teachers",
    subtitle: "Clear data. Better decisions.",
    description:
      "Aspero streamlines the educational process with modern tools for teachers.",
    cta: "Read more",
  },
};

export const FeaturesForTeachers = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const t = content[lang];

  return (
    <section className="w-full bg-[#ced6ff] px-0 py-0 relative overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-4 py-10 md:py-16 px-4 md:px-24">
        <div className="flex-1 flex items-center justify-center w-full md:h-[420px]">
          <Image
            src="/images/profesor.png"
            alt="Profesor"
            width={600}
            height={420}
            className="rounded-[22px] object-cover w-full h-64 md:h-[400px] md:w-[520px] shadow-xl"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col items-start z-10 w-full max-w-xl">
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
          <div className="text-[15px] md:text-base text-[#22223b] mb-5 text-justify">
            {t.description}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-2 px-6 py-2 rounded-full bg-white text-[#22223b] border border-[#fff] hover:bg-gray-100 font-poppins text-[15px] shadow transition"
          >
            {t.cta}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,50,0.8)] z-50 flex justify-center items-center p-4">
          <div className="bg-[#1a1a3d] text-white p-6 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-white text-xl font-bold"
            >
              ×
            </button>
            <pre className="whitespace-pre-wrap font-sans">
              {detailedContent[lang]}
            </pre>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturesForTeachers;
