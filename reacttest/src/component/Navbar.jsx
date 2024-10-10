import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const userName = localStorage.getItem("name");

  return (
    <>
      <div className="navbar bg-[#432818] px-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">
                  <a className="text-black text-base">Home</a>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <a className="text-black text-base">Register</a>
                </Link>
              </li>
              <li>
                <Link to="/book">
                  <a className="text-black text-base">Book</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="white"
            className="h-8"
          >
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <a className="text-white text-base">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <a className="text-white text-base">Register</a>
              </Link>
            </li>
            <li>
              <Link to="/book">
                <a className="text-white text-base">Book</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a> */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                {userName && 
                <a
                  className="text-red-500 text-xl"
                  onClick={() => {
                    localStorage.removeItem("username");
                    localStorage.removeItem("name");
                    localStorage.removeItem("id");
                    navigate('/')
                  }}
                >
                  Logout
                </a>
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
