

import React from 'react';
import styles from './Digital1.module.css';


import heroBg from './BN1.png'; 
import bannerImg1 from './DG1.png';
import bannerImg2 from './DG2.png';
import bannerImg3 from './DG3.png';
import bannerImg4 from './DG4.png';

const Digital1 = () => {
  return (
    <div className={styles.container}>
      {/* Hero with Hover Effect */}
      <section className={styles.hero}>
        <div 
          className={styles.heroBgImage} 
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className={styles.heroOverlay}>
          <div className={styles.tagWrapper}>
            <span className={styles.tag}>Branding</span>
            <span className={styles.tag}>Web Design</span>
            <span className={styles.tag}>Motion</span>
          </div>
          <h1 className={styles.mainTitle}>
            Arrows – A digital-first branding for the modern workspace
          </h1>
        </div>
      </section>

      <div className={styles.contentWrapper}>
        <div className={styles.metaGrid}>
          <div><p className={styles.label}>Year</p><p className={styles.value}>2024</p></div>
          <div><p className={styles.label}>Client</p><p className={styles.value}>Arrows</p></div>
          <div><p className={styles.label}>Timeframe</p><p className={styles.value}>6 weeks</p></div>
        </div>
        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.heading}>The Challenge</h2>
          <p className={styles.bodyText}>
            Arrows had developed a powerful workspace management platform but struggled to communicate its value effectively to different stakeholder groups. Their existing brand assets lacked consistency and failed to capture the dynamic, innovative nature of their product, while their web presence didn't effectively showcase the platform's capabilities or build trust with enterprise clients.
          </p>
        </div>
      </div>

      {/* Challenge Banner */}
      <div className={styles.bannerContainer}>
        <img src={bannerImg1} alt="Challenge Detail" className={styles.bannerImage} />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={`${styles.heading} ${styles.blue}`}>The Solution</h2>
          <p className={styles.bodyText}>
           We developed a comprehensive brand system that centered around fluid, directional elements – reflecting both the company name and the platform's ability to streamline workplace operations. The motion-first approach allowed us to create engaging animations that demonstrated complex features simply, while the responsive website architecture ensured the brand's impact remained consistent across all devices. This cohesive digital-first identity system helped Arrows successfully position themselves as a premium solution in the market.
          </p>
        </div>
      </div>

      {/* 3 Banners below Solution */}
      <div className={styles.solutionBanners}>
        <div className={styles.bannerContainer}>
          <img src={bannerImg2} alt="Detail 1" className={styles.bannerImage} />
        </div>
        <div className={styles.bannerContainer}>
          <img src={bannerImg3} alt="Detail 2" className={styles.bannerImage} />
        </div>
        <div className={styles.bannerContainer}>
          <img src={bannerImg1} alt="Detail 3" className={styles.bannerImage} />
        </div>
      </div>
      <h1 className={styles.sectionLabel}>CONTACT US</h1>
            <section className={styles.metricsSection}>
                    <h6 className={styles.betricsTitle}>
                      Get quick answers about working with us and our approach to digital solutions 
                    </h6>
                    
                    <a href="/contact" className={styles.nrowseLink}>
                        Contact Us <span className={styles.brrow}>↗</span>
                      </a> <br/> <br/>
            
                    <div className={styles.heroImageContainer}>
                      <img 
                        src="/images/CN1.avif" 
                        alt="Team Meeting" 
                        className={styles.heroImage} 
                      />
                    </div>
            </section>
    </div>
  );
};

export default Digital1;

