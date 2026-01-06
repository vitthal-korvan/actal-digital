

import React, { useState, useRef } from 'react'; // Added useRef
import emailjs from '@emailjs/browser'; // Import EmailJS
import styles from './Contact.module.css';

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  
  const formRef = useRef();

  const faqData = [
    {
      question: "What types of projects do you typically work on?",
      answer: "We specialize in digital solutions including website development, web applications, e-commerce platforms, and enterprise software integrations."
    },
    {
      question: "What types of projects do you typically work on?",
      answer: "We specialize in digital solutions including website development, web applications, e-commerce platforms, and enterprise software integrations."
    },
    {
      question: "What types of projects do you typically work on?",
      answer: "We specialize in digital solutions including website development, web applications, e-commerce platforms, and enterprise software integrations."
    },
    {
      question: "How long does a typical project take?",
      answer: "Timelines depend on project scope. A simple website takes 4-6 weeks, while complex platforms can take 3-6 months."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 2. EmailJS Logic
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_eplnyql";
    const templateId = "template_pz282ll";
    const publicKey = "ZmTK7jBXQL_XmhiVg";

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log("SUCCESS!", result.text);
        alert("Message sent successfully!");
        formRef.current.reset(); 
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.mainTitle}>Get in Touch</h1>
          <div className={styles.blueSparkle}>✦</div>
        </div>
        <p className={styles.heroSub}>
          Got a project in mind? We'd love to hear about it.
        </p>
      </section>

      <div className={styles.mainGrid}>
        <div className={styles.formSide}>
          {/* 3. Attach formRef and onSubmit */}
          <form ref={formRef} className={styles.contactForm} onSubmit={sendEmail}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Name *</label>
                {/* 4. Ensure 'name' matches your EmailJS template variable {{name}} */}
                <input type="text" name="name" required />
              </div>
              <div className={styles.inputGroup}>
                <label>E-mail *</label>
                <input type="email" name="user_email" required />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Project Information *</label>
              <textarea name="message" required></textarea>
            </div>

            <button type="submit" className={styles.sendBtn} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"} <span className={styles.arrow}>↗</span>
            </button>
          </form>

          <div className={styles.contactInfo}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>E-mail</span>
              <p><a href="mailto:info@actaldigital.com" className={styles.contactLink}>info@actaldigital.com</a></p>
            </div>
            <div className={styles.infoBlock}>
               <span className={styles.infoLabel}>Phone</span>
               <p><a href="tel:+91 22 41774188" className={styles.contactLink}>+91-22-41774188</a></p>
           </div>
            <div className={styles.infoBlock}>
               <span className={styles.infoLabel}>Address</span>
              <p>124 | Veena Beena | Station Road Bandra West | Mumbai | 400050 | India</p>
            </div>
          </div>
        </div>

        <div className={styles.infoSide}>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <h3>We listen carefully</h3>
              <p>Every project begins by understanding your unique vision.</p>
            </div>
             <div className={styles.featureItem}>
              <h3>We've been around</h3>
              <p>Over the past decade, we've built dozens of websites and applications that continue driving value for our clients.</p>
            </div>
             <div className={styles.featureItem}>
              <h3>We keep you informed</h3>
              <p>You'll never wonder about your project's status, as we provide detailed updates and maintain open dialogue throughout.</p>
            </div>
             <div className={styles.featureItem}>
              <h3>We drive results</h3>
              <p>While we create beautiful designs, our primary focus is delivering solutions that generate real business impact.</p>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.trustSection}>
        <div className={styles.faqSection}>
          <h3 className={styles.commonQs}>CommonQs</h3>
          <div className={styles.accordion}>
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.accordionItem} ${openIndex === index ? styles.active : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.faqHeader}>
                  <span>{item.question}</span>
                  <span className={styles.chevron}>▾</span>
                </div>
                {openIndex === index && (
                  <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
        <section className={styles.mapSection}>
        <iframe 
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3108.2838610611043!2d72.839795!3d19.05547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465bd8d0992ec71f%3A0x461545ce308ed1!2sActal%20Digital%20Limited!5e1!3m2!1sen!2sus!4v1767004883089!5m2!1sen!2sus"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </div>
  );
};

export default Contact;