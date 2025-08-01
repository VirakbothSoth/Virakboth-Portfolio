import { FaSchool, FaJava } from "react-icons/fa6";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiScratch,
  SiPython,
  SiKotlin,
  SiReact,
  SiDjango,
} from "react-icons/si";

const Projects = () => {
  return (
    <section className="p-40">
      <div className="container mx-auto">
        <h2 className="section-title">
          <FaSchool /> Schools & Courses
        </h2>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <div className="mb-5">
              <h3 className="text-3xl font-bold flex items-center gap-4">
                Algorithmics
              </h3>
              <p className="text-gray-400">2022-2023</p>
              <p className="flex items-center">
                <SiScratch />
                <SiPython />
              </p>
            </div>
            <p>The School that introduced me to Coding.</p>
            <a
              href="https://algorithmicschool.com"
              target="_blank"
              className="font-bold text-b"
            >
              Site
            </a>
          </div>
          <div className="card">
            <div className="mb-5">
              <h3 className="text-3xl font-bold flex items-center gap-4">
                CS50 Online Courses
              </h3>
              <p className="text-gray-400">2023-2024</p>
              <p className="flex items-center">
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <SiBootstrap />
                <SiReact />
                <SiDjango />
                <SiScratch />
                <SiPython /> <b>C</b>
              </p>
            </div>
            <p>This Course is challenging, as it's from Harvard</p>
            <div className="flex gap-4">
              <a
                href="https://cs50.harvard.edu/x"
                target="_blank"
                className="font-bold text-b"
              >
                CS50x
              </a>
              <a
                href="https://cs50.harvard.edu/scratch"
                target="_blank"
                className="font-bold text-b"
              >
                CS50S
              </a>
              <a
                href="https://cs50.harvard.edu/python"
                target="_blank"
                className="font-bold text-b"
              >
                CS50P
              </a>
              <a
                href="https://cs50.harvard.edu/web"
                target="_blank"
                className="font-bold text-b"
              >
                CS50W
              </a>
            </div>
          </div>
          <div className="card">
            <div className="mb-5">
              <h3 className="text-3xl font-bold flex items-center gap-4">
                Coursera
              </h3>
              <p className="text-gray-400">2024-Current</p>
              <p className="flex items-center">
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <SiTypescript />
                <SiReact />
                <SiDjango />
                <SiScratch />
                <SiPython />
              </p>
            </div>
            <p>I took courses here, like Meta Front-End, Py 4 Everyone, etc.</p>
            <a
              href="https://coursera.org"
              target="_blank"
              className="font-bold text-b"
            >
              Site
            </a>
          </div>
          <div className="card">
            <div className="mb-5">
              <h3 className="text-3xl font-bold flex items-center gap-4">
                A&B
              </h3>
              <p className="text-gray-400">Early-Mid 2024</p>
              <p className="flex items-center">
                <SiPython />
              </p>
            </div>
            <p>
              I took a small python course here, since I'm not old enough to
              really study there
            </p>
            <a
              href="https://anbschool.org"
              target="_blank"
              className="font-bold text-b"
            >
              Site
            </a>
          </div>
          <div className="card">
            <div className="mb-5">
              <h3 className="text-3xl font-bold flex items-center gap-4">
                SnoopEdu
              </h3>
              <p className="text-gray-400">Late 2024</p>
              <p className="flex items-center">
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
              </p>
            </div>
            <p>Learned basic web fundamentals here.</p>
            <a
              href="https://snoopedu.com"
              target="_blank"
              className="font-bold text-b"
            >
              Site
            </a>
          </div>
          <div className="card">
            <div className="mb-5">
              <h3 className="text-3xl font-bold flex items-center gap-4">
                FreeCodeCamp
              </h3>
              <p className="text-gray-400">Around Feb-May 2025</p>
              <p className="flex items-center">
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <SiBootstrap />
                <SiReact />
                <SiPython />
              </p>
            </div>
            <p>Took as a refresher, and made from projects on the way</p>
            <a
              href="https://freecodecamp.org"
              target="_blank"
              className="font-bold text-b"
            >
              Site
            </a>
          </div>
          <div className="card">
            <div className="mb-5">
              <h3 className="text-3xl font-bold flex items-center gap-4">
                Step IT Academy
              </h3>
              <p className="text-gray-400">2024-Current - Term 2</p>
              <p className="flex items-center mb-5">
                IT Basics, Networking, CS Basics, C#,
                <SiPython />
              </p>
            </div>
            <p className="flex items-center">
              Future: <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
              <SiDjango />
              <FaJava />
              <SiKotlin />
            </p>
            <p>
              Recent school I started taking, its estimated to end around 2027!
            </p>
            <a
              href="https://cambodia.itstep.org"
              target="_blank"
              className="font-bold text-b"
            >
              Site (Cambodia Branch)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
