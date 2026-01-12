import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Actal Digital — Design & Digital Experiences",
  description: "Digital-first branding agency. Crafting identities for future-tech leaders.",
  keywords: ["Digital Design", "Branding", "Web Development", "UX/UI", "Next.js", "Vitthal Korvan"],
  authors: [{ name: "Vitthal Korvan" }],
  creator: "Vitthal Korvan",
  openGraph: {
    title: "Actal Digital — Design & Digital Experiences",
    description: "Digital-first branding agency. Crafting identities for future-tech leaders.",
    url: 'https://actaldigital.com',
    siteName: 'Actal Digital',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Actal Digital Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Actal Digital — Design & Digital Experiences",
    description: "Digital-first branding agency. Crafting identities for future-tech leaders.",
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
