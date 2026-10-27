export interface Project {
  id: string
  title: string
  shortDesc: string
  longDesc: string
  techStack: string[]
  category: 'web' | 'mobile' | 'fullstack' | 'other'
  thumbnail?: string
  images: string[]
  githubUrl?: string
  liveUrl?: string
  driveUrl?: string
  year: number
  featured: boolean
}

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  period: string
  description: string
  type: 'academic' | 'professional' | 'volunteer' | 'leadership'
}

export interface Education {
  institution: string
  location: string
  degree: string
  period: string
  gpa: string
  academicWork: string[]
}

export interface Achievement {
  name: string
  year: number
  administeredBy: string
  totalScore: number
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface NavLink {
  label: string
  href: string
}
