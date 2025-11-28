import { HiHandRaised, HiEnvelope } from 'react-icons/hi2'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

function HeroCard({ onClick }) {
  return (
    <div className="portfolio-card hero" onClick={onClick}>
      <div className="card-icon">
        <HiHandRaised size={60} />
      </div>
      <h1 className="card-title">Hi, I'm Sanjid Ahmmed</h1>
      <p className="card-preview">
        Software Quality Assurance (SQA) | Frontend Developer | Java Spring Boot Developer
      </p>
      <div className="hero-social-icons" onClick={(e) => e.stopPropagation()}>
        <a href="https://github.com/sanjid191" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/sanjid-ahmmed-191sa/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.facebook.com/sanjid.ahmmed.9" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaFacebook size={20} />
        </a>
        <a href="mailto:sanjid.sa191@gmail.com" title="Email">
          <HiEnvelope size={20} />
        </a>
      </div>
      <span className="card-hint">Click to explore →</span>
    </div>
  )
}

export default HeroCard
