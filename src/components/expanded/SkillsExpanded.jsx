import { HiCodeBracket, HiCog6Tooth, HiCircleStack, HiWrenchScrewdriver } from 'react-icons/hi2'
import { FaReact } from 'react-icons/fa'

function SkillsExpanded({ onClose }) {
  const skillCategories = [
    {
      title: 'Languages',
      description: 'Core languages for building robust logic.',
      icon: <HiCodeBracket size={40} />,
      iconColor: '#00d4ff',
      skills: ['Java', 'C', 'JavaScript', 'Python']
    },
    {
      title: 'Web Technologies',
      description: 'Modern stack for responsive web apps.',
      icon: <FaReact size={40} />,
      iconColor: '#a855f7',
      skills: ['HTML', 'CSS', 'TailwindCSS', 'React', 'Node.js', 'Express.js', 'Spring Boot']
    },
    {
      title: 'Databases',
      description: 'Efficient data storage and management.',
      icon: <HiCircleStack size={40} />,
      iconColor: '#fbbf24',
      skills: ['MySQL', 'PostgreSQL', 'Firebase']
    },
    {
      title: 'SQA Tools',
      description: 'Ensuring software quality and reliability.',
      icon: <HiWrenchScrewdriver size={40} />,
      iconColor: '#22c55e',
      skills: ['Selenium', 'Postman', 'Jira', 'TestNG', 'JUnit']
    },
    {
      title: 'Testing Skills',
      description: 'Ensuring software quality and reliability.',
      icon: <HiWrenchScrewdriver size={40} />,
      iconColor: '#22c55e',
      skills: ['Manual Testing', 'Automation Testing', 'UI Testing', 'API Testing', 'Load Performance Testing']
    },
    {
      title: 'Other Tools',
      description: 'Essential tools for development workflow.',
      icon: <HiCog6Tooth size={40} />,
      iconColor: '#ec4899',
      skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Figma', 'LaTeX','Docker','AutoCAD']
    }
  ]

  return (
    <div className="expanded-view">
      <div className="expanded-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="skills-expanded">
          <h2>My Skills</h2>
          <div className="skills-categories-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category-card">
                <div className="skill-category-header">
                  <div className="skill-category-icon" style={{ color: category.iconColor }}>
                    {category.icon}
                  </div>
                  <div className="skill-category-info">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsExpanded
