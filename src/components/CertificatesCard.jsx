import { HiTrophy } from 'react-icons/hi2'

function CertificatesCard({ onClick }) {
  return (
    <div className="portfolio-card certificates" onClick={onClick}>
      <div className="card-icon">
        <HiTrophy size={60} />
      </div>
      <h2 className="card-title">Certificates & Moments</h2>
      <p className="card-preview">
        Achievements and memorable experiences
      </p>
      <span className="card-hint">Click to explore →</span>
    </div>
  )
}

export default CertificatesCard
