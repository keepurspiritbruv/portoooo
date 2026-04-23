import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

type Phase = 'preloader' | 'curtain-in' | 'curtain-out' | 'done'

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.5 + i * 0.12,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
}

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      delay: 1.5,
      duration: 1.2,
      ease: [0.77, 0, 0.175, 1] as const,
    },
  },
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.8,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.5,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [showButton, setShowButton] = useState(false)
  const [phase, setPhase] = useState<Phase>('preloader')
  const letters = 'murguy'.split('')

  useEffect(() => {
    if (phase === 'preloader') {
      const timer = setTimeout(() => setShowButton(true), 2400)
      return () => clearTimeout(timer)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'curtain-in') {
      const timer = setTimeout(() => setPhase('curtain-out'), 800)
      return () => clearTimeout(timer)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'curtain-out') {
      const timer = setTimeout(() => {
        setPhase('done')
        onComplete()
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [phase, onComplete])

  const handleEnter = useCallback(() => {
    setShowButton(false)
    setPhase('curtain-in')
  }, [])

  if (phase === 'done') return null

  return (
    <>
      <AnimatePresence>
        {phase === 'preloader' && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#1a1a1a] flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.04]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)'/%3e%3c/svg%3e")`,
                  backgroundSize: '128px 128px',
                }}
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-teal-500/5 to-transparent" />

            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="flex items-center gap-[1px]">
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    className="text-5xl md:text-7xl tracking-tight text-white font-light"
                    style={{ perspective: '500px' }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              <motion.div
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="w-16 h-[1px] bg-white/20 origin-center"
              />

              <motion.div
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40"
              >
                Frontend Engineer &amp; Designer
              </motion.div>

              {showButton && (
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleEnter}
                  className="mt-8 px-10 py-4 border border-white/20 rounded-full text-white text-xs font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-[#1a1a1a] transition-colors duration-300 cursor-pointer"
                >
                  Enter
                </motion.button>
              )}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 2, duration: 1 }}
                className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-mono"
              >
                Scroll to explore
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {(phase === 'curtain-in' || phase === 'curtain-out') && (
        <>
          <motion.div
            initial={{ x: '-101%' }}
            animate={{ x: phase === 'curtain-in' ? '0%' : '-101%' }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] as const }}
            className="fixed top-0 left-0 w-1/2 h-full z-[99] bg-[#1a1a1a]"
          />
          <motion.div
            initial={{ x: '101%' }}
            animate={{ x: phase === 'curtain-in' ? '0%' : '101%' }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] as const }}
            className="fixed top-0 right-0 w-1/2 h-full z-[99] bg-[#1a1a1a]"
          />
        </>
      )}
    </>
  )
}

export default LoadingScreen
