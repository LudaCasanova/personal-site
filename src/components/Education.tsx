import React from 'react'

const educations = [
  {
    date: "Present",
    degree: "Master in Information Technology",
    institution: "UNET"
  },
  {
    date: "2010 - 2017",
    degree: "Bachelor - Systems Engineering",
    institution: "UNEFA"
  },
  {
    date: "2015",
    degree: "Graduate Diploma in Telecommunications and Control, Computer Systems Networking and Telecommunications",
    institution: "IUPSM"
  }
]

const Education: React.FC = () => {
  return (
    <section id="education" className="mb-32">
      <h2 className="section-title">Education</h2>
      <div className="space-y-8">
        {educations.map((edu, index) => (
          <div key={index} className="fancy-border">
            <h3 className="text-xl font-semibold mb-2 gradient-text">{edu.degree}</h3>
            <p className="text-gray-400">{edu.institution} | {edu.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education