import { Header } from "@/sections/Header";
import { useLanguage } from "../src/context/LanguageContext";
import { useEffect } from "react";

const teamContent = {
  ro: {
    title: "Echipa Aspero",
    description: `
Echipa noastră este compusă din studenți care studiază discipline diverse (de la Economie la Nanobiologie) la universități de top din Europa (precum TU Delft sau Bocconi) care au trecut prin sistemul educațional românesc, cunoscându-i atât meritele, dar și lacunele, unindu-ne totuși următorul lucru: dorința de a da ceva înapoi comunităților care ne-au format prin transformarea sistemului educațional din România într-unul competitiv la nivel european prin adaptarea practicilor educaționale digitalizate de care am avut oportunitatea să profităm la sistemul universitar din România.

Deși am avut oportunitatea de a participa la multe activități extracurriculare care ne-au ajutat să ne lărgim atât orizonturile academice, cât și să legăm relații cu alți elevi și studenți europeni încă din timpul liceului din România, am ajuns când am aplicat la universitate la concluzia că singurul mod în care puteam urmări o educație competitivă la nivel internațional ar fi să plecăm din țară - ceea ce am și făcut. Însă acest lucru ne-a permis să experimentăm abordările acestor instituții educaționale de top, abordări ale căror eficiență ne-a fost confirmată chiar la firul ierbii, sub ochii noștri - și să ajungem la concluzia că nu există niciun motiv pentru care acestea n-ar putea fi implementate cu succes și la noi în țară.

Tocmai de aceea ne-am pus pe lucru: am început să studiem aspecte ale teoriei educaționale și să consultăm experți în domeniu pentru a putea implementa cele mai bune practici curente într-o platformă digitală la costuri accesibile pentru a ne asigura că toate facultățile din România pot avea oportunitatea de a se folosi de cele mai moderne tehnici pedagogice pentru a îmbunătăți procesul educațional.
    `,
    members: [
      { name: "Horia", description: "TBD" },
      { name: "Matei", description: "TBD" },
      { name: "Etc.", description: "TBD" },
    ],
  },
  en: {
    title: "The Aspero Team",
    description: `
Our team is composed of students studying diverse disciplines (from Economics to Nanobiology) at top universities in Europe (such as TU Delft or Bocconi) who have gone through the Romanian education system, knowing both its merits and shortcomings. These experiences made us have one thing in common: the desire to give something back to the communities that formed us, and we want to achieve this by making the Romanian education system competitive at the European level by adapting the digitized educational practices that we had the opportunity to take advantage of abroad to the Romanian university system.

Although we had the opportunity to participate in many extra-curricular activities that helped us broaden both our academic horizons and build relationships with other European pupils and students since high school in Romania, we came to the conclusion when applying to university that the only way we could pursue an internationally competitive education would be to leave the country - which we did. But this allowed us to experiment with the approaches of these top educational institutions, approaches whose effectiveness was confirmed to us right before our very eyes - and to conclude that there is no reason why they could not be successfully implemented in our country.

That's why we set to work: we started to study aspects of educational theory and consult experts in the field in order to be able to implement the current best practices in an affordable digital platform to ensure that all universities in Romania can have the opportunity to use the most modern pedagogical techniques to improve the educational process.
    `,
    members: [
      { name: "Horia", description: "TBD" },
      { name: "Matei", description: "TBD" },
      { name: "Etc.", description: "TBD" },
    ],
  },
};

const accentColors = [
  "from-[#5f67b2] to-[#ba71cf]",
  "from-[#5566b8] to-[#ac6dff]",
  "from-[#ac6dff] to-[#5f67b2]",
  "from-[#ba71cf] to-[#ac6dff]",
  "from-[#ac6dff] to-[#5f67b2]",
];

const TeamPage = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const { lang } = useLanguage();
  const t = teamContent[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="min-h-screen bg-[#ced6ff] text-[#22223b] px-2 md:px-12 py-20 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#131336] mb-16 mt-8 text-center">
          {t.title}
        </h1>
        <div className="w-full max-w-4xl space-y-7">
          {/* Main team description */}
          <div
            className={`rounded-2xl bg-white/90 shadow-lg p-6 border-l-8 bg-gradient-to-r ${accentColors[0]}`}
            style={{ borderColor: "#5f67b2" }}
          >
            <div className="text-base md:text-lg text-[#353563] font-medium text-justify whitespace-pre-line">
              {t.description}
            </div>
          </div>
          {/* Team members grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-3xl mx-auto pt-6">
            {t.members.map((member, idx) => (
              <div
                key={member.name}
                className={`rounded-xl shadow-md p-6 text-white flex flex-col items-center bg-gradient-to-br ${
                  accentColors[(idx + 1) % accentColors.length]
                }`}
              >
                <span className="text-xl font-semibold mb-2 font-poppins">
                  {member.name}
                </span>
                <span className="text-sm font-normal font-poppins">
                  {member.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
