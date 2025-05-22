import { ReactNode } from "react";
import {
  CardsIcon,
  MagicIcon,
  DoorIcon,
  ShuffleIcon,
  SignalIcon,
  TalkingIcon,
} from "../svg/FeatureIcons";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";
import { useLanguage } from "../context/LanguageContext";

// Block content for EN/RO
const featuresContent = {
  ro: {
    title: "Features - pentru profesori",
    blocks: [
      {
        icon: <ShuffleIcon />,
        title: "Formate variate de exerciții",
        text: `Profesorii pot genera în cadrul platformei exerciții în diverse formate, permițând astfel o evaluare holistică a studenților:\n● Grile cu răspuns unic sau multiplu\n● Răspunsuri text\n● Exerciții de matematică\n● Exerciții de programare\n● Exerciții cu selecții de obiecte`,
      },
      {
        icon: <MagicIcon />,
        title: "Generare procedurală de exerciții",
        text: `În baza unui model de exercițiu, sute de alte exerciții pot fi generate automat prin ajustarea parametrilor acestora: acest lucru permite studenților să-și consolideze cunoștințele asupra unui concept fără a fi nevoiți să repete același exercițiu cu aceleași valori și degrevează din sarcina profesorilor de a face manual asemenea exerciții, permițându-le să poată dedica mai mult timp predării și contactului cu studenții.`,
      },
      {
        icon: <CardsIcon />,
        title: "Lecturi și exerciții cu materiale multimedia",
        text: `Cursurile pot conține diverse tipuri de fișiere care pot fi accesate de studenți în cadrul lecturilor: de la formate clasice precum fișiere text sau slide-uri de prezentare la videoclipuri sau tipuri de fișiere mai nișate, permițând astfel profesorilor să aibă diverse abordări de predare.`,
      },
      {
        icon: <SignalIcon />,
        title: "Statistici despre implicarea studenților",
        text: `Creatorii de cursuri au acces la statistici exhaustive despre interacțiunile cursanților cu exercițiile și lecturile dintr-un curs: statisticile includ, printre altele, detalii despre vizualizările lecturilor, gradul de rezolvare al exercițiilor și durata rezolvării testelor, oferindu-i astfel profesorului o largă perspectivă asupra modului în care studenții interacționează cu materialele de curs și cât de ușor le pot ei asimila.`,
      },
      {
        icon: <TalkingIcon />,
        title: "Analiză a statisticilor pentru profesori",
        text: `În baza statisticilor unei grupe, platforma poate evidenția părțile la care studenții excelează sau la care mai au de lucrat, oferind sugestii punctuale profesorului în ceea ce privește adaptarea cursului la nevoile dinamice ale studenților.`,
      },
      {
        icon: <DoorIcon />,
        title: "Funcție de moderare a discuțiilor",
        text: `Prin intermediul platformei profesorii pot propune teme de discuție sau lucru cursanților pe care aceștia să le poată urmări în mod autonom, putând fi observați totuși de către profesori: astfel, profesorii pot permite studenților să-și consolideze cunoștințele sau să-și completeze proiectele cu diverse grade de implicare directă, de la caz la caz.`,
      },
      {
        icon: <CardsIcon />,
        title: "Gestiune centralizată a tuturor cursurilor unui profesor",
        text: `Profesorii care crează mai multe cursuri le pot gestiona ușor într-o interfață centralizată care le permite să răspundă studenților din diferite cursuri sau să implementeze schimbări în cursuri rapid și ușor.`,
      },
      {
        icon: <MagicIcon />,
        title: "Corecție opțională cu inteligență artificială",
        text: `Profesorii pot decide, de la caz la caz, să delege inteligența artificială a platformei să genereze automat feedback-ul pentru studenți în cadrul unor exerciții punctuale, permițându-le astfel creatorilor de curs să-și concentreze atenția asupra corectării și generării de soluții pentru exerciții mai complexe sau de nișă.`,
      },
    ],
  },
  en: {
    title: "Features for Teachers",
    blocks: [
      {
        icon: <ShuffleIcon />,
        title: "Various exercise formats",
        text: `Teachers can generate exercises in various formats within the platform, allowing for a holistic assessment of students:\n● Single and multiple choice grids\n● Text answers\n● Math exercises\n● Programming exercises\n● Object selection exercises`,
      },
      {
        icon: <MagicIcon />,
        title: "Procedural generation of exercises",
        text: `Based on the model of an exercise, hundreds of others can be generated automatically by adjusting their parameters: this allows students to consolidate their knowledge of a concept without having to repeat the same exercise with the same values and relieves teachers of the burden of manually creating them, allowing educators to devote more time to teaching and contact with students.`,
      },
      {
        icon: <CardsIcon />,
        title: "Readings and exercises with multimedia materials",
        text: `Courses can contain various types of files that can be accessed by students during lectures: from classic formats such as text files or presentation slides to videos or more niche file types, thus enabling different teaching approaches.`,
      },
      {
        icon: <SignalIcon />,
        title: "Student engagement statistics",
        text: `Course developers have access to comprehensive statistics about learners' interactions with the exercises and lectures in a course: the statistics include, among other things, details about the number of views a lecture might have, the degree of completion of the exercises and how quizzes last, thus giving the teacher a broad insight into how students interact with the course materials and how easily they can assimilate them.`,
      },
      {
        icon: <TalkingIcon />,
        title: "Analyzing statistics for teachers",
        text: `Based on a group's stats, the platform can highlight where students are excelling or where they still have work to do, providing timely suggestions to the teacher on how to adapt the course to the dynamic needs of students.`,
      },
      {
        icon: <DoorIcon />,
        title: "Discussion moderation function",
        text: `Through the platform, teachers can propose topics for discussion or subjects for students to follow autonomously, while still being able to be observed by the teachers: in this way, teachers can allow students to consolidate their knowledge or complete their projects with varying degrees of direct involvement, on an individual basis.`,
      },
      {
        icon: <CardsIcon />,
        title: "Centralized management of all a teacher's courses",
        text: `Teachers who create multiple courses can easily manage them in a centralized interface that allows them to respond to students in different courses or implement course changes quickly and easily.`,
      },
      {
        icon: <MagicIcon />,
        title: "Optional correction with artificial intelligence",
        text: `Teachers can decide, on a case-by-case basis, to delegate the platform's artificial intelligence to automatically generate feedback for students on one-off exercises, allowing course creators to focus their attention on correcting and generating solutions for more complex or niche exercises.`,
      },
    ],
  },
};

const BlockTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="text-xl font-bold text-strong">{children}</h3>
);

const BlockText = ({ children }: { children: ReactNode }) => (
  <p className="text-light whitespace-pre-line">{children}</p>
);

const Block = ({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) => (
  <Card grayer className="items-center gap-1 p-6 col">
    {icon}
    <BlockTitle>{title}</BlockTitle>
    <BlockText>{text}</BlockText>
  </Card>
);

export const FeaturesForTeachers = () => {
  const { lang } = useLanguage();
  const t = featuresContent[lang];

  return (
    <Section id="featuresforteachers" className="gap-16 text-center">
      {/* Header */}
      <div className="gap-4 col">
        <Title size="md">
          <GradientText className="purple-teal">{t.title}</GradientText>
        </Title>
      </div>
      {/* Blocks */}
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {t.blocks.map((block, idx) => (
          <Block
            key={idx}
            icon={block.icon}
            title={block.title}
            text={block.text}
          />
        ))}
      </div>
    </Section>
  );
};
