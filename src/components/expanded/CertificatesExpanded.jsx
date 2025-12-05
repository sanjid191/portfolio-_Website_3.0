import { useState } from 'react'
import { HiAcademicCap, HiTrophy, HiMicrophone, HiUserGroup, HiStar, HiCheckBadge, HiXMark, HiChevronLeft, HiChevronRight, HiCamera } from 'react-icons/hi2'
import { FaAward } from 'react-icons/fa'
import { HiArrowLeft } from 'react-icons/hi'

function CertificatesExpanded({ onClose }) {
  const [selectedCert, setSelectedCert] = useState(null)
  const [selectedMoment, setSelectedMoment] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const certificates = [
    {
      //Java Edge Certificate
      title: ' Advanced Java Programming, Enhancing Digital Government and Economy (EDGE)',
      issuer: 'Green University of Bangladesh',
      date: 'October 2024',
      credential: '80+ Hours',
      color: '#667eea',
      image: 'src/assets/certificates/EDGE.png'
    },
    {
      //programming hero certificate
      title: 'Complete web development course, Programming Hero',
      issuer: 'Programming Hero',
      date: 'Janumary 2022',
      credential: 'Certificate of Completion',
      color: '#10b981',
      image: 'https://picsum.photos/800/600?random=2'
    },
    {
      //digital literacy certificate
      title: ' Digital literacy course for Youth',
      issuer: 'ICT Devision, Bangladesh Government',
      date: 'September 2022',
      credential: 'Certificate of Completion',
      color: '#f59e0b',
      image: 'src/assets/certificates/Digital_lit.png'
    },
    {
      //BSF certificate
      title: 'Executive Member, BASIS Student Forum GUB Chapter',
      issuer: 'BASIS Student Forum GUB Chapter',
      date: '2023-2024',
      credential: 'Certificate of Appreciation',
      color: '#22c55e',
      image: 'src/assets/certificates/Executive_bsf.jpg'
    },
    {
      //hult oc event manager
      title: 'Head of Project Management, Hult Prize OC, GUB',
      issuer: 'Hult Prize Organization',
      date: '2024',
      credential: 'Event Manager',
      color: '#ec4899',
      image: 'src/assets/certificates/Hult_OC_Project manager.jpg'
    },
    {
      //hult oc logidtic
      title: 'Executive of Logistics, Hult Prize OC, GUB',
      issuer: 'Hult Prize Organization',
      date: '2023',
      credential: 'Executive of Logistics',
      color: '#ec4899',
      image: 'src/assets/certificates/Hult_OC_Logistic.jpg'
    }
  ]

  const moments = [
    {
      title: 'CSE CSE Carnival 2024',
      date: 'November 2024',
      location: 'Green University of Bangladesh',
      description: 'Lead Member of Sponsorship Team for the annual CSE Carnival, successfully securing 2 sponsorships and coordinating with multiple vendors to ensure a smooth event execution. Also give suport as organizer in various tasks during the event.',
      images: [
        'src/assets/Events/CSE_C24 (1).jpg',
        'src/assets/Events/CSE_C24 (2).jpg',
        'src/assets/Events/CSE_C24 (3).jpg',
        'src/assets/Events/CSE_C24 (4).jpg',
        'src/assets/Events/CSE_C24 (5).jpg',
        'src/assets/Events/CSE_C24 (6).jpg',
        'src/assets/Events/CSE_C24 (7).jpg'
        
      ],
      thumbnail: 'src/assets/Events/CSE_C.jpg'
    },
    {
      title: 'Orientation Program',
      date: '2024, 2025',
      location: 'Green University of Bangladesh',
      description: 'Active Member of the Orientation Program Committee for welcoming new students, organizing various activities and sessions to help them acclimate to university life.',
      images: [
        'src/assets/Events/Orientation (1).jpg',
        'src/assets/Events/Orientation (2).jpg',
        'src/assets/Events/Orientation (3).jpg'
      ],
      thumbnail: 'src/assets/Events/Orientation (2).jpg'
    },
    {
      title: 'Hult Battle 05',
      date: 'Febuary 2025',
      location: 'Developer Hub',
      description: 'Organized and led Hult Battle event, coordinating logistics, marketing, and participant engagement to ensure a successful competition with over 50 participants.',
      images: [
        'src/assets/Events/HULT_P_25 (1).jpg',
        'src/assets/Events/HULT_P_25 (2).jpg',
        'src/assets/Events/HULT_P_25 (3).jpg'
      ],
      thumbnail: 'src/assets/Events/HULT_P_25 (1).jpg'
    },
    {
      title: 'NAT Test',
      date: '2024-25',
      location: 'Green University of Bangladesh',
      description: 'Conducted the National Aptitude Test (NAT) as assistant coordinator, managing test logistics and ensuring a smooth experience for over 200 participants.',
      images: [
        'src/assets/Events/NAT_Test (1).jpg',
        'src/assets/Events/NAT_Test (2).jpg',
        'src/assets/Events/NAT_Test (3).jpg',
        'src/assets/Events/NAT_Test (4).jpg'
      ],
      thumbnail: 'src/assets/Events/NAT_Test (4).jpg'
    },
    {
      title: 'Teaches day clebration',
      date: '2025',
      location: 'University Campus',
      description: 'Organized Teachers Day celebration event, coordinating activities, decorations, and refreshments to honor faculty members and create a memorable experience.',
      images: [
        'src/assets/Events/Teachers_Day (1).jpg',
        'src/assets/Events/Teachers_Day (2).jpg',
        'src/assets/Events/Teachers_Day (3).jpg'
      ],
      thumbnail: 'src/assets/Events/Teachers_Day (1).jpg'
    },
    {
      title: 'Teachers Training by CETL',
      date: '2025',
      location: 'Green University of Bangladesh',
      description: 'Organize and give technical support for Teachers Training program conducted by CETL, ensuring smooth operation of training sessions and providing technical assistance to participants.',
      images: [
        'src/assets/Events/Teachers_Training (1).jpg',
        'src/assets/Events/Teachers_Training (2).jpg',
        'src/assets/Events/Teachers_Training (3).jpg'
      ],
      thumbnail: 'src/assets/Events/Teachers_Training (1).jpg'
    }
  ]

  const achievements = [
    {
      icon: <HiStar size={28} />,
      title: 'Student Leader',
      description: 'Lead various student organizations on campus.',
      color: '#fbbf24'
    },
    {
      icon: <HiMicrophone size={28} />,
      title: 'Speaker',
      description: 'Delivered talks and presentations at various events.',
      color: '#a855f7'
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
