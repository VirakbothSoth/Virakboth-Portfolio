"use client"

import { FaMap } from "react-icons/fa"

const About = () => {
  return (
    <section className="py-40" id="journey">
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
                at <b>13</b>, I began to study <b>HTML, CSS, JS & Bootstrap</b> on various online courses, such as <a href="https://cs50.harvard.edu/web">CS50W</a>, <a href="https://snoopedu.com">SnoopEdu</a>, etc.
              </p>
              <p className="pb-10">
                at <b>14</b>, I studied many frameworks, such as <b>React, Next, Tailwind, Vue</b> & languages like <b>Java, C#, & TS</b>.
              </p>
              <p>
                at <b>15</b>, I'm planning to focus more on backend, like <b>Django, Express, Supabase </b> & languages like <b>SQL</b>, Aswell as being active more on problem-solving platforms like <b> LeetCode, HackerRank & CodeWars </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
