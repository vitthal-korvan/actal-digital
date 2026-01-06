

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Careers.module.css';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("No file chosen");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleApplyClick = () => {
    setIsFormOpen(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        "application/pdf", 
        "application/msword", 
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];
      if (allowedTypes.includes(file.type)) {
        setUploadedFileName(file.name);
      } else {
        alert("Please upload only PDF or Word documents.");
        e.target.value = ""; 
        setUploadedFileName("No file chosen");
      }
    }
  };

  const closeAllPopups = () => {
    setSelectedJob(null);
    setIsFormOpen(false);
    setUploadedFileName("No file chosen");
    setIsSubmitting(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // UPDATED CREDENTIALS
    const SERVICE_ID = "service_ybz7ogk";
    const TEMPLATE_ID = "template_iilxg0l";
    const PUBLIC_KEY = "ZmTK7jBXQL_XmhiVg";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          alert("Application submitted successfully!");
          closeAllPopups();
      }, (error) => {
          alert("Submission failed: " + error.text);
          setIsSubmitting(false);
      });
  };

  const positions = [
    {
      title: "UI/UX & Product Designer",
      type: "Full Time",
      desc: "Product design encompasses both UI/UX design but it also involves a broader understanding of the entire product.",
      location: "Bandra, Mumbai",
      details: {
        overview: "We are looking for a creative UI/UX Designer to join our growing team.",
        responsibilities: [
          "Identify and pursue new business opportunities through research, networking, and outreach Build and maintain strong client relationships to understand needs and deliver value-driven digital solutions Prepare and present business proposals, pitch decks, and pricing strategies Collaborate with internal teams (designers, content writers, strategists) to develop customized client solutions Achieve monthly and quarterly sales targets consistently Monitor market trends, competitor activities, and client feedback to refine business strategy Participate in brainstorming sessions, client meetings, and campaign planning"
        ],
        skills: ["Proven experience in Business Development or Sales (1–3 years), preferably in a digital marketing or advertising agency", "Strong communication, negotiation, and presentation skills", "Understanding of digital marketing services such as social media, content marketing, SEO, branding, etc.", "Proactive and self-motivated with a target-driven approach"]
      }
    },
    {
      title: "UI/UX & Product Designer",
      type: "Full Time",
      desc: "Product design encompasses both UI/UX design but it also involves a broader understanding of the entire product.",
      location: "Bandra, Mumbai",
      details: {
        overview: "We are looking for a creative UI/UX Designer to join our growing team.",
        responsibilities: [
          "Design intuitive user interfaces for web and mobile",
          "Collaborate with developers to ensure design feasibility",
          "Create prototypes and wireframes based on user needs"
        ],
        skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"]
      }
    },
    {
      title: "Web Developer",
      type: "Full Time",
      desc: "Product design encompasses both UI/UX design but it also involves a broader understanding of the entire product.",
      location: "Bandra, Mumbai",
      details: {
        overview: "We are looking for a creative UI/UX Designer to join our growing team.",
        responsibilities: [
          "Design intuitive user interfaces for web and mobile",
          "Collaborate with developers to ensure design feasibility",
          "Create prototypes and wireframes based on user needs"
        ],
        skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"]
      }
    },
    {
      title: "App Developer",
      type: "Full Time",
      desc: "Product design encompasses both UI/UX design but it also involves a broader understanding of the entire product.",
      location: "Bandra, Mumbai",
      details: {
        overview: "We are looking for a creative UI/UX Designer to join our growing team.",
        responsibilities: [
          "Design intuitive user interfaces for web and mobile",
          "Collaborate with developers to ensure design feasibility",
          "Create prototypes and wireframes based on user needs"
        ],
        skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"]
      }
    },
    {
      title: "SEO Analyst",
      type: "Full Time",
      desc: "Product design encompasses both UI/UX design but it also involves a broader understanding of the entire product.",
      location: "Bandra, Mumbai",
      details: {
        overview: "We are looking for a creative UI/UX Designer to join our growing team.",
        responsibilities: [
          "Design intuitive user interfaces for web and mobile",
          "Collaborate with developers to ensure design feasibility",
          "Create prototypes and wireframes based on user needs"
        ],
        skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"]
      }
    },
    {
      title: "Operational Mamager",
      type: "Full Time",
      desc: "Product design encompasses both UI/UX design but it also involves a broader understanding of the entire product.",
      location: "Bandra, Mumbai",
      details: {
        overview: "We are looking for a creative UI/UX Designer to join our growing team.",
        responsibilities: [
          "Design intuitive user interfaces for web and mobile",
          "Collaborate with developers to ensure design feasibility",
          "Create prototypes and wireframes based on user needs"
        ],
        skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"]
      }
    },
    {
      title: "Social Media Manager",
      type: "Full Time",
      desc: "Product design encompasses both UI/UX design but it also involves a broader understanding of the entire product.",
      location: "Bandra, Mumbai",
      details: {
        overview: "We are looking for a creative UI/UX Designer to join our growing team.",
        responsibilities: [
          "Design intuitive user interfaces for web and mobile",
          "Collaborate with developers to ensure design feasibility",
          "Create prototypes and wireframes based on user needs"
        ],
        skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"]
      }
    },
    {
      title: "Graphic Designer",
      type: "Full Time",
      desc: "Create high-impact visual content for digital marketing and social media.",
      location: "Bandra, Mumbai",
      details: {
        overview: "Strategic and creative Video Editor role for a digital agency.",
        responsibilities: [
          "Edit high-quality videos for social media platforms",
          "Work with motion graphics and basic animations",
          "Manage sound design and pacing for storytelling"
        ],
        skills: ["Premiere Pro", "After Effects", "Final Cut Pro", "Motion Graphics"]
      }
    }
  ];

  return (
    <div className={styles.careerPage}>
      <div className={styles.container}>
        <section className={styles.teamSection}>
          <div className={styles.teamContent}>
            <div className={styles.teamTitle}>
              <h2>MEET THE TEAM WORK BEHIND OUR SUCCESS</h2>
            </div>
          </div>
          <div className={styles.fullWidthBanner}>
            <img src="/images/C1.png" alt="Our Team" className={styles.bannerImage} />
          </div>
        </section>

        <section className={styles.positionsSection}>
          <h2 className={styles.sectionTitle}>Currently Open Positions</h2>
          <div className={styles.positionsGrid}>
            {positions.map((job, index) => (
              <div key={index} className={styles.jobCard} onClick={() => setSelectedJob(job)}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3>{job.title}</h3>
                    <span className={styles.jobType}>{job.type}</span>
                  </div>
                  <button className={styles.arrowBtn}>↗</button>
                </div>
                <p>{job.desc}</p>
                <div className={styles.cardFooter}>
                  <span>📍 {job.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* MODAL 1: JOB DETAILS (SKILLS SECTION RESTORED) */}
      {selectedJob && !isFormOpen && (
        <div className={styles.modalOverlay} onClick={closeAllPopups}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeAllPopups}>×</button>
            <div className={styles.modalHeader}>
              <p><strong>Hiring Alert:</strong> {selectedJob.title}</p>
              <p><strong>Location:</strong> {selectedJob.location}</p>
            </div>
            <div className={styles.modalBody}>
              <h4>Job Overview:</h4>
              <p>{selectedJob.details?.overview}</p>
              
              <h4>Job Responsibilities:</h4>
              <ul>
                {selectedJob.details?.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4>Skills Required:</h4>
              <ul>
                {selectedJob.details?.skills?.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <button className={styles.applyNowBtn} onClick={handleApplyClick}>
              Apply Now <span className={styles.applyArrow}>›</span>
            </button>
          </div>
        </div>
      )}

      {/* MODAL 2: APPLICATION FORM */}
      {isFormOpen && (
        <div className={styles.modalOverlay} onClick={closeAllPopups}>
          <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeAllPopups}>×</button>
            
            <form ref={formRef} className={styles.applyForm} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Full Name" className={styles.formInput} required />
              <input type="email" name="user_email" placeholder="Email ID" className={styles.formInput} required />
              
              <input 
                type="text" 
                name="title" 
                value={selectedJob?.title || ""} 
                readOnly 
                className={styles.formInput} 
              />

              <div className={styles.fileUpload}>
                <input 
                  type="file" 
                  id="resume" 
                  name="my_file" 
                  className={styles.fileInput} 
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                <label htmlFor="resume" className={styles.fileLabel}>Choose file</label>
                <span className={styles.fileName}>{uploadedFileName}</span>
              </div>

              <textarea name="message" placeholder="Why should we hire you?" className={styles.formTextarea}></textarea>
              
              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? "SENDING..." : "SUBMIT APPLICATION"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;