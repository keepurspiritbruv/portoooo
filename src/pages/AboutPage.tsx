import PageTransition from '../components/PageTransition'
import About from '../components/About'

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <About />
      </div>
    </PageTransition>
  )
}

export default AboutPage
