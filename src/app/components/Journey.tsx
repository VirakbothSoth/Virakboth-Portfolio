'use client'

import { FaMap } from "react-icons/fa"

const About = () => {
  return (
    <section className="py-80" id="journey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="section-title">
          <FaMap /> Journey to Coding
        </h2>
        <div className="journey-container bg-gray-800 w-full">
          <div className="w-full">
            <div className="pl-3 journey-container-alt w-full">
              <p>
                I began coding at <b>12 years old</b>, taking various courses on <b>Scratch</b> and <b>Python</b>.
              </p>
              <p className="py-10">
                After I turn <b>13</b>, I began to study <b>HTML, CSS, Javascript & Bootstrap</b> on various online courses, such as <a href="https://cs50.harvard.edu/web">CS50W</a>, <a href="https://snoopedu.com">SnoopEdu</a>, etc.
              </p>
              <p>
                then, when I'm <b>14</b>, I studied <b>Django, React, Next, Tailwind, Vue</b> & languages like <b>Java, C#, Typescript</b> leading to now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
