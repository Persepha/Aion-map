export const metadata = {
  title: "Аион интерактивная карта",
  description: "Аион интерактивные карта. Айон карты",
  icons: {
    icon: "/images/favicon.ico",
  },
};

import "../styles/globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
