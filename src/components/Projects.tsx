import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectItem from './ProjectItem'
import useScrollReveal from '../hooks/useScrollReveal'

const Projects = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const { ref, isInView, variants } = useScrollReveal()

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="projects" className="notebook-section px-5 py-20 sm:px-10 md:px-14 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-40 left-[3%] w-32 h-32 md:w-48 md:h-48 opacity-15">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#1a1a1a]">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.3" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.3" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="note-label mb-5">Selected work</p>
          <h2 className="mb-5 max-w-3xl text-[clamp(2.3rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#191a18]">
            A collection of things I’ve made.
          </h2>
          <p className="mb-10 max-w-xl text-sm leading-relaxed text-[#65645d]">
            Web projects, community stories, and visual work from my studies and experience.
          </p>
        </motion.div>

        <div className="grid gap-3 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
