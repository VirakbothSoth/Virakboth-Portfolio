"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const face = "/assets/images/virakboth.jpg";
  const fullText = "Hi, I'm Virakboth";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-[url(/assets/images/bg.jpg)] mask-y-from-70% mask-y-to-100% bg-cover bg-center bg-no-repeat">
      <div className="py-40">
        <div>
          <div className="flex items-center justify-center mb-10">
            <span className="relative inline-block">
              <Image
                src={face}
                alt="Virakboth's Face"
                width={200}
                height={200}
                quality={1}
                className="relative aspect-square w-[200px] md:w-[400px]  rounded-full shadow-lg object-cover border-border border-2"
                style={{ zIndex: 1, aspectRatio: "1 / 1" }}
              />
            </span>
          </div>
          <div>
            <h1 className="inline-block font-bold text-shadow-lg/30 ">
              {displayedText}
              <div className="animate-blink inline-flex">_</div>
            </h1>
          </div>
          <p>
            The Passionate Python & Front-End Developer.
          </p>
        </div>
      </div>
      <style>
        {`
          .animate-blink {
            animation: blink 0.5s infinite;
          }
          @keyframes blink {
            0%, 50% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </header>
  );
};

export default Hero;
