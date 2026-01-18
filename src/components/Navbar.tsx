import { Link } from 'react-router-dom'
import { FiCoffee } from 'react-icons/fi'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/blog" className="navbar-logo">
          <FiCoffee size={32} />
        </Link>
        <ul className="nav-menu">
          <li><Link to="/">My Story</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
    </nav>
  )
}
