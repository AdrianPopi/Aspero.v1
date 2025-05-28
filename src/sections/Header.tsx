import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setNavOpen(false);
      }
    };
    if (navOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navOpen]);

  useEffectOnce(() => setReloaded(true));
  useEventListener("resize", () => {
    if (window.innerWidth >= 768) setNavOpen(false);
  });

  useEffect(() => {
    if (!navOpen) setOpenDropdown(null);
  }, [navOpen]);

  const sectionLinks = [
    { id: "home", label: lang === "ro" ? "Acasă" : "Home", href: "/#home" },
    {
      id: "aboutaspero",
      label: lang === "ro" ? "Despre Noi" : "About Us",
      href: "/#aboutaspero",
    },
    {
      id: "categories",
      label: lang === "ro" ? "Categorii" : "Categories",
      href: "/#categories",
    },
    {
      id: "features",
      label: lang === "ro" ? "Funcționalități" : "Features",
      hasDropdown: true,
      dropdown: [
        {
          label: lang === "ro" ? "Pentru instituții" : "For Institutions",
          target: "/#featuresforinstitutions",
        },
        {
          label: lang === "ro" ? "Pentru profesori" : "For Teachers",
          target: "/#featuresforteachers",
        },
        {
          label: lang === "ro" ? "Pentru studenți" : "For Students",
          target: "/#featuresforstudents",
        },
      ],
    },
    {
      id: "team",
      label: lang === "ro" ? "Echipa" : "Team",
      href: "/#team",
    },
    {
      id: "contact",
      label: lang === "ro" ? "Contact" : "Contact",
      href: "/#contact",
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

  // Now passing setOpenDropdown!
  const NavLinks = ({
    onLinkClick,
    setOpenDropdown,
  }: {
    onLinkClick?: () => void;
    setOpenDropdown: (val: string | null) => void;
  }) => (
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
                      <Link href={item.target} scroll={false}>
                        <span
                          className="block px-4 py-2 text-white hover:text-[#5566b8]"
                          onClick={() => {
                            if (onLinkClick) onLinkClick();
                            setOpenDropdown(null); // This closes dropdown!
                          }}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <Link href={href ?? "/"} scroll={false}>
              <span
                className={`px-2 py-1 transition ${
                  router.asPath === href
                    ? "text-[#5566b8] font-semibold"
                    : "text-white font-normal"
                } hover:text-[#5566b8]`}
                onClick={onLinkClick}
              >
                {label}
              </span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  const ExtraActions = () => (
    <div className="flex items-center gap-2 ml-4">
      <button
        onClick={() => setLang("ro")}
        className={`px-2 text-white ${
          lang === "ro" ? "font-bold underline" : ""
        }`}
      >
        RO
      </button>
      <span className="text-white">|</span>
      <button
        onClick={() => setLang("en")}
        className={`px-2 text-white ${
          lang === "en" ? "font-bold underline" : ""
        }`}
      >
        EN
      </button>
      {reloaded && (
        <LinkButton
          button
          onClick={toggleDarkMode}
          title="Toggle dark mode"
          className="text-white"
        >
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
          <NavLinks setOpenDropdown={setOpenDropdown} />
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="hidden md:inline-flex px-3 py-1.5 bg-[#5566b8] text-white text-xs font-normal rounded-full shadow-sm font-poppins hover:bg-[#4455a0] transition"
          >
            {lang === "ro" ? "LUCREAZĂ CU NOI" : "WORK WITH US"}
          </a>
          <ExtraActions />
        </div>
        {!navOpen && (
          <button
            className="md:hidden p-2 rounded focus:outline-none ml-2 text-white"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen(true)}
          >
            <Menu size={28} />
          </button>
        )}
      </div>

      {navOpen && (
        <nav
          ref={drawerRef}
          className="md:hidden fixed inset-x-0 top-[80px] pb-6 bg-gray-900/95 w-full z-50 overflow-auto"
        >
          <button
            onClick={() => setNavOpen(false)}
            className="absolute top-4 right-4 p-2"
            aria-label="Close menu"
          >
            <X size={24} className="text-white" />
          </button>
          <div className="flex flex-col gap-4 px-6 pt-12">
            <NavLinks
              onLinkClick={() => setNavOpen(false)}
              setOpenDropdown={setOpenDropdown}
            />
            <a
              href="#"
              className="inline-flex md:hidden self-start max-w-max px-3 py-1.5 bg-[#5566b8] text-white text-xs font-normal rounded-full shadow-sm font-poppins hover:bg-[#4455a0] transition"
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
