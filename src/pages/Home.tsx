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
              In addition to my corporate position at NYU Wagner, I also work with the Secure Systems Laboratory under Dr. Justin Cappos to ship gittuf, a Linux Foundation project under the Supply Chain Security working group.
            </p>
            <p>
              Add your bio and personal information here. Feel free to write multiple 
              paragraphs about your background, skills, and professional journey.
            </p>
            <p>
              You can include details about your experience, education, and what 
              drives you in your career.
            </p>
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
