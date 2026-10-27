import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Users, HeartHandshake, Award, ExternalLink } from 'lucide-react'
import { experiences } from '../data/experience'
import { achievements, education } from '../data/education'
import useScrollReveal from '../hooks/useScrollReveal'

const iconMap = {
  academic: GraduationCap,
  professional: Briefcase,
  volunteer: HeartHandshake,
  leadership: Users,
} as const

const typeLabels = {
  academic: 'Academic role',
  professional: 'Professional experience',
  volunteer: 'Volunteer',
  leadership: 'Student leadership',
} as const

const Experience = () => {
  const { ref, isInView, variants } = useScrollReveal()

  return (
    <section id="experience" className="notebook-section relative overflow-hidden px-5 py-20 sm:px-10 md:px-14 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="hand-note mb-3 text-2xl text-orange">Career timeline</p>
          <h2 className="mb-10 max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink">
            The places and people that shaped my work.
          </h2>
        </motion.div>

        <div className="timeline-list flex flex-col gap-4 pl-1">
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
                className="relative flex gap-4"
              >
                <span className="timeline-marker" aria-hidden="true" />
                <article className={`notebook-card flex-1 min-w-0 p-5 transition-transform hover:-translate-y-0.5 sm:p-6 ${index % 3 === 0 ? 'note-mint' : index % 3 === 1 ? 'note-blue' : 'note-yellow'}`}>
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rule bg-paper-raised text-green"><Icon size={14} /></span>
                      <h3 className="font-display text-base font-bold text-ink">{exp.role}</h3>
                    </div>
                    <span className="w-fit shrink-0 rounded-sm border border-rule bg-paper-raised px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-ink-muted">{exp.period}</span>
                  </div>
                  <p className="mb-1 text-xs font-semibold text-orange">{exp.company}</p>
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-wide text-ink-soft">{typeLabels[exp.type]} · {exp.location}</p>
                  <p className="text-sm leading-[1.75] text-ink-muted">{exp.description}</p>
                </article>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="notebook-card note-yellow p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-rule bg-paper-raised text-blue"><GraduationCap size={16} /></div>
              <p className="note-label">Education</p>
            </div>
            <h3 className="font-display text-lg font-bold text-ink">{education.degree}</h3>
            <p className="mt-1 text-sm text-orange">{education.institution} · {education.location}</p>
            <p className="mt-2 font-mono text-[10px] text-ink-muted">{education.period} · GPA {education.gpa}</p>
            <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-wide text-ink">Academic work</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink-muted">
              {education.academicWork.map((work) => <li key={work}>{work}</li>)}
            </ul>
          </article>

          <article className="notebook-card note-pink p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-rule bg-paper-raised text-orange"><Award size={16} /></div>
              <p className="note-label">Certification</p>
            </div>
            {achievements.map((achievement) => (
              <div key={achievement.name}>
                <h3 className="font-display text-lg font-bold text-ink">{achievement.name}</h3>
                <p className="mt-1 font-mono text-[10px] text-orange">{achievement.year} · Total score {achievement.totalScore}</p>
                <p className="mt-3 text-sm leading-[1.75] text-ink-muted">{achievement.administeredBy}</p>
                {achievement.certificationUrl && (
                  <a href={achievement.certificationUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wide text-ink underline decoration-rule-strong underline-offset-4 transition-colors hover:text-orange">
                    View certification <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
