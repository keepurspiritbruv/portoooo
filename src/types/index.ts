export interface Project {
  id: string
  title: string
  shortDesc: string
  longDesc: string
  techStack: string[]
  category: 'web' | 'mobile' | 'fullstack' | 'other'
  thumbnail: string
  images: string[]
  githubUrl?: string
  liveUrl?: string
  year: number
  featured: boolean
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  type: 'work' | 'education' | 'organization'
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface NavLink {
  label: string
  href: string
}
