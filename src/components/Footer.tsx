import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/matthew-boubin-1b69b981/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/BoubinMatt_dev" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com/boubinmj" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="mailto:bubbinmj7@gmail.com" className="social-link" aria-label="Email">
            <MdEmail size={24} />
          </a>
        </div>
        <p className="footer-text">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
