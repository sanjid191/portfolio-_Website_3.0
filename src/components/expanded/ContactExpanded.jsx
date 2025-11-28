import { useState } from 'react'
import { HiEnvelope, HiPhone, HiMapPin, HiPaperAirplane, HiChatBubbleLeftRight } from 'react-icons/hi2'
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa'

function ContactExpanded({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      alert('Message sent successfully! (This is a demo)')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    { icon: <HiEnvelope size={22} />, label: 'Email', value: 'sanjid.ahmmed@example.com', link: 'mailto:sanjid.ahmmed@example.com' },
    { icon: <HiPhone size={22} />, label: 'Phone', value: '+880 1XXX-XXXXXX', link: 'tel:+8801XXXXXXXXX' },
    { icon: <HiMapPin size={22} />, label: 'Location', value: 'Dhaka, Bangladesh', link: null }
  ]

  const socialLinks = [
    { icon: <FaGithub size={22} />, label: 'GitHub', url: 'https://github.com/sanjid191', color: '#333' },
    { icon: <FaLinkedin size={22} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/sanjid-ahmmed-191sa/', color: '#0077b5' },
    { icon: <FaTwitter size={22} />, label: 'Twitter', url: 'https://x.com/Sanjid_Ahmmed_', color: '#1da1f2' },
    { icon: <FaFacebook size={22} />, label: 'Facebook', url: 'https://www.facebook.com/sanjid.ahmmed.9', color: '#1877f2' }
  ]

  return (
    <div className="expanded-view">
      <div className="expanded-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="contact-expanded-new">
          <div className="contact-layout-wrapper">
            {/* Vertical Social Icons - Left */}
            <div className="social-sidebar">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-sidebar-btn"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Main Content */}
            <div className="contact-main-content">
              <div className="section-header">
                <h2>Let's Connect</h2>
                <p className="section-subtitle">Have a project in mind? Let's create something amazing together.</p>
              </div>
              
              <div className="contact-grid-new">
                {/* Left Side - Info */}
                <div className="contact-info-section">
                  <div className="contact-intro">
                    <div className="contact-intro-icon">
                      <HiChatBubbleLeftRight size={32} />
                    </div>
                    <h3>Get in Touch</h3>
                    <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                  </div>

                  <div className="contact-details">
                    {contactInfo.map((item, index) => (
                      <a 
                        key={index} 
                        href={item.link || '#'} 
                        className="contact-detail-item"
                        onClick={item.link ? undefined : (e) => e.preventDefault()}
                      >
                        <div className="contact-detail-icon">{item.icon}</div>
                        <div className="contact-detail-text">
                          <span className="contact-label">{item.label}</span>
                          <span className="contact-value">{item.value}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="contact-form-section">
                  <form className="contact-form-new" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                      />
                    </div>

                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <HiPaperAirplane size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactExpanded
