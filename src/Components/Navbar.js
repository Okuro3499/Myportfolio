import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const ref = useRef();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (navOpen && ref.current && !ref.current.contains(e.target)) {
        setNavOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [navOpen]);

  return (
    <header>
      <nav id="header" className="w-full z-30 top-0 py-1 bg-slate-700">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => setNavOpen(!navOpen)}
          >
            {!navOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          <div className="md:flex md:items-center md:w-auto w-full order-2 md:order-1">
            <nav
              className={
                "flex-col flex-grow md:pb-0 md:flex md:justify-end md:flex-row" +
                (navOpen ? " block" : " hidden")
              }
            >
              <div className="relative">
                <Link to="/" className="text-black no-underline">
                  <div className="ml-2 inline-flex px-2 py-2 text-white rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer">
                    Home
                  </div>
                </Link>
              </div>

              <div className="relative">
                <HashLink
                  smooth
                  to="/"
                  className="text-black no-underline"
                >
                  <div className="ml-2 inline-flex px-2 py-2 text-white rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer">
                    Resume
                  </div>{" "}
                </HashLink>
              </div>

              <div className="relative">
                <HashLink
                  smooth
                  to="/"
                  className="text-black no-underline"
                >
                  <div className="ml-2 inline-flex px-2 py-2 text-white rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer">
                    Projects
                  </div>{" "}
                </HashLink>
              </div>

              <div className={navOpen ? " block" : " hidden"}>
                <div className="relative">
                  <Link to="/" className="text-black no-underline">
                    <div className="ml-2 inline-flex px-2 py-2 text-white rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer">
                      About
                    </div>
                  </Link>
                </div>

                <div className="relative">
                  <HashLink
                    smooth
                    to="/"
                    className="text-black no-underline">
                    <div className="ml-2 inline-flex px-2 py-2 text-white rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer">
                      Contact Me
                    </div>
                  </HashLink>
                </div>
              </div>
            </nav>
          </div>

          <div className="order-1 md:order-2">
            <Link
              to="/"
              className="ml-2 inline-flex px-2 py-2 text-white rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer text-black no-underline"
            >
              <img className="w-6 h-6 rounded-full mx-auto mr-4" src={require('../../src/giddie.jpeg')} alt=""/>
              Gideon Okuro
            </Link>
          </div>

          <div className="order-3 md:order-3 flex items-center">
            <nav
              className={
                "flex-col flex-grow md:pb-0 md:flex md:justify-end md:flex-row block" +
                (navOpen ? " block" : " hidden")
              }
            >
              <div className="hidden md:block">
                <Link to="/about" className="text-black no-underline">
                  <div className="ml-2 inline-flex px-2 py-2 text-white rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer">
                    About
                  </div>
                </Link>
                <HashLink
                  smooth
                  to="/#contact"
                  className="text-black no-underline"
                >
                  <div className="ml-2 inline-flex px-2 py-2 text-white rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer">
                    Contact Me
                  </div>
                </HashLink>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;