const face = "/assets/images/virakboth.jpg";

const Hero = () => {
  return (
    <header className="bg-[url(/assets/images/bg.jpg)] mask-y-from-70% mask-y-to-100% bg-cover bg-center bg-no-repeat">
      <div className="py-40">
        <div>
          <div className="flex items-center justify-center mb-10">
            <span className="relative inline-block">
              <img
                src={face}
                alt="Virakboth's Face"
                className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full shadow-lg object-cover border-border border-2"
                style={{ zIndex: 1, aspectRatio: "1 / 1" }}
              />
            </span>
          </div>
          <div>
            <h1 className="inline-block font-bold text-shadow-lg/30 ">Hi, I'm Virakboth<div className="animate-blink inline-flex">_</div></h1>
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
            0%, 50% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </header>
  );
};

export default Hero;
