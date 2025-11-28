import { HiDocumentText } from 'react-icons/hi2'

function ResumeCard({ onClick }) {
  return (
    <div className="portfolio-card resume" onClick={onClick}>
      <div className="card-icon">
        <HiDocumentText size={60} />
      </div>
      <h2 className="card-title">Resume</h2>
      <p className="card-preview">
        Education • Experience • Leadership
      </p>
      <span className="card-hint">Click to explore →</span>
    </div>
  )
}

export default ResumeCard
