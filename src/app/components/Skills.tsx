import { FaStar, FaJava, FaLaptopCode } from "react-icons/fa";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiDjango,
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiVuedotjs,
  SiNextdotjs,
  SiGnubash,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">
          <FaStar className="skill-icon" /> Skills
        </h2>
        <h3 className="sub-section-title">
          <FaLaptopCode className="skill-icon" /> Programming
        </h3>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="skill-card">
              <div className="control-mockup">
                <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              </div>
              <div className="skill-content">
                <h3>Generic Coding Languages</h3>
                <div className="skill-icons-container">
					<div className="icon-div">
						<SiPython className="skill-icon" />
						<h6>Python</h6>
						<p>Pro Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-blue-500 w-[80%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="icon-div">
						<FaJava className="skill-icon" />
						<h6>Java</h6>
						<p>Ok Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-green-500 w-[50%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="icon-div">
						<h6 className="text-5xl">C#</h6>
						<h6 className="invisible">e</h6>
						<p>Ok Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-slate-500 w-[50%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
              </div>
            </div>
			<div className="skill-card">
              <div className="control-mockup">
                <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              </div>
              <div className="skill-content">
                <h3>Core Web Languages</h3>
                <div className="skill-icons-container">
					<div className="icon-div">
						<SiHtml5 className="skill-icon" />
						<h6>HTML</h6>
						<p>Pro Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-red-500 w-[80%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="icon-div">
						<SiCss3 className="skill-icon" />
						<h6>CSS</h6>
						<p>Pro Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-blue-500 w-[70%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="icon-div">
						<SiJavascript className="skill-icon" />
						<h6>Javascript</h6>
						<p>Ok Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-yellow-500 w-[60%] h-2.5 rounded-full"></div>
							</div>
						</div>
						<h6 className="inline-flex items-center gap-1 py-1"><SiTypescript />Typescript</h6>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-blue-900 w-[50%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
              </div>
            </div>
			<div className="skill-card">
              <div className="control-mockup">
                <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              </div>
              <div className="skill-content">
                <h3>CSS Frameworks</h3>
                <div className="skill-icons-container">
					<div className="icon-div">
						<SiTailwindcss className="skill-icon" />
						<h6>Tailwind</h6>
						<p>Pro Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-blue-300 w-[70%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="icon-div">
						<SiBootstrap className="skill-icon" />
						<h6>Bootstrap</h6>
						<p>Pro Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-purple-500 w-[70%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
              </div>
            </div>
			<div className="skill-card">
              <div className="control-mockup">
                <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              </div>
              <div className="skill-content">
                <h3>Backend Frameworks</h3>
                <div className="skill-icons-container">
					<div className="icon-div">
						<SiNodedotjs className="skill-icon" />
						<h6>NodeJS</h6>
						<p>Noob Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-green-400 w-[60%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="icon-div">
						<SiExpress className="skill-icon" />
						<h6>Express</h6>
						<p>Noob Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-gray-400 w-[50%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="icon-div">
						<SiDjango className="skill-icon" />
						<h6>Django</h6>
						<p>Ok Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-orange-400 w-[60%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
              </div>
            </div>
			<div className="skill-card">
              <div className="control-mockup">
                <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              </div>
              <div className="skill-content">
                <h3>Frontend Frameworks</h3>
                <div className="skill-icons-container">
					<div className="icon-div">
						<SiReact className="skill-icon" />
						<h6>ReactJS</h6>
						<p>Pro Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-blue-400 w-[80%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="icon-div">
						<SiNextdotjs className="skill-icon" />
						<h6>NextJS</h6>
						<p>Pro Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-gray-600 w-[70%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="icon-div">
						<SiVuedotjs className="skill-icon" />
						<h6>VueJS</h6>
						<p>Ok Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-green-600 w-[40%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
              </div>
            </div>
            <div className="skill-card">
              <div className="control-mockup">
                <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              </div>
              <div className="skill-content">
                <h3>Frontend Frameworks</h3>
                <div className="skill-icons-container">
					<div className="icon-div">
						<SiGnubash className="skill-icon" />
						<h6>Linux/Bash Commands</h6>
						<p>Ok Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-gray-600 w-[50%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="sub-section-title">
          <FaStar className="skill-icon" /> Other
        </h3>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="skill-card">
              <div className="control-mockup">
                <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              </div>
              <div className="skill-content">
                <h3>Languages</h3>
                <div className="skill-icons-container">
					<div className="icon-div">
						<h6>English</h6>
						<p>Pro Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-blue-400 w-[80%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="icon-div">
						<h6>Chinese</h6>
						<p>HSK1 Level</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-red-400 w-[50%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="icon-div">
						<h6>Khmer</h6>
						<p>Can only listen</p>
						<div className="progress-div">
							<div className="rounded-full h-2.5 w-full">
								<div className="bg-blue-600 w-[50%] h-2.5 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
