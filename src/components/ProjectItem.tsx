import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Project } from '../types'

interface ProjectItemProps {
  project: Project
  index: number
}

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`grid items-center gap-7 ${project.thumbnail ? 'lg:grid-cols-[1fr_1.15fr]' : ''}`}
    >
      <div className="min-w-0">
        <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-green">
          <span className="h-2 w-2 rounded-full bg-green" />
          Project {num} · {project.year}
        </p>
        <h3 className="mb-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-paper-raised">
          {project.title}
        </h3>
        <p className="mb-5 max-w-xl text-sm leading-6 text-paper-raised/70">{project.shortDesc}</p>
        <p className="max-w-xl text-sm leading-7 text-paper-raised/85">{project.longDesc}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-sm border border-paper-raised/10 bg-paper-raised/5 px-2.5 py-1.5 font-mono text-[9px] text-paper-raised/75">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-green px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wide text-ink transition-colors hover:bg-yellow">
              <ExternalLink size={12} />
              {project.category === 'other' ? 'View Project' : 'Live Demo'}
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-paper-raised/25 bg-paper-raised/5 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wide text-paper-raised transition-colors hover:border-yellow hover:text-yellow">
              <ExternalLink size={12} /> GitHub
            </a>
          )}
        </div>
      </div>

      {project.thumbnail && (
        <div className="overflow-hidden rounded-lg border border-paper-raised/15 bg-paper-raised/5 p-2">
          <img src={project.thumbnail} alt={project.title} width={960} height={540} loading="lazy" className="aspect-video w-full rounded object-cover" />
        </div>
      )}

      {project.images.length > 1 && (
        <div className="grid grid-cols-2 gap-3 lg:col-span-2">
          {project.images.map((img, i) => (
            <div key={img} className="overflow-hidden rounded-lg border border-paper-raised/15 bg-paper-raised/5 p-2">
              <img src={img} alt={`${project.title} ${i + 1}`} width={320} height={180} loading="lazy" className="aspect-video w-full rounded object-cover" />
            </div>
          ))}
        </div>
      )}
    </motion.article>
  )
}

export default ProjectItem
