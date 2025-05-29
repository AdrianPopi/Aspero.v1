import { AboutAspero } from "../src/sections/AboutAspero";
import { FeaturesForStudents } from "../src/sections/FeaturesForStudents";
import { Footer } from "../src/sections/Footer";
import { Header } from "../src/sections/Header";
import { FeaturesForInstitutions } from "../src/sections/FeaturesForInstitutions";
import { FeaturesForTeachers } from "../src/sections/FeaturesForTeachers";
import { Categories } from "../src/sections/Categories";
import { Hero } from "../src/sections/Hero";
import { ContactSection } from "../src/sections/ContactSection";
import { TeamSection } from "../src/sections/TeamSection";
import BackToTop from "../src/components/BackToTop";
import Vision from "@/sections/Vision";

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
        <Hero />
        <AboutAspero />
        <Vision />
        <FeaturesForInstitutions />
        <FeaturesForTeachers />
        <FeaturesForStudents />
        <Categories />
        <TeamSection />
        <ContactSection />
        <BackToTop />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
