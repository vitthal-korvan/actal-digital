import { Inter, Manrope } from "next/font/google";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Actal Digital — Design & Digital Experiences",
    template: "%s | Actal Digital"
  },
  description: "Digital-first branding agency. Crafting identities for future-tech leaders.",
  keywords: ["Digital Design", "Branding", "Web Development", "UX/UI", "Next.js", "Vitthal Korvan", "Omkar Dhane", "Zameer Shaikh"],
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  creator: "Vitthal Korvan, Omkar Dhane, Zameer Shaikh",
  manufacturer: "Actal Digital Team",
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
    creator: "@actaldigital"
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
