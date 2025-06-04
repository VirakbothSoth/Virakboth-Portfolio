import { FaSchool } from "react-icons/fa"
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiBootstrap, SiScratch, SiPython, SiReact, SiDjango } from "react-icons/si"

const Projects = () => {
  return (
    <section className="p-40">
      <div className="container mx-auto">
        <h2 className="section-title"><FaSchool /> Schools & Courses</h2>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-3xl font-bold mb-[50px]">
                <img
                  src="https://snoopedu.com/app/themes/snoopedu/resources/assets/images/logo.svg"
                  className="school-logo"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                SnoopEdu
              </h3>
            <p className="text-xl flex items-center">
              Learned: <SiHtml5 /><SiCss3 /><SiJavascript />
            </p>
            <p className="text-xl">Learned how to build proper websites here.</p>
            <a href="https://snoopedu.com" className="font-bold text-b">
              Website
            </a>
            </div>
          <div className="card">
            <h3 className="text-3xl font-bold mb-[50px]">
              <img
              src="/assets/images/algor-icon.png"
              className="school-logo"
              />
              Algorithmics
            </h3>
            <p className="text-xl flex items-center">
              Learned: <SiScratch /><SiPython />
            </p>
            <p className="text-xl">My first course related to coding.</p>
            <a
              href="https://algorithmicschool.com"
              className="font-bold text-b"
            >
              Website
            </a>
          </div>
          <div className="card">
            <h3 className="text-3xl font-bold mb-[50px]">
              <img
              src="/assets/images/cour-icon.png"
              className="school-logo"
              />
              Coursera Courses
            </h3>
            <p className="text-xl flex items-center">
              Learned: <SiHtml5 /><SiCss3 /><SiJavascript /><SiTypescript /><SiReact /><SiDjango /><SiScratch /><SiPython />
            </p>
            <p className="text-xl">Some various courses on coursera, like Meta Front-End, Python for Everybody, etc. - I still take these often</p>
            <a
              href="https://coursera.org"
              className="font-bold text-b"
            >
              Website
            </a>
          </div>
          <div className="card">
            <h3 className="text-3xl font-bold mb-[50px]">CS50 Courses</h3>
            <p className="text-xl flex items-center">
              Learned: <SiHtml5 /><SiCss3 /><SiJavascript /><SiBootstrap /><SiReact /><SiDjango /><SiScratch /><SiPython /> <b>C</b>
            </p>
            <p className="text-xl">This course is a bit more challenging.</p>
            <div className='flex gap-4'>
              <a
                href="https://cs50.harvard.edu/x"
                className="font-bold text-b"
              >
                CS50x
              </a>
              <a
                href="https://cs50.harvard.edu/scratch"
                className="font-bold text-b"
              >
                CS50S
              </a>
              <a
                href="https://cs50.harvard.edu/python"
                className="font-bold text-b"
              >
                CS50P
              </a>
              <a
                href="https://cs50.harvard.edu/web"
                className="font-bold text-b"
              >
                CS50W
              </a>
            </div>
          </div>
          <div className="card">
            <h3 className="text-3xl font-bold mb-[50px]">
              <img
              src="/assets/images/fcc-icon.png"
              className="school-logo"
              />
              FreeCodeCamp
            </h3>
            <p className="text-xl flex items-center">
              Learned: <SiHtml5 /><SiCss3 /><SiJavascript /><SiBootstrap /><SiReact /><SiPython />
            </p>
            <p className="text-xl">Took FreeCodeCamp as a refresher, and made from projects on the way</p>
            <a
              href="https://freecodecamp.org"
              className="font-bold text-b"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
