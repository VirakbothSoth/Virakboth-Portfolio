import Image from "next/image";

const Hero = () => {
  return (
    <header className="bg-[url(/assets/images/bg.jpg)] mask-y-from-70% mask-y-to-100% bg-cover bg-center bg-no-repeat">
      <div className="py-40">
        <div>
          <div className="flex items-center justify-center mb-10">
            <span className="relative inline-block">
              <Image
                src="/assets/images/virakboth.jpg"
                alt="Virakboth's Face"
                width={200}
                height={200}
                quality={1}
                className="relative aspect-square w-[200px] md:w-[400px]  rounded-full shadow-lg object-cover border-border border-2"
                style={{ zIndex: 1, aspectRatio: "1 / 1" }}
              />
            </span>
          </div>
          <h1 className="font-bold text-shadow-lg/30">
            Hi, I'm Virakboth
          </h1>
          <p className="text-shadow-lg/30">
            14-years-old Python & Front-End Developer
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
