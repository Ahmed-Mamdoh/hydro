import bg from '/home-bg.jpg'

const Hero = () => {
  return (
    <div className="hero min-h-screen relative bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute w-full h-full bg-gradient-to-r from-[#0575E6] to-[#00F260] z-10 top-0 left-0 opacity-80"></div>
      <div className="hero-content flex-col-reverse lg:flex-row-reverse max-w-screen-2xl justify-between lg:justify-evenly z-20 items-center py-36">
        <div className="w-full lg:w-auto flex  justify-center">
          <iframe
            className="w-full lg:w-[555px] aspect-[555/312]"
            src="https://www.youtube.com/embed/AqcjdkPMPJA"
            title="Pause Fest 2016 Kickoff at Envato"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-5/6 lg:w-3/6 xl:w-2/6 flex items-center text-center lg:text-start lg:items-start flex-col gap-6">
          <h1 className="text-4xl lg:text-5xl font-normal leading-snug">
            We make beautiful websites for all people.
          </h1>
          <div className="flex flex-col md:flex-row items-center md:gap-8 gap-0">
            <button className="btn bg-transparent rounded-full px-6 py-3 md:px-9 md:py-6 border-white shadow-none hover:bg-red-600 hover:border-red-600 transition-all duration-500 ease-in-out ">
              Start a Project
            </button>
            <p className="py-6 w-1/1 md:w-1/2">
              CALL US (+66) 010-020-0340 For any inquiry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
