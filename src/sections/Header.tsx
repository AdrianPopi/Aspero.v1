import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";
import { Button } from "../components/Button";
import { GradientText } from "../components/GradientText";
import { LinkButton } from "../components/LinkButton";
import { Moon, Sun } from "../svg/DarkModeIcons";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X } from "lucide-react"; // Use any icon lib, or your own svg

export const Header = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const { lang, setLang } = useLanguage();
  const [top, setTop] = useState(true);
  const [reloaded, setReloaded] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  // Close nav when resizing above md
  useEventListener("resize", () => {
    if (window.innerWidth >= 768) setNavOpen(false);
  });

  const handleScroll = () => {
    setTop(window.pageYOffset <= 10);
  };
  useEventListener("scroll", handleScroll);

  useEffectOnce(() => setReloaded(true));

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

  const Logo = () => (
    <Link href="/">
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="Aspero logo"
          height={40}
          width={40}
        />
        <span className="text-3xl font-bold">
          <GradientText className="pink-blue">Aspero</GradientText>
        </span>
      </div>
    </Link>
  );

  // Navigation links
  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-2 items-start md:items-center text-base font-medium">
      {sectionLinks.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className="px-2 py-1 font-medium text-light hover:text-primary-400 transition"
            onClick={() => setNavOpen(false)}
          >
            {label}
          </a>
        </li>
      ))}
      <li>
        <button
          onClick={() => setLang("ro")}
          className={`px-2 ${lang === "ro" ? "font-bold underline" : ""}`}
        >
          RO
        </button>
        |
        <button
          onClick={() => setLang("en")}
          className={`px-2 ${lang === "en" ? "font-bold underline" : ""}`}
        >
          EN
        </button>
      </li>
      {reloaded && (
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
      )}
    </ul>
  );

  return (
    <header
      className={`fixed w-full z-30 transition duration-300 ${
        !top && "bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6">
        <Logo />

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() => setNavOpen((o) => !o)}
        >
          {navOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      {navOpen && (
        <nav className="md:hidden bg-gray-900/95 dark:bg-gray-800/95 w-full absolute top-16 left-0 shadow-lg transition-all z-50">
          <div className="flex flex-col gap-4 px-6 py-6">
            <NavLinks />
          </div>
        </nav>
      )}
    </header>
  );
};
