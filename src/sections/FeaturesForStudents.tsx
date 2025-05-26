import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

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
        poate învăța <b>în propriul ritm, oricând și de oriunde.</b> Platforma
        încurajează și colaborarea prin funcții dedicate de lucru în echipă,
        analiză asistată de inteligență artificială și urmărirea progresului
        prin statistici personalizate, transformând învățarea într-o experiență
        mai clară, mai motivantă și mai profundă.
      </>
    ),
    cta: "Vezi cum funcționează",
  },
  en: {
    cardTitle: "For Students",
    subtitle: "Learn efficiently. At your own pace.",
    description: (
      <>
        Aspero offers students a flexible, modern, and adaptable educational
        environment. With procedurally generated exercises, instant feedback,
        and multimedia resources, each student can learn{" "}
        <b>at their own pace, anytime and anywhere.</b> The platform also
        encourages collaboration through team features, AI-assisted analytics,
        and personalized progress tracking, turning learning into a clearer,
        more motivating, and deeper experience.
      </>
    ),
    cta: "See how it works",
  },
};

export const FeaturesForStudents = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section
      id="featuresforstudents"
      className="w-full bg-[#dde3fc] px-0 py-0 relative overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 py-10 md:py-16 px-4 md:px-24">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col items-start gap-3 z-10 w-full max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#131336] tracking-tight"
              style={{ fontFamily: "Poppins-Bold, Poppins, sans-serif" }}
            >
              {t.cardTitle}
            </h2>
            <Image
              src="/images/student-icon.png"
              alt="student icon"
              width={28}
              height={28}
              className="w-6 h-auto"
            />
          </div>
          <div
            className="text-base md:text-lg font-semibold text-[#5b6a8c] mb-2"
            style={{ fontFamily: "Poppins-Regular, Poppins, sans-serif" }}
          >
            {t.subtitle}
          </div>
          <div className="text-[15px] md:text-base text-[#22223b] mb-4 max-w-2xl">
            {t.description}
          </div>
          <button
            className="mt-2 px-5 py-2 rounded-full bg-white text-[#22223b] border border-[#aaa] hover:bg-[#ece8ff] font-poppins text-[15px] shadow transition"
            style={{ fontWeight: 500 }}
          >
            {t.cta}
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center w-full max-w-xl">
          <Image
            src="/images/student.png"
            alt="Student"
            width={500}
            height={380}
            className="rounded-[18px] object-cover w-full h-52 md:h-[350px]"
            style={{
              minWidth: 240,
              maxWidth: 480,
              boxShadow: "0 8px 32px rgba(52,45,140,0.12)",
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesForStudents;
