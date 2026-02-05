import TermsContent from "./TermsContent";

export const metadata = {
  title: "Terms and Conditions | Actal Digital",
  description: "Legal framework and rules for using our services.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "Terms and Conditions | Actal Digital",
    description: "Legal considerations and user agreement.",
    url: 'https://actaldigital.com/terms',
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

export default function TermsPage() {
  return <TermsContent />;
}