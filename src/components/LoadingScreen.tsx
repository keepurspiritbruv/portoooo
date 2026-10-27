import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => {
      setVisible(false)
      onComplete()
    }, reducedMotion ? 80 : 900)

    return () => window.clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fbfaf6]"
          aria-label="Loading portfolio"
        >
          <div className="text-center">
            <p className="font-sans text-5xl font-black tracking-[-0.08em] text-[#191a18] sm:text-7xl">
              MURGUY<span className="text-[#e1ae27]">.</span>
            </p>
            <div className="mx-auto mt-5 h-1 w-24 overflow-hidden rounded-full bg-[#eee9dc]">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="h-full origin-left bg-[#f0c63f]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
