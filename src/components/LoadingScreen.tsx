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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
          aria-label="Loading portfolio"
        >
          <div className="text-center">
            <p className="pixel-wordmark text-2xl text-ink sm:text-4xl">
              MURGUY
            </p>
            <div className="mx-auto mt-5 h-1 w-24 overflow-hidden rounded-full bg-paper-shadow">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="h-full origin-left bg-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
