import Education from './Education/Education'
import Experience from './Experience/Experience'
import Footer from './HomePage/Footer'
import Hero from './HomePage/Hero'
import Projects from './ProjectsPage/Projects'
import Skills from './Skills/Skills'

const Entry = () => {
  return (
    <div className=" md:flex-2 p-4 lg:px-16 h-[calc(100vh-4rem)] bg-primary_color text-unmuted_color scrollbar-custom overflow-auto">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  )
}

export default Entry
