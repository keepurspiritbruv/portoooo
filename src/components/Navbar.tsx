import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import type { NavLink } from '../types'

interface NavbarProps {
  introComplete?: boolean
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = ({ introComplete = true }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'experience', 'skills', 'contact']
    const updateActiveSection = () => {
      const readingLine = Math.min(160, window.innerHeight * 0.3)
      const currentSection = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null)
        .filter((section) => section.getBoundingClientRect().top <= readingLine)
        .at(-1)

      if (currentSection) setActiveSection(currentSection.id)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const showBg = scrolled
  const closeMenu = () => setMobileOpen(false)

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={introComplete ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={`nav-paper sticky top-0 z-50 border-b border-rule transition-colors duration-300 ${showBg ? 'shadow-sm' : ''}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 md:px-10">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2 font-serif text-lg tracking-wide text-ink transition-colors hover:text-orange"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink bg-accent font-mono text-[10px] font-bold">M</span>
          <span>murguy<span className="text-orange">.</span></span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? 'location' : undefined}
                className={`relative rounded-sm px-3 py-2 font-mono text-[10px] tracking-[0.04em] uppercase transition-colors ${
                  active
                    ? 'bg-accent text-ink'
                    : 'text-ink-muted hover:bg-paper-shadow hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <button
          className="rounded-sm border border-rule-strong p-2 text-ink transition-colors hover:bg-paper-shadow lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="nav-paper overflow-hidden border-t border-rule lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
                  className={`rounded-sm px-3 py-2 text-left font-mono text-[10px] tracking-[0.04em] uppercase transition-colors ${
                    activeSection === link.href.slice(1) ? 'bg-accent text-ink' : 'text-ink-muted hover:bg-paper-shadow'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
