import { ScatteredSpheres } from "../svg/ScatteredSpheres";
import { Title } from "../components/Title";
import { Details } from "../components/Details";
import { Section } from "../components/Section";
import { GradientText } from "../components/GradientText";
import { useLanguage } from "../context/LanguageContext"; // Using the context!

const Background = () => (
  <div
    className="absolute inset-0 translate-y-32 pointer-events-none dark:invert dark:brightness-90"
    aria-hidden="true"
  >
    <ScatteredSpheres />
  </div>
);

export const OurVision = () => {
  const { lang } = useLanguage(); // Get language from global context

  const content = {
    ro: {
      title: "Viziunea noastră",
      text: `Noi suntem de ferma părere că nu trebuie niciodată uitat faptul că, la nivel fundamental, educația este un proces holistic, proces care nu poate fi limitat la sala de curs sau la un unic sistem de predare. De asemenea, noi mai considerăm că, deși actualmente viciat de lipsa digitalizării, ineficienta gestiune a fondurilor și o generală frică de schimbare, sistemul educațional din România are totuși și niște părți bune care-i oferă premisele de a se putea îmbunătăți substanțial pe termen scurt, mediu și lung.
Suntem ferm convinși că schimbarea în domeniul educațional nu poate avea loc fără o strânsă colaborare între societatea civilă, mediul privat și stat - această schimbare trebuie să fie asumată de toți cei care sunt implicați în procesul educațional în toate etapele acestuia: studenți, elevi, profesori, părinți, administratori, decidenți politici, sectorul privat și toți cei care profită din buna educație a cetățenilor unei țări. Numai prin strânsa colaborare a tuturor acestor actori ne putem asigura că educația este ușor de înfăptuit, se conformează nevoilor în continuă schimbare ale pieței muncii și poate ajunge la înalte standarde internaționale.
Acestea fiind spuse, am decis că cel mai bun mod prin care putem vedea această schimbare în societatea care ne-a format ar fi să o inițiem chiar noi - prin construirea unei platforme digitale menite să reactualizeze educația universitară de la noi care se folosește de tehnici educaționale care au fost demonstrate cu succes în cele mai bune universități ale continentului.
Platforma noastră caută nu numai să fie un mediu de accesare a lecturilor sau un repertoriu de exerciții pe diverse subiecte, ci și să aducă mai ferm studentul în centrul actului educațional prin creșterea autonomiei sale fără a submina implicarea profesorului și să ofere profesorilor mai mult timp tocmai pentru rolurile lor esențiale: acelea de a preda și a construi legături pentru studenții lor pentru a forma cetățenii informați ai României de mâine.
Dorim de asemenea ca platforma noastră să stea la baza unui forum de dezbatere în domeniul educației - să permitem o discuție mai liberă și informală între studenți, profesori și administratori care să acționeze în sinergie cu diversele consilii studențești ale facultăților din România care să ducă la instituționalizarea ideii atât de importante de consiliere și dezbatere continuă pentru a adapta educația la un context aflat în perpetuă schimbare.
Numai astfel credem că putem aprinde scânteia care poate duce la rejuvenarea educației din România, reinstaurarea încrederii societății românești în educație și aducerea ei la un nivel de unde poate intra în competiție cu țări de renume la acest capitol - sperăm că și voi veți lua parte la această schimbare!`,
    },
    en: {
      title: "Our Vision",
      text: `We firmly believe that, at its most fundamental level, education is a holistic process, which cannot be confined to the classroom or to a single delivery system. We also believe that, although currently marred by a lack of digitalization, inefficient fund management and a general fear of change, the Romanian education system still does have several great traits which would allow it to develop in a favourable direction both in a short-term and a long-term timeframe.
We also believe that change in education cannot take place without close cooperation between civil society, the private sector and the state. This change must be embraced by all those who are involved in the educational process at all stages: students, pupils, teachers, parents, administrators, policy makers, the private sector and all those who benefit from a well-educated citizenship. Only with the close cooperation of all these actors can we ensure that education is easy to deliver, conforms to the changing needs of the market and can reach high international standards.
That being said, we decided that the best way we could get to see this change happen would be to bring it about ourselves - by building a digital platform designed to update our university education using educational techniques that have been successfully demonstrated across the continent's best universities.
Our platform seeks not only to be a medium for accessing lectures or a repertoire of exercises on various subjects, but also to bring the student more firmly to the centre of the educational act by increasing their autonomy without undermining the teachers’ involvement. This would give them more time to focus on their essential roles: those of teaching and building connections for their students to form informed citizens of tomorrow's Romania.
We also want our platform to form the basis of a forum for debate in the field of education - to enable a freer and more informal discussion between students, teachers and administrators working in synergy with the various student councils of colleges in Romania, leading to institutionalizing the all-important idea of continuous advising and debate to adapt education to a constantly changing context.
This is the only way we believe we can ignite the spark that can lead to the rejuvenation of education in Romania, restoring Romanian society's confidence in education and bringing it to a level where it can compete with other countries of renown in this field - we hope that you will be part of this change!`,
    },
  };

  return (
    <Section
      id="ourvision"
      gradients
      className="relative items-center justify-center min-h-screen gap-16 col md:flex-row"
    >
      <Background />
      <div className="z-10 gap-6 text-center col max-w-5xl md:max-w-6xl mx-auto px-4 md:px-10">
        <Title size="lg">
          <GradientText className="pink-blue">
            {content[lang].title}
          </GradientText>
        </Title>
        <Details>
          <div className="text-justify leading-relaxed text-lg md:text-xl">
            {content[lang].text.split("\n").map((para, idx) => (
              <span key={idx}>
                {para.trim()}
                <br />
                <br />
              </span>
            ))}
          </div>
        </Details>
      </div>
    </Section>
  );
};
