import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const Contact = () => {
  const { ref, isInView, variants } = useScrollReveal()

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-1/4 left-[8%] w-20 h-20 md:w-32 md:h-32 opacity-15">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#1a1a1a]">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.4em] text-xs md:text-sm mb-8 font-mono text-[#1a1a1a]/50">
            Contact
          </p>
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] font-light tracking-tight text-[#1a1a1a] mb-8">
            <span className="font-serif italic block">Got a project</span>
            <span className="block">
              <span className="font-light text-[#1a1a1a]/40">in mind?</span>{' '}
              <span className="font-medium">Let's talk.</span>
            </span>
          </h2>
          <p className="text-sm font-light text-[#1a1a1a]/50 leading-relaxed mb-12">
            Currently open for selected collaborations. Check out my recent work or
            explore what I can do for your project.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
            <a
              href="mailto:dhimasnurhanindya@gmail.com?subject=Job%20Opportunity"
              className="flex items-center gap-3 text-[#1a1a1a]/40 hover:text-teal-600 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center group-hover:border-teal-500 transition-colors">
                <Mail size={14} />
              </div>
              <span className="text-xs font-light">dhimasnurhanindya@gmail.com</span>
            </a>

            <div className="flex items-center gap-3 text-[#1a1a1a]/40">
              <div className="w-10 h-10 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center">
                <MapPin size={14} />
              </div>
              <span className="text-xs font-light">Yogyakarta, Indonesia</span>
            </div>
          </div>

          <a
            href="mailto:dhimasnurhanindya@gmail.com?subject=Job%20Opportunity"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1a1a1a] text-white text-xs font-medium tracking-[0.1em] uppercase hover:bg-[#333] transition-colors group"
          >
            Say Hello
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
