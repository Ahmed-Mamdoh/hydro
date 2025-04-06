const Intro = () => {
  return (
    <div className="flex justify-center items-center bg-white text-black ">
      <div className="flex justify-center items-center max-w-5xl lg:max-w-7xl pt-12 gap-10 flex-wrap">
        <div className="flex flex-col gap-5 w-4/5 md:w-1/3 pb-12">
          <h2 className="text-3xl">Let us introduce</h2>
          <p className="text-sm text-zinc-600 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <p className="text-sm text-zinc-600  leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="flex flex-col gap-5 pb-12 w-4/5 md:w-auto">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p>Web Design</p>
              <p className="text-zinc-700">85%</p>
            </div>
            <progress
              className="progress md:w-64 lg:w-56 text-black h-[3px]"
              value="85"
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p>Photography</p>
              <p className="text-zinc-700">90%</p>
            </div>
            <progress
              className="progress md:w-64 lg:w-56 text-black h-[3px]"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p>Content Marketing</p>
              <p className="text-zinc-700">75%</p>
            </div>
            <progress
              className="progress md:w-64 lg:w-56 text-black h-[3px]"
              value="75"
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p>CMS Admin</p>
              <p className="text-zinc-700">70%</p>
            </div>
            <progress
              className="progress w- md:w-64 lg:w-56 text-black h-[3px]"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="w-1/1 md:w-1/2 lg:w-96 self-end">
          <img src="\about-image.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
