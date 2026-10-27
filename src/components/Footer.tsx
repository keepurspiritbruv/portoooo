import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="border-t border-rule px-5 py-10 sm:px-10 md:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="mb-3 font-serif text-lg text-ink">murguy.</p>
            <p className="max-w-xs text-xs leading-relaxed text-ink-muted">
              Full-stack Software Developer in Bantul, Yogyakarta.
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-wide text-ink">Explore</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#about" className="text-xs text-ink-muted transition-colors hover:text-ink">About</a>
              <a href="#projects" className="text-xs text-ink-muted transition-colors hover:text-ink">Projects</a>
              <a href="#experience" className="text-xs text-ink-muted transition-colors hover:text-ink">Experience</a>
              <a href="#skills" className="text-xs text-ink-muted transition-colors hover:text-ink">Skills</a>
              <a href="#contact" className="text-xs text-ink-muted transition-colors hover:text-ink">Contact</a>
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-wide text-ink">Connect</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/keepurspiritbruv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-orange"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhimasnp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-orange"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
            <div className="mt-4 flex flex-col items-start gap-2">
              <a href="mailto:dhimasnurhanindya@gmail.com" className="text-xs text-ink-muted transition-colors hover:text-ink">dhimasnurhanindya@gmail.com</a>
              <a href="tel:+6282329414146" className="text-xs text-ink-muted transition-colors hover:text-ink">+62 823-2941-4146</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-rule pt-5 sm:flex-row">
          <p className="font-mono text-[9px] text-ink-soft">
            &copy; {new Date().getFullYear()} MURGUY. All rights reserved.
          </p>
          <p className="font-mono text-[9px] text-ink-soft">
            Built with React + Framer Motion + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
