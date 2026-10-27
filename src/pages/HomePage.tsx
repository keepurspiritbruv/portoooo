import PageTransition from '../components/PageTransition'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

interface HomePageProps {
  introComplete: boolean
}

const HomePage = ({ introComplete }: HomePageProps) => {
  return (
    <PageTransition>
      <Hero introComplete={introComplete} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </PageTransition>
  )
}

export default HomePage
