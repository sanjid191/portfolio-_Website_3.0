import { HiEnvelope } from 'react-icons/hi2'

function ContactCard({ onClick }) {
  return (
    <div className="portfolio-card contact" onClick={onClick}>
      <div className="card-icon">
        <HiEnvelope size={60} />
      </div>
      <h2 className="card-title">Contact</h2>
      <p className="card-preview">
        Let's connect and work together
      </p>
      <span className="card-hint">Click to explore →</span>
    </div>
  )
}

export default ContactCard
