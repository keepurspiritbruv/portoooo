import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import type { NavLink } from '../types'

interface NavbarProps {
  introComplete?: boolean
}

const navLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = ({ introComplete = true }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const showBg = scrolled || location.pathname !== '/'

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={introComplete ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={`sticky top-0 z-50 border-b border-[#e9e5da] transition-all duration-300 ${
        showBg ? 'bg-[#fbfaf6]/95 backdrop-blur-md' : 'bg-[#fbfaf6]/80'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-serif text-lg tracking-wide text-[#1a1a1a] hover:text-[#a35b31] transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7cb45] text-xs font-bold">M</span>
          <span>murguy<span className="text-[#b66f44]">.</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative rounded px-3 py-2 text-[11px] tracking-[0.08em] uppercase transition-colors group ${
                  active
                    ? 'bg-[#f7cb45] text-[#191a18]'
                    : 'text-[#65645d] hover:bg-[#f1eee4] hover:text-[#191a18]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <button
          className="md:hidden text-[#1a1a1a]"
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
            className="md:hidden bg-[#fbfaf6] border-t border-[#e9e5da] overflow-hidden"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              <Link
                to="/"
                className={`text-left text-xs tracking-[0.15em] uppercase transition-colors ${
                  location.pathname === '/' ? 'bg-[#f7cb45] text-[#191a18]' : 'text-[#65645d]'
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded px-3 py-2 text-left text-xs tracking-[0.1em] uppercase transition-colors ${
                    location.pathname === link.href ? 'bg-[#f7cb45] text-[#191a18]' : 'text-[#65645d]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
