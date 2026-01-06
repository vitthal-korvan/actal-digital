import React from 'react';
import { Link } from 'react-router-dom'; // Add this line
import styles from './Content.module.css';

const Content = () => {
  return (
    <div className={styles.container}>
      <span className={styles.tag}>OUR SOCIAL MEDIA MARKETING PROJECTS</span>
      <p className={styles.heroSubtext}>
        At OPUS, we're more than just a digital agency - we're a team of creative 
        problem-solvers who believe in the power of thoughtful digital solutions to transform businesses.
      </p>

      <section className={styles.teamSection}>
        <div className={styles.teamGrid}>
          {/* Repeat this pattern for all members */}
          <div className={styles.teamMember}>
            <Link to="/socialmedia1">
              <img src="/images/A4.avif" alt="Markus Chen" />
            </Link>
            
            <div className={styles.infoRow}>
    <div className={styles.textGroup}>
      <h1 className={styles.memberName}>Markus Chen</h1><br/>
      <p className={styles.memberRole}>CEO & CO-FOUNDER</p>
    </div>

    <div className={styles.tagGroup}>
      <span className={styles.pillTag}>Branding</span>
      <span className={styles.pillTag}>Web Design</span>
      <span className={styles.pillTag}>Motion</span>
    </div>
  </div>
          </div>
          
          <div className={styles.teamMember}>
            <Link to="/socialmedia2">
              <img src="/images/A5.avif" alt="Markus Chen" />
            </Link>
             <div className={styles.infoRow}>
    <div className={styles.textGroup}>
      <h1 className={styles.memberName}>Markus Chen</h1><br/>
      <p className={styles.memberRole}>CEO & CO-FOUNDER</p>
    </div>

    <div className={styles.tagGroup}>
      <span className={styles.pillTag}>Branding</span>
      <span className={styles.pillTag}>Web Design</span>
      <span className={styles.pillTag}>Motion</span>
    </div>
  </div>
          </div>
          <div className={styles.teamMember}>
            <Link to="/socialmedia3">
              <img src="/images/A6.avif" alt="Markus Chen" />
            </Link>
            <div className={styles.infoRow}>
    <div className={styles.textGroup}>
      <h1 className={styles.memberName}>Markus Chen</h1><br/>
      <p className={styles.memberRole}>CEO & CO-FOUNDER</p>
    </div>

    <div className={styles.tagGroup}>
      <span className={styles.pillTag}>Branding</span>
      <span className={styles.pillTag}>Web Design</span>
      <span className={styles.pillTag}>Motion</span>
    </div>
  </div>
          </div>
          <div className={styles.teamMember}>
            <Link to="/socialmedia4">
              <img src="/images/A7.avif" alt="Markus Chen" />
            </Link>
             <div className={styles.infoRow}>
    <div className={styles.textGroup}>
      <h1 className={styles.memberName}>Markus Chen</h1><br/>
      <p className={styles.memberRole}>CEO & CO-FOUNDER</p>
    </div>

    <div className={styles.tagGroup}>
      <span className={styles.pillTag}>Branding</span>
      <span className={styles.pillTag}>Web Design</span>
      <span className={styles.pillTag}>Motion</span>
    </div>
  </div>
          </div>
          <div className={styles.teamMember}>
            <Link to="/socialmedia5">
              <img src="/images/A8.avif" alt="Markus Chen" />
            </Link>
             <div className={styles.infoRow}>
    <div className={styles.textGroup}>
      <h1 className={styles.memberName}>Markus Chen</h1><br/>
      <p className={styles.memberRole}>CEO & CO-FOUNDER</p>
    </div>

    <div className={styles.tagGroup}>
      <span className={styles.pillTag}>Branding</span>
      <span className={styles.pillTag}>Web Design</span>
      <span className={styles.pillTag}>Motion</span>
    </div>
  </div>
          </div>
          <div className={styles.teamMember}>
            <Link to="/socialmedia6">
              <img src="/images/A9.avif" alt="Markus Chen" />
            </Link>
             <div className={styles.infoRow}>
    <div className={styles.textGroup}>
      <h1 className={styles.memberName}>Markus Chen</h1><br/>
      <p className={styles.memberRole}>CEO & CO-FOUNDER</p>
    </div>

    <div className={styles.tagGroup}>
      <span className={styles.pillTag}>Branding</span>
      <span className={styles.pillTag}>Web Design</span>
      <span className={styles.pillTag}>Motion</span>
    </div>
  </div>
          </div>
          {/* ... other team members ... */}
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

export default Content;