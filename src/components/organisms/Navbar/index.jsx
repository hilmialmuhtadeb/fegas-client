import React, { useState } from "react";
import { Link } from 'react-router-dom'
import appLogo from '../../../assets/logo.png'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="fixed text-sm z-10 w-full py-3 bg-sky-700">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src={appLogo} alt="app logo" className="w-10" />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none"
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
            <ul className="flex flex-col font-semibold text-white lg:flex-row lg:px-8 lg:basis-1/2 list-none">
              <li className="nav-item mx-2">
                <Link to="/">Fegas</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/cafes">Cafe</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/cafes">Kontribusi</Link>
              </li>
            </ul>
            <ul className="flex flex-col justify-end text-gray-100 lg:flex-row lg:basis-1/2 list-none">
              <li className="nav-item mx-2">
                <Link to="/">Daftar</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/cafes" className="bg-sky-600 px-4 py-2 rounded hover:bg-sky-500">Masuk</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}