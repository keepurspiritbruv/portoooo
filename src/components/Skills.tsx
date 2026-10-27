import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'
import useScrollReveal from '../hooks/useScrollReveal'

const Skills = () => {
  const { ref, isInView, variants } = useScrollReveal()

  return (
    <section id="skills" className="notebook-section relative overflow-hidden px-5 py-20 sm:px-10 md:px-14 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="hand-note mb-3 text-2xl text-orange">Notes &amp; tools</p>
          <h2 className="mb-5 max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink">
            What I bring to a project.
          </h2>
          <p className="mb-10 max-w-xl text-sm leading-relaxed text-ink-muted">
            The tools and skills I use across design, development, and visual storytelling.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: catIndex * 0.1,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`notebook-card group relative p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${['note-yellow', 'note-mint', 'note-pink', 'note-blue'][catIndex % 4]}`}
            >
              <div className="mb-3 font-mono text-[10px] text-ink-soft">
                {String(catIndex + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-4 font-display text-sm font-bold tracking-wide text-ink">{cat.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-ink/5 bg-paper-raised/80 px-2.5 py-1.5 font-mono text-[9px] text-ink-muted transition-colors group-hover:bg-paper-raised"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
