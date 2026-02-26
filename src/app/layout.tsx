import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ohana | Kooperatywa Edukacyjna",
  description: "Ohana - Kooperatywa Edukacyjna. Strona w trakcie tworzenia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body
        className={`${plusJakarta.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
