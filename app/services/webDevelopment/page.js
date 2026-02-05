import WebDevContent from "./WebDevContent";

export const metadata = {
  title: "Web Development Services | Actal Digital",
  description: "High-performance web development. We build digital engines designed to drive growth.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "Web Development | Actal Digital",
    description: "High-performance web development.",
    url: 'https://actaldigital.com/services/webDevelopment',
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

export default function WebDevelopmentPage() {
  return <WebDevContent />;
}