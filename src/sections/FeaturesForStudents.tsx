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

// Titles and texts for EN/RO
const featuresContent = {
  ro: {
    title: "Features - pentru studenți",
    description: "",
    blocks: [
      {
        icon: <ShuffleIcon />,
        title: "Exerciții generate procedural",
        text: `Una dintre funcțiile ale platformei noastre este selecția virtual nelimitată de exerciții generate procedural în cadrul diverselor cursuri: astfel este posibil pentru un student să continue să se pregătească pentru examene folosindu-se exerciții riguros pregătite în afara celor produse de către profesori, extinzându-și astfel gama de opțiuni.`,
      },
      {
        icon: <SignalIcon />,
        title: "Feedback instantaneu",
        text: `Platforma poate da un feedback instantaneu problemelor rezolvate, subliniind atât elementele corecte, cât și pe cele eronate ale rezolvării, propunând de la caz la caz și soluții de rezolvare.`,
      },
      {
        icon: <TalkingIcon />,
        title: "Acces colaborativ la exerciții",
        text: `Dincolo de accesul la materiale multimedia și la exerciții, platforma noastră oferă și posibilitatea de a rezolva exerciții în comun prin funcțiile de chat și rezolvare cooperativă: astfel, dincolo de componenta de învățare autonomă, platforma încurajează și învățatul cooperativ.`,
      },
      {
        icon: <MagicIcon />,
        title: "Analiză a soluțiilor cu inteligență artificială",
        text: `De asemenea, la cerere, platforma poate integra și sugestii compuse de inteligență artificială în analiza răspunsurilor: astfel un feedback exhaustiv poate fi accesat la un click distanță oricând de către student care include nu doar răspunsul corect, cât și soluții de rezolvare, sugestii pentru îmbunătățirea textelor sau direcții pentru studiu aprofundat.`,
      },
      {
        icon: <CardsIcon />,
        title: "Statistici de verificare a progresului",
        text: `Studenții pot vedea statistici detaliate despre studiile proprii, atât de la curs la curs, cât și global; de la cursurile la care au avut cel mai mare succes, la detalii minore ce trebuie amănunțite, aceste statistici îmbunătățesc calitatea procesului de învățare prin direcționarea eforturilor studenților.`,
      },
    ],
  },
  en: {
    title: "Features for students",
    description: "",
    blocks: [
      {
        icon: <ShuffleIcon />,
        title: "Procedurally generated exercises",
        text: `One of the features of our platform is the virtually unlimited selection of procedurally generated exercises within the various courses: this makes it possible for a student to continue preparing for exams using rigorously prepared exercises outside those produced by teachers, thus expanding their range of options.`,
      },
      {
        icon: <SignalIcon />,
        title: "Instant feedback",
        text: `The platform can provide instant feedback on solved problems, highlighting both correct and incorrect elements of the solution, proposing case-by-case and comprehensive answers.`,
      },
      {
        icon: <TalkingIcon />,
        title: "Collaborative access to exercises",
        text: `In addition to access to multimedia materials and exercises, our platform also offers the possibility to solve exercises together through cooperative solving features as well as a chat: thus, beyond the autonomous learning component, the platform also encourages cooperative learning.`,
      },
      {
        icon: <MagicIcon />,
        title: "Analysing solutions with artificial intelligence",
        text: `Also, upon request, the platform can also integrate AI-created suggestions in the analysis of answers: an exhaustive feedback system can thus be accessed with only a click at any time by the student that includes not only the correct answer, but also means to resolve a question, suggestions for improving texts or directions for further study.`,
      },
      {
        icon: <CardsIcon />,
        title: "Progressing Statistics",
        text: `Students can see detailed statistics about their own studies, both course-by-course and comprehensive; from the courses in which they were most successful to minor details that require expanded focus, these statistics improve the quality of the learning process by targeting students' efforts.`,
      },
    ],
  },
};

const BlockTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="text-xl font-bold text-strong">{children}</h3>
);

const BlockText = ({ children }: { children: ReactNode }) => (
  <p className="text-light">{children}</p>
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

export const FeaturesForStudents = () => {
  const { lang } = useLanguage();
  const t = featuresContent[lang];

  return (
    <Section id="featuresforstudents" className="gap-16 text-center">
      {/* Header */}
      <div className="gap-4 col">
        <Title size="md">
          <GradientText className="purple-teal">{t.title}</GradientText>
        </Title>
        {t.description && <Details>{t.description}</Details>}
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
