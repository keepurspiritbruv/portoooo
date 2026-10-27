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
    <section id="about" className="notebook-section relative overflow-hidden px-5 py-20 sm:px-10 md:px-14 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="hand-note mb-3 text-2xl text-orange">About me</p>

          <h2 className="mb-9 max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink">
            I build software for real-world monitoring and early warning.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-[1.35fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="notebook-card note-yellow relative space-y-5 p-6 sm:p-8"
          >
            <span className="pointer-events-none absolute -right-2 -top-3 h-6 w-14 rotate-6 border border-blue/20 bg-blue/10" aria-hidden="true" />
            <p className="text-sm leading-[1.85] text-ink-muted md:text-base">
              I’m a full-stack software developer and Gadjah Mada University graduate based in Bantul, Yogyakarta. My work spans React interfaces, Node.js services, REST APIs, and IoT-connected monitoring applications.
            </p>
            <p className="text-sm leading-[1.85] text-ink-muted md:text-base">
              I contributed to a four-service weather platform with LSTM anomaly detection and developed a coastal early-warning prototype covering five locations. I work with TypeScript, Python, Docker, and relational databases to connect data, services, and usable interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="notebook-card note-blue flex flex-col justify-center space-y-5 p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-ink">Find me around the web</h3>
            <p className="text-sm text-ink-muted">
              Feel free to reach out through any of my social platforms.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-rule-strong bg-paper-raised text-ink-muted transition-[color,border-color,background-color,transform] hover:-translate-y-0.5 hover:border-yellow hover:text-ink"
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
