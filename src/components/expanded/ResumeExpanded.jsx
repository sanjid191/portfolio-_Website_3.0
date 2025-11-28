import { HiAcademicCap, HiBriefcase, HiStar, HiMapPin, HiCalendar, HiArrowDownTray } from 'react-icons/hi2'

function ResumeExpanded({ onClose }) {
  const education = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      school: 'Green University of Bangladesh',
      period: 'February 2022 - January 2026',
      grade: 'Final Semester',
      highlights: ['Software Engineering', 'Object-Oriented Programming','Data Structures and Algorithms','Database Systems','AI, Machine Learning, Data Mining', 'Web Development']
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'South Point School and College',
      period: 'July 2018 - June 2020',
      grade: 'Science',
      highlights: ['Physics', 'Chemistry', 'Mathematics']
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      school: 'Gosingga High School',
      period: 'July 2016 - June 2018',
      grade: 'Science',
      highlights: ['Physics', 'Chemistry', 'Mathematics']
    }
  ]

  const experience = [
    {
      title: 'Trainee Frontend Developer',
      company: 'Digi5 Ltd.',
      period: 'November 2025 – Present',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      description: [
        'Developing and maintaining web applications using modern technologies',
        'Collaborating with team members on software development projects',
        'Learning and implementing best practices in software engineering',
        'Contributing to code reviews and technical documentation'
      ],
      projects: [
        { name: 'RocketFlow', link: 'https://beta.rocketflow.biz/' },
        { name: 'SmeCube', link: 'https://smecube.com/' },
        { name: "Let's Print", link: '#' }
      ]
    },
    {
      title: 'Technical Support & Event Manager Intern',
      company: 'Center of Excellence for Teaching and Learning (CETL)',
      period: 'June 2024 – July 2025',
      location: 'Green University of Bangladesh',
      type: 'On Campus Internship',
      description: [
        'Coordinated logistics, provided technical support, and scheduled campus events',
        'Boosted student engagement through well-organized programs',
        'Collaborated with teams to manage resources and troubleshoot technical issues',
        'Ensured seamless program delivery across multiple events'
      ]
    },
    {
      title: 'Assistant Invigilator',
      company: 'NAT Test (Nihongo Achievement Test)',
      period: 'December 2024 – March 2025',
      location: 'Bangladesh',
      type: 'Part-time',
      description: [
        'Supported exam administration for 250+ participants across multiple sessions',
        'Maintained testing integrity and security protocols',
        'Assisted with logistical setup and coordination'
      ]
    }
  ]

  const leadership = [
    { title: 'General Secretary', org: 'BASIS Students\' Forum GUB Chapter', period: 'May 2025 - Present' },
    { title: 'Head of Project Management', org: 'Hult Prize Green University of Bangladesh', period: 'September 2024 – March 2025' },
    { title: 'Lead Member, Sponsorship Management', org: 'GUB CSE Carnival 2024', period: 'October 2024' },
    { title: 'Former Organizing Secretary', org: 'R Eco Warrior Club, Green University of Bangladesh', period: 'February 2023 – April 2024' }
  ]

  return (
    <div className="expanded-view">
      <div className="expanded-content resume-wide">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="resume-expanded-new">
          <div className="resume-header">
            <div>
              <h2>Professional Resume</h2>
              <p className="section-subtitle">My journey and experience in tech</p>
            </div>
            <a href="/CV_Sanjid_Ahmmed.pdf" download className="download-cv-btn">
              <HiArrowDownTray size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="resume-grid-three-col">
            {/* Experience Column */}
            <div className="resume-column">
              <div className="resume-section-new">
                <h3 className="resume-section-title">
                  <HiBriefcase size={22} />
                  <span>Work Experience</span>
                </h3>
                
                <div className="experience-timeline">
                  {experience.map((exp, index) => (
                    <div key={index} className="experience-item">
                      <div className="exp-header">
                        <div className="exp-title-row">
                          <h4>{exp.title}</h4>
                          <span className="exp-type">{exp.type}</span>
                        </div>
                        <div className="exp-company">{exp.company}</div>
                        <div className="exp-meta">
                          <span><HiCalendar size={14} /> {exp.period}</span>
                          <span><HiMapPin size={14} /> {exp.location}</span>
                        </div>
                      </div>
                      <ul className="exp-description">
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      {exp.projects && (
                        <div className="exp-projects">
                          <span className="exp-projects-label">Projects:</span>
                          <div className="exp-projects-links">
                            {exp.projects.map((project, idx) => (
                              <a 
                                key={idx} 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`exp-project-link ${project.link === '#' ? 'disabled' : ''}`}
                              >
                                {project.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Column */}
            <div className="resume-column">
              <div className="resume-section-new">
                <h3 className="resume-section-title">
                  <HiAcademicCap size={22} />
                  <span>Education</span>
                </h3>
                
                {education.map((edu, index) => (
                  <div key={index} className="education-card">
                    <h4>{edu.degree}</h4>
                    <p className="edu-school">{edu.school}</p>
                    <p className="edu-period">{edu.period}</p>
                    <p className="edu-grade">{edu.grade}</p>
                    <div className="edu-highlights">
                      {edu.highlights.map((h, idx) => (
                        <span key={idx}>{h}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Column */}
            <div className="resume-column">
              <div className="resume-section-new">
                <h3 className="resume-section-title">
                  <HiStar size={22} />
                  <span>Leadership</span>
                </h3>
                
                <div className="leadership-list">
                  {leadership.map((item, index) => (
                    <div key={index} className="leadership-item">
                      <h4>{item.title}</h4>
                      <p>{item.org}</p>
                      <span className="leadership-period">{item.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeExpanded
