const projects = [
  {
    title: "FoodTok",
    description: "Django, Express, DynamoDB, AWS Fargate, S3, CloudFront",
    details: "FoodTok is a full stack web application that encourages users to find and reserve tables at local restaurants using a swipe based engagement strategy.",
    url: "https://github.com/123R3N321/FoodTok"
  },
  {
    title: "RMI Webhook",
    description: "Python, Flask, AWS Lambda, AWS API Gateway",
    details: "This is a stateful web service that listens for incoming webhooks from a third party service and triggers storage of user information entered into text chat.",
    url: "https://github.com/boubinmj/rmi_webhook"
  }
];

export default function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>
      <div className="publications-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.url} className="publication-card" target="_blank" rel="noopener noreferrer">
            <h2>{project.title}</h2>
            <h3>{project.description}</h3>
            <p>{project.details}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
