'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FeaturedProperties from './_components/FeaturedProperties'
import Navbar from './_components/Navbar'
import AnimatedBackground from './_components/AnimatedBackground'
import Hero from './_components/Hero'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <AnimatedBackground />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <FeaturedProperties />
      </div>
    </div>
  )
}

