import React from 'react'

const projects = [
  {
    title: "eCommerce Platform Reimplementation",
    company: "Omni.Pro",
    description: "Led the reimplementation of eCommerce platforms for high-profile clients, resulting in improved performance and user experience.",
    technologies: ["Adobe Commerce", "Magento", "React", "Node.js"]
  },
  {
    title: "Internal Hiring Web Application",
    company: "Uber",
    description: "Created internal web applications to standardize hiring processes across multiple departments, increasing efficiency by 30%.",
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Cybersecurity Server Migration",
    company: "Sabre",
    description: "Successfully migrated cybersecurity servers to Google Cloud Platform, enhancing security measures and reducing operational costs by 25%.",
    technologies: ["Google Cloud Platform", "Kubernetes", "Docker", "Python"]
  },
  {
    title: "Cross-border Collections Process Optimization",
    company: "Clara",
    description: "Implemented CRM and direct debit solutions, streamlining collections processes across Brazil, Colombia, and Mexico.",
    technologies: ["Salesforce", "Python", "SQL", "API Integration"]
  },
  {
    title: "Real-Time Payment Platform",
    company: "YellowPepper (A Visa company)",
    description: "Developed and implemented digital wallets and real-time payment platforms for banks in multiple countries, processing over 1 million transactions daily.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Kafka"]
  }
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-32">
      <h2 className="section-title">Key Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="fancy-border">
            <h3 className="text-2xl font-semibold mb-2 gradient-text">{project.title}</h3>
            <p className="text-gray-400 mb-2">{project.company}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gray-800 text-purple-400 px-2 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects