// pages/team.tsx

import { Header } from "@/sections/Header";
import { useLanguage } from "../src/context/LanguageContext";
import { useEffect } from "react";
import Image from "next/image";

const teamContent = {
  ro: {
    title: "Echipa Aspero",
    intro: `
Echipa noastră este compusă din studenți care studiază discipline diverse (de la Economie la Nanobiologie) la universități de top din Europa (precum TU Delft sau Bocconi) care au trecut prin sistemul educațional românesc, cunoscându-i atât meritele, dar și lacunele, unindu-ne totuși următorul lucru: dorința de a da ceva înapoi comunităților care ne-au format prin transformarea sistemului educațional din România într-unul competitiv la nivel european prin adaptarea practicilor educaționale digitalizate de care am avut oportunitatea să profităm la sistemul universitar din România.
    `,
    details: `
Deși am avut oportunitatea de a participa la multe activități extracurriculare care ne-au ajutat să ne lărgim atât orizonturile academice, cât și să legăm relații cu alți elevi și studenți europeni încă din timpul liceului din România, am ajuns când am aplicat la universitate la concluzia că singurul mod în care puteam urmări o educație competitivă la nivel internațional ar fi să plecăm din țară – ceea ce am și făcut. Însă acest lucru ne-a permis să experimentăm abordările acestor instituții educaționale de top, abordări ale căror eficiență ne-a fost confirmată chiar la firul ierbii, sub ochii noștri – și să ajungem la concluzia că nu există niciun motiv pentru care acestea n-ar putea fi implementate cu succes și la noi în țară.

Tocmai de aceea ne-am pus pe lucru: am început să studiem aspecte ale teoriei educaționale și să consultăm experți în domeniu pentru a putea implementa cele mai bune practici curente într-o platformă digitală la costuri accesibile pentru a ne asigura că toate facultățile din România pot avea oportunitatea de a se folosi de cele mai moderne tehnici pedagogice pentru a îmbunătăți procesul educațional.
    `,
    members: [
      { name: "Matei", img: "/images/matei.png" },
      { name: "Horia", img: "/images/horia.png" },
      { name: "Andreea", img: "/images/andreea.png" },
      { name: "Ioana", img: "/images/ioana.png" },
    ],
  },
  en: {
    title: "The Aspero Team",
    intro: `
Our team is composed of students studying diverse disciplines (from Economics to Nanobiology) at top universities in Europe (such as TU Delft or Bocconi) who have gone through the Romanian education system, knowing both its merits and shortcomings. These experiences made us have one thing in common: the desire to give something back to the communities that formed us, and we want to achieve this by making the Romanian education system competitive at the European level by adapting the digitized educational practices that we had the opportunity to take advantage of abroad to the Romanian university system.
    `,
    details: `
Although we had the opportunity to participate in many extra-curricular activities that helped us broaden both our academic horizons and build relationships with other European pupils and students since high school in Romania, we came to the conclusion when applying to university that the only way we could pursue an internationally competitive education would be to leave the country – which we did. But this allowed us to experiment with the approaches of these top educational institutions, approaches whose effectiveness was confirmed to us right before our very eyes – and to conclude that there is no reason why they could not be successfully implemented in our country.

That's why we set to work: we started to study aspects of educational theory and consult experts in the field in order to be able to implement the current best practices in an affordable digital platform to ensure that all universities in Romania can have the opportunity to use the most modern pedagogical techniques to improve the educational process.
    `,
    members: [
      { name: "Matei", img: "/images/matei.png" },
      { name: "Horia", img: "/images/horia.png" },
      { name: "Andreea", img: "/images/andreea.png" },
      { name: "Ioana", img: "/images/ioana.png" },
    ],
  },
};

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

      <main className="bg-hero5 bg-cover bg-center text-white pt-32 md:pt-40 pb-16">
        <div className="max-w-8xl mx-auto px-4 md:px-24 space-y-20">
          {/* 1) HERO: title + intro + collage */}
          <section className="flex flex-col lg:flex-row items-center gap-10">
            {/* Text */}
            <div className="flex-1">
              <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                {t.title}
              </h1>
              <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify whitespace-normal">
                {t.intro}
              </p>
            </div>
            {/* Collage image */}
            <div className="flex-1 flex items-center justify-center min-w-[260px]">
              <Image
                src="/images/aspero-team.png"
                alt="Aspero Team"
                width={520}
                height={380}
                className="image-section"
                priority
              />
            </div>
          </section>

          {/* 2) DETAILS card */}
          <section className="p-8 border border-blue-500 rounded-2xl">
            <p className="font-poppins font-normal text-xs md:text-sm leading-relaxed text-justify whitespace-pre-line">
              {lang === "ro" ? (
                <>
                  {`Deși am avut oportunitatea de a participa la multe activități extracurriculare care ne-au ajutat să ne lărgim atât orizonturile academice, cât și să legăm relații cu alți elevi și studenți europeni încă din timpul liceului din România, am ajuns când am aplicat la universitate la concluzia că singurul mod în care puteam urmări o educație competitivă la nivel internațional ar fi să plecăm din țară – ceea ce am și făcut. Însă acest lucru ne-a permis să experimentăm abordările acestor instituții educaționale de top, abordări ale căror eficiență ne-a fost confirmată chiar la firul ierbii, sub ochii noștri – și să ajungem la concluzia că `}
                  <span className="text-[#e8aff6]">
                    nu există niciun motiv pentru care acestea n-ar putea fi
                    implementate cu succes și la noi în țară.
                  </span>
                  {`\n\nTocmai de aceea ne-am pus pe lucru: am început să studiem aspecte ale teoriei educaționale și să consultăm experți în domeniu pentru a putea implementa cele mai bune practici curente într-o platformă digitală la costuri accesibile pentru a ne asigura că toate facultățile din România pot avea oportunitatea de a se folosi de cele mai moderne tehnici pedagogice pentru a îmbunătăți procesul educațional.`}
                </>
              ) : (
                <>
                  {`Although we had the opportunity to participate in many extra-curricular activities that helped us broaden both our academic horizons and build relationships with other European pupils and students since high school in Romania, we came to the conclusion when applying to university that the only way we could pursue an internationally competitive education would be to leave the country – which we did. But this allowed us to experiment with the approaches of these top educational institutions, approaches whose effectiveness was confirmed to us right before our very eyes – and to conclude that `}
                  <span className="text-[#e8aff6]">
                    there is no reason why they could not be successfully
                    implemented in our country.
                  </span>
                  {`\n\nThat's why we set to work: we started to study aspects of educational theory and consult experts in the field in order to be able to implement the current best practices in an affordable digital platform to ensure that all universities in Romania can have the opportunity to use the most modern pedagogical techniques to improve the educational process.`}
                </>
              )}
            </p>
          </section>

          {/* 3) Members grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.members.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover mb-4"
                />
                <div className="font-poppins font-semibold text-lg">
                  {member.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default TeamPage;
