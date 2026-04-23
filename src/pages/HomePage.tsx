import PageTransition from '../components/PageTransition'
import Hero from '../components/Hero'

interface HomePageProps {
  introComplete: boolean
}

const HomePage = ({ introComplete }: HomePageProps) => {
  return (
    <PageTransition>
      <Hero introComplete={introComplete} />
    </PageTransition>
  )
}

export default HomePage
