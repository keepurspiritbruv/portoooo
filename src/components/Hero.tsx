import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

interface HeroProps {
  introComplete: boolean
}

const Hero = ({ introComplete }: HeroProps) => (
  <section id="home" className="relative flex min-h-[min(760px,calc(100svh-4.5rem))] items-center overflow-hidden px-5 py-20 sm:px-10 md:px-14">
    <div className="pointer-events-none absolute right-[9%] top-[16%] hidden rotate-6 border border-[#e7c644] bg-[#ffe889] px-4 py-2 font-serif text-sm italic text-[#494331] shadow-sm md:block">
      Product-minded builder
    </div>
    <div className="pointer-events-none absolute bottom-[17%] right-[13%] hidden -rotate-3 rounded-full border border-[#f1a89d] p-5 text-center font-mono text-[9px] leading-relaxed tracking-widest text-[#a35b50] lg:block">
      YOGYAKARTA<br />INDONESIA
    </div>

    <div className="relative z-10 mx-auto w-full max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={introComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="mb-6 flex flex-wrap items-center gap-3"
      >
        <span className="note-label">Frontend Engineer</span>
        <span className="hand-note text-lg text-[#696456]">&amp; UI/UX Designer</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={introComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.75 }}
        className="font-sans text-[clamp(3.5rem,13vw,9rem)] font-black leading-[0.82] tracking-[-0.075em] text-[#191a18]"
      >
        MURGUY<span className="text-[#e1ae27]">.</span>
      </motion.h1>

      <div className="my-8 flex items-center gap-3 text-sm text-[#807b6e] sm:my-10">
        <span className="h-px w-8 bg-[#b9b3a4]" />
        <span className="font-mono text-[10px] uppercase tracking-[0.16em]">Dhimas Nurhanindya Putra</span>
        <span className="hidden sm:inline">—</span>
        <span className="hidden sm:inline">Yogyakarta, Indonesia</span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={introComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25, duration: 0.55 }}
        className="max-w-2xl text-lg leading-relaxed text-[#55544e] sm:text-xl md:text-2xl"
      >
        Turning ideas into <span className="hand-note rounded-sm bg-[#fff0ac] px-1 text-[#6b5320]">clean, functional</span>,
        meaningful digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={introComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.55 }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <a href="#projects" className="inline-flex items-center gap-2 rounded-md border border-[#191a18] bg-[#191a18] px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-[#35362f]">
          View my work <ArrowUpRight size={15} />
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-[#d8d3c7] bg-[#fffefa] px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#35362f] transition hover:border-[#b9a23c] hover:bg-[#fff7d7]">
          Say hello <ArrowUpRight size={15} />
        </a>
      </motion.div>

      <a href="#about" className="mt-16 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.16em] text-[#807b6e] hover:text-[#191a18] sm:mt-20">
        Scroll to explore <ArrowDown size={13} />
      </a>
    </div>
  </section>
)

export default Hero
