import DigitalMarketingContent from "./DigitalMarketingContent";

export const metadata = {
  title: "Digital Marketing Services | Actal Digital",
  description: "Data-driven marketing strategies optimized for growth and ROI.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "Digital Marketing Services | Actal Digital",
    description: "Maximize your ROI with precision digital marketing.",
    url: 'https://actaldigital.com/services/DigitalMarketing',
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

export default function DigitalMarketingPage() {
  return <DigitalMarketingContent />;
}