import React from 'react'

const skills = [
  "Product Management",
  "Project Management",
  "Cybersecurity",
  "Quality Assurance",
  "CI/CD",
  "Cloud Solutions",
  "SaaS",
  "Ecommerce",
  "Adobe Commerce / Magento",
  "Shopify",
  "Ruby on Rails",
  "React",
  "Angular",
  "Javascript",
  "Node",
  "Laravel",
  "Heroku",
  "AWS",
  "Azure",
  "Wordpress",
  "Python / Django"
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-32">
      <h2 className="section-title">Skills & Competencies</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-background-light text-primary px-4 py-2 rounded-full text-sm border border-primary hover:bg-primary hover:text-background transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills