import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'
import useScrollReveal from '../hooks/useScrollReveal'

const Skills = () => {
  const { ref, isInView, variants } = useScrollReveal()

  return (
    <section id="skills" className="notebook-section px-5 py-20 sm:px-10 md:px-14 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="note-label mb-5">Notes &amp; tools</p>
          <h2 className="mb-5 max-w-3xl text-[clamp(2.3rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#191a18]">
            What I bring to a project.
          </h2>
          <p className="mb-10 max-w-xl text-sm leading-relaxed text-[#65645d]">
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
              className={`notebook-card group p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${catIndex % 3 === 0 ? 'note-yellow' : catIndex % 3 === 1 ? 'note-mint' : 'note-pink'}`}
            >
              <div className="mb-3 font-mono text-[10px] text-[#807b6e]">
                {String(catIndex + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-[#191a18]">{cat.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-white/80 px-2.5 py-1.5 text-[10px] text-[#55544e] transition-colors group-hover:bg-white"
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
