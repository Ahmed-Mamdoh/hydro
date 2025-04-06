const Work = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <div className="max-w-5xl lg:max-w-7xl flex flex-col justify-center items-center py-12 gap-12">
        <h2 className="text-black text-3xl">Our Work</h2>
        <div className="flex items-center justify-center flex-col md:flex-row lg:justify-evenly w-full flex-wrap gap-10 lg:gap-0">
          <div className="work-imgs">
            <img src="work-image1.jpg" alt="" />
            <div className="work-img-hover">
              {/* <h3 className="work-img-hover-h3">Clean & Minimal</h3> */}{" "}
              {/*JS Needed for hover parent */}
              {/* <p className="work-img-hover-p">product Design</p> */}{" "}
              {/*JS Needed for hover parent */}
            </div>
          </div>
          <div className="work-imgs">
            <img src="work-image2.jpg" alt="" />
            <div className="work-img-hover">
              {/* <h3 className="work-img-hover-h3">Studio Bag</h3> */}{" "}
              {/*JS Needed for hover parent */}
              {/* <p className="work-img-hover-p">Branding</p> */}{" "}
              {/*JS Needed for hover parent */}
            </div>
          </div>
          <div className="work-imgs">
            <img src="work-image3.jpg" alt="" />
            <div className="work-img-hover">
              {/* <h3 className="work-img-hover-h3">Frame Design</h3> */}{" "}
              {/*JS Needed for hover parent */}
              {/* <p className="work-img-hover-p">Photography</p> */}{" "}
              {/*JS Needed for hover parent */}
            </div>
          </div>
          <div className="work-imgs">
            <img src="work-image4.jpg" alt="" />
            <div className="work-img-hover">
              {/* <h3 className="work-img-hover-h3">Paint Work</h3> */}{" "}
              {/*JS Needed for hover parent */}
              {/* <p className="work-img-hover-p">Art, Design</p> */}{" "}
              {/*JS Needed for hover parent */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
