import React from 'react'

const experiences = [
  {
    date: "March 2023 - Present",
    position: "Senior Digital Business Consultant",
    company: "Omni.Pro",
    description: "Led reimplementation of eCommerce platforms for high-profile clients and enhanced Omni.Pro's Order Management System.",
    logo: "https://via.placeholder.com/150?text=Omni.Pro"
  },
  {
    date: "January 2023 - March 2023",
    position: "Project Manager - Talent Acquisition",
    company: "Uber",
    description: "Managed multidisciplinary Scrum teams and created internal web applications to standardize hiring processes.",
    logo: "https://via.placeholder.com/150?text=Uber"
  },
  {
    date: "August 2022 - November 2022",
    position: "Project Manager - Cybersecurity",
    company: "Sabre",
    description: "Led the migration of cybersecurity servers to Google Cloud Platform and managed a cross-functional Scrum team.",
    logo: "https://via.placeholder.com/150?text=Sabre"
  },
  {
    date: "June 2022 - November 2022",
    position: "Product Lead - Risk & Collections",
    company: "Clara",
    description: "Directed product strategy for collections processes across Brazil, Colombia, and Mexico, and led implementation of CRM and direct debit solutions.",
    logo: "https://via.placeholder.com/150?text=Clara"
  },
  {
    date: "June 2020 - June 2022",
    position: "Technical Product Manager – Real Time Payments & Crossborder Transfers",
    company: "YellowPepper (A Visa company)",
    description: "Implemented digital wallets and real-time payment platforms for banks in multiple countries.",
    logo: "https://via.placeholder.com/150?text=YellowPepper"
  }
]

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-32">
      <h2 className="section-title">Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="fancy-border flex items-center">
            <div className="w-24 h-24 mr-6 flex-shrink-0">
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 gradient-text">{exp.position}</h3>
              <p className="text-gray-400 mb-2">{exp.company} | {exp.date}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience