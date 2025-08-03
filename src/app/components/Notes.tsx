"use client";

import { PiNotepadFill } from "react-icons/pi";
import { useState } from "react";

const Notes = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(true);

  return (
    <section className="py-40">
      <div className="container mx-auto">
        <h2 className="section-title">
          <PiNotepadFill /> Personal Notes & Widgets
        </h2>
        <div className="text-left flex flex-wrap justify-center gap-6">
          <div className="note-card">
            <h3 className="text-3xl font-bold mb-[50px]">thoughts.txt</h3>
            <div className="bg-gray-800 rounded-lg">
              <div className="journey-container">
                <div className="pl-3">
                  <p>
                    I want to get a .dev domain for my portfolio, but I don't
                    think it's worth it right now.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="note-card">
            <h3 className="text-3xl font-bold mb-[50px]">tab.md</h3>
            <div className="container mx-auto w-full max-w-4xl px-4">
              <div className="bg-gray-800 rounded-lg w-full" id="a">
                <div className="flex gap-2 px-4 py-2 bg-gray-700 rounded-t-lg">
                  <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
                </div>
                <div className="journey-container">
                  <div className="pl-3 journey-container-alt">
                    <textarea className="w-full text-xl"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="note-card">
            <h3 className="text-3xl font-bold mb-[50px]">Clicker</h3>
            <div className="bg-gray-800 rounded-lg">
              <div className="journey-container">
                <div>
                  <p>{count}</p>
                  <button onClick={() => setCount(count + 1)}>clicky</button>
                </div>
              </div>
            </div>
          </div>
          <div className="note-card">
            <h3 className="text-3xl font-bold mb-[50px]">Please Review Me!</h3>
            <div className="bg-gray-800 rounded-lg">
              {state ? (
                <div className="p-5">
                  <p>
                    Hello, if you like my portfolio (or me), you can give me a
                    star on github!
                  </p>
                </div>
              ) : (
                <div className="p-5">
                  <p>bruh</p>
                </div>
              )}
            </div>
            <div className="flex gap-5 mt-5">
              <a
                className="p-3 bg-bg border-[0.5px] border-border rounded-lg text-lg text-white hover:bg-bg-hover no-underline duration-500"
                href="https://github.com/VirakbothSoth/VirakbothSoth"
              >
                okay sure!
              </a>
              <button
                className="p-3 bg-bg border-[0.5px] border-border rounded-lg text-lg text-white hover:bg-bg-hover duration-500 cursor-pointer"
                onClick={() => setState((prev) => !prev)}
              >
                {state ? "shut up" : "nvm"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notes;
