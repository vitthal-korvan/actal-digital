import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);

  const translations = {
    EN: {
      testimonials: [
        {
          quote: "A founder doesn’t just create a business they ignite a vision, inspire a team, and turn ideas into impact.",
          name: "Nizamuddin Shaikh",
          role: "Founder",
          img: "/images/team/Sir.jpg",
        },
        {
          quote: "A website should be more than a digital brochure; it should be your company's most hardworking employee.",
          name: "Vitthal C. Korvan",
          role: "Operational Manager",
          img: "/images/team/Vitthal.jpg",
        },
        {
          quote: "User experience is at the heart of everything. If a site is easy to use, it's easy to trust.",
          name: "Omkar S. Dhane",
          role: "Software Developer",
          img: "/images/team/om.jpeg",
        },
        {
          quote: "We don’t just write code; we build the digital infrastructure that allows your business to scale without limits.",
          name: "Mohammad Z. Shaikh",
          role: "Software Developer",
          img: "/images/team/zamir.jpeg",
        },
        {
          quote: "Social media isn't just about posting; it's about starting a conversation that leads to a conversion.",
          name: "Vishwas T. Landge",
          role: "Social Media Manager",
          img: "/images/team/Vishwas.jpg",
        },
        {
          quote: "Good design is invisible, but great design is unforgettable. We build visuals that make people stop scrolling.",
          name: "Pratik R. Parab",
          role: "Senior Video Editor",
          img: "/images/team/pra.jpeg",
        },
        {
          quote: "Design is the silent ambassador of your brand. We craft visuals that don't just look good—they speak directly to your audience's heart.",
          name: "Manish M. Gurav",
          role: "Graphic Designer",
          img: "/images/team/Manish.jpg",
        },
      ]
    },
    AR: {
      testimonials: [
        {
          quote: "المؤسس لا ينشئ شركة فحسب، بل يشعل رؤية، ويلهم فريقاً، ويحول الأفكار إلى تأثير ملموس.",
          name: "Nizamuddin Shaikh",
          role: "مؤسس",
          img: "/images/team/Sir.jpg",
        },
        {
          quote: "يجب أن يكون الموقع الإلكتروني أكثر من مجرد كتيب رقمي؛ يجب أن يكون الموظف الأكثر اجتهاداً في شركتك.",
          name: "Vitthal C. Korvan",
          role: "مدير العمليات",
          img: "/images/team/Vitthal.jpg",
        },
        {
          quote: "تجربة المستخدم هي جوهر كل شيء. إذا كان الموقع سهل الاستخدام، فمن السهل الوثوق به.",
          name: "Omkar S. Dhane",
          role: "مطور برمجيات",
          img: "/images/team/om.jpeg",
        },
        {
          quote: "نحن لا نكتب الأكواد فحسب؛ نحن نبني البنية التحتية الرقمية التي تسمح لعملك بالتوسع دون حدود.",
          name: "Mohammad Z. Shaikh",
          role: "مطور برمجيات",
          img: "/images/team/zamir.jpeg",
        },
        {
          quote: "وسائل التواصل الاجتماعي لا تقتصر على النشر فحسب؛ بل تتعلق ببدء حوار يؤدي إلى نتائج حقيقية.",
          name: "Vishwas T. Landge",
          role: "مدير وسائل التواصل الاجتماعي",
          img: "/images/team/Vishwas.jpg",
        },
        {
          quote: "التصميم الجيد غير مرئي، لكن التصميم الرائع لا يُنسى. نحن نصمم بصريات تجعل الناس يتوقفون عن التمرير.",
          name: "Pratik R. Parab",
          role: "محرر فيديو",
          img: "/images/team/pra.jpeg",
        },
        {
          quote: "التصميم هو السفير الصامت لعلامتك التجارية. نحن نصمم بصريات لا تبدو جيدة فحسب، بل تخاطب قلب جمهورك مباشرة.",
          name: "Manish M. Gurav",
          role: "مصمم جرافيك",
          img: "/images/team/Manish.jpg",
        },
      ]
    }
  };

  // 2. Data Selection
  const t = translations[language] || translations["EN"];
  const list = t.testimonials;

  const next = () => {
    setCurrent((prev) => (prev + 1) % list.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + list.length) % list.length);
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.gridStack}>
          {list.map((item, i) => (
            <div
              key={i}
              className={`${styles.slideItem} ${i === current ? styles.active : ""
                }`}
            >
              <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                  <Image src={item.img} className={styles.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              </div>
              <div className={styles.contentCol}>
                <blockquote className={styles.quote}>"{item.quote}"</blockquote>
                <div>
                  <div className={styles.authorName}>{item.name}</div>
                  <div className={styles.authorRole}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button onClick={prev} className={styles.navBtn}>
            <ArrowLeft size={20} />
          </button>
          <button onClick={next} className={styles.navBtn}>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}