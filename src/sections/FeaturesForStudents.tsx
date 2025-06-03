import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useRouter } from "next/router";

// Content for both languages
const content = {
  ro: {
    cardTitle: "Pentru studenți",
    subtitle: "Învață eficient. În ritmul tău.",
    description: (
      <>
        Aspero le oferă studenților un mediu educațional flexibil, modern și
        adaptabil. Cu ajutorul exercițiilor generate procedural, al
        feedback-ului instantaneu și al resurselor multimedia, fiecare student
        poate învăța <strong>în propriul ritm, oricând și de oriunde.</strong>{" "}
        Platforma încurajează și colaborarea prin funcții dedicate de lucru în
        echipă, analiză asistată de inteligență artificială și urmărirea
        progresului prin statistici personalizate, transformând învățarea într-o
        experiență mai clară, mai motivantă și mai profundă.
      </>
    ),
    cta: "Citește mai mult",
  },
  en: {
    cardTitle: "For Students",
    subtitle: "Learn efficiently. At your own pace.",
    description: (
      <>
        Aspero offers students a flexible, modern, and adaptable educational
        environment. With procedurally generated exercises, instant feedback,
        and multimedia resources, each student can learn{" "}
        <strong>at their own pace, anytime and anywhere.</strong> The platform
        also encourages collaboration through team features, AI-assisted
        analytics, and personalized progress tracking, turning learning into a
        clearer, more motivating, and deeper experience.
      </>
    ),
    cta: "Read more",
  },
};

export const FeaturesForStudents = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  const router = useRouter();

  return (
    <section
      id="featuresforstudents"
      className="scroll-mt-24 w-full bg-[#ced6ff] px-0 py-0 relative overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-4 py-8 md:py-12 px-4 md:px-24">
        {/* Text on the left */}
        <div
          className="flex-1 flex flex-col items-start z-10 w-full max-w-xl"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="flex items-center mb-1 gap-2">
            <span
              className="text-xl md:text-3xl font-bold text-[#131336]"
              style={{ fontFamily: "Poppins-Bold, Poppins, sans-serif" }}
            >
              {t.cardTitle}
            </span>
            <Image
              src="/images/student-icon.png"
              alt="student icon"
              width={32}
              height={32}
              className="w-7 h-7 md:w-8 md:h-8"
            />
          </div>
          <div style={{ height: "10px" }}></div>
          <div
            className="text-base md:text-lg font-normal text-[#5566b8] mb-2"
            style={{ fontFamily: "Poppins-Regular, Poppins, sans-serif" }}
          >
            {t.subtitle}
          </div>
          <div style={{ height: "10px" }}></div>
          <div className="glass-card-light p-6 mb-5 w-full text-features-align">
            <p className="text-[15px] md:text-base text-[#22223b] text-justify font-poppins leading-relaxed m-0">
              {t.description}
            </p>
          </div>

          <style jsx>{`
            @media (min-width: 768px) {
              .text-features-align {
                max-width: 30vw !important;
              }
            }
          `}</style>
          <Link href="/features-for-students">
            <button
              onClick={() => {
                sessionStorage.setItem(
                  "scroll-position",
                  String(window.scrollY)
                );
                router.push("/features-for-students");
              }}
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="700"
              className="mt-2 px-6 py-2 rounded-full bg-[rgb(255,255,255)] text-[#22223b] border border-[#fff] hover:bg-white font-poppins text-[15px] shadow transition"
              style={{ fontWeight: 500 }}
            >
              {t.cta}
            </button>
          </Link>
        </div>
        {/* Right: Image */}
        <div
          className="flex-1 flex items-center justify-center w-full md:h-[420px]"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <Image
            src="/images/student.png"
            alt="Student"
            width={600}
            height={420}
            className="image-section"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesForStudents;
