import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";
import { LinkButton } from "../components/LinkButton";
import { Moon, Sun } from "../svg/DarkModeIcons";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/router";

export const Header = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const { lang, setLang } = useLanguage();
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [reloaded, setReloaded] = useState(false);
  const router = useRouter();

  useEffectOnce(() => setReloaded(true));
  useEventListener("resize", () => {
    if (window.innerWidth >= 768) setNavOpen(false);
  });

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

  const handleDropdown = (id: string) =>
    setOpenDropdown(openDropdown === id ? null : id);

  const Logo = () => (
    <Link href="/" className="flex items-center mr-8">
      <Image
        src="/images/logo-header.png"
        alt="Aspero logo"
        width={40}
        height={40}
        className="w-10 h-10 md:w-12 md:h-12"
        priority
      />
      <span className="ml-2 font-bold text-2xl md:text-3xl text-white font-poppins">
        Aspero<sup className="text-xs font-normal align-super">®</sup>
      </span>
    </Link>
  );

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
                type="button"
                onClick={() => handleDropdown(id)}
                className="flex items-center gap-1 px-2 py-1 font-semibold text-white hover:text-[#5566b8] transition rounded"
                aria-expanded={openDropdown === id}
                aria-controls={`${id}-dropdown`}
              >
                {label}
                <ChevronDown
                  size={16}
                  className={`${
                    openDropdown === id ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>
              {openDropdown === id && (
                <ul
                  id={`${id}-dropdown`}
                  className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-gray-900/95 z-40 py-2"
                >
                  {dropdown!.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.target}
                        onClick={() => setNavOpen(false)}
                        className="block px-4 py-2 text-white hover:text-[#5566b8]"
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
              onClick={() => setNavOpen(false)}
              className={`
                px-2 py-1 transition
                ${
                  router.asPath === href
                    ? "text-[#5566b8] font-semibold"
                    : "text-white font-normal"
                }
                hover:text-[#5566b8]
              `}
            >
              {label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );

  const ExtraActions = () => (
    <div className="flex items-center gap-2 ml-4">
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
        <LinkButton button onClick={toggleDarkMode} title="Toggle dark mode">
          {isDarkMode ? <Moon /> : <Sun />}
        </LinkButton>
      )}
    </div>
  );

  return (
    <header className="fixed w-full z-30 bg-hero5 px-0">
      <div className="flex items-center justify-between h-[80px] px-4 md:px-8 max-w-[1350px] mx-auto">
        <Logo />

        <nav className="flex-1 hidden md:flex justify-center">
          <NavLinks />
        </nav>

        <div className="flex items-center space-x-4">
          {/* Desktop-only Work With Us */}
          <a
            href="#"
            className="
              hidden md:inline-flex
                
              px-3 py-1.5
              bg-[#5566b8] text-white text-xs font-normal
              rounded-full shadow-sm font-poppins
              hover:bg-[#4455a0] transition
            "
          >
            {lang === "ro" ? "LUCREAZĂ CU NOI" : "WORK WITH US"}
          </a>
          <ExtraActions />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none ml-2"
          aria-label="Toggle navigation"
          onClick={() => setNavOpen((o) => !o)}
        >
          {navOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {navOpen && (
        <nav className="md:hidden fixed inset-x-0 top-0 pt-[80px] pb-6 bg-gray-900/95 w-full z-50 overflow-auto">
          <div className="flex flex-col gap-4 px-6">
            <NavLinks />

            {/* Mobile-only Work With Us */}
            <a
              href="#"
              className="
                inline-flex md:hidden
                self-start max-w-max
                px-3 py-1.5
                bg-[#5566b8] text-white text-xs font-normal
                rounded-full shadow-sm font-poppins
                hover:bg-[#4455a0] transition
              "
              onClick={() => setNavOpen(false)}
            >
              {lang === "ro" ? "LUCREAZĂ CU NOI" : "WORK WITH US"}
            </a>

            <ExtraActions />
          </div>
        </nav>
      )}
    </header>
  );
};
