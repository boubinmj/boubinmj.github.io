export default function Blog() {
  return (
    <div className="page">
      <div className="blog-container">
        <h1>Blog</h1>
        <div className="blog-content">
          <article className="blog-post">
            <h2>Coffee</h2>
            <p>
              {/* Coffee graphic will go here */}
              <img src="/media/coffee.png" alt="Coffee graphic" className="coffee-graphic" />
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
