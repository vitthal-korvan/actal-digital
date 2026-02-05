import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Services | Actal Digital",
  description: "Design Sprints, Full System Design, and Product Launches. We partner with teams for critical execution.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "Services | Actal Digital",
    description: "Design Sprints, Full System Design, and Product Launches.",
    url: 'https://actaldigital.com/services',
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

export default function ServicesPage() {
  return <ServicesContent />;
}
