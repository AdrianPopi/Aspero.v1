import { Section } from "../components/Section";
import { GradientText } from "../components/GradientText";
import { Title } from "../components/Title";
import { Details } from "../components/Details";
import { useLanguage } from "../context/LanguageContext";

export const AboutAspero = () => {
  const { lang } = useLanguage();

  const content = {
    ro: {
      title: "Despre Aspero",
      text: `Platforma noastră caută să combine lucrurile la care în mod tradițional educația universitară din România excelează - printre altele, aptitudinile înalte pentru aspectele teoretice ale materiilor STEM (Science, Technology, Engineering and Mathematics - Știință, Tehnologie, Inginerie și Matematică) - și noua revoluție digitală din educație adusă de accesul cvasi-universal la internet și generalizarea aplicațiilor inteligenței artificiale.
Printre funcțiile fundamentale ale platformei se pot număra generarea procedurală de exerciții bazate pe un input al profesorului, prin care platforma poate genera un număr virtual infinit de exerciții corecte pentru studenți care să le permită să-și consolideze exercițiile fără a face exact același exercițiu de mai multe ori și feedback-ul instantaneu scris în prealabil sau generat automat pentru exerciții care permite atât studentului să-și corecteze exercițiile autonom oricând și de oriunde s-ar afla, dar și profesorului să se concentreze pe aspecte mai puțin repetitive ale educației.`,
    },
    en: {
      title: "About Aspero",
      text: `Our platform seeks to combine the abilities and qualities the Romanian university education traditionally excels at - which are, among others, the high aptitude for STEM theory (Science, Technology, Engineering and Mathematics) subjects - along with the new digital revolution in education brought by the quasi-universal access to the internet and the simplification of access to artificial intelligence applications.
Among the platform's core functions there are procedurally generated exercises based on teacher input, whereby the platform can generate a virtually infinite number of correct exercises for students to use to consolidate their studies without having to repeat exactly the same exercise multiple times, as well as instant pre-written or automatically generated feedback for exercises. This allows both the student to correct their exercises autonomously anytime and from anywhere, and for the teacher to be able to focus on the less repetitive aspects of education.`,
    },
  };

  return (
    <Section
      id="aboutaspero"
      gradients
      className="relative items-center justify-center min-h-screen gap-16 col md:flex-row"
    >
      <div className="z-10 gap-6 col max-w-5xl mx-auto text-center px-6 md:px-16">
        <Title size="lg">
          <GradientText className="pink-blue">
            {content[lang].title}
          </GradientText>
        </Title>
        <Details>
          {/* This keeps the line breaks for each paragraph */}
          {content[lang].text.split("\n").map((para, idx) => (
            <span key={idx}>
              {para.trim()}
              <br />
              <br />
            </span>
          ))}
        </Details>
      </div>
    </Section>
  );
};
