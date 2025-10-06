import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Monitor, Smartphone, Code } from 'lucide-react'
import { apiService } from '../services/api'
import { Project } from '../types'
import LoadingSpinner from '../components/LoadingSpinner'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetchProject()
    }
  }, [id])

  const fetchProject = async () => {
    try {
      setLoading(true)
      const response = await apiService.getProject(id!)
      setProject(response.data.data!)
    } catch (error) {
      console.error('Error fetching project:', error)
    } finally {
      setLoading(false)
    }
  }

  const categoryIcons = {
    web: Monitor,
    mobile: Smartphone,
    desktop: Monitor,
    other: Code
  }

  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    planned: 'bg-blue-100 text-blue-800'
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = categoryIcons[project.category] || Code

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${statusColors[project.status]}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                  {project.title}
                </h1>

                <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Image Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                <IconComponent className="w-32 h-32 text-primary-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {project.longDescription && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">About This Project</h2>
                  <div className="prose prose-lg max-w-none text-secondary-600 leading-relaxed">
                    {project.longDescription.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-4 py-2 bg-primary-100 text-primary-800 rounded-lg font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-secondary-400" />
                    <div>
                      <div className="text-sm text-secondary-600">Start Date</div>
                      <div className="font-medium text-secondary-900">
                        {new Date(project.startDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {project.endDate && (
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-secondary-400" />
                      <div>
                        <div className="text-sm text-secondary-600">End Date</div>
                        <div className="font-medium text-secondary-900">
                          {new Date(project.endDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-3">
                    <Tag className="w-5 h-5 text-secondary-400" />
                    <div>
                      <div className="text-sm text-secondary-600">Category</div>
                      <div className="font-medium text-secondary-900 capitalize">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full ${statusColors[project.status].split(' ')[0]}`} />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-600">Status</div>
                      <div className="font-medium text-secondary-900 capitalize">
                        {project.status.replace('-', ' ')}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-outline flex items-center justify-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Source Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Live Site</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
