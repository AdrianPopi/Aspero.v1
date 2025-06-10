import "aos/dist/aos.css";
import "../styles/globals.css";

import AOS from "aos";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { useDarkMode } from "../src/hooks/useDarkMode";
import { LanguageProvider } from "../src/context/LanguageContext";

const siteTitle = "Aspero";
const siteDescription = "Aspero";

const App = ({ Component, pageProps }: AppProps) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Initialize animations
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <LanguageProvider>
      <>
        <Head>
          <title>Aspero</title>
          <meta name="description" content="Aspero Educational Platform" />
          <link rel="icon" href="/icons/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          <link rel="manifest" href="/icons/site.webmanifest" />
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
