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
      <footer className="max-w-7xl mx-auto bg-[#5566b8] rounded-t-[40px] py-10 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Logo & Newsletter */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/images/logo-footer.png"
              alt="Aspero Logo"
              width={70}
              height={70}
              className="mb-3"
              priority
            />
            <p className="text-white text-sm md:text-base mb-4 font-poppins max-w-sm">
              {t.newsletterTitle}
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-xs flex border border-white bg-white rounded-full overflow-hidden"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                ref={emailRef}
                name="email"
                type="email"
                required
                placeholder={t.newsletterPlaceholder}
                className="flex-grow px-4 py-2 text-sm text-black placeholder-gray-500 font-poppins bg-transparent"
              />
              <button
                type="submit"
                className="w-10 h-10 m-1 rounded-full bg-black border-2 border-white flex items-center justify-center"
              >
                {t.subscribeBtn}
              </button>
            </form>
            {successMessage && (
              <p
                className={`text-white text-sm mt-2 ${
                  successVisible ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              >
                {successMessage}
              </p>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-3">{t.company}</h4>
            <ul className="space-y-1">
              {t.nav.map((item) => (
                <li key={item.to}>
                  <a
                    href={item.to}
                    className="text-white/90 hover:underline text-sm font-poppins"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-3">{t.social}</h4>
            <ul className="space-y-1">
              {t.socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:underline text-sm font-poppins"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
