import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="lg:px-32 navbar bg-custombg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="py-1">
              <NavLink to="/">
                {({ isActive }) => (
                  <span
                    className={
                      isActive ? "font-bold text-customBlue" : "text-base"
                    }
                  >
                    Home
                  </span>
                )}
              </NavLink>
            </li>
            <li className="py-1">
              <NavLink to="/statistics">
                {({ isActive }) => (
                  <span
                    className={
                      isActive ? "font-bold text-customBlue" : "text-base"
                    }
                  >
                    Statistics
                  </span>
                )}
              </NavLink>
            </li>

            <li className="py-1">
              <NavLink to="/jobs">
                {({ isActive }) => (
                  <span
                    className={
                      isActive ? "font-bold text-customBlue" : "text-base"
                    }
                  >
                    Applied Jobs
                  </span>
                )}
              </NavLink>
            </li>

            <li className="py-1">
              <NavLink to="/blog">
                {({ isActive }) => (
                  <span
                    className={
                      isActive ? "font-bold text-customBlue" : "text-base"
                    }
                  >
                    Blogs
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-3xl font-lobster">
          CareerPilot
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal">
          <li className="mx-5 hover:text-customBlue hover:font-bold">
            <NavLink to="/">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? "mx-5 text-customBlue font-bold" : "mx-5"
                  }
                >
                  Home
                </span>
              )}
            </NavLink>
          </li>
          <li className="mx-5 hover:text-customBlue hover:font-bold">
            <NavLink to="/statistics">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? "mx-5 text-customBlue font-bold" : "mx-5"
                  }
                >
                  Statistics
                </span>
              )}
            </NavLink>
          </li>

          <li className="mx-5 hover:text-customBlue hover:font-bold">
            <NavLink to="/jobs">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? "mx-5 text-customBlue font-bold" : "mx-5"
                  }
                >
                  Applied Jobs
                </span>
              )}
            </NavLink>
          </li>
          <li className="mx-5 hover:text-customBlue hover:font-bold">
            <NavLink to="/blog">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? "mx-5 text-customBlue font-bold" : "mx-5"
                  }
                >
                  Blogs
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="bg-gradient-to-r from-customBlue to-customPurple text-white py-2 px-4 rounded-md">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Navbar;
