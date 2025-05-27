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
        { label: "Funcționalități", to: "#featuresforinstitutions" },
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
        { label: "Features", to: "#featuresforinstitutions" },
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
    // Outer background (full width, bg-hero5)
    <div className="w-full bg-[#0c0c29] pt-0 pb-0">
      {/* Footer card with rounded corners */}
      <footer className="max-w-7xl mx-auto bg-[#5566b8] rounded-t-[40px] pt-10 pb-6 px-4 md:px-16 mt-0">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          {/* Left: Logo and Newsletter */}
          <div className="flex-1 flex flex-col items-center mb-8 md:mb-0">
            <Image
              src="/images/logo-footer.png"
              alt="Aspero Logo"
              width={90}
              height={90}
              className="mb-2 w-20 md:w-[90px] h-auto"
              style={{ height: "auto" }}
              priority
            />

            <p className="font-poppins font-normal text-white text-sm mb-4 text-center md:text-left">
              {t.newsletterTitle}
            </p>

            <form className="relative w-full max-w-md bg-white rounded-full p-2 pr-0 border border-[#ffffff]">
              <input
                className="flex-1 px-4 py-2 rounded-full bg-transparent text-base font-poppins font-normal outline-none text-gray-700 placeholder-[#b8bed6]"
                type="email"
                placeholder={t.newsletterPlaceholder}
              />
              <button
                type="submit"
                className="
                  absolute right-2 top-1/2
                  -translate-y-1/2
                  flex items-center justify-center
                  w-10 h-10 bg-black rounded-full
                  border-2 border-white
               "
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M8 12h8m-3-3 3 3-3 3"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
          {/* Right: Navigation Columns */}
          <div className="flex-[2] flex flex-col md:flex-row justify-evenly items-center md:items-start w-full gap-10 md:gap-0">
            {/* Company */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h4 className="font-poppins font-bold text-white text-sm md:text-base mb-3">
                {t.company}
              </h4>
              <ul className="space-y-2">
                {t.nav.map((item) => (
                  <li key={item.to}>
                    <a
                      href={item.to}
                      className="font-poppins font-normal text-white/90 hover:underline text-sm md:text-lg"
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
                      className="font-poppins font-normal text-white/90 hover:underline text-sm md:text-lg"
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
                      className="font-poppins font-normal text-white/90 hover:underline text-sm md:text-lg"
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
    </div>
  );
};

export default Footer;
