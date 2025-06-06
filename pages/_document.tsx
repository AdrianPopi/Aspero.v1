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
    const localStorageTheme = localStorage.getItem(storageKey);
    if (localStorageTheme !== null) {
      setClassOnDocument(JSON.parse(localStorageTheme));
    }
  } catch (e) {}
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
