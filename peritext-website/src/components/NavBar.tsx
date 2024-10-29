"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NavBar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* <div className="dropdown">
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
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}
        <a className="btn btn-ghost text-xl" onClick={() => handleNavigation("/")}>
          daisyUI
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => handleNavigation("/about")}>About</a>
          </li>
          <li>
            <a onClick={() => handleNavigation("/people")}>People</a>
          </li>
          <li>
            <details>
              <summary>Project</summary>
              <ul className="p-2">
                <li>
                  <a onClick={() => handleNavigation("/dataset")}>Dataset</a>
                </li>
                <li>
                  <a onClick={() => handleNavigation("/results")}>Results</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a onClick={() => handleNavigation("/contact")}>Contact Us</a>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default NavBar;
