const Blog = () => {
  return (
    <div className="bg-[#f0f0f0] flex flex-col justify-center items-center gap-14 py-14">
      <h2 className="text-black text-3xl">Our Blog</h2>
      <div className=" flex flex-wrap flex-col md:flex-row justify-center items-center gap-8 w-full max-w-5xl lg:max-w-7xl">
        <div className="card lg:card-side bg-base-100 shadow-xl rounded-none w-10/12 md:w-auto hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <figure className="img-card-style ">
            <img
              src="\blog-image1.jpg"
              alt="Album"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body card-body-style">
            <p className="flex-grow-0 text-red-600 text-xs font-semibold">
              December 22, 2017
            </p>
            <h2 className="text-black text-xl">
              How To Find Out Beautiful Workspace.
            </h2>
            <p className="flex-grow-0 text-zinc-500 textarea-md">
              Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.
            </p>
            <div className="card-actions mt-auto">
              <button
                className=" bg-[#f0f0f0] text-black px-8 py-3 rounded-full border-none  
              btn-hover"
              >
                Read Article
              </button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl rounded-none w-10/12 md:w-auto hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <figure className="img-card-style ">
            <img
              src="\blog-image2.jpg"
              alt="Album"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body card-body-style">
            <p className="flex-grow-0 text-red-600 text-xs font-semibold">
              December 18, 2017
            </p>
            <h2 className="text-black text-xl">Woman sportwear.</h2>
            <p className="flex-grow-0 text-zinc-500 textarea-md">
              Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.
            </p>
            <div className="card-actions mt-auto">
              <button
                className=" bg-[#f0f0f0] text-black px-8 py-3 rounded-full border-none 
              btn-hover"
              >
                Read Article
              </button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl rounded-none w-10/12 md:w-auto hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <figure className="img-card-style ">
            <img
              src="\blog-image3.jpg"
              alt="Album"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body card-body-style">
            <p className="flex-grow-0 text-red-600 text-xs font-semibold">
              December 14, 2017
            </p>
            <h2 className="text-black text-xl">New creative fashion.</h2>
            <p className="flex-grow-0 text-zinc-500 textarea-md">
              Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.
            </p>
            <div className="card-actions mt-auto">
              <button
                className=" bg-[#f0f0f0] text-black px-8 py-3 rounded-full border-none   
              btn-hover"
              >
                Read Article
              </button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl rounded-none w-10/12 md:w-auto hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <figure className="img-card-style ">
            <img
              src="\blog-image4.jpg"
              alt="Album"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body card-body-style">
            <p className="flex-grow-0 text-red-600 text-xs font-semibold">
              December 10, 2017
            </p>
            <h2 className="text-black text-xl">
              Minimalist design trend in 2018.
            </h2>
            <p className="flex-grow-0 text-zinc-500 textarea-md">
              Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.
            </p>
            <div className="card-actions mt-auto">
              <button
                className=" bg-[#f0f0f0] text-black px-8 py-3 rounded-full border-none  
              btn-hover"
              >
                Read Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
