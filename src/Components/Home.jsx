

import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    
  return (
    <div className={styles.homeContainer}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            We design solutions <br />
            that drive <span className={styles.blueHighlight}>business.</span>
          </h1>
          <p className={styles.subtitle}>
            At Opus, we help companies build stronger brands, <br />
            better products, and websites that actually perform.
          </p>
          <a href="/#Services" className={styles.browseLink}>
            Browse our services <span className={styles.arrow}>↗</span>
          </a>
        </div>
        
        <div className={styles.heroImageContainer}>
          <img 
            src="/images/H1.png" 
            alt="Team Meeting" 
            className={styles.heroImage} 
          />
        </div>
      </section>

      {/* Metrics Section */}
      <section className={styles.metricsSection}>
        <h2 className={styles.metricsTitle}>
          Whether it's a website, an app, or a complete brand identity - we create work that works.
        </h2>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>47+</span>
            <span className={styles.statLabel}>Projects delivered</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>95%</span>
            <span className={styles.statLabel}>Client retention</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>$21M</span>
            <span className={styles.statLabel}>Client revenue impacted</span>
          </div>
        </div>
      </section>

      {/* Logo Slider - Full Width */}
      <div className={styles.logoSlider}>
        <div className={styles.logoTrack}>
          <img src="/images/Stanford.png" alt="Logo" className={styles.brandLogo} />
          <img src="/images/b1.png" alt="Logo" className={styles.brandLogo} />
          <img src="/images/s1.png" alt="Logo" className={styles.brandLogo} />
          <img src="/images/Nice.png" alt="Logo" className={styles.brandLogo} />
          <img src="/images/unlisted.png" alt="Logo" className={styles.brandLogo} />
          {/* Duplicates */}
          <img src="/images/Stanford.png" alt="Logo" className={styles.brandLogo} />
          <img src="/images/b1.png" alt="Logo" className={styles.brandLogo} />
          <img src="/images/s1.png" alt="Logo" className={styles.brandLogo} />
          <img src="/images/Nice.png" alt="Logo" className={styles.brandLogo} />
          <img src="/images/unlisted.png" alt="Logo" className={styles.brandLogo} />
        </div>
      </div>

      {/* Our Process - Full Width */}
      <section className={styles.processSection} id="Services">
        <div className={styles.processContent}>
          <h1 className={styles.label}>OUR SERVICES</h1>
          <h2 className={styles.processMainTitle}>
            Our mission is to help ambitious companies succeed.
          </h2>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>01</span>
                <h3 className={styles.cardTitle}>Website Design</h3>
              </div>
              <p className={styles.cardText}>Every website we design is crafted to engage and build trust with your users.Web design services provide a comprehensive package to build professional, functional, and visually appealing websites, covering strategy (goals, audience), design (UI/UX, branding, responsiveness), development (coding, platforms), and crucial content integration (text, images, SEO), ensuring the site is user-friendly, performant, and optimized for search engines to achieve business objectives. Key components include custom designs, mobile optimization</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>02</span>
                <h3 className={styles.cardTitle}>Branding</h3>
              </div>
              <p className={styles.cardText}>We create unique brand identities that resonate with your target audience.Branding services create a business's identity through visuals (logos, colors, fonts) and messaging (voice, story, strategy) to build recognition and trust, while branding services content refers to the valuable, relevant, and entertaining material (blogs, videos, social posts) created using that established brand identity, focusing on audience connection over direct sales to foster loyalty and tell the brand's story</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>03</span>
                <h3 className={styles.cardTitle}>Web Developemnt</h3>
              </div>
              <p className={styles.cardText}>Web development services content covers the creation, building, and maintenance of websites/apps, including front-end (HTML, CSS, JS for looks/interactivity), back-end (server, database logic), and full-stack (both), offering solutions like responsive design, e-commerce, CMS integration, SEO, security, and ongoing support to deliver functional, user-friendly, and scalable digital products for businesses. </p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>04</span>
                <h3 className={styles.cardTitle}>Social Media Handling</h3>
              </div>
              <p className={styles.cardText}>Social media handling involves strategically creating, scheduling, and engaging with content (posts, videos, images) across platforms to build audience, brand awareness, and drive results, using tools, analytics, and consistent branding to stay relevant and foster community. Key elements include a content calendar, audience understanding, platform-specific tailoring, and active interaction to build meaningful connections. </p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>05</span>
                <h3 className={styles.cardTitle}>App Development</h3>
              </div>
              <p className={styles.cardText}>App development content covers the entire lifecycle: ideation, planning, design (UI/UX), coding (front/back-end), testing, deployment, and maintenance, using technologies like Swift (iOS), Kotlin (Android), or frameworks for cross-platform apps, all aiming to build functional, engaging software for users, from strategy to launch and updates.  </p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>06</span>
                <h3 className={styles.cardTitle}>Video Editing</h3>
              </div>
              <p className={styles.cardText}>Video editing content involves the fundamental process of arranging video clips, adding audio/music, text, graphics, and effects to tell a story or convey information, using software like Premiere Pro or DaVinci Resolve, focusing on pacing, transitions, color, and sound for a polished final product, often incorporating AI tools for efficiency. Key steps include organizing footage, creating rough cuts, refining with B-roll and graphics, adding sound design, color grading, and exporting for specific platforms. </p>
            </div>
          </div>
         
        
        </div>
      </section>
      
<section className={styles.projectsSection} id="Projects">
  <div className={styles.projectsHeader}>
    <h1 className={styles.sectionLabel}>OUR RECENT PROJECTS</h1>
    <div className={styles.titleRow}>
      
    </div>
    <p className={styles.projectsSubtitle}>
      Dive into our diverse collection of innovative projects, where creativity meets cutting-edge technology to solve real-world challenges.
    </p>
  </div>

  
  <div className={styles.fullWidthProjectWrapper}>
    <div className={styles.projectCardLarge}>
       
      <div className={styles.projectImageWrapperLarge}>
        <a href="/Digital"><img 
          src="/images/Z1.jpg" 
          alt="Featured Project" 
          className={styles.projectImage} 
        /></a>
      </div>
       
       <div className={styles.projectImageWrapperLarge}>
        <a href="/Content"><img 
          src="/images/ZS2.jpg" 
          alt="Featured Project" 
          className={styles.projectImage} 
        /></a>
      </div>
      <div className={styles.projectImageWrapperLarge}>
        <a href="/Socialmedia"><img 
          src="/images/SM1.jpg" 
          alt="Featured Project" 
          className={styles.projectImage} 
        /></a>
      </div>
      <div className={styles.projectImageWrapperLarge}>
        <a href="/Graphic"><img 
          src="/images/ZS3.jpg" 
          alt="Featured Project" 
          className={styles.projectImage} 
        /></a>
      </div>
      <div className={styles.projectImageWrapperLarge}>
        <a href="/SEO"><img 
          src="/images/SEO1.jpg" 
          alt="Featured Project" 
          className={styles.projectImage} 
        /></a>
      </div>
      <div className={styles.projectImageWrapperLarge}>
        <a href="/Webdesign"><img 
          src="/images/ZS4.avif" 
          alt="Featured Project" 
          className={styles.projectImage} 
        /></a>
      </div>
      <div className={styles.projectImageWrapperLarge}>
        <a href="/Video"><img 
          src="/images/ZS6.jpg" 
          alt="Featured Project" 
          className={styles.projectImage} 
        /></a>
      </div>
      
    </div>
  </div>
</section>
<section className={styles.metricsSection}>
        <h6 className={styles.betricsTitle}>
          We are a group of positive thinkers, dedicated to making a difference in the digital world. 
        </h6>
        
        <a href="/about" className={styles.nrowseLink}>
            Meet the Team <span className={styles.brrow}>↗</span>
          </a> <br/> <br/>

        <div className={styles.heroImageContainer}>
          <img 
            src="/images/MEET.avif" 
            alt="Team Meeting" 
            className={styles.heroImage} 
          />
        </div>
</section>
   
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

export default Home;