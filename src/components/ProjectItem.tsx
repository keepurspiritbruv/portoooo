import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import type { Project } from '../types'

interface ProjectItemProps {
  project: Project
  index: number
  isExpanded: boolean
  onToggle: () => void
}

const ProjectItem = ({ project, index, isExpanded, onToggle }: ProjectItemProps) => {
  const num = String(index + 1).padStart(2, '0')
  const displayTechs = project.techStack.slice(0, 3)
  const extraTechs = project.techStack.length - 3

  return (
    <article className="notebook-card overflow-hidden group">
      <button onClick={onToggle} className="w-full text-left" aria-expanded={isExpanded}>
        <div className="flex items-center gap-3 p-4 transition-colors hover:bg-[#fff9e5] sm:gap-4 sm:p-5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f7cb45] font-mono text-[10px] font-bold text-[#191a18]">{num}</span>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-[#191a18] transition-transform duration-300 group-hover:translate-x-1 md:text-lg">
              {project.title}
            </h3>
            <p className="mt-1 truncate text-xs text-[#65645d]">{project.shortDesc}</p>
          </div>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            {displayTechs.map((tech) => (
              <span
                key={tech}
                className="rounded bg-[#f2f0e9] px-2 py-1 text-[10px] text-[#65645d]"
              >
                {tech}
              </span>
            ))}
            {extraTechs > 0 && (
                <span className="rounded bg-[#f2f0e9] px-2 py-1 text-[10px] text-[#65645d]">
                +{extraTechs} more
              </span>
            )}
          </div>

          <span className="hidden shrink-0 font-mono text-[10px] text-[#807b6e] sm:block">{project.year}</span>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4 }}
            className="shrink-0 text-[#65645d]"
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="space-y-5 border-t border-[#e9e5da] px-4 pb-5 pt-4 sm:px-5">
              <div className="aspect-video overflow-hidden rounded-lg bg-[#f2f0e9]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  width={960}
                  height={540}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="max-w-3xl text-sm leading-[1.8] text-[#55544e]">{project.longDesc}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-[#e6f4ec] px-3 py-1.5 text-[10px] text-[#38644e]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md border border-[#d8d3c7] bg-white px-4 py-2.5 text-xs text-[#35362f] transition-colors hover:border-[#a35b31]"
                  >
                    <ExternalLink size={12} /> GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md bg-[#191a18] px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#35362f]"
                  >
                    <ExternalLink size={12} />
                    {project.category === 'other' ? 'View Project' : 'Live Demo'}
                  </a>
                )}
              </div>

              {project.images.length > 1 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  {project.images.map((img, i) => (
                    <div key={i} className="aspect-video overflow-hidden rounded-lg bg-[#f2f0e9]">
                      <img
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        width={320}
                        height={180}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default ProjectItem
