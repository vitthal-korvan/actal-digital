import CaseStudies from "./components/CaseStudies/CaseStudies";
import CTA from "./components/CTA/CTA";
import Expertise from "./components/Expertise/Expertise";
import FilterBar from "./components/FilterBar/FilterBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Methodology from "./components/Methodology/Methodology";
import Navbar from "./components/Navbar/Navbar";
import Philosophy from "./components/Philosophy/Philosophy";
import Testimonials from "./components/Testimonials/Testimonials";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Expertise />
      <FilterBar />
      <CaseStudies />
      <Methodology />
      <Philosophy />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
