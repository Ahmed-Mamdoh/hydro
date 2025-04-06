const Footer = () => {
  return (
    <div className="  flex flex-col justify-center items-center bg-gradient-to-r from-[#434343] to-black py-12">
      <footer className="footer *:justify-items-center md:*:justify-items-start text-base-content p-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] md:grid-rows-2 lg:grid-rows-1 max-w-5xl lg:max-w-7xl bg-transparent py-12 justify-items-center gap-y-10 md:gap-y-0">
        <aside className="md:col-span-3 lg:col-span-1">
          <h2 className="text-3xl ">Hydro Company</h2>
          <p className="w-full lg:w-4/5 leading-6 text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title  text-3xl opacity-100 font-normal ">
            Services
          </h6>
          <a className="link link-hover">Branding</a>
          <a className="link link``-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-3xl opacity-100 font-normal ">
            Company
          </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-3xl opacity-100 font-normal ">
            Legal
          </h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr className="border-gray-500  w-full max-w-5xl lg:max-w-7xl" />

      <footer className="footer text-neutral-content items-center p-4 max-w-5xl lg:max-w-7xl grid-cols-1 grid-rows-3 md:grid-rows-1  md:grid-cols-3  py-12 justify-items-center gap-y-5">
        <aside className=" inline items-center md:justify-self-start  ">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <p className="md:justify-self-end">Call us (+66) 010-020-0340</p>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-start ">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
