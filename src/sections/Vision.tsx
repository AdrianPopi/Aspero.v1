import { useLanguage } from "../context/LanguageContext";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../components/useInViewAnimation";

export const Vision = () => {
  const { lang } = useLanguage();
  const router = useRouter();

  const content = {
    ro: {
      title: "Viziunea noastră",
      text: (
        <>
          Noi suntem de fermă părere că nu trebuie niciodată uitat faptul că, la
          nivel fundamental, educația este un proces holistic, proces care nu
          poate fi limitat la sala de curs sau la un unic sistem de predare. De
          asemenea, noi mai considerăm că, deși actualmente viciat de lipsa
          digitalizării, ineficienta gestiune a fondurilor și o generală frică
          de schimbare, sistemul educațional din România are totuși și niște
          părți bune care-i oferă premisele de a se putea îmbunătăți substanțial
          pe termen scurt, mediu și lung.
        </>
      ),
      button: "Citește mai mult",
    },
    en: {
      title: "Our Vision",
      text: (
        <>
          We firmly believe that, at its most fundamental level, education is a
          holistic process, which cannot be confined to the classroom or to a
          single delivery system. We also believe that, although currently
          marred by a lack of digitalization, inefficient fund management and a
          general fear of change, the Romanian education system still does have
          several great traits which would allow it to develop in a favourable
          direction both in a short-term and a long-term timeframe.
        </>
      ),
      button: "Read more",
    },
  };

  const { ref: visionRef, isVisible } = useInViewAnimation(0.4);

  return (
    <section
      id="vision"
      className="scroll-mt-24 w-full bg-hero5 flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-24 gap-10"
      style={{ minHeight: "65vh" }}
      ref={visionRef}
    >
      {/* Left: TEXT */}
      <motion.div
        className="flex-1 max-w-xl text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 font-poppins">
          {content[lang].title}
        </h2>

        <motion.div
          className="relative mb-6 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div
            className="
              w-full rounded-[40px] overflow-hidden shadow-2xl
              bg-[#22223b]/30 backdrop-blur-md
            "
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
            }}
          >
            <div className="p-6">
              <p className="text-[15px] md:text-base text-[#fff] text-justify leading-relaxed font-poppins">
                {content[lang].text}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.button
          onClick={() => {
            sessionStorage.setItem(
              "scroll-position",
              window.scrollY.toString()
            );
            router.push("/our-vision");
          }}
          className="bg-[#ffffff] text-hero5 font-poppins text-[15px] font-normal rounded-full px-6 py-2 shadow hover:bg-[#ffffff] transition"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          {content[lang].button}
        </motion.button>
      </motion.div>

      {/* Right: IMAGE */}
      <motion.div
        className="flex-1 flex items-center justify-center min-w-[260px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{
          delay: 0.3,
          duration: 0.6,
          type: "spring",
          stiffness: 80,
        }}
      >
        <Image
          src="/images/vision.png"
          alt="Vision"
          width={520}
          height={380}
          className="image-section"
          priority
        />
      </motion.div>
    </section>
  );
};

export default Vision;
