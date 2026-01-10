export default function Home() {
  return (
    <div className="page">
      <div className="home-container">
        <div className="home-content">
          <h1>Matt Boubin</h1>
          <div className="bio-text">
            <h2>Senior Software Engineer</h2>
            <p>
              I am a software engineer with 7 years of experience building data intensive systems.  
              I currently work under NYU IT where I oversee the development and operation of the Engagement Data Platform at the NYU Wagner School of Public Service. 
            </p>
            <h2>About Me</h2>
            <p>
              After informally tinkering with electronics as a teenager, I started my career in embedded systems nearly 8 years ago after obtaining a computer engineering degree from Miami University.  
              Early in my career, I worked for the Miami University Power Eletronics Laboratory, GE Appliances, and military subcontracting companies.  I primarily worked on custom Digital Signal Processing 
              applications for Radio Frequency systems used for non-invasive diagnostics of electronic equipment.  
              
              After 3 years in the embedded systems world, I made a transition to work with data intensive web applications as a developer at New York University.
              In my time working in web development, I have become an expert in leading cross-functional teams, defining goals for robust projects, and implementing best software development practices to enhance performance and maintainability of backend services. 
              I am currently seeking new opportunities to contribute projects that utilize distributed systems technologies.
            </p>
            <h2>Skills</h2>
            <div className="skills-container">
              <div className="skills-column">
                <h3>Languages</h3>
                <ul>
                  <li>Python (Flask, FastAPI, Django)</li>
                  <li>Java (Spring)</li>
                  <li>Javascript (Node.js)</li>
                  <li>Typescript</li>
                  <li>SQL (PostgreSQL)</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="skills-column">
                <h3>Technologies</h3>
                <ul>
                  <li>Cloud (GCP, AWS)</li>
                  <li>CI/CD (Github Actions)</li>
                  <li>Kubernetes</li>
                  <li>Docker</li>
                  <li>Hadoop</li>
                  <li>Spark</li>
                </ul>
              </div>
            </div>
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
