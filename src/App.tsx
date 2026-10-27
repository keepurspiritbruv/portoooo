import { useState, useCallback } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import HomePage from './pages/HomePage'

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <div className="notebook-shell font-sans text-ink">
      <LoadingScreen onComplete={handleIntroComplete} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : {}}
        transition={{ duration: 0.1 }}
      >
        <Navbar introComplete={introComplete} />
        <Routes>
          <Route path="/" element={<HomePage introComplete={introComplete} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
