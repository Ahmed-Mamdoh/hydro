const Navbar = () => {
  return (
    <div className="navbar bg-transparent px-3 md:px-44 md:py-7 font-semibold fixed z-30">
      <div className="navbar-start lg:w-1/5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Our Work</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
        <a className="cursor-pointer btn-ghost text-2xl">Hydro</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-bold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Our Work</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white bg-red-600 rounded-full p-3 md:p-6 shadow-none border-none">
          Sign In / Join
        </a>
      </div>
    </div>
  );
};

export default Navbar;
