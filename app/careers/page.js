import CareersContent from "./CareersContent";

export const metadata = {
  title: "Careers | Join Our Team",
  description: "Join Actal Digital. Work with a digital agency focused on clarity, senior execution, and growth.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "Careers | Join Actal Digital",
    description: "Join our team of developers and creatives.",
    url: 'https://actaldigital.com/careers',
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

export default function CareerPage() {
  return <CareersContent />;
}