import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";

import { Button } from "../components/Button";
import { GradientText } from "../components/GradientText";
import { LinkButton } from "../components/LinkButton";
import { Moon, Sun } from "../svg/DarkModeIcons";

import { useLanguage } from "../context/LanguageContext";

export const Header = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const { lang, setLang } = useLanguage();
  const [top, setTop] = useState(true);
  const [nextSection, setNextSection] = useState(false);
  const [reloaded, setReloaded] = useState(false);

  // Handle scrolling logic
  const handleScroll = () => {
    setTop(window.pageYOffset <= 10);
    setNextSection(window.pageYOffset > window.innerHeight);
  };
  useEventListener("scroll", handleScroll);

  // Clean up stale dark mode
  useEffectOnce(() => setReloaded(true));

  const Logo = () => (
    <Link href="/">
      <div className="items-center block gap-1 row">
        <Image src="/images/logo.png" alt="Vivid logo" height="40" width="40" />
        <div className="text-3xl font-bold">
          <GradientText className="pink-blue">Aspero</GradientText>
        </div>
      </div>
    </Link>
  );

  // Section links for navigation
  const sectionLinks = [
    {
      id: "ourvision",
      label: lang === "ro" ? "Viziunea noastră" : "Our Vision",
    },
    {
      id: "aboutaspero",
      label: lang === "ro" ? "Despre Aspero" : "About Aspero",
    },
    {
      id: "asperoteam",
      label: lang === "ro" ? "Echipa Aspero" : "Aspero Team",
    },
    {
      id: "featuresforinstitutions",
      label: lang === "ro" ? "Pentru instituții" : "For Institutions",
    },
    {
      id: "featuresforstudents",
      label: lang === "ro" ? "Pentru studenți" : "For Students",
    },
    {
      id: "featuresforteachers",
      label: lang === "ro" ? "Pentru profesori" : "For Teachers",
    },
    {
      id: "coursesamples",
      label: lang === "ro" ? "Exemple de cursuri" : "Course Samples",
    },
  ];

  const Navigation = () => (
    <nav>
      <ul className="flex flex-col md:flex-row gap-4 items-start md:items-center text-sm font-medium">
        {/* Section Links */}
        {sectionLinks.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="px-2 py-1 font-medium text-light hover:text-primary-400 transition"
            >
              {label}
            </a>
          </li>
        ))}
        {/* Language switcher */}
        <li>
          <button
            onClick={() => setLang("ro")}
            className={`px-2 ${lang === "ro" ? "font-bold underline" : ""}`}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            RO
          </button>
          |
          <button
            onClick={() => setLang("en")}
            className={`px-2 ${lang === "en" ? "font-bold underline" : ""}`}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            EN
          </button>
        </li>
        {/* Dark/light mode button */}
        {reloaded ? (
          <li>
            <LinkButton
              button
              onClick={toggleDarkMode}
              title="Toggle dark mode"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Moon /> : <Sun />}
            </LinkButton>
          </li>
        ) : null}
      </ul>
    </nav>
  );

  return (
    // Colors must be set explicitly since opacity and blur don't work together
    <header
      className={`fixed w-full z-30 transition duration-300 ${
        !top && "bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg"
      }`}
    >
      {/* Header Content */}
      <div className="flex flex-col md:flex-row md:items-center justify-between px-5 py-4 mx-auto max-w-7xl sm:px-6">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
