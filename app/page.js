import HomeContent from "./components/HomeContent";

export const metadata = {
  title: "Actal Digital — Design & Digital Experiences",
  description: "Digital-first branding agency. Crafting identities for future-tech leaders.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
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
};

export default function Home() {
  return <HomeContent />;
}