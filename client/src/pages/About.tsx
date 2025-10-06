import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Code, Database, Smartphone, Monitor, Award, Users, Clock, Target } from 'lucide-react'
import { apiService } from '../services/api'
import { Skill } from '../types'
import LoadingSpinner from '../components/LoadingSpinner'

const About = () => {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await apiService.getSkills({ limit: 20 })
        setSkills(response.data.data?.data || [])
      } catch (error) {
        console.error('Error fetching skills:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Clock, label: 'Years Experience', value: '3+' },
    { icon: Award, label: 'Technologies Mastered', value: '20+' },
  ]

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const categoryIcons = {
    frontend: Monitor,
    backend: Database,
    database: Database,
    tools: Code,
    other: Smartphone
  }

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & Others',
    other: 'Other'
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Passionate full-stack developer with a love for creating innovative solutions 
              and bringing ideas to life through code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  My journey into software development began with curiosity about how websites work. 
                  What started as a simple HTML page has evolved into a passion for building 
                  complex, scalable applications that solve real-world problems.
                </p>
                <p>
                  I specialize in modern web technologies, with expertise in React, Node.js, 
                  TypeScript, and MongoDB. I believe in writing clean, maintainable code and 
                  following best practices to create applications that are both powerful and user-friendly.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-xl shadow-sm border border-secondary-200"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-secondary-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Here's a breakdown of my technical skills across different categories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Code
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900">
                      {categoryLabels[category as keyof typeof categoryLabels] || category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {categorySkills.slice(0, 5).map((skill, index) => (
                      <motion.div
                        key={skill._id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-secondary-900">
                            {skill.name}
                          </span>
                          <span className="text-sm text-secondary-600">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="bg-primary-600 h-2 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              My Values
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              The principles that guide my work and approach to development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Quality First',
                description: 'I prioritize code quality, performance, and maintainability in every project I work on.'
              },
              {
                icon: Users,
                title: 'User-Centric',
                description: 'Every decision is made with the end user in mind, ensuring intuitive and accessible experiences.'
              },
              {
                icon: Code,
                title: 'Continuous Learning',
                description: 'I stay updated with the latest technologies and best practices to deliver cutting-edge solutions.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
