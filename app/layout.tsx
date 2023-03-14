export const metadata = {
  title: "Аион интерактивная карта",
  description: "Аион интерактивные карта. Айон карты",
  icons: {
    icon: "/favicon.ico",
  },
};

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
