
import React from 'react';
import styles from './Founder.module.css';

const Founder = () => {
  const founders = [
    {
      name: "NIZAMUDDIN SHAIKH",
      role: "FOUNDER AND CEO",
      bio: "Nizamuddin Shaikh is a creative entrepreneur and digital expert with a strong background in finance and technology. He is the Founder and CEO of Actal Digital, Started in 2025, which focuses on creating new digital businesses and investment platforms. Nizamuddin has a good sense of market trends and a strong drive to innovate. He has built a reputation in the fintech and investment fields by starting and managing several companies with different kinds of projects.",
      bioSecondary: "Founded in 2025, Actal Digital serves as Nizamuddin’s flagship venture. It is a multi-dimensional digital enterprise focused on technology-driven investments, fintech solutions, and digital product development. Under his leadership, the company has become a platform that supports both established and emerging projects in the digital economy.",
      links: ["LIN", "IG"]
    },
    // {
    //   name: "Alejandro Mejias",
    //   role: "CO-FOUNDER AND EXPERIENCE DESIGN DIRECTOR",
    //   bio: "Alejandro has worked in the Australian digital space for years, helping each architectural firm and global companies define their discovery of products. He is a designer who sees the big picture without losing attention to detail.",
    //   bioSecondary: "Alejandro design is not simply an aesthetic pursuit but a solution to problems.",
    //   links: ["LIN", "IG"]
    // }
  ];

  

  // New Ventures Data
  const ventures = [
    {
      title: "Stanford Capital Services",
      desc: "Stanford Capital is a private investment firm that focuses on venture capital, private equity, and strategic asset growth...",
      logo: "./images/Stanford.png" // Image for the first card
    },
    {
      title: "Unlisted Equity",
      desc: "Unlisted Equity is an alternative investment platform that specializes in sourcing and investing in unlisted and pre-IPO companies...",
      logo: "./images/Unlisted.png" // Image for the second card (Change this path to your actual file)
    }
  ];

  return (
    <section className={styles.section}>
      <h1 className={styles.bgTitle}>FOUNDER</h1>
      
      <div className={styles.container}>
        <div className={styles.heroWrapper}>
          <div className={styles.headingArea}>
            <span className={styles.subtleLine}></span>
            <h2 className={styles.meetHeading}>Meet the Founder</h2>
            <span className={styles.subtleLine}></span>
          </div>

          <img 
            src="/images/F1.jpg" 
            alt="Founders" 
            className={styles.mainImage} 
          />
        </div>

        <div className={styles.grid}>
          {founders.map((founder, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.header}>
                <span className={styles.arrow}>→</span>
                <div>
                  <h2 className={styles.name}>{founder.name}</h2>
                  <p className={styles.role}>{founder.role}</p>
                </div>
              </div>
              <div className={styles.bioContent}>
                <p className={styles.bioText}>{founder.bio}</p>
                <p className={styles.bioText}>{founder.bioSecondary}</p>
              </div>
              <div className={styles.actions}>
                {founder.links.map(link => (
                  <button key={link} className={styles.pillBtn}>{link}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.venturesSection}>
          
          <h3 className={styles.ownedBy}>OWNED BY NIZAMUDDIN SHAIKH</h3>
            
          <div className={styles.venturesGrid}>
            {ventures.map((v, i) => (
              <div key={i} className={styles.ventureCard}>
                <div className={styles.logoBox}>
                  {/* This 'v.logo' now pulls the unique path from the array above */}
                  <img src={v.logo} alt={v.title} className={styles.ventureLogo} />
                </div>
                <h4 className={styles.ventureTitle}>{v.title}</h4>
                <p className={styles.ventureDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
       
        
        
      </div>
    </section>
  
  );
};


export default Founder;