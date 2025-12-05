import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'
import { HiEnvelope, HiArrowDownTray, HiSparkles, HiRocketLaunch, HiHeart } from 'react-icons/hi2'

function HeroExpanded({ onClose }) {
  const highlights = [
    { icon: <HiSparkles size={24} />, label: 'Years Experience', value: '3+' },
    { icon: <HiRocketLaunch size={24} />, label: 'Projects Delivered', value: '30+' },
    { icon: <HiHeart size={24} />, label: 'Happy Clients', value: '20+' }
  ]

  return (
    <div className="expanded-view">
      <div className="expanded-content hero-expanded-content">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="hero-expanded-grid">
          {/* Left Side - Profile */}
          <div className="hero-profile-section">
            <div className="profile-image-wrapper">
              <div className="profile-image-glow"></div>
              <img 
                src="/Sanjid_Ahmmed.png" 
                alt="Sanjid Ahmmed" 
                className="hero-profile-pic"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="profile-placeholder" style={{display: 'none'}}>
                <span>SA</span>
              </div>
            </div>
            
            <div className="hero-social-row">
              <a href="https://github.com/sanjid191" target="_blank" rel="noopener noreferrer" className="social-btn github">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sanjid-ahmmed-191sa/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.facebook.com/sanjid.ahmmed.9" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://x.com/Sanjid_Ahmmed_" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
                <FaTwitter size={20} />
              </a>
              <a href="mailto:sanjid.sa191@gmail.com" className="social-btn email">
                <HiEnvelope size={20} />
              </a>
            </div>

            <a href="/CV_Sanjid_Ahmmed.pdf" download className="download-cv-btn">
              <HiArrowDownTray size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Right Side - Content */}
          <div className="hero-content-section">
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-name">Sanjid Ahmmed</h1>
            <div className="hero-title-wrapper">
              <span className="hero-title-line"></span>
              <h2 className="hero-role">Software Quality Assurance | Frontend Developer</h2>
              <span className="hero-title-line"></span>
            </div>

            <p className="hero-bio">
              a CSE undergraduate and aspiring software engineer with skills in web development, QA, and modern software tools. I work with Java, JavaScript, React, Node.js, and MySQL, and I'm actively building my expertise in Software Quality Assurance, including manual testing, API testing, and tools like Selenium, Postman, Jira, TestNG, and JUnit. I also have strong leadership experience through roles in campus organizations, including BASIS Students' Forum, Hult Prize and CETL, where I managed events, teams, and technical operations.
            </p>

            <div className="hero-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-value">{item.value}</div>
                  <div className="highlight-label">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="hero-expertise">
              <h3>What I Do</h3>
              <div className="expertise-tags">
                <span>Web Development</span>
                <span>Manual Testing</span>
                <span>API Testing </span>
                <span>Automation Testing</span>
                <span>SQA</span>
                <span>Java Spring Boot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroExpanded
