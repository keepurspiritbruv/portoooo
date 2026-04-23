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
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 right-[2%] w-24 h-24 md:w-36 md:h-36 opacity-15">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#1a1a1a]">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="0.5" rx="4" />
          <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.3" rx="2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="uppercase tracking-[0.4em] text-xs md:text-sm mb-8 font-mono text-[#1a1a1a]/50">
            Experience
          </p>
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] font-light tracking-tight text-[#1a1a1a] mb-16 pl-0 md:pl-10">
            <span className="font-serif italic block">Where I've</span>
            <span className="block">
              <span className="font-light text-[#1a1a1a]/40">been</span>{' '}
              <span className="font-medium">building.</span>
            </span>
          </h2>
        </motion.div>

        <div className="space-y-0 pl-0 md:pl-10">
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
                className="flex gap-6 py-8 border-b border-[#1a1a1a]/8 group"
              >
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center text-[#1a1a1a]/30 group-hover:border-teal-500 group-hover:text-teal-600 transition-colors duration-500">
                    <Icon size={16} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-base font-serif italic text-[#1a1a1a]">{exp.role}</h3>
                    <span className="text-[10px] text-[#1a1a1a]/30 shrink-0 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs text-teal-600/60 mb-3 font-light">{exp.company}</p>
                  <p className="text-xs font-light leading-[1.8] text-[#1a1a1a]/50">{exp.description}</p>
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
