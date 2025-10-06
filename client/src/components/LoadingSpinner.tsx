import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="loading-dots mx-auto mb-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-secondary-600 font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  )
}

export default LoadingSpinner
