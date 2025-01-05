import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/path/to/your-image.jpg)' }}
    >
      <div className="text-center z-10 dark:text-white text-gray-800">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Find Your Dream Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl mb-8"
        >
          Discover the perfect property that fits your lifestyle
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.1, // Increase size slightly
            backgroundColor: '#4C51BF', // Change to a different shade of blue on hover
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Add shadow
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.95, // Slightly reduce on click
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)', // Add deeper shadow on click
          }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-100"
        >
          Start Your Search
        </motion.button>
      </div>
    </div>
  )
}

export default Hero
