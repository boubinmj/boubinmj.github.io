export default function Resume() {
  return (
    <div className="resume-page">
      {/* Header Section */}
      <div className="resume-header">
        <div className="header-main">
          <h1>Matthew Boubin</h1>
          <p className="title">Software Engineer</p>
        </div>
        <div className="header-contact">
          <span>📞 513-706-5783</span>
          <span>✉️ mjb9353@nyu.edu</span>
          <span>📍 New York, New York</span>
        </div>
      </div>

      <hr className="divider" />

      {/* Two Column Layout */}
      <div className="resume-container">
        {/* Left Column */}
        <div className="resume-left">
          {/* Career Goals */}
          <section className="resume-section">
            <h2>Objective</h2>
            <p>
              Senior Software Engineer with 7 years of experience designing, testing, and optimizing scalable software solutions who has become an expert in leading cross-functional teams, defining goals for robust projects, and implementing best software development practices to enhance performance and maintainability of backend services. Currently seeking new opportunities to contribute projects that utilize distributed systems technologies.
            </p>
          </section>

          {/* Skills */}
          <section className="resume-section">
            <h2>Skills</h2>
            
            <h3>Languages</h3>
            <p>Python (Flask, FastAPI, Django)<br />Java (Spring)<br />JavaScript (Node.js)<br />TypeScript<br />SQL (PostgreSQL)<br />MongoDB</p>

            <h3>Tools and Products</h3>
            <p>Cloud (GCP, AWS)<br />CI/CD (Terraform)<br />Docker<br />Hadoop<br />Spark</p>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2>Education</h2>
            <div className="education-item">
              <p><strong>Miami University</strong></p>
              <p>Oxford, OH</p>
              <p>B.S. Computer Engineering</p>
              <p>May 2018</p>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="resume-right">
          {/* Professional Experience */}
          <section className="resume-section">
            <h2>Professional Experience</h2>

            <div className="job">
              <div className="job-header">
                <div>
                  <p className="job-title">Software Engineer - Data</p>
                  <p className="job-company">NYU Wagner - New York, NY</p>
                </div>
                <p className="job-dates">Dec 2021 - Present</p>
              </div>
              <ul className="job-details">
                <li>Manages data pipelines connecting external data services to a local CRM system using a Django web service and PostgreSQL hosted on AWS.</li>
                <li>Develops and maintains a custom GenAI endpoint for the University's public website using a FastAPI web framework, Gemini-1.5-Pro API, Google Cloud Platform, Streamlit and SLLean Vector Store.</li>
                <li>Leads a technical debt clean up initiative that has resulted in a migration saving the organization $100K annually.</li>
                <li>Supervises 4 junior software developers as their hiring manager.</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <div>
                  <p className="job-title">Embedded Software Engineer</p>
                  <p className="job-company">GE Appliances (contract) - Louisville, KY</p>
                </div>
                <p className="job-dates">Aug 2020 - Apr 2021</p>
              </div>
              <ul className="job-details">
                <li>Used a proprietary Python SDK to extend the functionality of the uFactory 5 axis robotic arm and other electromechanical systems.</li>
                <li>Developed software in C++ for fault detection equipment using the $250 USD microcontroller.</li>
                <li>Supervised a senior design team at the University of Louisville that completed a functioning Node.js application to display agricultural monitoring telemetry in a client.</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <div>
                  <p className="job-title">Embedded Software Developer</p>
                  <p className="job-company">Dangelo Technologies - Dayton, OH</p>
                </div>
                <p className="job-dates">May 2018 - Feb 2020</p>
              </div>
              <ul className="job-details">
                <li>Developed embedded systems prototypes for non-invasive diagnostic equipment using electromagnetic interference as an indicator.</li>
                <li>Responsible for two Phase I Small Business Innovation Research Contracts the United States Department of Defense.</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <div>
                  <p className="job-title">Research Assistant</p>
                  <p className="job-company">Miami University - Oxford, OH</p>
                </div>
                <p className="job-dates">May 2017 - May 2018</p>
              </div>
              <ul className="job-details">
                <li>Developed control software in C++ for the Miami University Power Electronics Laboratory using TI C2000 microcontroller architecture.</li>
              </ul>
            </div>
          </section>

          {/* Patents and Publications */}
          <section className="resume-section">
            <h2>Patents and Publications</h2>
            <ul className="publication-links">
              <li><a href="/docs/US12216147.pdf">Non-invasive diagnostic systems and methods, 2023</a></li>
              <li><a href="/docs/MDPI-sensors-2019.pdf">MDPI Sensors, 2019</a></li>
              <li><a href="/docs/IEEE-ECCE-2018.pdf">IEEE Energy Conversion Congress and Exposition, 2018</a></li>
              <li><a href="/docs/SPIE.pdf">SPIE Smart Biological and Physiological Sensing Technology, 2019</a></li>
              <li><a href="/docs/IEEE-ECCE-2019.pdf">IEEE Energy Conversion Congress and Exposition, 2019</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
