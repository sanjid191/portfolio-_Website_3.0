import { HiBolt } from 'react-icons/hi2'

function SkillsCard({ onClick }) {
  return (
    <div className="portfolio-card skills" onClick={onClick}>
      <div className="card-icon">
        <HiBolt size={60} />
      </div>
      <h2 className="card-title">Skills</h2>
      <p className="card-preview">
        React • JavaScript • CSS • UI/UX
      </p>
      <span className="card-hint">Click to explore →</span>
    </div>
  )
}

export default SkillsCard
