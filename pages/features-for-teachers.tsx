import { Header } from "@/sections/Header";
import { useLanguage } from "../src/context/LanguageContext";
import { useEffect } from "react";

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

const FeaturesForTeachersPage = ({
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

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="min-h-screen bg-[#ced6ff] text-[#22223b] px-4 md:px-24 py-32">
        <h1 className="text-3xl md:text-4xl font-bold text-[#131336] mb-6">
          {lang === "ro"
            ? "Funcționalități - pentru profesori"
            : "Features for Teachers"}
        </h1>
        <pre className="whitespace-pre-wrap text-[15px] md:text-base font-sans leading-relaxed">
          {detailedContent[lang]}
        </pre>
      </div>
    </>
  );
};

export default FeaturesForTeachersPage;
