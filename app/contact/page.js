import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact Us | Actal Digital",
  description: "Get in touch with Actal Digital. Let's build something great together.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "Contact Us | Actal Digital",
    description: "Get in touch with Actal Digital. Let's build something great together.",
    url: 'https://actaldigital.com/contact',
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

export default function ProjectPage() {
  return <ContactContent />;
}