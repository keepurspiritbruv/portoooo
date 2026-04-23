import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="border-t border-[#1a1a1a]/5 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <p className="font-serif text-lg text-[#1a1a1a] mb-3">murguy.</p>
            <p className="text-xs font-light text-[#1a1a1a]/40 leading-relaxed">
              Design Engineering &amp; Creative Development.
              Building digital experiences that feel alive.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#1a1a1a] mb-3 tracking-wide">Explore</p>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-xs text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors">About</a>
              <a href="#projects" className="text-xs text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors">Projects</a>
              <a href="#experience" className="text-xs text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors">Experience</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-[#1a1a1a] mb-3 tracking-wide">Connect</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/keepurspiritbruv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a1a1a]/30 hover:text-teal-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhimasnp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a1a1a]/30 hover:text-teal-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/dhms._"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a1a1a]/30 hover:text-teal-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a]/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#1a1a1a]/25">
            &copy; {new Date().getFullYear()} MURGUY. All rights reserved.
          </p>
          <p className="text-[10px] text-[#1a1a1a]/25">
            Built with React + Framer Motion + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
