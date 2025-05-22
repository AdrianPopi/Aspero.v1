import { ReactNode } from "react";
import { Quote } from "../svg/Quote";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";
import { useLanguage } from "../context/LanguageContext"; // << Import the context hook

const content = {
  ro: {
    title: "Echipa Aspero",
    description:
      "Echipa noastră este compusă din studenți care studiază discipline diverse (de la Economie la Nanobiologie) la universități de top din Europa (precum TU Delft sau Bocconi) care au trecut prin sistemul educațional românesc, cunoscându-i atât meritele, dar și lacunele, unindu-ne totuși următorul lucru: dorința de a da ceva înapoi comunităților care ne-au format prin transformarea sistemului educațional din România într-unul competitiv la nivel european prin adaptarea practicilor educaționale digitalizate de care am avut oportunitatea să profităm la sistemul universitar din România.\n\nDeși am avut oportunitatea de a participa la multe activități extracurriculare care ne-au ajutat să ne lărgim atât orizonturile academice, cât și să legăm relații cu alți elevi și studenți europeni încă din timpul liceului din România, am ajuns când am aplicat la universitate la concluzia că singurul mod în care puteam urmări o educație competitivă la nivel internațional ar fi să plecăm din țară - ceea ce am și făcut. Însă acest lucru ne-a permis să experimentăm abordările acestor instituții educaționale de top, abordări ale căror eficiență ne-a fost confirmată chiar la firul ierbii, sub ochii noștri - și să ajungem la concluzia că nu există niciun motiv pentru care acestea n-ar putea fi implementate cu succes și la noi în țară.\n\nTocmai de aceea ne-am pus pe lucru: am început să studiem aspecte ale teoriei educaționale și să consultăm experți în domeniu pentru a putea implementa cele mai bune practici curente într-o platformă digitală la costuri accesibile pentru a ne asigura că toate facultățile din România pot avea oportunitatea de a se folosi de cele mai moderne tehnici pedagogice pentru a îmbunătăți procesul educațional.",
    members: [
      { name: "Horia", role: "Echipa Aspero - Horia" },
      { name: "Matei", role: "Echipa Aspero - Matei" },
      { name: "Etc.", role: "Echipa Aspero - Etc." },
    ],
  },
  en: {
    title: "The Aspero team",
    description:
      "Our team is composed of students studying diverse disciplines (from Economics to Nanobiology) at top universities in Europe (such as TU Delft or Bocconi) who have gone through the Romanian education system, knowing both its merits and shortcomings. These experiences made us have one thing in common: the desire to give something back to the communities that formed us, and we want to achieve this by making the Romanian education system competitive at the European level by adapting the digitized educational practices that we had the opportunity to take advantage of abroad to the Romanian university system.\n\nAlthough we had the opportunity to participate in many extra-curricular activities that helped us broaden both our academic horizons and build relationships with other European pupils and students since high school in Romania, we came to the conclusion when applying to university that the only way we could pursue an internationally competitive education would be to leave the country - which we did. But this allowed us to experiment with the approaches of these top educational institutions, approaches whose effectiveness was confirmed to us right before our very eyes - and to conclude that there is no reason why they could not be successfully implemented in our country.\n\nThat's why we set to work: we started to study aspects of educational theory and consult experts in the field in order to be able to implement the current best practices in an affordable digital platform to ensure that all universities in Romania can have the opportunity to use the most modern pedagogical techniques to improve the educational process.",
    members: [
      { name: "Horia", role: "Aspero Team - Horia" },
      { name: "Matei", role: "Aspero Team - Matei" },
      { name: "Etc.", role: "Aspero Team - Etc." },
    ],
  },
};

// Simple icon with founder's name
const TeamIcon = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center w-24 h-24 mx-auto -top-10 relative bg-gray-800 rounded-full text-white text-xl font-bold border-4 border-primary-500 shadow-lg">
    <Quote />
    <span className="ml-2">{name}</span>
  </div>
);

const TeamMember = ({ name, role }: { name: string; role: string }) => (
  <Card className="items-center gap-6 p-12 pt-20 body-lg col text-medium">
    <TeamIcon name={name} />
    <div className="">
      <cite className="not-italic font-bold">— {role}</cite>
    </div>
  </Card>
);

export const AsperoTeam = () => {
  const { lang } = useLanguage(); // << Use the global language context!
  const t = content[lang];

  return (
    <Section id="asperoteam" grayer className="gap-24 text-center">
      {/* Header */}
      <div className="gap-4 col">
        <Title size="md">
          <GradientText className="amber-red">{t.title}</GradientText>
        </Title>
        <Details>
          {t.description.split("\n").map((para, idx) => (
            <span key={idx}>
              {para}
              <br />
              <br />
            </span>
          ))}
        </Details>
      </div>
      {/* Team Members */}
      <div className="gap-20 md:gap-6 col md:row">
        {t.members.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </Section>
  );
};
