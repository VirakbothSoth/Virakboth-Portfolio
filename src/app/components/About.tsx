'use client'

import { FaBook } from "react-icons/fa"
import { useState } from "react"

const About = () => {
  const [showAlt, setShowAlt] = useState(false)
  return (
    <section className="py-80" id="about">
      <div className="container mx-auto w-full max-w-4xl px-4">
        <h2 className="section-title"><FaBook /> About Me</h2>
        <div className="bg-gray-800 rounded-lg w-full">
          <div className="journey-container">
        <button onClick={() => setShowAlt(!showAlt)}>
          {showAlt ? "Unview Source" : "View Source"}
        </button>
        {showAlt ? (
          <div className="journey-container">
            <p><code>&lt;body&gt;</code></p>
            <div className="pl-3">
              <p><code>&lt;p&gt;</code>
              I'm a 14 year old developer from <b>Cambodia</b> that can make websites & simple programs.
              <code>&lt;/p&gt;</code></p>
              <p><code>&lt;p&gt;</code>
              My Hobbies are..
              <code>&lt;/p&gt;</code></p>
              <p><code>&lt;ul&gt;</code></p>
              <div className="pl-5">
                <p><code>&lt;li&gt;</code>
                  🧑‍💻 Coding and Developing (duh.)
                <code>&lt;/li&gt;</code>
                <p><code>&lt;li&gt;</code>
                  🫂 Talking and meeting friends
                <code>&lt;/li&gt;</code></p>
                <p><code>&lt;li&gt;</code>
                  🎮 Gaming
                <code>&lt;/li&gt;</code></p>
                </p>
              </div>
            <p><code>&lt;/ul&gt;</code></p>
            </div>
            <p><code>&lt;/body&gt;</code></p>
          </div>
        ) : (
          <div>
            <div className="pl-3 journey-container-alt">
              <p>I'm a 14 year old developer from <b>Cambodia</b> that can make websites & simple programs.</p>
              <br></br>
              <p>My Hobbies are..</p>
              <ul className="pl-5 list-disc">
                <li><p>🧑‍💻 Coding and Developing (duh.)</p></li>
                <li><p>🫂 Talking and meeting friends</p></li>
                <li><p>🎮 Gaming</p></li>
              </ul>
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
