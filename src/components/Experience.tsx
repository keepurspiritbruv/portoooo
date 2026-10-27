import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Users } from 'lucide-react'
import { experiences } from '../data/experience'
import useScrollReveal from '../hooks/useScrollReveal'

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  organization: Users,
} as const

const Experience = () => {
  const { ref, isInView, variants } = useScrollReveal()

  return (
    <section id="experience" className="notebook-section px-5 py-20 sm:px-10 md:px-14 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 right-[2%] w-24 h-24 md:w-36 md:h-36 opacity-15">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#1a1a1a]">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="0.5" rx="4" />
          <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.3" rx="2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="note-label mb-5">Experience &amp; journey</p>
          <h2 className="mb-10 max-w-3xl text-[clamp(2.3rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#191a18]">
            The places and people that shaped my work.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((exp, index) => {
            const Icon = iconMap[exp.type]
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="notebook-card flex gap-4 p-5 transition-transform hover:-translate-y-1 sm:p-6"
              >
                <div className="shrink-0 mt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4d27b] bg-[#fff5c8] text-[#5e5432] transition-colors">
                    <Icon size={16} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-base font-semibold text-[#191a18]">{exp.role}</h3>
                    <span className="w-fit shrink-0 rounded bg-[#f3f0e8] px-2 py-1 font-mono text-[10px] text-[#65645d]">{exp.period}</span>
                  </div>
                  <p className="mb-3 text-xs font-medium text-[#a35b31]">{exp.company}</p>
                  <p className="text-sm leading-[1.75] text-[#65645d]">{exp.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
