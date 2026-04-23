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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showBg ? 'bg-[#FAFAF8]/80 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-lg tracking-wide text-[#1a1a1a] hover:text-teal-600 transition-colors"
        >
          murguy.
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-xs tracking-[0.15em] uppercase transition-colors group ${
                  active
                    ? 'text-[#1a1a1a]'
                    : 'text-[#1a1a1a]/40 hover:text-[#1a1a1a]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-teal-500 transition-all duration-500 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
        </div>

        <button
          className="md:hidden text-[#1a1a1a]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
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
            className="md:hidden bg-[#FAFAF8]/95 backdrop-blur-md border-b border-black/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              <Link
                to="/"
                className={`text-left text-xs tracking-[0.15em] uppercase transition-colors ${
                  location.pathname === '/' ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/40'
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-left text-xs tracking-[0.15em] uppercase transition-colors ${
                    location.pathname === link.href ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/40'
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
