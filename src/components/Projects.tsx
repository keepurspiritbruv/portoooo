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
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-40 left-[3%] w-32 h-32 md:w-48 md:h-48 opacity-15">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#1a1a1a]">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.3" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.3" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.3" />
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
            Creations
          </p>
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] font-light tracking-tight text-[#1a1a1a] mb-8 pl-0 md:pl-10">
            <span className="font-serif italic block">All of my creations</span>
            <span className="block">
              <span className="font-light text-[#1a1a1a]/40">conscientious</span>{' '}
              <span className="font-medium">in detail.</span>
            </span>
          </h2>
          <p className="text-sm font-light text-[#1a1a1a]/50 mb-16 pl-0 md:pl-10">
            Powered by cutting-edge technologies and expertise
          </p>
        </motion.div>

        <div className="border-t border-[#1a1a1a]/10">
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
