import { FaSchool, FaJava } from "react-icons/fa6"
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiBootstrap, SiScratch, SiPython, SiKotlin, SiReact, SiDjango } from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb"

const Projects = () => {
  return (
    <section className="p-40">
      <div className="container mx-auto">
        <h2 className="section-title"><FaSchool /> Schools & Courses</h2>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-3xl font-bold mb-[50px]">
              <img src="/assets/images/algor-icon.png" className="school-logo" alt="logo" />
              Algorithmics
            </h3>
            <p className="text-xl text-gray-400">
              <em>2022-???</em>
            </p>
            <p className="text-xl flex items-center">
              Learned: <SiScratch /><SiPython />
            </p>
            <p className="text-xl">My first course related to coding.</p>
            <a href="https://algorithmicschool.com" target="_blank" className="font-bold text-b">
              Website
            </a>
          </div>
          <div className="card">
            <h3 className="text-3xl font-bold mb-[50px]">CS50 Courses</h3>
            <p className="text-xl flex items-center">
              Learned: <SiHtml5 /><SiCss3 /><SiJavascript /><SiBootstrap /><SiReact /><SiDjango /><SiScratch /><SiPython /> <b>C</b>
            </p>
            <p className="text-xl text-gray-400">
              <em>2023-2025</em>
            </p>
            <p className="text-xl">This course is a bit more challenging.</p>
            <div className='flex gap-4'>
              <a href="https://cs50.harvard.edu/x" target="_blank" className="font-bold text-b">
                CS50x
              </a>
              <a href="https://cs50.harvard.edu/scratch" target="_blank" className="font-bold text-b">
                CS50S
              </a>
              <a href="https://cs50.harvard.edu/python" target="_blank" className="font-bold text-b">
                CS50P
              </a>
              <a href="https://cs50.harvard.edu/web" target="_blank" className="font-bold text-b">
                CS50W
              </a>
            </div>
          </div>
          <div className="card">
            <h3 className="text-3xl font-bold mb-[50px]">
              <img src="/assets/images/cour-icon.png" className="school-logo" alt="Logo" />
              Coursera Courses
            </h3>
            <p className="text-xl text-gray-400">
              <em>2024-Current</em>
            </p>
            <p className="text-xl flex items-center">
              Learned: <SiHtml5 /><SiCss3 /><SiJavascript /><SiTypescript /><SiReact /><SiDjango /><SiScratch /><SiPython />
            </p>
            <p className="text-xl">Some various courses on coursera, like Meta Front-End, Python for Everybody, etc. - I still take these often</p>
            <a href="https://coursera.org" target="_blank"  className="font-bold text-b">
              Website
            </a>
          </div>
          <div className="card">
            <h3 className="text-3xl font-bold mb-[50px]">
              <img src="https://snoopedu.com/app/themes/snoopedu/resources/assets/images/logo.svg" className="school-logo" alt="Logo" style={{ filter: "brightness(0) invert(1)" }} />
              SnoopEdu
            </h3>
            <p className="text-xl text-gray-400">
              <em>2024-2025</em>
            </p>
            <p className="text-xl flex items-center">
              Learned: <SiHtml5 /><SiCss3 /><SiJavascript />
            </p>
            <p className="text-xl">Learned how to build proper websites here.</p>
            <a href="https://snoopedu.com" target="_blank" className="font-bold text-b">
              Website
            </a>
          </div>
          <div className="card">
            <h3 className="text-3xl font-bold mb-[50px]">
              <img src="/assets/images/fcc-icon.png" className="school-logo" alt="Logo" />
              FreeCodeCamp
            </h3>
            <p className="text-xl text-gray-400">
              <em>Around Feb-May 2025</em>
            </p>
            <p className="text-xl flex items-center">
              Learned: <SiHtml5 /><SiCss3 /><SiJavascript /><SiBootstrap /><SiReact /><SiPython />
            </p>
            <p className="text-xl">Took FreeCodeCamp as a refresher, and made from projects on the way</p>
            <a href="https://freecodecamp.org" target="_blank" className="font-bold text-b">
              Website
            </a>
          </div>
          <div className="card">
            <h3 className="text-3xl font-bold mb-[50px]">
              <img src="/assets/images/step-icon.png" className="school-logo" alt="Logo" />
              STEP IT Academy
            </h3>
            <p className="text-xl text-gray-400">
              <em>2025-Current</em>
            </p>
            <p className="text-xl">
              Current Term: Term 2 - Python
            </p>
            <p className="text-xl flex items-center mb-5">
              Learned: IT essentials, Networking, Computer Science Fundamentals, IT English
            </p>
            <p className="text-xl flex items-center">
              Future: <SiHtml5 /><SiCss3 /><SiJavascript /><SiDjango /><TbBrandCSharp /><SiPython /><FaJava /><SiKotlin />
            </p>
            <p className="text-xl">Recent school I started taking, its estimated to end around 2027!</p>
            <a href="https://cambodia.itstep.org" target="_blank" className="font-bold text-b">
              Website
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
