import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">MyPortfolio</div>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
    </nav>
  )
}
