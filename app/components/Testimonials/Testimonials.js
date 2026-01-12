"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "They didn't just redesign our website; they reimagined how we communicate as a brand.",
    name: "Alex Fast",
    role: "CTO, Nexus Protocol",
    info: "Series A fintech · 6-week engagement",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3da1789-0f7a-4fbc-b7b6-606f9b85b083_3840w.jpg?w=800&q=80",
  },
  {
    quote: "The attention to detail is unmatched. Our conversion rates doubled within a month of launch.",
    name: "Sarah Jenkins",
    role: "CMO, Lumina SaaS",
    info: "SaaS rebrand · Global launch",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc6f2c9a-f51b-4d76-a0af-37c36400e46b_3840w.jpg?w=800&q=80",
  },
  {
    quote: "They moved fast, asked the right questions, and delivered a design system our team actually uses.",
    name: "Maya Patel",
    role: "Head of Product, Aether Labs",
    info: "AI research · Design system rollout",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f84e0ac4-082e-4160-8877-3043e2a8b63a_3840w.jpg?w=800&q=80",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>06 — CLIENT VOICES</span>
        </div>

        <div className={styles.gridStack}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${styles.slideItem} ${
                i === current ? styles.active : ""
              }`}
            >
              <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                  <img src={t.img} className={styles.image} alt={t.name} />
                </div>
              </div>
              <div className={styles.contentCol}>
                <div className={styles.quoteIcon}>
                  <Quote size={32} />
                </div>
                <blockquote className={styles.quote}>"{t.quote}"</blockquote>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                  <div className={styles.projectInfo}>{t.info}</div>
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
