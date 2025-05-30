import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function TermsPage() {
  const { lang } = useLanguage();
  const router = useRouter();

  const titles: Record<"ro" | "en", string> = {
    ro: "Termenii și Condițiile",
    en: "Terms and Conditions",
  };

  const messages: Record<"ro" | "en", string> = {
    ro: "Conținut în curs de actualizare",
    en: "Content is being updated",
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === "/") {
        const scrollY = sessionStorage.getItem("scroll-position");
        if (scrollY) {
          setTimeout(() => {
            window.scrollTo({ top: parseInt(scrollY), behavior: "smooth" });
            sessionStorage.removeItem("scroll-position");
          }, 100);
        }
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#5566b8] font-poppins">
        {titles[lang]}
      </h1>
      <p className="text-lg text-gray-700 font-poppins">{messages[lang]}</p>
    </div>
  );
}
