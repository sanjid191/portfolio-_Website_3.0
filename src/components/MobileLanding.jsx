import { HiHandRaised, HiEnvelope, HiDocumentText, HiBriefcase, HiCodeBracket, HiTrophy, HiPencilSquare, HiChatBubbleLeftRight } from 'react-icons/hi2'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

function MobileLanding({ onOpenSection }) {
  return (
    <div className="mobile-grid-landing">
      {/* Hero Card - Full Width */}
      <div className="mobile-card mobile-hero-card" onClick={() => onOpenSection('hero')}>
        <div className="mobile-card-icon hero-icon">
          <HiHandRaised size={40} />
        </div>
        <h1 className="mobile-card-title">Hi, I'm Sanjid Ahmmed</h1>
        <p className="mobile-card-text">
          Software Quality Assurance (SQA) | Frontend Developer | Java Spring Boot Developer
        </p>
        <div className="mobile-hero-social" onClick={(e) => e.stopPropagation()}>
          <a href="https://github.com/sanjidahmmed" target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/sanjidahmmed" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={18} />
          </a>
          <a href="https://facebook.com/sanjidahmmed" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={18} />
          </a>
          <a href="mailto:sanjid.ahmmed@example.com">
            <HiEnvelope size={18} />
          </a>
        </div>
        <span className="mobile-card-hint">Tap to explore →</span>
      </div>

      {/* Two Column Grid Row */}
      <div className="mobile-grid-row">
        {/* Skills Card */}
        <div className="mobile-card mobile-skills-card" onClick={() => onOpenSection('skills')}>
          <div className="mobile-card-icon skills-icon">
            <HiCodeBracket size={32} />
          </div>
          <h2 className="mobile-card-title-sm">Skills</h2>
          <p className="mobile-card-text-sm">Technologies & Tools</p>
          <span className="mobile-card-hint">Tap →</span>
        </div>

        {/* Certificates Card */}
        <div className="mobile-card mobile-certificates-card" onClick={() => onOpenSection('certificates')}>
          <div className="mobile-card-icon certificates-icon">
            <HiTrophy size={32} />
          </div>
          <h2 className="mobile-card-title-sm">Certificates</h2>
          <p className="mobile-card-text-sm">Achievements & Moments</p>
          <span className="mobile-card-hint">Tap →</span>
        </div>
      </div>

      {/* Resume Card - Full Width */}
      <div className="mobile-card mobile-resume-card" onClick={() => onOpenSection('resume')}>
        <div className="mobile-card-icon resume-icon">
          <HiDocumentText size={36} />
        </div>
        <h2 className="mobile-card-title">Resume</h2>
        <p className="mobile-card-text">Experience, Education & Career Journey</p>
        <span className="mobile-card-hint">Tap to explore →</span>
      </div>

      {/* Two Column Grid Row */}
      <div className="mobile-grid-row">
        {/* Articles Card */}
        <div className="mobile-card mobile-articles-card" onClick={() => onOpenSection('articles')}>
          <div className="mobile-card-icon articles-icon">
            <HiPencilSquare size={32} />
          </div>
          <h2 className="mobile-card-title-sm">Articles</h2>
          <p className="mobile-card-text-sm">Blog & Insights</p>
          <span className="mobile-card-hint">Tap →</span>
        </div>

        {/* Contact Card */}
        <div className="mobile-card mobile-contact-card" onClick={() => onOpenSection('contact')}>
          <div className="mobile-card-icon contact-icon">
            <HiChatBubbleLeftRight size={32} />
          </div>
          <h2 className="mobile-card-title-sm">Contact</h2>
          <p className="mobile-card-text-sm">Get in Touch</p>
          <span className="mobile-card-hint">Tap →</span>
        </div>
      </div>

      {/* Projects Card - Full Width */}
      <div className="mobile-card mobile-projects-card" onClick={() => onOpenSection('projects')}>
        <div className="mobile-card-icon projects-icon">
          <HiBriefcase size={36} />
        </div>
        <h2 className="mobile-card-title">Featured Projects</h2>
        <p className="mobile-card-text">My work, innovations & creations</p>
        <span className="mobile-card-hint">Tap to explore →</span>
      </div>
    </div>
  )
}

export default MobileLanding
