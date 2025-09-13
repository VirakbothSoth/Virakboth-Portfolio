import { FaStar, FaJava, FaLaptopCode, FaDatabase } from "react-icons/fa";
import {
    SiPython,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiBootstrap,
    SiTailwindcss,
    SiDjango,
    SiTypescript,
    SiExpress,
    SiVuedotjs,
    SiNextdotjs,
    SiGnubash,
    SiFirebase,
    SiSupabase,
    SiAstro,
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
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                                                <div className="bg-blue-500 w-[100%] h-2.5 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-div">
                                        <FaJava className="skill-icon" />
                                        <h6>Java</h6>
                                        <p>Ok Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-green-500 w-[40%] h-2.5 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-div">
                                        <h6 className="text-5xl">C#</h6>
                                        <p>Ok Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-blue-800 w-[60%] h-2.5 rounded-full"></div>
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
                                        <div className="flex">
                                            <SiHtml5 className="skill-icon" />
                                            <SiCss3 className="skill-icon" />
                                        </div>
                                        <h6>HTML + CSS</h6>
                                        <p>Pro Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-purple-500 w-[80%] h-2.5 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-div">
                                        <SiJavascript className="skill-icon" />
                                        <h6>Javascript</h6>
                                        <p>Ok Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-yellow-500 w-[80%] h-2.5 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-div">
                                        <SiTypescript className="skill-icon" />
                                        <h6>Typescript</h6>
                                        <p>Ok Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-blue-800 w-[60%] h-2.5 rounded-full"></div>
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
                                <h3 className="mb-0">Backend</h3>
                                <p className="text-gray-500 text-sm mb-3">
                                    I'm more comfortable with Front-end!
                                </p>
                                <div className="skill-icons-container">
                                    <div className="icon-div">
                                        <FaDatabase className="skill-icon" />
                                        <h6>SQL</h6>
                                        <p>Ok Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-purple-700 w-[50%] h-2.5 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-div">
                                        <SiFirebase className="skill-icon" />
                                        <h6>Firebase</h6>
                                        <p>Noob Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-orange-400 w-[30%] h-2.5 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-div">
                                        <SiSupabase className="skill-icon" />
                                        <h6>Supabase</h6>
                                        <p>Noob Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-green-300 w-[30%] h-2.5 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-div">
                                        <SiExpress className="skill-icon" />
                                        <h6>Express</h6>
                                        <p>Noob Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-gray-400 w-[30%] h-2.5 rounded-full"></div>
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
                                <h3>Frontend</h3>
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
                                        <h6>
                                            VueJS<div className="new">NEW!</div>
                                        </h6>
                                        <p>Noob Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-green-600 w-[20%] h-2.5 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-div">
                                        <SiAstro className="skill-icon" />
                                        <h6>
                                            Astro<div className="new">NEW!</div>
                                        </h6>
                                        <p>Noob Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-blue-600 w-[30%] h-2.5 rounded-full"></div>
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
                                <h3>Other</h3>
                                <div className="skill-icons-container">
                                    <div className="icon-div">
                                        <SiGnubash className="skill-icon" />
                                        <h6>Bash CLI</h6>
                                        <p>Ok Level</p>
                                        <div className="progress-div">
                                            <div className="rounded-full h-2.5 w-full">
                                                <div className="bg-gray-600 w-[70%] h-2.5 rounded-full"></div>
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
                                        <h6>Khmer</h6>
                                        <p>Can only listen</p>
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
