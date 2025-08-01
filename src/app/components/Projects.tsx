import {
  SiScratch,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiDjango,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import prev from "../props/preview";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

const Schools = () => {
  return (
    <section className="p-40" id="projects">
      <div className="container mx-auto">
        <h2 className="section-title">
          <FaCode /> Projects
        </h2>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="project-card">
            <div className="control-mockup">
              <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
            </div>
            <div className="project-content">
              <h3 className="text-3xl font-bold">Link Shortener</h3>
              <p className="text-xl text-gray-400">
                <em>at CS50W</em>
              </p>
              <Image
                src={prev.ls}
                width={341}
                height={192}
                quality={1}
                alt="Link Shortener"
                className="web-preview"
              />
              <p className="text-xl flex items-center">
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <SiDjango />
              </p>
              <p className="text-xl">
                A simple link shortener app submitted to CS50W
              </p>
              <a
                href="https://github.com/VirakbothSoth/Virakboths-Link-Shortener"
                className="font-bold text-b"
              >
                Source
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="control-mockup">
              <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
            </div>
            <div className="project-content">
              <h3 className="text-3xl font-bold">Cybersecurity Website</h3>
              <p className="text-xl text-gray-400">
                <em>at SnoopEdu</em>
              </p>
              <Image
                src={prev.cy}
                width={341}
                height={192}
                quality={1}
                alt="Cybersecurity Website"
                className="web-preview"
              />
              <p className="text-xl flex items-center">
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
              </p>
              <p className="text-xl">
                A School Project I developed with my classmates
              </p>
              <div className="flex gap-4">
                <a href="/projects/cybersecurity" className="font-bold text-b">
                  Site
                </a>
                <a
                  href="https://github.com/bothsecurity/bothsecurity.github.io"
                  className="font-bold text-b"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="control-mockup">
              <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
            </div>
            <div className="project-content">
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-3xl font-bold">Password Generator</h3>
                </div>
                <p className="text-xl text-gray-400">
                  <em>at home</em>
                </p>
              </div>
              <Image
                src={prev.pg}
                width={341}
                height={192}
                quality={1}
                alt="Passgen"
                className="web-preview"
              />
              <p className="text-xl flex items-center">
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
              </p>
              <p className="text-xl">
                A simple password generator website, nothing else
              </p>
              <div className="flex gap-4">
                <a href="/projects/passgen" className="font-bold text-b">
                  Site
                </a>
                <a
                  href="https://github.com/VirakbothSoth/Virakboths-Passgen"
                  className="font-bold text-b"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="control-mockup">
              <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
            </div>
            <div className="project-content">
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-3xl font-bold">This Portfolio</h3>
                </div>
                <p className="text-xl text-gray-400">
                  <em>at home</em>
                </p>
              </div>
              <Image
                src={prev.pf}
                width={341}
                height={192}
                quality={1}
                alt="Portfolio"
                className="web-preview"
              />
              <p className="text-xl flex items-center">
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <SiTypescript />
                <SiReact />
                <SiNextdotjs />
                <SiTailwindcss />
              </p>
              <p className="text-xl">
                This very website is one of my projects, too!
              </p>
            </div>
          </div>
          <div className="project-card">
            <div className="control-mockup">
              <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
            </div>
            <div className="project-content">
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-3xl font-bold">
                    FreeCodeCamp Static Pages
                  </h3>
                </div>
                <p className="text-xl text-gray-400">
                  <em>at FreeCodeCamp</em>
                </p>
              </div>
              <Image
                src={prev.fc}
                width={341}
                height={192}
                quality={1}
                alt="Static Projects"
                className="web-preview"
              />
              <p className="text-xl flex items-center">
                <SiHtml5 />
                <SiCss3 />
              </p>
              <p className="text-xl">
                This includes various projects built for freecodecamp.
              </p>
              <div className="flex gap-4">
                <a href="/projects/recipe" className="font-bold text-b">
                  Recipe
                </a>
                <a href="/projects/tribute" className="font-bold text-b">
                  Tribute Page
                </a>
                <a href="/projects/techdoc" className="font-bold text-b">
                  Tech Docs
                </a>
                <a href="/projects/survey" className="font-bold text-b">
                  Survey
                </a>
                <a href="/projects/mockportfolio" className="font-bold text-b">
                  Mock Portfolio
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="control-mockup">
              <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
            </div>
            <div className="project-content">
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-3xl font-bold">Odin Static Pages</h3>
                </div>
                <p className="text-xl text-gray-400">
                  <em>at The Odin Project</em>
                </p>
              </div>
              <Image
                width={341}
                height={192}
                quality={1}
                src={prev.su}
                alt="Sign-Up"
                className="web-preview"
              />
              <p className="text-xl flex items-center">
                <SiHtml5 />
                <SiCss3 />
              </p>
              <p className="text-xl">
                This includes various projects built for the odin project.
              </p>
              <div className="flex gap-4">
                <a href="/projects/signup" className="font-bold text-b">
                  Sign-Up Form
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="control-mockup">
              <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
            </div>
            <div className="project-content">
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-3xl font-bold">Scratch Projects</h3>
                </div>
                <p className="text-xl text-gray-400">
                  <em>at CS50S, Algorithmics</em>
                </p>
              </div>
              <Image
                src={prev.sc}
                width={341}
                height={192}
                quality={1}
                alt="Scratch Project"
                className="web-preview"
              />
              <p className="text-xl flex items-center">
                <SiScratch />
              </p>
              <p className="text-xl">
                One of my 1st Coding Projects, some are school projects
              </p>
              <div className="flex gap-4">
                <a
                  href="https://scratch.mit.edu/projects/787673812"
                  className="font-bold text-b"
                >
                  Solar System Clicker
                </a>
                <a
                  href="https://scratch.mit.edu/projects/782982623"
                  className="font-bold text-b"
                >
                  Untitled Clicker
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schools;
