'use client'

import { FaMap } from "react-icons/fa"
import { useState } from "react"

const About = () => {
  const [showAlt, setShowAlt] = useState(false)
  return (
    <section className="py-80" id="journey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="section-title">
          <FaMap /> Journey to Coding
        </h2>
        <div className="bg-gray-800 rounded-lg w-full">
          <div className="journey-container w-full">
        <button onClick={() => setShowAlt(!showAlt)}>
          {showAlt ? "Unview Source" : "View Source"}
        </button>
        {showAlt ? (
          <div className="journey-container bg-gray-800 w-full">
            <p><code>&lt;body&gt;</code></p>
            <div className="pl-3">
              <p>
                <code>&lt;p&gt;</code>
                I began coding at <b>12 years old</b>, taking various courses on <b>Scratch</b> and <b>Python</b>.
                <code>&lt;/p&gt;</code>
              </p>
              <p className="py-10">
                <code>&lt;p&gt;</code>
                After I'm <b>13</b>, I began to study <b>HTML, CSS, JS & Bootstrap Framework</b> on various online courses, such as <a href="https://cs50.harvard.edu/web">CS50W</a>, <a href="https://cs50.harvard.edu/web">SnoopEdu</a>, etc.
                <code>&lt;/p&gt;</code>
              </p>
              <p>
                <code>&lt;p&gt;</code>
                then, when I'm <b>14</b>, I studied some frameworks like <b>React, Tailwind, Django</b> & other languages like <b>Java, Typescript</b> leading to now.
                <code>&lt;/p&gt;</code>
              </p>
            </div>
            <p><code>&lt;/body&gt;</code></p>
          </div>
        ) : (
          <div className="w-full">
            <div className="pl-3 journey-container-alt w-full">
              <p>
                I began coding at <b>12 years old</b>, taking various courses on <b>Scratch</b> and <b>Python</b>.
              </p>
              <p className="py-10">
                After I'm <b>13</b>, I began to study <b>HTML, CSS, JS & Bootstrap Framework</b> on various online courses, such as <a href="https://cs50.harvard.edu/web">CS50W</a>, <a href="https://cs50.harvard.edu/web">SnoopEdu</a>, etc.
              </p>
              <p>
                then, when I'm <b>14</b>, I studied some frameworks like <b>React, Tailwind, Django</b> & other languages like <b>Java, Typescript</b> leading to now.
              </p>
            </div>
          </div>
        )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
