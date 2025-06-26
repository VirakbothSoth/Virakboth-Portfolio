const face = "/assets/images/virakboth.jpg";

const Hero = () => {
  return (
    <header className="bg-[url(/assets/images/bg.jpg)] mask-y-from-70% mask-y-to-90% bg-cover bg-center bg-no-repeat">
      <div className="p-80">
        <div>
          <div className="flex items-center justify-center mb-10">
            <span className="relative inline-block">
              <span className="absolute inset-0 rounded-full border-4 border-[#272b3b] animate-ping"></span>
              <img
                src={face}
                alt="Virakboth's Face"
                className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border-4 border-[#272b3b] shadow-lg object-cover"
                style={{ zIndex: 1, aspectRatio: "1 / 1" }}
              />
            </span>
          </div>
          <div>
            <h1 className="inline-block font-bold text-shadow-lg/30 ">Hi, I'm Virakboth</h1>
            <h1 className="inline-block font-bold animate-blink text-shadow-lg/30 ">_</h1>
          </div>
          <p>
            A Passionate Cambodian Web (Front-End) & Python Developer and
            Student
          </p>
        </div>
      </div>
      <style>
        {`
          .animate-blink {
            animation: blink 0.5s infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </header>
  );
};

export default Hero;
