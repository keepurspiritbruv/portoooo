import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const Contact = () => {
  const { ref, isInView, variants } = useScrollReveal()

  return (
    <section id="contact" className="notebook-section px-5 py-20 sm:px-10 md:px-14 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-1/4 left-[8%] w-20 h-20 md:w-32 md:h-32 opacity-15">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#1a1a1a]">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          className="notebook-card relative max-w-4xl border-2 border-[#35362f] p-6 shadow-[6px_6px_0_#35362f] sm:p-10 md:p-12"
        >
          <p className="mb-5 font-serif text-lg italic text-[#b35e43]">Say hello!</p>
          <h2 className="mb-6 max-w-2xl text-[clamp(2.3rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#191a18]">
            Have a project in mind or just want to chat?
          </h2>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-[#65645d]">
            I’m an Information Technology student at Universitas Gadjah Mada, interested in frontend engineering and UI/UX design. Reach me by email.
          </p>

          <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="mailto:dhimasnurhanindya@gmail.com?subject=Job%20Opportunity"
              className="group flex items-center gap-3 text-[#55544e] transition-colors hover:text-[#a35b31]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded9cd] bg-white transition-colors group-hover:border-[#a35b31]">
                <Mail size={14} />
              </div>
              <span className="break-all text-sm">dhimasnurhanindya@gmail.com</span>
            </a>

            <div className="flex items-center gap-3 text-[#55544e]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded9cd] bg-white">
                <MapPin size={14} />
              </div>
              <span className="text-sm">Yogyakarta, Indonesia</span>
            </div>
          </div>

          <a
            href="mailto:dhimasnurhanindya@gmail.com?subject=Job%20Opportunity"
            className="group inline-flex items-center gap-2 rounded-md bg-[#191a18] px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#35362f]"
          >
            Say Hello
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
