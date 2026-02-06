import BrandingContent from "./BrandingContent";

export const metadata = {
      title: "Branding Services | Actal Digital",
      description: "Crafting unique brand identities that leave a lasting impression.",
      authors: [
            { name: "Vitthal Korvan" },
            { name: "Omkar Dhane" },
            { name: "Zameer Shaikh" }
      ],
      openGraph: {
            title: "Branding Services | Actal Digital",
            description: "Building powerful brands for the digital age.",
            url: 'https://actaldigital.com/services/branding',
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

export default function BrandingPage() {
      return <BrandingContent />;
}
