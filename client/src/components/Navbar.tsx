import { UserState, SetUser } from '../main.d';
import { Link } from 'react-router-dom';
import Logout from './Logout';

type NavbarProps = {
  user: UserState;
  setUser: SetUser;
};

const Navbar = ({ user, setUser }: NavbarProps) => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <img
                className="block max-w-full rounded-full w-20 h-20"
                src="/images/HH_logo_nav.jpeg"
                alt="Navbar Holistic Health Logo"
              />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal text-primary-600 font-poppins">
                {/* Navbar menu content here */}
                <li>
                  <Link to="/" className="hover:bg-transparent">
                    Home
                  </Link>
                </li>
                {user ? (
                  <li className="text-primary-600">
                    <Link to="/dashboard" className="hover:bg-transparent">
                      Dashboard
                    </Link>
                  </li>
                ) : null}
                <li>
                  <Link to="/about" className="hover:bg-transparent">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="hover:bg-transparent">
                    Docs
                  </Link>
                </li>
                <li>
                  <Logout isLoggedIn={!!user} setUser={setUser} />
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <li className="text-primary-600">
                <Link to="/dashboard" className="hover:bg-transparent">
                  Dashboard
                </Link>
              </li>
            ) : null}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/docs">Docs</Link>
            </li>
            <li>
              <Logout isLoggedIn={!!user} setUser={setUser} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
