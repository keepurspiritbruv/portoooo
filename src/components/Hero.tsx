import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface HeroProps {
  introComplete: boolean
}

const lineVariants = {
  hidden: { y: '100%' },
  visible: (i: number) => ({
    y: '0%',
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
}

const Hero = ({ introComplete }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[110vh] flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg className="absolute left-[10%] top-[5%] h-[60vh] w-[60vh] md:left-[55%] md:top-[-10%] md:h-[80vh] md:w-[80vh] opacity-20" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.3" strokeDasharray="4 4" />
        </svg>
        <svg className="absolute bottom-[10%] right-[-5%] h-[40vh] w-[40vh] md:left-[15%] md:top-[20%] md:h-[50vh] md:w-[50vh] opacity-30" viewBox="0 0 300 300" fill="none">
          <path d="M50,150 L150,50 L250,150 L150,250 Z" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="150" cy="50" r="2" fill="currentColor" />
          <circle cx="250" cy="150" r="2" fill="currentColor" />
          <circle cx="150" cy="250" r="2" fill="currentColor" />
          <circle cx="50" cy="150" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className="container relative z-10 px-6 md:px-12 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={introComplete ? { opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-[#1a1a1a]/50">
            Intro — Creative Developer
          </span>
        </motion.div>

        <h1 className="text-[clamp(2.5rem,9vw,6rem)] leading-[0.95] font-light tracking-tight text-[#1a1a1a]">
          <div className="overflow-hidden pb-3">
            <motion.div variants={lineVariants} initial="hidden" animate={introComplete ? 'visible' : 'hidden'} custom={0}>
              Creative
            </motion.div>
          </div>
          <div className="overflow-hidden pb-3">
            <motion.div variants={lineVariants} initial="hidden" animate={introComplete ? 'visible' : 'hidden'} custom={1}>
              <span className="font-serif italic font-normal">Developer</span> &amp;
            </motion.div>
          </div>
          <div className="overflow-hidden pb-3">
            <motion.div variants={lineVariants} initial="hidden" animate={introComplete ? 'visible' : 'hidden'} custom={2}>
              <span className="font-serif italic font-normal">Designer</span> who builds
            </motion.div>
          </div>
          <div className="overflow-hidden pb-3">
            <motion.div variants={lineVariants} initial="hidden" animate={introComplete ? 'visible' : 'hidden'} custom={3}>
              <span className="font-medium">stunning</span> work.
            </motion.div>
          </div>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={introComplete ? { scaleX: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="w-24 h-[1px] bg-[#1a1a1a]/20 mt-8 mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={introComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-sm md:text-base font-light leading-relaxed text-[#1a1a1a]/60 max-w-lg mb-10"
        >
          Frontend Engineer &amp; UI/UX Designer based in Yogyakarta. Turning ideas into
          clean, functional, and meaningful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={introComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-4"
        >
          <Link
            to="/projects"
            className="px-8 py-4 rounded-full bg-[#1a1a1a] text-white text-xs font-medium tracking-[0.1em] uppercase hover:bg-[#333] transition-colors"
          >
            View Creations
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] text-xs font-medium tracking-[0.1em] uppercase hover:bg-[#1a1a1a]/5 transition-colors"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : {}}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a]/30">Scroll</span>
        <div className="h-12 w-[1px] bg-[#1a1a1a]/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#1a1a1a]/40 animate-slide-down" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
