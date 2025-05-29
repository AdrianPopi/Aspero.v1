import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useRef, useState } from "react";

export const Footer = () => {
  const { lang } = useLanguage();
  const emailRef = useRef<HTMLInputElement>(null);

  const [successVisible, setSuccessVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    await fetch("https://formsubmit.co/adresa@ta.com", {
      method: "POST",
      body: formData,
    });

    setSuccessMessage(t.successMessage);
    setSuccessVisible(true);
    form.reset();

    // Dispar automat după 3 secunde
    setTimeout(() => {
      setSuccessVisible(false);
    }, 3000);
  };

  const content = {
    ro: {
      newsletterTitle:
        "Rămâi la curent și abonează-te la newsletter-ul Aspero:",
      newsletterPlaceholder: "Introdu adresa ta de e-mail",
      company: "Aspero",
      social: "Social",
      successMessage: "Te-ai abonat cu succes!",
      nav: [
        { label: "Acasă", to: "#home" },
        { label: "Despre", to: "#aboutaspero" },
        { label: "Viziune", to: "#vision" },
        { label: "Categorii", to: "#categories" },
        { label: "Funcționalități", to: "#featuresforinstitutions" },
      ],

      socials: [
        { label: "Facebook", href: "https://facebook.com/" },
        { label: "Instagram", href: "https://instagram.com/" },
        { label: "Youtube", href: "https://youtube.com/" },
      ],

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
      company: "Aspero",
      social: "Social",
      successMessage: "You have successfully subscribed!",
      nav: [
        { label: "Home", to: "#home" },
        { label: "About", to: "#aboutaspero" },
        { label: "Vision", to: "#vision" },
        { label: "Categories", to: "#categories" },
        { label: "Features", to: "#featuresforinstitutions" },
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

            <p className="font-poppins font-normal text-white text-sm mb-4 text-center max-w-full md:max-w-2xl md:text-base">
              {t.newsletterTitle}
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md border border-white bg-white rounded-full flex overflow-hidden"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                ref={emailRef}
                name="email"
                type="email"
                required
                placeholder={t.newsletterPlaceholder}
                className="flex-grow px-4 py-2 text-sm md:text-base text-black placeholder-[#6b7280] font-poppins font-normal outline-none bg-transparent"
              />
              <button
                type="submit"
                className="flex-shrink-0 w-10 h-10 m-2 rounded-full bg-black border-2 border-white flex items-center justify-center"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
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
            {successMessage && (
              <p
                className={`
    text-white text-sm font-poppins mt-2 transition-opacity duration-500
    ${successVisible ? "opacity-100" : "opacity-0"}
  `}
              >
                {successMessage}
              </p>
            )}
          </div>
          {/* Right: Navigation Columns */}
          <div className="flex-[2] flex flex-col md:flex-row justify-evenly items-center md:items-start w-full gap-10 md:gap-0">
            {/* Aspero */}
            <div className="mb-6 md:mb-0 w-full flex flex-col items-center text-center">
              <h4 className="font-poppins font-bold text-white text-lg md:text-xl mb-3">
                {t.company}
              </h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-left">
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
