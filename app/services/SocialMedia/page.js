import SocialMediaContent from "./SocialMediaContent";

export const metadata = {
  title: "Social Media Services | Actal Digital",
  description: "Building engaged communities and driving viral growth for brands.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "Social Media Services | Actal Digital",
    description: "Turning followers into loyal customers.",
    url: 'https://actaldigital.com/services/SocialMedia',
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

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}