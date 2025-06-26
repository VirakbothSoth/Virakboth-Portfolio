import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Certs from './components/Certs'
import Schools from './components/Schools'
import Projects from './components/Projects'
import Notes from './components/Notes'
import Footer from './components/Footer'
import Activity from './components/Activity'
import './styles/index.css'
import './styles/tailwind.css'

export default function HomePage() {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Certs />
            <Activity />
            <Notes />
            <Schools />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}