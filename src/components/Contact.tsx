import React from 'react'
import { Linkedin, Mail, Phone, Github, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-32">
      <h2 className="section-title">Contact</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="flex items-center">
            <Linkedin className="w-6 h-6 mr-4 text-primary" />
            <a href="https://www.linkedin.com/in/luisdanielcasanova/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors">
              LinkedIn
            </a>
          </p>
          <p className="flex items-center">
            <Mail className="w-6 h-6 mr-4 text-primary" />
            <a href="mailto:casanova.luisdaniel@gmail.com" className="text-text-light hover:text-primary transition-colors">
              casanova.luisdaniel@gmail.com
            </a>
          </p>
          <p className="flex items-center">
            <Phone className="w-6 h-6 mr-4 text-primary" />
            <a href="tel:+573156666168" className="text-text-light hover:text-primary transition-colors">
              +57 3156666168
            </a>
          </p>
          <p className="flex items-center">
            <Github className="w-6 h-6 mr-4 text-primary" />
            <a href="https://github.com/LudaCasanova" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors">
              GitHub
            </a>
          </p>
          <p className="flex items-center">
            <MapPin className="w-6 h-6 mr-4 text-primary" />
            <span className="text-text-light">Based in Bogotá, Colombia</span>
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80" alt="Contact illustration" className="rounded-lg shadow-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Contact