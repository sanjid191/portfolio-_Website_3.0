import { HiNewspaper } from 'react-icons/hi2'

function ArticlesCard({ onClick }) {
  return (
    <div className="portfolio-card articles" onClick={onClick}>
      <div className="card-icon">
        <HiNewspaper size={60} />
      </div>
      <h2 className="card-title">Articles</h2>
      <p className="card-preview">
        Insights, tutorials, and tech thoughts
      </p>
      <span className="card-hint">Click to explore →</span>
    </div>
  )
}

export default ArticlesCard
