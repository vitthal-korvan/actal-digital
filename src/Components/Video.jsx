import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Video.module.css';

const Content = () => {
  const videoProjects = [
    { id: 1, src: '/videos/V1.mp4', name: 'Project Alpha', role: 'COMMERCIAL EDIT' },
    { id: 2, src: '/videos/V1.mp4', name: 'Project Beta', role: 'MOTION GRAPHICS' },
    { id: 3, src: '/videos/V1.mp4', name: 'Project Gamma', role: 'BRAND STORY' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.headerSection}>
        <span className={styles.tag}>OUR VIDEO EDITING PROJECTS</span>
        <h1 className={styles.mainHeading}>
         At OPUS, we're more than just a digital agency - we're a team of creative problem-solvers who believe in the power of thoughtful digital solutions to transform businesses.


        </h1>
      </header>

      <div className={styles.singleColumnStack}>
        {videoProjects.map((project) => (
          <div key={project.id} className={styles.videoCard}>
            <Link to="/contact" className={styles.videoLink}>
              <video autoPlay loop muted playsInline className={styles.projectVideo}>
                <source src={project.src} type="video/mp4" />
              </video>
            </Link>
            
            <div className={styles.infoRow}>
              <div className={styles.textGroup}>
                <h2 className={styles.memberName}>{project.name}</h2>
                <p className={styles.memberRole}>{project.role}</p>
              </div>

              <div className={styles.tagGroup}>
                <span className={styles.pillTag}>Branding</span>
                <span className={styles.pillTag}>Web Design</span>
                <span className={styles.pillTag}>Motion</span>
              </div>
            </div>
          </div>
        ))}
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

export default Content;