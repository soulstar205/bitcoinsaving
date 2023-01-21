/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg  shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Bitcoin Savings
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index-navbar"
                >
                  <i className="text-white-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              
              <li className="flex items-center">
                <a
                  className="hover:text-whitesmoke-500 text-white-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                  target="_blank"
                >
                  <span className="text-white inline-block ml-2">Plans</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-whitesmoke-500 text-white-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                  target="_blank"
                >
                  <span className="text-white inline-block ml-2">About Us</span>
                </a>
              </li>

              <li className="flex items-center">
                <Link to="/auth/register">   
                <a
                  className="hover:text-whitesmoke-500 text-white-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                  target="_blank"
                >
                  <span className="text-white inline-block ml-2">Register</span>
                </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link to="/auth/login">
                  <a
                    className="hover:text-whitesmoke-500 text-white-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                    target="_blank"
                  >
                    <span className="text-white inline-block ml-2">Login</span>
                  </a>
                </Link>
              </li>

            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
