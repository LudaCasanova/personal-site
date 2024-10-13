import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="Abstract background" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="relative z-10">
        <h1 className="text-7xl font-bold mb-4 gradient-text">Luis Daniel Casanova</h1>
        <p className="text-3xl mb-8 text-text-light">Senior Product Manager & Product Consultant</p>
        <a href="#contact" className="bg-primary hover:bg-primary-dark text-background font-bold py-3 px-8 rounded-full transition-colors text-lg">
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Hero