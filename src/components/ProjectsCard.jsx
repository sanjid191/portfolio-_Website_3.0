import { HiBriefcase } from 'react-icons/hi2'

function ProjectsCard({ onClick }) {
  return (
    <div className="portfolio-card projects" onClick={onClick}>
      <div className="card-icon">
        <HiBriefcase size={60} />
      </div>
      <h2 className="card-title">Projects</h2>
      <p className="card-preview">
        Showcasing my best work
      </p>
      <span className="card-hint">Click to explore →</span>
    </div>
  )
}

export default ProjectsCard
