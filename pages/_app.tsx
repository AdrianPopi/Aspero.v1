import "aos/dist/aos.css";
import "../styles/globals.css";

import AOS from "aos";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { useDarkMode, useEffectOnce } from "usehooks-ts";
import { LanguageProvider } from "../src/context/LanguageContext";

const siteTitle = "Aspero ";
const siteDescription =
  "Make CSS styling a breeze with Vivid's in-browser visual editor that automatically updates your code.";

const App = ({ Component, pageProps }: AppProps) => {
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("color-scheme", "light");
    }
  }, [isDarkMode]);

  // Initialize animations
  useEffectOnce(() => {
    AOS.init({
      once: true,
      disable: process.env.NODE_ENV === "development" ? true : "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <LanguageProvider>
      <>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" href="/icons/favicon.ico" />
          <meta
            property="og:image"
            content="https://vivid.lol/images/landing-page.png"
          />
        </Head>
        <NextSeo
          title={siteTitle}
          description={siteDescription}
          themeColor={isDarkMode ? "#18181b" : "#fafafa"}
          openGraph={{
            title: siteTitle,
            description: siteDescription,
          }}
        />
        <Component
          {...pageProps}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </>
    </LanguageProvider>
  );
};

export default App;
