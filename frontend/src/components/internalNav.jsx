import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import { Link } from "react-router-dom";
import EventCreate from "./EventCreate";
import Landing from "./Landing";
import { useContext } from "react";
import { LoginContext } from "../contexts/loginContext";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import TreeData from "./TreeData";

export default function InnerNavbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  //let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser] = useContext(LoginContext)

  return (
    <>
      <Router>
        {/*<!-- Header --> */}
        <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
          <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
            <nav
              aria-label="main navigation"
              className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
              role="navigation"
            >
              {/*      <!-- Brand logo --> */}
              <a
                aria-current="page"
                className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 text-green-500 bg-white"
                href="javascript:void(0)"
              >
                Jaganjagruti
              </a>
              {/*      <!-- Mobile trigger --> */}
              <button
                className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                aria-expanded={isToggleOpen ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                </div>
              </button>
              {/*      <!-- Navigation links --> */}
              <ul
                role="menubar"
                aria-label="Select page"
                className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                  isToggleOpen
                    ? "visible opacity-100 backdrop-blur-sm"
                    : "invisible opacity-0"
                }`}
              >
                <li className="flex items-stretch mx-4 my-4">
                  <Link to="/landing">Home</Link>
                </li>
                <li className="flex items-stretch mx-4 my-4">
                  <Link to="/create-event">Create Event</Link>
                </li>
                <li className="flex items-stretch mx-4 my-4">
                  <Link to="/signin">Sign in</Link>
                </li>
                <li className="flex items-stretch mx-4 my-4">
                  <Link to="/Signup">Sign up</Link>
                </li>
                <li className="flex items-stretch mx-4 my-4">
                  <Link to="/user">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/user" element={<PersonalInfo />} />
          <Route path="/create-event" element={<EventCreate />} />
          <Route path="/create-tree" element={<TreeData />} />
        </Routes>
      </Router>
    </>
  );
}
