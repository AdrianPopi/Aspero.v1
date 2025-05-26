import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {
  const { lang } = useLanguage();

  const content = {
    ro: {
      newsletterTitle:
        "Rămâi la curent și abonează-te la newsletter-ul Aspero:",
      newsletterPlaceholder: "Introdu adresa ta de e-mail",
      company: "Companie",
      docs: "Documentare",
      social: "Social",
      nav: [
        { label: "Acasă", to: "#home" },
        { label: "Despre", to: "#aboutaspero" },
        { label: "Categorii", to: "#categories" },
        { label: "Funcționalități", to: "#features" },
      ],
      docsLinks: [
        { label: "Contact", to: "#contact" },
        { label: "FAQ", to: "#faq" },
        { label: "Politica de confidențialitate", to: "#privacy" },
      ],
      socials: [
        { label: "Facebook", href: "https://facebook.com/" },
        { label: "Instagram", href: "https://instagram.com/" },
        { label: "Youtube", href: "https://youtube.com/" },
      ],
      register: "ÎNREGISTRARE",
      subscribeBtn: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#181836" />
          <path
            d="M8 12h8m-3-3 3 3-3 3"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    en: {
      newsletterTitle:
        "Stay up to date and subscribe to the Aspero newsletter:",
      newsletterPlaceholder: "Enter your email address",
      company: "Company",
      docs: "Documentation",
      social: "Social",
      nav: [
        { label: "Home", to: "#home" },
        { label: "About", to: "#aboutaspero" },
        { label: "Categories", to: "#categories" },
        { label: "Features", to: "#features" },
      ],
      docsLinks: [
        { label: "Contact", to: "#contact" },
        { label: "FAQ", to: "#faq" },
        { label: "Privacy Policy", to: "#privacy" },
      ],
      socials: [
        { label: "Facebook", href: "https://facebook.com/" },
        { label: "Instagram", href: "https://instagram.com/" },
        { label: "Youtube", href: "https://youtube.com/" },
      ],
      register: "REGISTER",
      subscribeBtn: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#181836" />
          <path
            d="M8 12h8m-3-3 3 3-3 3"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  };

  const t = content[lang];

  return (
    <footer className="bg-[#6674c7] rounded-t-[60px] pt-10 pb-6 px-4 md:px-16 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0">
        {/* Left: Logo and Newsletter */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
          <Image
            src="/images/aspero-footer-logo.png"
            alt="Aspero Logo"
            width={90}
            height={90}
            className="mb-2 w-20 md:w-[90px] h-auto"
            style={{ height: "auto" }}
            priority
          />

          <p className="font-poppins font-bold text-white text-xl md:text-2xl mb-4 text-center md:text-left">
            {t.newsletterTitle}
          </p>
          <form
            className="w-full max-w-md flex items-center bg-white rounded-full p-2 pr-0 shadow-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="flex-1 px-4 py-2 rounded-full bg-transparent text-base font-poppins font-normal outline-none text-gray-700"
              type="email"
              placeholder={t.newsletterPlaceholder}
            />
            <button
              type="submit"
              className="flex items-center justify-center w-12 h-12 bg-black rounded-full hover:bg-hero5 transition-all"
            >
              {t.subscribeBtn}
            </button>
          </form>
        </div>
        {/* Right: Navigation Columns */}
        <div className="flex-[2] flex flex-col md:flex-row justify-evenly items-center md:items-start w-full gap-10 md:gap-0">
          {/* Company */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="font-poppins font-bold text-white text-lg md:text-xl mb-3">
              {t.company}
            </h4>
            <ul className="space-y-2">
              {t.nav.map((item) => (
                <li key={item.to}>
                  <a
                    href={item.to}
                    className="font-poppins font-normal text-white/90 hover:underline text-base md:text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Docs */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="font-poppins font-bold text-white text-lg md:text-xl mb-3">
              {t.docs}
            </h4>
            <ul className="space-y-2">
              {t.docsLinks.map((item) => (
                <li key={item.to}>
                  <a
                    href={item.to}
                    className="font-poppins font-normal text-white/90 hover:underline text-base md:text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social */}
          <div className="text-center md:text-left">
            <h4 className="font-poppins font-bold text-white text-lg md:text-xl mb-3">
              {t.social}
            </h4>
            <ul className="space-y-2">
              {t.socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins font-normal text-white/90 hover:underline text-base md:text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href="#register"
                className="uppercase text-white/80 text-xs md:text-sm font-bold tracking-widest hover:underline font-poppins"
              >
                {t.register}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
