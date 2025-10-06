import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code, Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="p-2 bg-primary-600 rounded-lg group-hover:bg-primary-700 transition-colors">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Portfolio</span>
              </Link>
              <p className="text-secondary-300 text-sm leading-relaxed">
                Full-stack developer passionate about creating modern, scalable web applications 
                with cutting-edge technologies.
              </p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-secondary-400 hover:text-primary-400 hover:bg-secondary-800 rounded-lg transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Technologies</h3>
              <div className="grid grid-cols-2 gap-2">
                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind', 'Express'].map((tech) => (
                  <span
                    key={tech}
                    className="text-secondary-300 text-sm px-2 py-1 bg-secondary-800 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get In Touch</h3>
              <div className="space-y-2 text-sm text-secondary-300">
                <p>Ready to work together?</p>
                <p>Let's discuss your next project.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-secondary-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and modern web technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
