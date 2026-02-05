import PrivacyContent from "./PrivacyContent";

export const metadata = {
  title: "Privacy Policy | Actal Digital",
  description: "How we collect, use, and protect your information.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "Privacy Policy | Actal Digital",
    description: "Data Protection and Privacy Policy.",
    url: 'https://actaldigital.com/privacy',
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

export default function PrivacyPage() {
  return <PrivacyContent />;
}