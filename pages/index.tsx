import { AboutAspero } from "../src/sections/AboutAspero";
import { FeaturesForStudents } from "../src/sections/FeaturesForStudents";
import { Footer } from "../src/sections/Footer";
import { Header } from "../src/sections/Header";
import { OurVision } from "../src/sections/OurVision";
import { FeaturesForInstitutions } from "../src/sections/FeaturesForInstitutions";
import { AsperoTeam } from "../src/sections/AsperoTeam";
import { FeaturesForTeachers } from "../src/sections/FeaturesForTeachers";
import { CourseSamples } from "../src/sections/CourseSamples";

const Home = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  return (
    <div className="overflow-hidden col text-strong">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <OurVision />
        <AboutAspero />
        <FeaturesForStudents />
        <FeaturesForInstitutions />
        <FeaturesForTeachers />
        <CourseSamples />
        <AsperoTeam />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
