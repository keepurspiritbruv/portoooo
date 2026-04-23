import { motion } from 'framer-motion'
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaTiktok,
  FaGithub,
} from 'react-icons/fa'
import useScrollReveal from '../hooks/useScrollReveal'

const socialLinks = [
  { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com/@dhimasnurhanindya' },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/dhms._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/dhimurguy' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/dhimasnp/' },
  { name: 'Discord', icon: FaDiscord, url: 'https://discord.com' },
  { name: 'TikTok', icon: FaTiktok, url: 'https://tiktok.com/@dhimsnep' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/keepurspiritbruv' },
]

const About = () => {
  const { ref, isInView, variants } = useScrollReveal()

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="pointer-events-none absolute top-20 right-[10%] w-40 h-40 md:w-64 md:h-64 opacity-20">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#1a1a1a]">
          <path d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="uppercase tracking-[0.4em] text-xs md:text-sm mb-8 font-mono text-[#1a1a1a]/50">
            About
          </p>

          <h2 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] font-light tracking-tight text-[#1a1a1a] mb-16 pl-0 md:pl-10">
            <span className="font-serif italic block">A bit about</span>
            <span className="block">
              <span className="font-light text-[#1a1a1a]/40">my</span>{' '}
              <span className="font-medium">journey.</span>
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-16 pl-0 md:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:w-1/2 space-y-6"
          >
            <p className="text-sm md:text-base font-light leading-[1.8] text-[#1a1a1a]/60">
              As an Information Technology student at Gadjah Mada University, I possess strong
              skills in programming, UI/UX development, software development, and data analysis.
              With a passion for innovation and a commitment to excellence, I am eager to apply my
              expertise to drive progress and contribute to the success of any team or organization.
            </p>
            <p className="text-sm md:text-base font-light leading-[1.8] text-[#1a1a1a]/60">
              More likely a UI/UX Designer or Frontend Engineer. I am also interested in expanding
              my skills and finding new experiences that challenge my creative and technical
              boundaries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:w-5/12 space-y-6"
          >
            <h3 className="text-lg font-serif italic text-[#1a1a1a]">Let's Connect</h3>
            <p className="text-xs text-[#1a1a1a]/40">
              Feel free to reach out through any of my social platforms.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center text-[#1a1a1a]/40 hover:border-teal-500 hover:text-teal-600 transition-all duration-300"
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
