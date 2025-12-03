import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiAcademicCap, HiChartBar, HiCheckCircle, HiPaintBrush, HiCloud, HiDevicePhoneMobile, HiXMark, HiArrowLeft, HiChevronLeft, HiChevronRight, HiStar, HiEye, HiCodeBracket } from 'react-icons/hi2'

function ProjectsExpanded({ onClose }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      title: 'Green Fest 2.0: Offical Event Website',
      description: 'The official website for Green Fest 2.0, a festival organized by Green University of Bangladesh.',
      fullDescription: 'Green Fest 2.0 is the official event website for the annual festival organized by Green University of Bangladesh. The website serves as a comprehensive platform to provide information about the event, including schedules, activities, guest speakers, and registration details. It aims to enhance the overall experience for attendees by offering easy access to event-related information and updates.',
      tags: ['React', 'MongoDB',],
      icon: <HiAcademicCap size={32} />,
      color: '#667eea',
      github: 'https://github.com/sanjid191/Green_Fest_2.0_React_Application',
      live: 'https://greenfest.green.edu.bd/',
      featured: true,
      thumbnail: 'src/assets/Project Thumbnail/GF2.png',
      screenshots: [
        'src/assets/Project Screenshots/Green_Fest_2 (1).png',
        'src/assets/Project Screenshots/Green_Fest_2 (2).png',
        'src/assets/Project Screenshots/Green_Fest_2 (3).png',
        'src/assets/Project Screenshots/Green_Fest_2 (4).png'
      ],
      features: ['Event Schedule', 'Guest Speakers', 'Activity Listings', 'Registration Portal', 'Real-time Updates', 'Responsive Design', 'Photo Gallery', 'Contact Information'],
      stats: { stars: 128, views: 2340 }
    },
    {
      title: 'Path2Pro: Academic and Skill Development Platform',
      description: 'A comprehensive online platform designed to revolutionize the educational experience with course management, skill development, and CV services.',
      fullDescription: 'The Path2Pro is a comprehensive online platform designed to revolutionize the educational experience. It serves as a centralized hub for students, faculty, and staff, offering a wide range of features to enhance learning, foster collaboration, and streamline administrative processes. The platform aims to create a dynamic and engaging learning environment that empowers students to succeed academically and professionally.',
      tags: ['React', 'MongoDB', 'Express', 'Redux', 'Stripe API', 'PayPal API', 'AWS S3'],
      icon: <HiAcademicCap size={32} />,
      color: '#667eea',
      github: 'https://github.com/msahid-cse/Path2Pro1.0',
      live: 'https://example.com',
      featured: true,
      thumbnail: 'src/assets/Project Thumbnail/Path2Pro.jpg',
      screenshots: [
        'src/assets/Project Screenshots/R2P-1.png',
        'src/assets/Project Screenshots/R2P-2.png',
        'src/assets/Project Screenshots/R2P-3.png',
        'src/assets/Project Screenshots/R2P-4.png',
        'src/assets/Project Screenshots/R2P-5.png',
        'src/assets/Project Screenshots/R2P-6.png'
      ],
      features: ['Resource Library', 'Skill Development', 'CV Services', 'Feedback Portal', 'Notice Board', 'Course Management', 'Gradebook', 'User Management'],
      stats: { stars: 128, views: 2340 }
    },
    {
      title: 'Employee Management System (Java)',
      description: 'Java GUI Application for managing employee data with MySQL database integration and role-based access control.',
      fullDescription: 'It\'s a Java project that uses a graphical user interface (GUI) to allow users to manage employee data stored in a MySQL database. The system allows users to add, edit, delete & view employee information, as well as view the login information for both admins and employees. Features role-based access control for administrative functions and data validation to ensure information accuracy.',
      tags: ['Java', 'Java Swing', 'MySQL'],
      icon: <HiChartBar size={32} />,
      color: '#f59e0b',
      github: 'https://github.com/sanjid191/Employee_Management_System_with_GUI_and_MySQL',
      live: 'https://example.com',
      featured: true,
      thumbnail: 'src/assets/Project Thumbnail/EMS_Java_Swing.jpg',
      screenshots: [
        'src/assets/Project Screenshots/EMP_Java_swing (1).png',
        'src/assets/Project Screenshots/EMP_Java_swing (2).png',
        'src/assets/Project Screenshots/EMP_Java_swing (3).png',
        'src/assets/Project Screenshots/EMP_Java_swing (4).png',
        'src/assets/Project Screenshots/EMP_Java_swing (5).png',
        'src/assets/Project Screenshots/EMP_Java_swing (6).png'
      ],
      features: ['GUI Interface', 'MySQL Integration', 'Add/Edit/Delete Records', 'View Employee Profiles', 'Dual-view Login', 'Role-based Access', 'Data Validation', 'Search & Filter'],
      stats: { stars: 256, views: 4520 }
    },
    {
      title: 'CryptoVisualizer',
      description: 'An interactive platform to demystify cryptography principles with visual representations of encryption and decryption.',
      fullDescription: 'The CryptoVisualizer is an interactive platform designed to demystify the principles of cryptography by providing a practical, visual representation of various cryptographic methods. In an era where data security is paramount, this platform seeks to enhance the understanding of encryption and decryption mechanisms, making cryptography accessible to learners, professionals, and enthusiasts alike.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      icon: <HiCheckCircle size={32} />,
      color: '#10b981',
      github: 'https://github.com/sanjid191/CryptoVisualizer',
      live: 'https://cryptovisualizer.netlify.app/',
      featured: false,
      thumbnail: 'src/assets/Project Thumbnail/CryptoVisualizer.jpg',
      screenshots: [
        'src/assets/Project Thumbnail/CryptoVisualizer.jpg',
        'src/assets/Project Thumbnail/CryptoVisualizer.jpg',
        'src/assets/Project Thumbnail/CryptoVisualizer.jpg',
        'src/assets/Project Thumbnail/CryptoVisualizer.jpg'
      ],
      features: ['Interactive Visualizations', 'Real-time Animations', 'AES/RSA/DES Algorithms', 'User-friendly Interface', 'Side-by-side Comparison', 'Step-by-step Breakdown', 'Cryptanalysis Tools', 'Educational Content'],
      stats: { stars: 89, views: 1890 }
    },
    {
      title: 'CGPA Calculator',
      description: 'A user-friendly tool to calculate CGPA and GPA scores for students with instant semester calculations.',
      fullDescription: 'Stuck juggling grades and semester averages? This website simplifies student life with a user-friendly CGPA calculator. Input your course credits and grades, and it will instantly calculate your semester GPA and overall CGPA. No more manual calculations - this tool keeps you informed of your academic standing and even estimates your graduation class (at some universities). Focus on your studies, let the website handle the number crunching.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      icon: <HiPaintBrush size={32} />,
      color: '#ec4899',
      github: 'https://github.com/sanjid191/CGPA-calculation',
      live: 'https://cgpacalculationgub.netlify.app/',
      featured: false,
      thumbnail: 'src/assets/Project Thumbnail/CGPA_Calculator.jpg',
      screenshots: [
        'src/assets/Project Thumbnail/CGPA_Calculator.jpg',
        'src/assets/Project Thumbnail/CGPA_Calculator.jpg',
        'src/assets/Project Thumbnail/CGPA_Calculator.jpg',
        'src/assets/Project Thumbnail/CGPA_Calculator.jpg'
      ],
      features: ['User-friendly Interface', 'Instant GPA Calculation', 'Overall CGPA Tracking', 'Graduation Class Estimation', 'Real-time Updates', 'Simplified Input System', 'Error Elimination', 'Academic Standing'],
      stats: { stars: 167, views: 3210 }
    },
    {
      title: '2D Robot Soccer Simulation',
      description: 'A fun and engaging simulation of robot soccer matches using Python with AI-powered decision making.',
      fullDescription: 'This project presents a comprehensive Robot Soccer Simulation, where two teams of robots (Blue and Red) compete in a virtual soccer match. The simulation is designed to demonstrate the integration of artificial intelligence, real-time graphics, and multi-agent pathfinding. It features realistic ball physics, robot movement using the A* pathfinding algorithm, and interactive user controls. The simulation is both an educational tool and a platform for experimenting with robotics and AI concepts.',
      tags: ['Python', 'Pygame', 'Matplotlib', 'NumPy'],
      icon: <HiCloud size={32} />,
      color: '#06b6d4',
      github: 'https://github.com/sanjid191/Simple_2D_Robot_Soccer_Simulation',
      live: 'https://example.com',
      featured: false,
      thumbnail: 'src/assets/Project Thumbnail/2D Robot Soccer Simulation (Lightweight).jpg',
      screenshots: [
        'src/assets/Project Thumbnail/2D Robot Soccer Simulation (Lightweight).jpg',
        'src/assets/Project Thumbnail/2D_C.png',
        'src/assets/Project Thumbnail/2D Robot Soccer Simulation (Lightweight).jpg',
        'src/assets/Project Thumbnail/2D_C.png'
      ],
      features: ['Two-team Simulation', 'AI Decision Making', 'Real-time 2D Graphics', 'A* Pathfinding', 'Ball Physics', 'Collision Detection', 'Interactive Controls', 'Educational Tool'],
      stats: { stars: 203, views: 4120 }
    },
    {
      title: 'Archive portfolio websites',
      description: 'Evolution of my personal portfolio websites showcasing my skills and projects over time.',
      fullDescription: 'Here are my previous portfolio websites that I have created over time to showcase my skills, projects, and experiences. Each version reflects my growth as a developer and designer, incorporating new technologies and design trends. These portfolios serve as a testament to my journey in the tech world, highlighting my commitment to continuous learning and improvement.',
      projects: [
        { name: 'RocketFlow', link: 'https://beta.rocketflow.biz/' },
        { name: 'SmeCube', link: 'https://smecube.com/' },
        { name: "Let's Print", link: '#' }
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Tailwind CSS'],
      icon: <HiCloud size={32} />,
      color: '#06b6d4',
      github: 'https://github.com/sanjid191',
      live: 'https://github.com/sanjid191',
      featured: false,
      thumbnail: 'src/assets/Project Thumbnail/Aechive_web.png',
      screenshots: [
        'src/assets/Project Screenshots/PW1.png',
        'src/assets/Project Screenshots/PW2.png'
      ],
      features: ['Version 1: Basic HTML/CSS', 'Version 2: Bootstrap Integration',  'Version 3: React Implementation','Tailwind CSS Styling', 'Responsive Design', 'Project Showcases', 'Contact Information'],
      stats: { stars: 203, views: 4120 }
    }
  ]

  const openProject = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      )
    }
  }

  // If a project is selected, show the project detail page
  if (selectedProject) {
    return (
      <div className="expanded-view full-page">
        <div className="expanded-content project-detail-page">
          <button className="back-btn" onClick={closeProject}>
            <HiArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>
          
          <div className="project-detail-container">
            {/* Project Header */}
            <div className="project-detail-header">
              <div className="project-detail-icon" style={{ color: selectedProject.color, background: `${selectedProject.color}20` }}>
                {selectedProject.icon}
              </div>
              <div className="project-detail-title">
                <h1>{selectedProject.title}</h1>
                <div className="project-stats">
                  <span><HiStar size={16} /> {selectedProject.stats.stars} Stars</span>
                  <span><HiEye size={16} /> {selectedProject.stats.views} Views</span>
                </div>
              </div>
              <div className="project-detail-actions">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="action-btn github">
                  <FaGithub size={20} />
                  <span>View Code</span>
                </a>
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="action-btn live" style={{ background: selectedProject.color }}>
                  <FaExternalLinkAlt size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            {/* Screenshots Gallery */}
            <div className="project-screenshots">
              <div className="screenshot-main">
                <button className="screenshot-nav prev" onClick={prevImage}>
                  <HiChevronLeft size={28} />
                </button>
                <img src={selectedProject.screenshots[currentImageIndex]} alt={`${selectedProject.title} screenshot`} />
                <button className="screenshot-nav next" onClick={nextImage}>
                  <HiChevronRight size={28} />
                </button>
              </div>
              <div className="screenshot-thumbnails">
                {selectedProject.screenshots.map((img, index) => (
                  <div 
                    key={index}
                    className={`screenshot-thumb ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info Grid */}
            <div className="project-info-grid">
              {/* Description */}
              <div className="project-info-section description">
                <h3><HiCodeBracket size={22} /> About the Project</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>

              {/* Tech Stack */}
              <div className="project-info-section tech">
                <h3>Technologies Used</h3>
                <div className="tech-tags-large">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag-large" style={{ borderColor: selectedProject.color, color: selectedProject.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="project-info-section features">
                <h3>Key Features</h3>
                <div className="features-grid">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-dot" style={{ background: selectedProject.color }}></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Main projects list view
  return (
    <div className="expanded-view full-page">
      <div className="expanded-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="projects-expanded-full">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p className="section-subtitle">A collection of my recent work and side projects</p>
          </div>
          
          <div className="projects-grid-full">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card-full ${project.featured ? 'featured' : ''}`}
                onClick={() => openProject(project)}
              >
                {/* Project Thumbnail */}
                <div className="project-thumbnail">
                  <img src={project.thumbnail} alt={project.title} />
                  <div className="project-thumbnail-overlay">
                    <span>View Details</span>
                  </div>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>

                {/* Project Info */}
                <div className="project-card-info">
                  <div className="project-card-top">
                    <div className="project-icon-small" style={{ color: project.color, background: `${project.color}20` }}>
                      {project.icon}
                    </div>
                    <h3>{project.title}</h3>
                  </div>
                  
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech-stack">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="tech-tag" style={{ borderColor: `${project.color}40` }}>{tag}</span>
                    ))}
                    {project.tags.length > 4 && <span className="tech-tag more">+{project.tags.length - 4}</span>}
                  </div>

                  <div className="project-card-bottom">
                    <div className="project-stats-small">
                      <span><HiStar size={14} /> {project.stats.stars}</span>
                      <span><HiEye size={14} /> {project.stats.views}</span>
                    </div>
                    <div className="project-links" onClick={(e) => e.stopPropagation()}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Code">
                        <FaGithub size={18} />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo" style={{ color: project.color }}>
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsExpanded
