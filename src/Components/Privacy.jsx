import React from 'react';
import styles from './Privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>PRIVACY POLICY</h1>
      </header>

      {/* Main Content */}
      <main className={styles.content}>
        <p className={styles.introText}>
          This privacy policy explains how Actal Digital collects, uses, and protects any information you provide when using our website.
        </p>
        <p className={styles.introText}>
          Actal Digital is committed to protecting your privacy. If we ask you to provide any information that can identify you while using our website, you can be confident that it will only be used in accordance with this privacy policy.
        </p>
        <p className={styles.introText}>
          We may update this policy from time to time by revising this page. Please check this page regularly to stay informed about any changes. This policy is effective from [Jan 2025].
        </p>

        <section className={styles.section}>
          <h2 className={styles.heading}>What We Collect</h2>
          <p className={styles.text}>We may ask you to provide the following information:</p>
          <ul className={styles.list}>
            <li>Name and job title</li>
            <li>Contact details including email address</li>
            <li>Demographic information such as postcode, preferences, and interests</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>How We Use Your Information</h2>
          <p className={styles.text}>
            We collect this information to better understand your needs and provide you with improved services. Specifically, we use your data for:
          </p>
          <ul className={styles.list}>
            <li>Internal record keeping</li>
            <li>Improving our products and services</li>
            <li>Occasionally contacting you for market research and business development through email, phone, fax, or mail</li>
            <li>Customizing our website according to your interests</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Security</h2>
          <p className={styles.text}>
            We take your privacy seriously and have implemented appropriate physical, electronic, and managerial safeguards to protect your information from unauthorized access or disclosure.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Links to Other Websites</h2>
          <p className={styles.text}>
            Our website may contain links to external sites for your convenience. However, once you leave our site through these links, Actal Digital has no control over the privacy practices of those sites. We recommend reviewing the privacy policies of any external websites you visit.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Controlling Your Personal Information</h2>
          <p className={styles.text}>
            We will never sell, share, or lease your personal information to third parties without your consent unless required by law.
          </p>
          <p className={styles.text}>
            If you believe that any information we hold about you is incorrect or incomplete, please contact us promptly. We will correct any inaccuracies as soon as possible.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Privacy;