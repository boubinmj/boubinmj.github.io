import { Link } from 'react-router-dom'
import '../styles/Blog.css'

export default function Blog() {
  const blogPosts = [
    { year: 2025, title: 'Intranet as a system of record', path: '/blog/intranet-as-a-system-of-record' },
  ]

  return (
    <div className="page">
      <div className="blog-container">
        <h3>My Thoughts on emerging technologies, system design, and more ...</h3>
        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-entry">
              <span className="blog-year">{post.year}</span>
              <Link to={post.path} className="blog-title">{post.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

