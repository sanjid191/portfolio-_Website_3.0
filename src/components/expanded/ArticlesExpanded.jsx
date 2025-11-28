import { HiCalendar, HiClock, HiArrowTopRightOnSquare, HiBookOpen } from 'react-icons/hi2'

function ArticlesExpanded({ onClose }) {
  const articles = [
    {
      title: 'Getting Started with React Hooks',
      description: 'A comprehensive guide to understanding and implementing React Hooks in your projects.',
      date: 'Dec 15, 2023',
      readTime: '8 min',
      category: 'React',
      color: '#61dafb',
      link: '#'
    },
    {
      title: 'Building Scalable Web Applications',
      description: 'Best practices and architectural patterns for creating maintainable applications.',
      date: 'Nov 28, 2023',
      readTime: '12 min',
      category: 'Architecture',
      color: '#10b981',
      link: '#'
    },
    {
      title: 'The Future of Web Development',
      description: 'Exploring emerging technologies and trends shaping web development in 2024.',
      date: 'Nov 10, 2023',
      readTime: '10 min',
      category: 'Trends',
      color: '#f59e0b',
      link: '#'
    },
    {
      title: 'Mastering CSS Grid and Flexbox',
      description: 'Complete guide to modern CSS layout techniques for responsive designs.',
      date: 'Oct 22, 2023',
      readTime: '15 min',
      category: 'CSS',
      color: '#ec4899',
      link: '#'
    },
    {
      title: 'Node.js Performance Optimization',
      description: 'Tips and techniques for optimizing Node.js applications in production.',
      date: 'Oct 5, 2023',
      readTime: '11 min',
      category: 'Backend',
      color: '#22c55e',
      link: '#'
    },
    {
      title: 'Introduction to TypeScript',
      description: 'Learn TypeScript fundamentals and improve your development workflow.',
      date: 'Sep 18, 2023',
      readTime: '9 min',
      category: 'TypeScript',
      color: '#3178c6',
      link: '#'
    }
  ]

  const stats = [
    { value: '20+', label: 'Articles Published' },
    { value: '50K+', label: 'Total Reads' },
    { value: '500+', label: 'Newsletter Subscribers' }
  ]

  return (
    <div className="expanded-view">
      <div className="expanded-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="articles-expanded-new">
          <div className="section-header">
            <h2>Articles & Insights</h2>
            <p className="section-subtitle">Thoughts, tutorials, and insights on web development</p>
          </div>

          {/* Stats Row */}
          <div className="articles-stats">
            {stats.map((stat, index) => (
              <div key={index} className="article-stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          
          <div className="articles-grid-new">
            {articles.map((article, index) => (
              <article key={index} className="article-card-new">
                <div className="article-category" style={{ background: `${article.color}20`, color: article.color }}>
                  {article.category}
                </div>
                
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.description}</p>
                
                <div className="article-footer">
                  <div className="article-meta-new">
                    <span><HiCalendar size={14} /> {article.date}</span>
                    <span><HiClock size={14} /> {article.readTime}</span>
                  </div>
                  <a href={article.link} className="read-more-btn">
                    <HiBookOpen size={16} />
                    <span>Read</span>
                    <HiArrowTopRightOnSquare size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="articles-cta">
            <p>Want more content?</p>
            <a href="#" className="view-all-btn">View All Articles</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesExpanded
