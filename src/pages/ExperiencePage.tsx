import PageTransition from '../components/PageTransition'
import Experience from '../components/Experience'

const ExperiencePage = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <Experience />
      </div>
    </PageTransition>
  )
}

export default ExperiencePage
