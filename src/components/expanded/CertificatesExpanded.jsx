import { useState } from 'react'
import { HiAcademicCap, HiTrophy, HiMicrophone, HiUserGroup, HiStar, HiCheckBadge, HiXMark, HiChevronLeft, HiChevronRight, HiCamera } from 'react-icons/hi2'
import { FaAward } from 'react-icons/fa'

function CertificatesExpanded({ onClose }) {
  const [selectedCert, setSelectedCert] = useState(null)
  const [selectedMoment, setSelectedMoment] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const certificates = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Meta (Coursera)',
      date: 'December 2023',
      credential: 'Credential ID: XXXXX',
      color: '#667eea',
      image: 'https://picsum.photos/800/600?random=1'
    },
    {
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      date: 'August 2023',
      credential: '300+ Hours',
      color: '#10b981',
      image: 'https://picsum.photos/800/600?random=2'
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'June 2023',
      credential: 'Certificate of Completion',
      color: '#f59e0b',
      image: 'https://picsum.photos/800/600?random=3'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'March 2023',
      credential: 'Professional Certification',
      color: '#22c55e',
      image: 'https://picsum.photos/800/600?random=4'
    },
    {
      title: 'UI/UX Design Specialization',
      issuer: 'CalArts (Coursera)',
      date: 'January 2023',
      credential: '4-Course Specialization',
      color: '#ec4899',
      image: 'https://picsum.photos/800/600?random=5'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'November 2022',
      credential: 'CLF-C01',
      color: '#f97316',
      image: 'https://picsum.photos/800/600?random=6'
    }
  ]

  const moments = [
    {
      title: 'Hackathon Victory 2023',
      date: 'October 2023',
      location: 'Tech Hub Dhaka',
      description: 'Won 1st place in the national coding championship with an innovative AI-powered solution for healthcare accessibility.',
      images: [
        'https://picsum.photos/800/600?random=10',
        'https://picsum.photos/800/600?random=11',
        'https://picsum.photos/800/600?random=12',
        'https://picsum.photos/800/600?random=13'
      ],
      thumbnail: 'https://picsum.photos/400/300?random=10'
    },
    {
      title: 'Tech Summit Speaker',
      date: 'July 2024',
      location: 'International Convention Center',
      description: 'Delivered a keynote speech on "The Future of Web Development" to an audience of 500+ developers and industry professionals.',
      images: [
        'https://picsum.photos/800/600?random=14',
        'https://picsum.photos/800/600?random=15',
        'https://picsum.photos/800/600?random=16'
      ],
      thumbnail: 'https://picsum.photos/400/300?random=14'
    },
    {
      title: 'Community Meetup Lead',
      date: 'March 2024',
      location: 'Developer Hub',
      description: 'Organized and led a developer community meetup focusing on React best practices and modern web development trends.',
      images: [
        'https://picsum.photos/800/600?random=17',
        'https://picsum.photos/800/600?random=18'
      ],
      thumbnail: 'https://picsum.photos/400/300?random=17'
    },
    {
      title: 'Open Source Celebration',
      date: 'January 2024',
      location: 'GitHub Universe Event',
      description: 'Recognized for outstanding contributions to open source projects, reaching 100+ contributions milestone.',
      images: [
        'https://picsum.photos/800/600?random=19',
        'https://picsum.photos/800/600?random=20',
        'https://picsum.photos/800/600?random=21'
      ],
      thumbnail: 'https://picsum.photos/400/300?random=19'
    },
    {
      title: 'Workshop Facilitator',
      date: 'November 2023',
      location: 'University Campus',
      description: 'Conducted a hands-on workshop on building full-stack applications for 100+ university students.',
      images: [
        'https://picsum.photos/800/600?random=22',
        'https://picsum.photos/800/600?random=23'
      ],
      thumbnail: 'https://picsum.photos/400/300?random=22'
    },
    {
      title: 'Award Ceremony',
      date: 'December 2023',
      location: 'Tech Excellence Awards',
      description: 'Received the "Rising Developer of the Year" award at the annual technology excellence ceremony.',
      images: [
        'https://picsum.photos/800/600?random=24',
        'https://picsum.photos/800/600?random=25',
        'https://picsum.photos/800/600?random=26'
      ],
      thumbnail: 'https://picsum.photos/400/300?random=24'
    }
  ]

  const achievements = [
    {
      icon: <HiTrophy size={28} />,
      title: 'Hackathon Winner',
      description: '1st Place - Code Challenge 2023',
      color: '#fbbf24'
    },
    {
      icon: <HiMicrophone size={28} />,
      title: 'Tech Speaker',
      description: 'National Tech Summit 2024',
      color: '#a855f7'
    },
    {
      icon: <HiUserGroup size={28} />,
      title: 'Community Leader',
      description: '500+ Developer Community',
      color: '#06b6d4'
    },
    {
      icon: <HiStar size={28} />,
      title: 'Open Source',
      description: '100+ GitHub Contributions',
      color: '#10b981'
    }
  ]

  const openCertificate = (cert) => {
    setSelectedCert(cert)
  }

  const closeCertificate = () => {
    setSelectedCert(null)
  }

  const openMoment = (moment) => {
    setSelectedMoment(moment)
    setCurrentImageIndex(0)
  }

  const closeMoment = () => {
    setSelectedMoment(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedMoment) {
      setCurrentImageIndex((prev) => 
        prev === selectedMoment.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedMoment) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedMoment.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <div className="expanded-view">
      <div className="expanded-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="certificates-expanded-new">
          <div className="section-header">
            <h2>Certificates & Moments</h2>
            <p className="section-subtitle">Professional credentials and memorable experiences</p>
          </div>

          {/* Achievements Row */}
          <div className="achievements-row">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-card" style={{ borderColor: `${item.color}40` }}>
                <div className="achievement-icon" style={{ color: item.color, background: `${item.color}15` }}>
                  {item.icon}
                </div>
                <div className="achievement-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certificates Grid */}
          <h3 className="subsection-title">
            <HiAcademicCap size={24} />
            <span>Professional Certifications</span>
          </h3>
          
          <div className="certificates-grid-new">
            {certificates.map((cert, index) => (
              <div 
                key={index} 
                className="certificate-card-new clickable"
                onClick={() => openCertificate(cert)}
              >
                <div className="cert-badge" style={{ background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)` }}>
                  <FaAward size={24} />
                </div>
                <div className="cert-content">
                  <h4>{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-meta">
                    <span className="cert-date">{cert.date}</span>
                    <span className="cert-credential">
                      <HiCheckBadge size={14} />
                      {cert.credential}
                    </span>
                  </div>
                </div>
                <div className="cert-view-hint">Click to view certificate</div>
              </div>
            ))}
          </div>

          {/* Moments Section */}
          <h3 className="subsection-title">
            <HiCamera size={24} />
            <span>Event Moments</span>
          </h3>

          <div className="moments-grid">
            {moments.map((moment, index) => (
              <div 
                key={index} 
                className="moment-card"
                onClick={() => openMoment(moment)}
              >
                <div className="moment-image">
                  <img src={moment.thumbnail} alt={moment.title} />
                  <div className="moment-overlay">
                    <span className="image-count">{moment.images.length} photos</span>
                  </div>
                </div>
                <div className="moment-content">
                  <h4>{moment.title}</h4>
                  <p className="moment-date">{moment.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Popup Modal */}
        {selectedCert && (
          <div className="image-modal" onClick={closeCertificate}>
            <div className="modal-content cert-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeCertificate}>
                <HiXMark size={28} />
              </button>
              <div className="cert-modal-image">
                <img src={selectedCert.image} alt={selectedCert.title} />
              </div>
              <div className="cert-modal-info">
                <h3>{selectedCert.title}</h3>
                <p>{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
            </div>
          </div>
        )}

        {/* Moment Popup Modal with Gallery */}
        {selectedMoment && (
          <div className="image-modal" onClick={closeMoment}>
            <div className="modal-content moment-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeMoment}>
                <HiXMark size={28} />
              </button>
              
              <div className="moment-gallery">
                <button className="gallery-nav prev" onClick={prevImage}>
                  <HiChevronLeft size={32} />
                </button>
                <div className="gallery-image">
                  <img src={selectedMoment.images[currentImageIndex]} alt={selectedMoment.title} />
                </div>
                <button className="gallery-nav next" onClick={nextImage}>
                  <HiChevronRight size={32} />
                </button>
              </div>

              <div className="gallery-dots">
                {selectedMoment.images.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>

              <div className="moment-modal-info">
                <h3>{selectedMoment.title}</h3>
                <p className="moment-meta">{selectedMoment.date} • {selectedMoment.location}</p>
                <p className="moment-description">{selectedMoment.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CertificatesExpanded
