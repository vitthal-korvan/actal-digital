import AboutUsContent from "./AboutUsContent";

export const metadata = {
  title: "About Us | Actal Digital",
  description: "We Bridge the Gap Between Technology and Creativity. Making businesses into industry leaders.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "About Us | Actal Digital",
    description: "We Bridge the Gap Between Technology and Creativity.",
    url: 'https://actaldigital.com/about-us',
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

export default function AboutPage() {
  return <AboutUsContent />;
}