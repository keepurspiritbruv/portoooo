import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight, Phone } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const Contact = () => {
  const { ref, isInView, variants } = useScrollReveal()

  return (
    <section id="contact" className="notebook-section relative overflow-hidden px-5 py-20 sm:px-10 md:px-14 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          className="notebook-card relative mx-auto max-w-5xl border border-ink bg-paper-raised p-6 shadow-ink sm:p-10 md:p-12"
        >
          <span className="pointer-events-none absolute -right-2 -top-3 rotate-3 border border-pink/25 bg-pink/10 px-3 py-1 font-mono text-[8px] font-bold uppercase tracking-wider text-pink">Contact</span>
          <p className="hand-note mb-3 text-2xl text-orange">Say hello!</p>
          <h2 className="mb-6 max-w-2xl font-display text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink">
            Have a project in mind or just want to chat?
          </h2>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-ink-muted">
            I’m a full-stack software developer and Gadjah Mada University graduate based in Bantul, Yogyakarta. Reach me by email or phone.
          </p>

          <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a
              href="mailto:dhimasnurhanindya@gmail.com?subject=Job%20Opportunity"
              className="group flex items-center gap-3 text-ink-muted transition-colors hover:text-orange"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-rule-strong bg-paper-raised transition-colors group-hover:border-orange">
                <Mail size={14} />
              </div>
              <span className="break-all text-sm">dhimasnurhanindya@gmail.com</span>
            </a>

            <a href="tel:+6282329414146" className="group flex items-center gap-3 text-ink-muted transition-colors hover:text-orange">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-rule-strong bg-paper-raised transition-colors group-hover:border-orange"><Phone size={14} /></div>
              <span className="text-sm">+62 823-2941-4146</span>
            </a>

            <div className="flex items-center gap-3 text-ink-muted">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-rule-strong bg-paper-raised">
                <MapPin size={14} />
              </div>
              <span className="text-sm">Bantul, Yogyakarta</span>
            </div>
          </div>

          <a
            href="mailto:dhimasnurhanindya@gmail.com?subject=Job%20Opportunity"
            className="group inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-wide text-paper-raised transition-colors hover:bg-blue"
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
