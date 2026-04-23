import PageTransition from '../components/PageTransition'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <Contact />
      </div>
    </PageTransition>
  )
}

export default ContactPage
