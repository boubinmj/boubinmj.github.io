export default function Home() {
  return (
    <div className="page">
      <div className="home-container">
        <div className="home-content">
          <h1>Matt Boubin</h1>
          <div className="bio-text">
            <p>
              I am a software engineer with 6 years of experience building data intensive systems.  
              I currently work under NYU IT where I oversee the development and operation of the Engagement Data Platform at the NYU Wagner School of Public Service. 
            </p>
            <p>
              Senior Software Engineer with 7 years of experience designing, testing, and optimizing scalable software solutions who has become an expert in leading cross-functional teams, defining goals for robust projects, and implementing best software development practices to enhance performance and maintainability of backend services. 
              Currently seeking new opportunities to contribute projects that utilize distributed systems technologies.
            </p>
            <ul>
              <li><b>Languages</b></li>
              <li>Python (Flask, FastAPI, Django)</li>
              <li>Java (Spring)</li>
              <li>Javascript (Node.js)</li>
              <li>Typescript</li>
              <li>SQL (PostgreSQL)</li>
              <li>MongoDB</li>
              <li><b>Tools and Products</b></li>
              <li>Cloud (GCP, AWS)</li>
              <li>CI/CD (Github Actions)</li>
              <li>Kubernetes</li>
              <li>Docker</li>
              <li>Hadoop</li>
              <li>Spark</li>
            </ul>
          </div>
        </div>
        <div className="home-headshot">
          <img 
            src="media/headshot.jpeg" 
            alt="Headshot" 
            className="headshot-img"
          />
        </div>
      </div>
    </div>
  )
}
