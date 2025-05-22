import { useLanguage } from "../context/LanguageContext"; // use the global context!
import { NewsletterSpheres } from "../svg/NewsletterSpheres";
import { Card } from "../components/Card";
import { Section } from "../components/Section";

const Background = () => (
  <div
    className="absolute bottom-0 right-0 hidden pointer-events-none md:block"
    aria-hidden="true"
  >
    <NewsletterSpheres />
  </div>
);

export const FeaturesForInstitutions = () => {
  // Use the global language
  const { lang, setLang } = useLanguage();

  // Content in both languages
  const content = {
    en: {
      title: "Features for Institutions",
      features: [
        {
          title: "Institution course coordination:",
          text: "The platform allows institution administrators access to statistics covering both student and teacher engagement in the educational act for all courses offered by these institutions; thus they can easily track the direction the educational process is taking.",
        },
        {
          title: "Analysis of statistics for institutions:",
          text: "By centralizing the statistics of all the courses offered by an institution, the platform can provide reports prepared by experts in educational sciences describing the academic performance of the institution, in tandem with targeted suggestions for improving the educational process, with short, medium or long-term implementation goals.",
        },
        {
          title: "Observer function:",
          text: "The institution’s administrators can access each individual course using the observer function. This allows a detailed evaluation of each individual course (including individual exercises), thus allowing administrators to have a bottom-up perspective of an institution’s courses.",
        },
      ],
    },
    ro: {
      title: "Funcții pentru instituții",
      features: [
        {
          title: "Coordonarea cursurilor instituției:",
          text: "Platforma permite administratorilor instituțiilor acces la statistici care cuprind atât implicarea studenților, cât și a profesorilor, în actul educațional pentru toate cursurile oferite de către aceste instituții; astfel acestea pot urmări ușor direcția pe care procesul educațional o ia.",
        },
        {
          title: "Analiză a statisticilor pentru instituții:",
          text: "Centralizând statisticile tuturor cursurilor oferite de către o instituție, platforma poate trimite conducerii acesteia rapoarte periodice întocmite de experți în științele educației care să descrie performanțele academice ale instituției, în tandem cu sugestii țintite pentru îmbunătățirea procesului educațional, cu scopuri de implementare pe termen scurt, mediu sau lung.",
        },
        {
          title: "Funcție de observator:",
          text: "Administratorii instituțiilor pot accesa fiecare curs individual în baza funcției de observator care permite evaluarea amănunțită a fiecărui curs în parte (incluzând și exercițiile în parte), permițând astfel administratorilor să aibă și o perspectivă la firul ierbii asupra cursurilor instituției.",
        },
      ],
    },
  };

  return (
    <Section id="featuresforinstitutions" className="px-4 dark sm:px-12">
      <Card className="w-full px-4 py-16 overflow-hidden sm:px-16">
        <Background />
        <div className="gap-6 text-center md:text-left col md:w-1/2 ">
          {/* Language toggle button */}

          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            {content[lang].title}
          </h2>
          <ul className="text-lg text-light space-y-4 list-disc pl-5">
            {content[lang].features.map((f, i) => (
              <li key={i}>
                <strong>{f.title}</strong> {f.text}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Section>
  );
};
