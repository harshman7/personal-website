import type { Metadata } from "next";
import { DM_Serif_Display, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/profile";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.fullName} – Portfolio`,
  description: profile.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${ibmPlexSans.variable} ${dmSerifDisplay.variable} min-h-full font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
