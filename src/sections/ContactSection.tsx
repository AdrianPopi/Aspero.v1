import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const content = {
  ro: {
    leftTitle: "Completați formularul",
    fields: {
      firstName: "Prenume",
      lastName: "Nume",
      email: "Adresa de e-mail",
      message: "Mesaj",
      send: "Trimite",
    },
    rightTitle: "Contactează-ne",
    description:
      "Indiferent dacă aveți întrebări despre serviciile noastre, aveți nevoie de asistență sau doriți să ne împărtășiți feedback-ul dvs., echipa noastră dedicată este aici pentru a vă ajuta la fiecare pas.",
    info: [
      {
        icon: "/images/email.png",
        label: "E-mail",
        value: "hello@reallygreatsite.com",
        href: "mailto:hello@reallygreatsite.com",
      },
      {
        icon: "/images/site.png",
        label: "Site web",
        value: "reallygreatsite.com",
        href: "https://reallygreatsite.com",
      },
      {
        icon: "/images/phone.png",
        label: "Telefon",
        value: "+123-456-7890",
        href: "tel:+1234567890",
      },
      {
        icon: "/images/location.png",
        label: "Locație",
        value: "Str. Oriunde nr. 123, Orice oraș",
      },
    ],
  },
  en: {
    leftTitle: "Fill out the form",
    fields: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      message: "Message",
      send: "Send",
    },
    rightTitle: "Contact us",
    description:
      "Whether you have questions about our services, need assistance or want to share your feedback, our dedicated team is here to help you every step of the way.",
    info: [
      {
        icon: "/images/email.png",
        label: "E-mail",
        value: "hello@reallygreatsite.com",
        href: "mailto:adrianioanpopi@gmail.com",
      },
      {
        icon: "/images/site.png",
        label: "Website",
        value: "reallygreatsite.com",
        href: "https://reallygreatsite.com",
      },
      {
        icon: "/images/phone.png",
        label: "Phone",
        value: "+123-456-7890",
        href: "tel:+1234567890",
      },
      {
        icon: "/images/location.png",
        label: "Location",
        value: "Str. Oriunde nr. 123, Any City",
      },
    ],
  },
};
export const ContactSection = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-[80vh] bg-[#0c0c29] py-10 px-2"
    >
      {/* Start bounded wrapper */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#0c0c29] rounded-[40px]">
        {/* Bubble absolutely positioned inside wrapper, so it never overflows */}
        <div
          className="absolute z-0 pointer-events-none w-[300px] md:w-[420px] h-auto"
          style={{
            right: "60px", // Adjust this for horizontal position
            bottom: "60px", // Adjust this for vertical position, higher = more inside card
          }}
        >
          <Image
            src="/images/bubble-contact-footer.png"
            alt="Bubble"
            width={1040}
            height={680}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Contact card */}
        <div
          className="relative z-10 w-full rounded-[26px] overflow-hidden px-4 py-7 sm:px-10 sm:py-10 flex flex-col md:flex-row gap-10"
          style={{
            backgroundColor: "rgba(64, 65, 84, 0.2)", // Use this!
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Left: Form */}
          <div className="relative z-10 flex-1 flex flex-col gap-5 md:pr-8">
            <form
              className="flex flex-col gap-5"
              method="POST"
              action="https://formsubmit.co/hello@reallygreatsite.com"
            >
              <input type="hidden" name="_captcha" value="false" />
              <h3 className="font-poppins font-bold text-white text-[1.3rem] sm:text-[1rem] mb-2">
                {t.leftTitle}
              </h3>
              <div className="flex flex-col md:flex-row gap-4 mb-2">
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor="firstName"
                    className="font-poppins font-normal text-[#f7f7fb] text-xs mb-1"
                  >
                    {t.fields.firstName}
                  </label>
                  <input
                    id="firstName"
                    name="First Name"
                    required
                    className="rounded-[10px] bg-[#f7f7fb] px-4 py-2 text-[#59596c] font-poppins font-normal text-[0.97rem] outline-none border-0"
                    type="text"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor="lastName"
                    className="font-poppins font-normal text-[#f7f7fb] text-xs mb-1"
                  >
                    {t.fields.lastName}
                  </label>
                  <input
                    id="lastName"
                    name="Last Name"
                    required
                    className="rounded-[10px] bg-[#f7f7fb] px-4 py-2 text-[#59596c] font-poppins font-normal text-[0.97rem] outline-none border-0"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <label
                  htmlFor="email"
                  className="font-poppins font-normal text-[#f7f7fb] text-xs mb-1"
                >
                  {t.fields.email}
                </label>
                <input
                  id="email"
                  name="Email"
                  required
                  className="rounded-[10px] bg-[#f7f7fb] px-4 py-2 text-[#59596c] font-poppins font-normal text-[0.97rem] outline-none border-0"
                  type="email"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label
                  htmlFor="message"
                  className="font-poppins font-normal text-[#f7f7fb] text-xs mb-1"
                >
                  {t.fields.message}
                </label>
                <textarea
                  id="message"
                  name="Message"
                  required
                  className="rounded-[10px] bg-[#f7f7fb] px-4 py-2 min-h-[110px] font-poppins font-normal text-xs text-[#59596c] outline-none border-0 resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-[90px] rounded-full bg-[#e8aff6] text-[#3d2e4a] font-poppins text-base py-1.5 hover:bg-[#e9cdf1] transition-all"
              >
                {t.fields.send}
              </button>
            </form>
          </div>
          {/* Right: Info */}

          <div className="relative z-10 flex-1 flex flex-col md:justify-start justify-center md:pl-6 mt-12">
            <h2 className="font-poppins font-bold text-[2.2rem] sm:text-[2.5rem] leading-none mb-3 text-[#e8aff6]">
              {t.rightTitle}
            </h2>
            <span className="block h-4"></span>
            <p className="font-poppins font-normal text-white text-xs mb-7 max-w-lg text-justify">
              {t.description}
            </p>
            <span className="block h-4"></span>
            <span className="block h-4"></span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {t.info.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center bg-[#e8aff6]/70">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={28}
                      height={28}
                    />
                  </div>
                  <div>
                    <div className="font-poppins font-normal text-white text-[0.95rem]">
                      {item.label}
                    </div>

                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-poppins font-normal text-white/90 hover:underline text-xs sm:text-xs leading-tight"
                        style={{ wordBreak: "break-all" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-poppins font-normal text-white/90 text-xs sm:text-xs leading-tight">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
