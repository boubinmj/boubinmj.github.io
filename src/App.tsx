import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Publications from './pages/Publications'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import IntranetSystemOfRecord from './pages/IntranetSystemOfRecord'
import BlogPost2 from './pages/BlogPost2'
import BlogPost3 from './pages/BlogPost3'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/intranet-as-a-system-of-record" element={<IntranetSystemOfRecord />} />
          <Route path="/blog/building-better-systems" element={<BlogPost2 />} />
          <Route path="/blog/lessons-from-production" element={<BlogPost3 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
