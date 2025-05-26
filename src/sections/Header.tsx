import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";
import { LinkButton } from "../components/LinkButton";
import { Moon, Sun } from "../svg/DarkModeIcons";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = ({ isDarkMode, toggleDarkMode }) => {
  const { lang, setLang } = useLanguage();
  const [top, setTop] = useState(true);
  const [reloaded, setReloaded] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEventListener("resize", () => {
    if (window.innerWidth >= 768) setNavOpen(false);
  });

  useEventListener("scroll", () => setTop(window.pageYOffset <= 10));
  useEffectOnce(() => setReloaded(true));
  const handleDropdown = (id) =>
    setOpenDropdown(openDropdown === id ? null : id);

  const sectionLinks = [
    { id: "home", label: lang === "ro" ? "Acasă" : "Home", href: "#home" },
    {
      id: "aboutaspero",
      label: lang === "ro" ? "Despre Noi" : "About Us",
      href: "#aboutaspero",
    },
    {
      id: "categories",
      label: lang === "ro" ? "Categorii" : "Categories",
      href: "#categories",
    },
    {
      id: "features",
      label: lang === "ro" ? "Funcționalități" : "Features",
      hasDropdown: true,
      dropdown: [
        {
          label: lang === "ro" ? "Pentru instituții" : "For Institutions",
          target: "#featuresforinstitutions",
        },
        {
          label: lang === "ro" ? "Pentru profesori" : "For Teachers",
          target: "#featuresforteachers",
        },
        {
          label: lang === "ro" ? "Pentru studenți" : "For Students",
          target: "#featuresforstudents",
        },
      ],
    },
    {
      id: "contact",
      label: lang === "ro" ? "Contact" : "Contact",
      href: "#contact",
    },
  ];

  // LOGO
  const Logo = () => (
    <Link
      href="/"
      className="flex items-center group"
      style={{ lineHeight: 1 }}
    >
      <Image
        src="/images/logo-header.png"
        alt="Aspero logo"
        width={40}
        height={40}
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
        priority
      />
      <span
        className="ml-2 font-bold text-2xl md:text-3xl text-white font-poppins"
        style={{ letterSpacing: "-0.02em" }}
      >
        Aspero<sup className="text-xs font-normal align-super">®</sup>
      </span>
    </Link>
  );

  // NAVIGATION LINKS
  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center text-base font-medium">
      {sectionLinks.map(({ id, label, href, hasDropdown, dropdown }) => (
        <li
          key={id}
          className="relative group"
          tabIndex={0}
          onBlur={() => setOpenDropdown(null)}
        >
          {hasDropdown ? (
            <>
              <button
                className="flex items-center gap-1 px-2 py-1 font-semibold text-light hover:text-primary-400 transition rounded"
                onClick={() => handleDropdown(id)}
                aria-expanded={openDropdown === id}
                aria-controls={`${id}-dropdown`}
                type="button"
              >
                {label}
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform ${
                    openDropdown === id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === id && (
                <ul
                  id={`${id}-dropdown`}
                  className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-gray-900/95 dark:bg-gray-800/95 z-40 py-2"
                >
                  {dropdown.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.target}
                        className="block px-4 py-2 text-light hover:text-primary-400"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <a
              href={href}
              className="px-2 py-1 font-medium text-light hover:text-primary-400 transition"
              onClick={() => setNavOpen(false)}
            >
              {label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );

  // "WORK WITH US" Button
  const WorkWithUsButton = () => (
    <a
      href="#"
      className="px-4 py-2 bg-[#b3aaff] text-hero5 font-semibold rounded-full shadow text-base font-poppins hover:bg-hero2 transition whitespace-nowrap"
    >
      {lang === "ro" ? "LUCREAZĂ CU NOI" : "WORK WITH US"}
    </a>
  );

  // Language Switcher and Theme
  const ExtraActions = () => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLang("ro")}
        className={`px-2 ${lang === "ro" ? "font-bold underline" : ""}`}
      >
        RO
      </button>
      <span className="text-white/70">|</span>
      <button
        onClick={() => setLang("en")}
        className={`px-2 ${lang === "en" ? "font-bold underline" : ""}`}
      >
        EN
      </button>
      {reloaded && (
        <LinkButton
          button
          onClick={toggleDarkMode}
          title="Toggle dark mode"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Moon /> : <Sun />}
        </LinkButton>
      )}
    </div>
  );

  return (
    <header
      className="fixed w-full z-30 bg-hero5 shadow-none px-0"
      style={{ top: 0, left: 0 }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between h-[90px] px-8 max-w-[1350px] mx-auto">
        <Logo />
        <nav className="flex-1 flex justify-center">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-4">
          <WorkWithUsButton />
          <ExtraActions />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden px-4 pt-4 pb-2 bg-hero5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
            {/* Place WorkWithUsButton next to logo on mobile */}
            <WorkWithUsButton />
          </div>
          <div className="flex items-center gap-2">
            <ExtraActions />
            {/* Hamburger for mobile */}
            <button
              className="p-2 rounded focus:outline-none ml-2"
              aria-label="Toggle navigation"
              onClick={() => setNavOpen((o) => !o)}
            >
              {navOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {navOpen && (
        <nav className="md:hidden bg-gray-900/95 dark:bg-gray-800/95 w-full absolute top-[70px] left-0 shadow-lg transition-all z-50">
          <div className="flex flex-col gap-4 px-6 py-6">
            <NavLinks />
            {/* Only show on drawer if you want double button */}
            {/* <WorkWithUsButton /> */}
            {/* <ExtraActions /> */}
          </div>
        </nav>
      )}
    </header>
  );
};
