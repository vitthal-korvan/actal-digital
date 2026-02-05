import SeoContent from "./SeoContent";

export const metadata = {
  title: "SEO Services | Actal Digital",
  description: "Drive organic traffic and dominate search rankings with our SEO strategies.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "SEO Services | Actal Digital",
    description: "Turning visibility into consistent growth.",
    url: 'https://actaldigital.com/services/SEO',
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

export default function SeoPage() {
  return <SeoContent />;
}