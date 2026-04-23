import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'
import useScrollReveal from '../hooks/useScrollReveal'

const Skills = () => {
  const { ref, isInView, variants } = useScrollReveal()

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="uppercase tracking-[0.4em] text-xs md:text-sm mb-8 font-mono text-[#1a1a1a]/50">
            Skills
          </p>
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] font-light tracking-tight text-[#1a1a1a] mb-8 pl-0 md:pl-10">
            <span className="font-serif italic block">Tools &amp;</span>
            <span className="block">
              <span className="font-light text-[#1a1a1a]/40">my</span>{' '}
              <span className="font-medium">abilities.</span>
            </span>
          </h2>
          <p className="text-sm font-light text-[#1a1a1a]/50 mb-16 pl-0 md:pl-10">
            Technologies and expertise that power my creations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pl-0 md:pl-10">
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
              className="group p-6 rounded-2xl border border-[#1a1a1a]/5 hover:border-[#1a1a1a]/15 transition-all duration-500 bg-white/50"
            >
              <div className="font-mono text-[10px] text-[#1a1a1a]/30 mb-3">
                {String(catIndex + 1).padStart(2, '0')}
              </div>
              <h3 className="text-sm font-medium text-[#1a1a1a] tracking-wide mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-3 py-1 rounded-full border border-[#1a1a1a]/8 text-[#1a1a1a]/40 group-hover:border-teal-500/20 group-hover:text-teal-600 transition-colors duration-500"
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
