import React from 'react';
import styles from './Terms.module.css';

const Terms = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>TERMS AND CONDITION</h1>
      </header>

      {/* Content Section */}
      <main className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.heading}>What We Do</h2>
          <p className={styles.text}>
            These Terms and Conditions outline our obligations to you regarding the use of our website and set the rules for using Actal Digital's services. By accessing or using this site (actaldigital.com), you agree to comply with these Terms and Conditions. We encourage all visitors to review this page regularly to stay informed about any updates or changes. In these Terms, "we," "us," and "site" refer to Actal Digital.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Use of Our Website</h2>
          <p className={styles.text}>
            You are permitted to use this website for your personal or business purposes, including printing, downloading, and sharing material, provided that you do not modify any content without our explicit permission. No material on this website may be republished or distributed, online or offline, without prior consent. All copyright and intellectual property rights for the content on this site belong to Actal Digital and may not be reproduced without our authorization.
          </p>
          <p className={styles.text}>
            The information on this website is provided for general purposes only. While we strive to keep the content accurate and up-to-date, we make no guarantees or warranties, expressed or implied, about the completeness, reliability, or suitability of the information, products, or services available on this site. Any reliance you place on this information is at your own risk.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Visitor Conduct</h2>
          <p className={styles.text}>
            Any material you submit or post to this site, except for personal information covered under our Privacy Policy, will be considered non-confidential and non-proprietary. Unless you specify otherwise, we reserve the right to use, copy, disclose, and distribute any submitted content for any purpose.
          </p>
          <p className={styles.text}>
            When using the site, please avoid posting or sending any material that you do not have the right to share, or that is discriminatory, obscene, defamatory, illegal, invasive of privacy, offensive, or otherwise harmful. Any conduct that violates laws or causes harm or annoyance to others is strictly prohibited.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Site Availability</h2>
          <p className={styles.text}>
            We aim to keep this site accessible 24/7, but technical or server issues may cause temporary downtime. Actal Digital is not liable if the website becomes unavailable at any time.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Links to Other Websites</h2>
          <p className={styles.text}>
            Our site may contain links to external websites for additional information or services. Clicking these links will take you away from Actal Digital's website. The inclusion of links does not mean we endorse or take responsibility for the content, products, or services on those sites. We recommend reviewing the terms and conditions and privacy policies of any external sites you visit.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Limitation of Liability</h2>
          <p className={styles.text}>
            Actal Digital will not be liable for any losses or damages, whether direct, indirect, or consequential, arising from your use of this website. This includes loss of data, profits, or other damages related to your reliance on the site's information or services.
          </p>
          <p className={styles.text}>
            We strive to ensure the accuracy of information on this site but make no guarantees. We disclaim liability for any service or repair costs or any other losses resulting from use of the website.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Governing Law</h2>
          <p className={styles.text}>
            These Terms and Conditions are governed by the laws of [your country/state], and any disputes will be resolved under these laws.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.text}>
            If you have any questions about these Terms and Conditions or your use of <span className={styles.link}>actaldigital.com</span>, please contact us through our Contact Form or at the address below: <strong>124 | Veena Beena | Station Road | Bandra West | Mumbai | 400050 | India</strong>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Terms;