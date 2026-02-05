import GraphicDesignContent from "./GraphicDesignContent";

export const metadata = {
  title: "Graphic Design Services | Actal Digital",
  description: "Creating premium visuals and designs that define your brand identity.",
  authors: [
    { name: "Vitthal Korvan" },
    { name: "Omkar Dhane" },
    { name: "Zameer Shaikh" }
  ],
  openGraph: {
    title: "Graphic Design Services | Actal Digital",
    description: "Making your brand stand out everywhere.",
    url: 'https://actaldigital.com/services/GraphicDesign',
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

export default function GraphicDesignPage() {
  return <GraphicDesignContent />;
}