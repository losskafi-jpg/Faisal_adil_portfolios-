import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaServer, FaTools, FaPhoneAlt, FaTimes } from "react-icons/fa";
import profilePic from "./profile.jpg";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          MIA<span className="accent">.dev</span>
        </h2>
        <div className="nav-links">
          <button onClick={() => handleScroll("about")} className="nav-btn">About</button>
          <button onClick={() => handleScroll("skills")} className="nav-btn">Skills</button>
          <button onClick={() => handleScroll("projects")} className="nav-btn">Projects</button>
          <button onClick={() => setIsContactOpen(true)} className="cta-small" style={{ border: 'none', cursor: 'pointer' }}>Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Available for Software Engineer Roles</span>
          <h1>
            Building Scalable <br />
            <span className="gradient-text">Backend Architectures</span>
          </h1>
          <p className="hero-subtitle">
            Hi, I'm <strong className="white">Md Imran Alam</strong>. I specialize in engineering high-throughput monolithic 
            and distributed backend servers, processing secure data pipelines, and designing clean full-stack systems.
          </p>
          <div className="hero-actions">
            <button onClick={() => handleScroll("projects")} className="btn-primary">
              Explore My Work
            </button>
            <a href="https://github.com/mdimranalam1701" target="_blank" rel="noreferrer" className="btn-secondary">
              <FaGithub /> GitHub Profile
            </a>
          </div>
        </div>

        <div className="photo-wrapper">
          <div className="photo-frame">
            <img src={profilePic} alt="Md Imran Alam" className="profile-img" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-card">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a final-year Computer Science Engineering student passionate about writing highly optimized, transactional, 
              and thread-safe application layers. My expertise lies in the MERN stack, robust API architecture design, 
              and automated pipeline configuration.
            </p>
            <p style={{ marginTop: "12px" }}>
              From achieving a global rank of 2685 in TCS CodeVita Season 13 to implementing production-ready features 
              like multi-step KYC validation systems, I focus on solving real-world challenges with performant code.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h3>92%</h3>
              <p>Model Accuracy on Edge Devices</p>
            </div>
            <div className="stat-box">
              <h3>7.74</h3>
              <p>Engineering B.Tech CGPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-header"><FaCode /> Languages & Core</div>
            <div className="tags">
              <span>JavaScript (ES6+)</span><span>Java</span><span>Python</span><span>SQL</span><span>Data Structures</span><span>OOPs</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="category-header"><FaServer /> Backend & Databases</div>
            <div className="tags">
              <span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>PostgreSQL</span><span>Redis</span><span>RESTful APIs</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="category-header"><FaTools /> DevOps & Frameworks</div>
            <div className="tags">
              <span>React.js</span><span>Next.js</span><span>Docker</span><span>AWS</span><span>Git/GitHub</span><span>Postman</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Featured Engineering Projects</h2>
        <div className="grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-header">
              <span className="proj-badge">AI & Vision</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://github.com/mdimranalam1701/safe-stree-latest" target="_blank" rel="noreferrer" className="proj-link" title="Source Code"><FaGithub /></a>
                <a href="https://safe-stree.netlify.app/" target="_blank" rel="noreferrer" className="proj-link" title="Live Site"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <h3>Safe Stree Surveillance</h3>
            <p>
              An AI-powered real-time CCTV surveillance model running custom deep-learning gesture pipelines for 
              instant distress recognition with 92% real-world accuracy.
            </p>
            <div className="project-tags">
              <span>Python</span><span>OpenCV</span><span>Flask</span><span>React</span><span>MongoDB</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-header">
              <span className="proj-badge">Full Stack</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://github.com/mdimranalam1701" target="_blank" rel="noreferrer" className="proj-link" title="Source Code"><FaGithub /></a>
              </div>
            </div>
            <h3>Rental & Vehicle Engine</h3>
            <p>
              Enterprise-grade rental application featuring complex multi-tier user onboarding, cryptographic invitation-token patterns, 
              and dynamic dashboard systems.
            </p>
            <div className="project-tags">
              <span>Node.js</span><span>Express</span><span>MongoDB</span><span>React</span><span>Bcrypt</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-header">
              <span className="proj-badge">E-Commerce</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://github.com/mdimranalam1701/bangles-varse" target="_blank" rel="noreferrer" className="proj-link" title="Source Code"><FaGithub /></a>
                <a href="https://garib-nawaz-bangles.vercel.app/" target="_blank" rel="noreferrer" className="proj-link" title="Live Site"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <h3>Bangles Verse Platform</h3>
            <p>
              A responsive storefront engineered with secure state-management, atomic payment integrations, 
              and optimized product indexing routines.
            </p>
            <div className="project-tags">
              <span>JavaScript</span><span>REST APIs</span><span>State Mgmt</span><span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Element */}
      <footer>
        <p>© {new Date().getFullYear()} Md Imran Alam. Crafted for performance.</p>
        <div className="footer-socials">
          <a href="https://github.com/mdimranalam1701" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/mdimranalam1701" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:mdimran.alam1701@gmail.com"><FaEnvelope /></a>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="modal-overlay" onClick={() => setIsContactOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsContactOpen(false)}>
              <FaTimes />
            </button>
            <h2>Get In Touch</h2>
            <p className="modal-subtitle">Feel free to reach out for collaborations or just a friendly chat.</p>
            
            <div className="contact-links-grid">
              <a href="mailto:mdimran.alam1701@gmail.com" className="contact-item">
                <div className="icon-wrapper mail-icon"><FaEnvelope /></div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">mdimran.alam1701@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:+919330557542" className="contact-item">
                <div className="icon-wrapper phone-icon"><FaPhoneAlt /></div>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 93305 57542</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/mdimranalam1701" target="_blank" rel="noreferrer" className="contact-item">
                <div className="icon-wrapper linkedin-icon"><FaLinkedin /></div>
                <div className="contact-details">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">mdimran.alam1701</span>
                </div>
              </a>

              <a href="https://github.com/mdimranalam1701" target="_blank" rel="noreferrer" className="contact-item">
                <div className="icon-wrapper github-icon"><FaGithub /></div>
                <div className="contact-details">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">mdimranalam1701</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}