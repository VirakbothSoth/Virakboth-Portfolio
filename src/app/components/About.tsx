"use client"

import { FaBook } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-40" id="about">
      <div className="container mx-auto w-full max-w-4xl px-4">
        <h2 className="section-title">
          <FaBook /> About Me
        </h2>
        <div className="bg-gray-800 rounded-lg w-full">
          <div className="flex gap-2 px-4 py-2 bg-gray-700 rounded-t-lg">
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
          </div>
          <div className="journey-container">
            <div className="pl-3 journey-container-alt">
              <p>
                I'm a 14 year old developer from <b>Cambodia</b> that can make
                websites & simple programs.
              </p>
              <br></br>
              <p>My Hobbies are..</p>
              <ul className="pl-5 list-disc">
                <li>
                  <p>🧑‍💻 Coding and Developing (duh.)</p>
                </li>
                <li>
                  <p>🫂 Talking and meeting friends</p>
                </li>
                <li>
                  <p>🎮 Gaming</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
