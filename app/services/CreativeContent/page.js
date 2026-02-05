import CreativeContentContent from "./CreativeContentContent";

export const metadata = {
  title: "Creative Content Services | Actal Digital",
  description: "Crafting compelling stories and content that captures attention.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "Creative Content Services | Actal Digital",
    description: "Building trust and connection with your audience.",
    url: 'https://actaldigital.com/services/CreativeContent',
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

export default function CreativeContentPage() {
  return <CreativeContentContent />;
}