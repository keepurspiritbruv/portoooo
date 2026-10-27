import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectItem from './ProjectItem'
import useScrollReveal from '../hooks/useScrollReveal'

const Projects = () => {
  const [selectedId, setSelectedId] = useState(projects[0]?.id ?? '')
  const { ref, isInView, variants } = useScrollReveal()
  const selectedProject = projects.find((project) => project.id === selectedId) ?? projects[0]
  const selectedIndex = projects.findIndex((project) => project.id === selectedProject?.id)

  return (
    <section id="projects" className="notebook-section relative overflow-hidden px-5 py-20 sm:px-10 md:px-14 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="hand-note mb-3 text-2xl text-orange">Selected work</p>
          <h2 className="mb-5 max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink">
            A collection of things I’ve made.
          </h2>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-ink-muted">
            Web projects, community stories, and visual work from my studies and experience.
          </p>
        </motion.div>

        <div className="project-showcase overflow-hidden p-4 sm:p-7 md:p-9">
          <div className="project-tab-list -mx-1 mb-6 flex gap-2 overflow-x-auto px-1 pb-3" role="group" aria-label="Select a project">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                aria-label={`Show ${project.title}`}
                aria-pressed={selectedId === project.id}
                onClick={() => setSelectedId(project.id)}
                className="project-tab flex min-w-36 max-w-56 shrink-0 items-center gap-2 rounded-sm border border-paper-raised/15 bg-paper-raised/5 px-3 py-2 text-left text-[11px] text-paper-raised/70 transition-colors hover:border-yellow/70 hover:text-paper-raised"
              >
                <span className="font-mono text-[9px] opacity-70">{String(index + 1).padStart(2, '0')}</span>
                <span className="truncate">{project.title}</span>
              </button>
            ))}
          </div>

          {selectedProject && <ProjectItem project={selectedProject} index={selectedIndex} />}
        </div>
      </div>
    </section>
  )
}

export default Projects
