import localFont from "next/font/local";

export const poppinsBold = localFont({
  src: "../../public/fonts/Poppins-Bold.ttf", // <-- note the two dots!
  weight: "700",
  variable: "--font-poppins-bold",
});

export const poppinsRegular = localFont({
  src: "../../public/fonts/Poppins-Regular.ttf", // <-- note the two dots!
  weight: "400",
  variable: "--font-poppins-regular",
});
