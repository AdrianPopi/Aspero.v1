// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ro", "en"],
    defaultLocale: "ro",
    localeDetection: false, // ← disable auto-redirect based on browser language
  },
};

module.exports = nextConfig;
