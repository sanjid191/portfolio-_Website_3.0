import { useState } from 'react'
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

function App() {
  const [expandedSection, setExpandedSection] = useState(null)

  const openSection = (section) => {
    setExpandedSection(section)
  }

  const closeSection = () => {
    setExpandedSection(null)
  }

  return (
    <div className="app">
      {/* Grid Layout */}
      <div className="portfolio-grid">
        <HeroCard onClick={() => openSection('hero')} />
        <SkillsCard onClick={() => openSection('skills')} />
        <CertificatesCard onClick={() => openSection('certificates')} />
        <ResumeCard onClick={() => openSection('resume')} />
        <ArticlesCard onClick={() => openSection('articles')} />
        <ContactCard onClick={() => openSection('contact')} />
        <ProjectsCard onClick={() => openSection('projects')} />
      </div>

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
