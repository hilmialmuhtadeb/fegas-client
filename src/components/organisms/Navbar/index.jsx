import React, { useState } from "react";
import { Link } from 'react-router-dom'
import appLogo from '../../../assets/logo.png'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full py-3 bg-transparent">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src={appLogo} alt="app logo" className="w-12" />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              O
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col text-white lg:flex-row lg:px-8 lg:basis-1/2 list-none">
              <li className="nav-item mx-2">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/cafes">Cafe</Link>
              </li>
            </ul>
            <ul className="flex flex-col justify-end text-gray-100 lg:flex-row lg:basis-1/2 list-none">
              <li className="nav-item mx-2">
                <Link to="/">Login</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/cafes" className="bg-indigo-800 px-4 py-2 rounded-lg hover:bg-indigo-900">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}