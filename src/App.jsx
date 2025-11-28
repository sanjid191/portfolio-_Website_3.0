import { useState, useEffect } from 'react'
import './App.css'
import HeroCard from './components/HeroCard'
import CertificatesCard from './components/CertificatesCard'
import SkillsCard from './components/SkillsCard'
import ResumeCard from './components/ResumeCard'
import ProjectsCard from './components/ProjectsCard'
import ContactCard from './components/ContactCard'
import ArticlesCard from './components/ArticlesCard'
import HeroExpanded from './components/expanded/HeroExpanded'
import CertificatesExpanded from './components/expanded/CertificatesExpanded'
import SkillsExpanded from './components/expanded/SkillsExpanded'
import ResumeExpanded from './components/expanded/ResumeExpanded'
import ProjectsExpanded from './components/expanded/ProjectsExpanded'
import ContactExpanded from './components/expanded/ContactExpanded'
import ArticlesExpanded from './components/expanded/ArticlesExpanded'
import MobileLanding from './components/MobileLanding'

function App() {
  const [expandedSection, setExpandedSection] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  // Listen for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const openSection = (section) => {
    setExpandedSection(section)
  }

  const closeSection = () => {
    setExpandedSection(null)
  }

  return (
    <div className="app">
      {/* Desktop Grid Layout */}
      {!isMobile && (
        <div className="portfolio-grid">
          <HeroCard onClick={() => openSection('hero')} />
          <SkillsCard onClick={() => openSection('skills')} />
          <CertificatesCard onClick={() => openSection('certificates')} />
          <ResumeCard onClick={() => openSection('resume')} />
          <ArticlesCard onClick={() => openSection('articles')} />
          <ContactCard onClick={() => openSection('contact')} />
          <ProjectsCard onClick={() => openSection('projects')} />
        </div>
      )}

      {/* Mobile Landing Page */}
      {isMobile && !expandedSection && (
        <MobileLanding onOpenSection={openSection} />
      )}

      {/* Expanded Views */}
      {expandedSection === 'hero' && <HeroExpanded onClose={closeSection} />}
      {expandedSection === 'certificates' && <CertificatesExpanded onClose={closeSection} />}
      {expandedSection === 'skills' && <SkillsExpanded onClose={closeSection} />}
      {expandedSection === 'resume' && <ResumeExpanded onClose={closeSection} />}
      {expandedSection === 'articles' && <ArticlesExpanded onClose={closeSection} />}
      {expandedSection === 'projects' && <ProjectsExpanded onClose={closeSection} />}
      {expandedSection === 'contact' && <ContactExpanded onClose={closeSection} />}
    </div>
  )
}

export default App
