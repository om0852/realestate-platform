import { motion } from 'framer-motion'

const FeaturedProperties = () => {
  return (
    <div className="py-16 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Smart Recommendations Card */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg text-center dark:text-white text-gray-800 dark:bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              y: -5,
              borderWidth: 3,
              borderColor: '#4f46e5', // Animated border color on hover
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            style={{
              border: '2px solid transparent',
              borderRadius: '0.75rem',
              transition: 'border-color 0.3s ease, border-width 0.3s ease',
            }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Smart Recommendations</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Personalized property suggestions based on your preferences.</p>
          </motion.div>

          {/* Real-Time Assistance Card */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg text-center dark:text-white text-gray-800 dark:bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              y: -5,
              borderWidth: 3,
              borderColor: '#4f46e5', // Animated border color on hover
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            style={{
              border: '2px solid transparent',
              borderRadius: '0.75rem',
              transition: 'border-color 0.3s ease, border-width 0.3s ease',
            }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Real-Time Assistance</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Instant answers to your real estate queries.</p>
          </motion.div>

          {/* Market Insights Card */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg text-center dark:text-white text-gray-800 dark:bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              y: -5,
              borderWidth: 3,
              borderColor: '#4f46e5', // Animated border color on hover
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            style={{
              border: '2px solid transparent',
              borderRadius: '0.75rem',
              transition: 'border-color 0.3s ease, border-width 0.3s ease',
            }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Market Insights</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Stay updated with the latest market trends.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
