import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html suppressHydrationWarning>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  const storageKey = "usehooks-ts-dark-mode";
                  const classNameDark = "dark";

                  function setClassOnDocument(darkMode) {
                    if (darkMode) {
                      document.documentElement.classList.add(classNameDark);
                      document.documentElement.style.setProperty("color-scheme", "dark");
                    } else {
                      document.documentElement.classList.remove(classNameDark);
                      document.documentElement.style.setProperty("color-scheme", "light");
                    }
                  }

                  try {
                    const storedTheme = localStorage.getItem(storageKey);
                    if (storedTheme !== null) {
                      setClassOnDocument(JSON.parse(storedTheme));
                    } else {
                      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                      setClassOnDocument(prefersDark);
                      localStorage.setItem(storageKey, JSON.stringify(prefersDark));
                    }
                  } catch (e) {
                    console.warn("Error accessing localStorage or window:", e);
                  }
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
