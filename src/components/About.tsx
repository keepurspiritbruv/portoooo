import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import useScrollReveal from '../hooks/useScrollReveal'

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/dhimasnp/' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/keepurspiritbruv' },
]

const About = () => {
  const { ref, isInView, variants } = useScrollReveal()

  return (
    <section id="about" className="notebook-section px-5 py-20 sm:px-10 md:px-14 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute top-20 right-[10%] w-40 h-40 md:w-64 md:h-64 opacity-20">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#1a1a1a]">
          <path d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="note-label mb-5">A bit about me</p>

          <h2 className="mb-10 max-w-3xl text-[clamp(2.3rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#191a18]">
            I build software for real-world monitoring and early warning.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="notebook-card space-y-5 p-6 sm:p-8"
          >
            <p className="text-sm leading-[1.85] text-[#55544e] md:text-base">
              I’m a full-stack software developer and Gadjah Mada University graduate based in Bantul, Yogyakarta. My work spans React interfaces, Node.js services, REST APIs, and IoT-connected monitoring applications.
            </p>
            <p className="text-sm leading-[1.85] text-[#55544e] md:text-base">
              I contributed to a four-service weather platform with LSTM anomaly detection and developed a coastal early-warning prototype covering five locations. I work with TypeScript, Python, Docker, and relational databases to connect data, services, and usable interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="notebook-card flex flex-col justify-center space-y-5 p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-[#191a18]">Find me around the web</h3>
            <p className="text-sm text-[#65645d]">
              Feel free to reach out through any of my social platforms.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded9cd] bg-white text-[#65645d] transition-all hover:-translate-y-0.5 hover:border-[#e2ba39] hover:text-[#191a18]"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
