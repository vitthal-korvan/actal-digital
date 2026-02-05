import BrandingContent from "./BrandingContent";

export const metadata = {
  title: "Branding Services | Actal Digital",
  description: "Uncovering what makes your brand unique with comprehensive branding strategies.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "Branding Services | Actal Digital",
    description: "Definition, Strategy, Identity, and Launch.",
    url: 'https://actaldigital.com/services/ORM',
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

export default function BrandingPage() {
  return <BrandingContent />;
}