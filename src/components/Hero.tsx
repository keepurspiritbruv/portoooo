import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

interface HeroProps {
  introComplete: boolean
}

const Hero = ({ introComplete }: HeroProps) => (
  <section id="home" className="relative flex min-h-[min(760px,calc(100svh-4.5rem))] items-center overflow-hidden px-5 py-20 sm:px-10 md:px-14">
    <div className="pointer-events-none absolute left-[9%] top-[17%] hidden -rotate-6 border border-rule-strong bg-accent px-4 py-2 font-hand text-xl text-ink shadow-sm md:block">
      Full-stack developer
    </div>
    <div className="pointer-events-none absolute right-[11%] top-[24%] hidden rotate-3 rounded-md border border-blue/25 bg-blue/10 px-3 py-2 font-hand text-lg text-blue lg:block">
      Bantul, Yogyakarta
    </div>

    <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={introComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="mb-6 flex flex-wrap items-center justify-center gap-3"
      >
        <span className="note-label">Full-stack Software Developer</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={introComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.75 }}
        className="pixel-wordmark mx-auto w-fit rounded-lg border-2 border-orange bg-paper-raised px-4 py-5 text-[clamp(1.35rem,8vw,4.75rem)] text-ink shadow-[var(--shadow-yellow)] sm:px-8 sm:py-7"
      >
        MURGUY
      </motion.h1>

      <div className="my-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-ink-soft sm:my-9">
        <span className="font-serif text-lg italic text-orange">Dhimas Nurhanindya Putra</span>
        <span className="hidden text-rule-strong sm:inline">/</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em]">Bantul, Yogyakarta</span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={introComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25, duration: 0.55 }}
        className="mx-auto max-w-3xl font-sans text-base leading-8 text-ink-muted sm:text-lg md:text-xl"
      >
        Full-stack developer and Gadjah Mada University graduate building React interfaces, Node.js services, and IoT-connected monitoring applications. Contributed to a four-service weather platform with LSTM anomaly detection and a coastal early-warning prototype covering five locations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={introComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.55 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a href="#projects" className="inline-flex items-center gap-2 rounded-sm border border-ink bg-ink px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.05em] text-paper-raised transition hover:-translate-y-0.5 hover:bg-blue">
          View my work <ArrowUpRight size={15} />
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-sm border border-rule-strong bg-paper-raised px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.05em] text-ink transition hover:border-yellow hover:bg-yellow">
          Say hello <ArrowUpRight size={15} />
        </a>
        <a href="https://drive.google.com/file/d/1kEbVDZZm2MgPlyxIxktmJQ1Jxf7YBYE2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-rule-strong bg-paper-raised px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.05em] text-ink transition hover:border-yellow hover:bg-yellow">
          Google Drive <ArrowUpRight size={15} />
        </a>
      </motion.div>

      <a href="#about" className="hand-note mt-14 inline-flex items-center gap-2 text-xl text-ink-soft hover:text-ink sm:mt-16">
        Scroll to explore <ArrowDown size={13} />
      </a>
    </div>
  </section>
)

export default Hero
