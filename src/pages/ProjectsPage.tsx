import PageTransition from '../components/PageTransition'
import Projects from '../components/Projects'

const ProjectsPage = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <Projects />
      </div>
    </PageTransition>
  )
}

export default ProjectsPage
