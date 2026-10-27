import type { Achievement, Education } from '../types'

export const education: Education = {
  institution: 'Universitas Gadjah Mada',
  location: 'Yogyakarta, Indonesia',
  degree: 'Bachelor of Information Engineering',
  period: 'Aug 2022 — Aug 2026',
  gpa: '3.14/4.00',
  academicWork: [
    'Miniweather AI-Powered IoT Weather Monitoring & Early Warning System',
    'Coastal Disaster Early Warning System (Undergraduate Thesis)',
  ],
}

export const achievements: Achievement[] = [
  {
    name: 'English Proficiency Test',
    year: 2026,
    administeredBy:
      'Research and Development for Societal Impact (RDSI), Faculty of Economics and Business, Universitas Gadjah Mada',
    totalScore: 517,
  },
]
