import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="mb-32">
      <h2 className="section-title">About Me</h2>
      <div className="flex items-center space-x-12">
        <div className="w-1/2">
          <p className="text-gray-300 leading-relaxed text-lg">
            I am Luis Daniel, a seasoned Senior Product Manager with over 8 years of experience in the IT industry. I have a proven track record in co-founding a successful digital agency and contributing to the growth of leading companies such as Visa, Sabre, Uber, Clara, Rappi, and ADDI. My expertise lies in managing tech products, where I have been instrumental in creating unique, impactful products such as the Rappi loyalty system, digital payment methods, gamification systems, and solutions in insuretech, logtech, and micromobility.
          </p>
        </div>
        <div className="w-1/2">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Collaborative work" className="rounded-lg shadow-2xl" />
        </div>
      </div>
    </section>
  )
}

export default About