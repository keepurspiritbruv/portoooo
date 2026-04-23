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
    <div className="border-b border-[#1a1a1a]/10 group">
      <button onClick={onToggle} className="w-full text-left">
        <div className="flex items-center gap-4 md:gap-8 py-6 px-2 md:px-4 hover:bg-[#1a1a1a]/[0.02] transition-colors duration-500">
          <span className="text-[10px] text-[#1a1a1a]/30 font-mono w-6 shrink-0">{num}</span>

          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-xl font-serif italic text-[#1a1a1a] group-hover:translate-x-2 transition-transform duration-500">
              {project.title}
            </h3>
            <p className="text-xs text-[#1a1a1a]/40 mt-1 truncate font-light">{project.shortDesc}</p>
          </div>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            {displayTechs.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-3 py-1 rounded-full border border-[#1a1a1a]/8 text-[#1a1a1a]/40"
              >
                {tech}
              </span>
            ))}
            {extraTechs > 0 && (
              <span className="text-[10px] px-3 py-1 rounded-full border border-[#1a1a1a]/8 text-[#1a1a1a]/30">
                +{extraTechs} more
              </span>
            )}
          </div>

          <span className="text-[10px] text-[#1a1a1a]/25 shrink-0 hidden sm:block font-mono">{project.year}</span>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4 }}
            className="shrink-0 text-[#1a1a1a]/30"
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
            <div className="px-2 md:px-4 pb-10 space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden bg-[#F0F0EE]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  width={960}
                  height={540}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm font-light leading-[1.8] text-[#1a1a1a]/55 max-w-3xl">{project.longDesc}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-3 py-1.5 rounded-full border border-teal-500/20 text-teal-600 bg-teal-50"
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
                    className="px-6 py-2.5 border border-[#1a1a1a]/15 text-[#1a1a1a] rounded-full text-xs hover:border-[#1a1a1a] transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={12} /> GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-[#1a1a1a] text-white rounded-full text-xs font-medium hover:bg-[#333] transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={12} />
                    {project.category === 'other' ? 'View Project' : 'Live Demo'}
                  </a>
                )}
              </div>

              {project.images.length > 1 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  {project.images.map((img, i) => (
                    <div key={i} className="aspect-video rounded-xl overflow-hidden bg-[#F0F0EE]">
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
    </div>
  )
}

export default ProjectItem
