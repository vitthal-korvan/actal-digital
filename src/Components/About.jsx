import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Section 1: Hero */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Building digital excellence since 2019</h1>
        <p className={styles.heroSubtext}>
          At OPUS, we're more than just a digital agency - we're a team of creative problem-solvers who believe in the power of thoughtful digital solutions to transform businesses.
        </p>
        <div className={styles.heroImageContainer}>
          <img src="/images/A1.avif" alt="Team member" className={styles.fullWidthImg} />
        </div>
        <div className={styles.heroImageContainerSmallGap}>
          <img src="/images/A2.avif" alt="Team member" className={styles.fullWidthImg} />
        </div>
      </section>


      {/* Section 2: Story */}
      <section className={styles.storySection}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>From humble beginnings to a trusted digital partner</h2>
          <p className={styles.bodyText}>
            What started as a small team of three developers working from a tiny office has grown into 
            a dynamic digital agency trusted by businesses across multiple industries. Through dedication 
            to quality, transparent communication, and a deep understanding of our clients’ needs, 
            we’ve built lasting partnerships and delivered solutions that make a difference.
          </p>
          <div className={styles.quoteContainer}>
      <blockquote className={styles.quote}>
        "When we founded OPUS, we had a simple vision - to help businesses succeed in the digital 
        world by combining technical excellence with genuine care for our clients' success. 
        That vision still drives everything we do today."
      </blockquote>
      
      <div className={styles.authorBlock}>
        <div className={styles.roundImageContainer}>
          <img src="/images/A3.avif" alt="Founder" className={styles.roundImg} />
        </div>
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>Markus Chen</p>
          <p className={styles.authorDesignation}>Founder & CEO</p>
        </div>
      </div>
    </div>
  </div>
      </section>

      {/* Section 3: Approach */}
      <section className={styles.approachSection}>
        <span className={styles.tag}>OUR APPROACH</span>
        <div className={styles.approachGrid}>
          <div className={styles.approachItem}>
            <span className={styles.stepNum}>01</span>
            <h1>Deep understanding</h1>
            <p>We take the time to truly understand your business, goals, and challenges before proposing any solutions. This foundation helps us truly serve your needs.</p>
          </div>
          <div className={styles.approachItem}>
            <span className={styles.stepNum}>02</span>
            <h1>Thoughtful solutions</h1>
            <p>We believe in quality over quantity. Every line of code and every design element is crafted with purpose and attention to detail.</p>
          </div>
          <div className={styles.approachItem}>
            <span className={styles.stepNum}>03</span>
            <h1>Continuous innovation</h1>
            <p>Technology never stands still, and neither do we. We’re constantly learning, adapting, and finding better ways to serve our clients.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Team */}
      <section className={styles.teamSection}>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="/images/A4.avif" alt="Markus Chen" />
            <h1>Markus Chen</h1>
            <p>CEO & CO-FOUNDER</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/A5.avif" alt="Sarah Rodriguez" />
            <h1>Sarah Chen</h1>
            <p>CEO & CO-FOUNDER</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/A6.avif" alt="David Park" />
           <h1>Zayn Chen</h1>
            <p>CEO & CO-FOUNDER</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/A7.avif" alt="Emily Thompson" />
           <h1>Stoinis Chen</h1>
            <p>CEO & CO-FOUNDER</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/A8.avif" alt="Emily Thompson" />
            <h1>Mark Chen</h1>
            <p>CEO & CO-FOUNDER</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/A9.avif" alt="Emily Thompson" />
            <h1>Markus Chen</h1>
            <p>CEO & CO-FOUNDER</p>
          </div>
        </div>
      </section>

      {/* Section 5: Culture */}
      <section className={styles.cultureSection}>
        <span className={styles.tag}>LIFE AT OPUS</span>
        <h2 className={styles.sectionTitle}>Beyond the office</h2>
        <p className={styles.bodyText}>
          We believe that great work comes from happy, well-rounded people. That’s why we make sure 
          there’s always time for fun, learning, and team bonding beyond our project work.
        </p>
        <p className={styles.bodyText}>
          Every quarter, we step away from our screens for team activities that range from cooking 
          classes to rock climbing. Our hiking club meets monthly for local trail adventures.
        </p>
        <div className={styles.heroImageContainer}>
          <img src="/images/A13.avif" alt="Team hiking" className={styles.fullWidthImg} />
        </div>
        <div className={styles.heroImageContainerSmallGap}>
          <img src="/images/A15.avif" alt="Team hiking" className={styles.fullWidthImg} />
        </div>
      </section>

   
      {/* Section 6: CTA */}
<section className={styles.ctaSection}>
  <h2 className={styles.ctaTitle}>Help us shape the future of digital</h2>
  <p>We're always looking for talented individuals who share our passion for digital excellence.</p>
  <a href="/contact" className={styles.ctaLink}>
    Let's talk <span className={styles.arrowInline}>↗</span>
  </a>
</section>
  
<section className={styles.valuesSection}>
  <span className={styles.valuesTag}>OUR VALUES</span>
  
  <div className={styles.valueItem}>
    <h2 className={styles.valueTitle}>A culture of innovation</h2>
    <p className={styles.valueDescription}>
      At OPUS, we foster a culture of continuous learning and innovation. Our team members are encouraged to experiment, share ideas, and push the boundaries of what's possible in digital solutions.
    </p>
  </div>

  <div className={styles.valueItem}>
    <h2 className={styles.valueTitle}>A dedication to craft</h2>
    <p className={styles.valueDescription}>
      We believe that great work comes from mastery of our craft. Every line of code, every design decision, and every strategic recommendation is backed by deep expertise and attention to detail.
    </p>
  </div>

  <div className={styles.valueItem}>
    <h2 className={styles.valueTitle}>A foundation of trust</h2>
    <p className={styles.valueDescription}>
      We cultivate lasting partnerships by being direct, honest, and clear in our communication. Our clients always know where their projects stand and what decisions are being made to drive their success forward.
    </p>
  </div>
</section>

     </div>
    
  );
  
};


export default About;