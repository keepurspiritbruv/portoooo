import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="border-t border-[#e5e1d6] px-5 py-10 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="mb-3 font-serif text-lg text-[#191a18]">murguy.</p>
            <p className="max-w-xs text-xs leading-relaxed text-[#65645d]">
              Frontend Engineer &amp; UI/UX Designer in Yogyakarta, Indonesia.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#1a1a1a] mb-3 tracking-wide">Explore</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link to="/about" className="text-xs text-[#65645d] transition-colors hover:text-[#191a18]">About</Link>
              <Link to="/projects" className="text-xs text-[#65645d] transition-colors hover:text-[#191a18]">Projects</Link>
              <Link to="/experience" className="text-xs text-[#65645d] transition-colors hover:text-[#191a18]">Experience</Link>
              <Link to="/skills" className="text-xs text-[#65645d] transition-colors hover:text-[#191a18]">Skills</Link>
              <Link to="/contact" className="text-xs text-[#65645d] transition-colors hover:text-[#191a18]">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-[#1a1a1a] mb-3 tracking-wide">Connect</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/keepurspiritbruv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#807b6e] transition-colors hover:text-[#a35b31]"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhimasnp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#807b6e] transition-colors hover:text-[#a35b31]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/dhms._"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#807b6e] transition-colors hover:text-[#a35b31]"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#e5e1d6] pt-5 sm:flex-row">
          <p className="text-[10px] text-[#807b6e]">
            &copy; {new Date().getFullYear()} MURGUY. All rights reserved.
          </p>
          <p className="text-[10px] text-[#807b6e]">
            Built with React + Framer Motion + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
