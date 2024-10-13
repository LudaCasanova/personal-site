import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-gray-100 py-6 sticky top-0 z-10">
      <div className="content-container flex items-center justify-between">
        <div className="text-xl font-bold gradient-text">Luis Daniel Casanova</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
            <li><a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a></li>
            <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
            <li><a href="#education" className="hover:text-purple-400 transition-colors">Education</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header