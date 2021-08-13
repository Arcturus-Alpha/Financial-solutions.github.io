import React, { useState, useRef } from "react";
import Service from '../nav/service'

import "./Navbar.css";

function Navbar(props) {
  const navbar = useRef();
  const [mobileNav, setMobileNav] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const handleClick = (e) => {
    if (!navbar.current?.contains(e.target)) {
      setMobileNav(false);
    }
  };
  window.addEventListener("mousedown", handleClick, false);

  window.addEventListener("scroll", () => {
    setMobileNav(false);
  });
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top py-md-0 px-1" id="navbar">
        <div className="container px-0">
          <a className="navbar-brand mr-0 py-0" href="/">
            Koyo Account Assistant
          </a>

          <ul className="navbar-nav d-flex d-md-none flex-row align-items-center">
            <li className="nav-item pl-4 searchBtn ">
              <i
                className="fa fa-search "
                onClick={() => {
                  setSearchBar(true);
                }}
              ></i>
            </li>
            <li className="nav-item searchBtn ml-3">
              <i
                className="fa fa-bars"
                onClick={() => {
                  setMobileNav(true);
                }}
              ></i>
            </li>
          </ul>

          {/* Mobile Nav */}
          <div className={"mobile-nav container d-md-none " + (mobileNav ? "mobile-nav-show" : "d-none")} ref={navbar}>
            <div className="accordion mobile-nav-accordian" id="mobile-nav-accordian">
              <button
                className="btn btn-link btn-block text-left px-0"
                type="button"
                data-toggle="collapse"
                data-target="#collapseServices"
                aria-expanded="true"
                aria-controls="collapseServices"
              >
                Service <i className="fa fa-chevron-down ml-1"></i>
              </button>

              <div id="collapseServices" className="collapse show" data-parent="#mobile-nav-accordian">
                <ul className="navbar-nav">
                  {props.services.map(service=>{
                    return <Service 
                      id={service.id}
                      title={service.title}
                      mainContent={props.mainContent}
                    />
                  })}
                </ul>
              </div>

              {/* <button
                className="btn btn-link btn-block text-left px-0 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseResource"
                aria-expanded="true"
                aria-controls="collapseResource"
              >
                Resource <i className="fa fa-chevron-down ml-1"></i>
              </button>

              <div id="collapseResource" className="collapse show" data-parent="#mobile-nav-accordian">
                <ul className="navbar-nav">
                  <li className="nav-item my-1">Form</li>
                  <li className="nav-item my-1">Calculator</li>
                  <li className="nav-item my-1">Blog</li>
                  <li className="nav-item my-1">Case Study</li>
                  <li className="nav-item my-1">Video</li>
                </ul>
              </div>

              <button
                className="btn btn-link btn-block text-left px-0 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseAbout"
                aria-expanded="false"
                aria-controls="collapseAbout"
              >
                About <i className="fa fa-chevron-down ml-1"></i>
              </button>

              <div id="collapseAbout" className="collapse" data-parent="#mobile-nav-accordian">
                <ul className="navbar-nav">
                  <li className="nav-item my-1">Team</li>
                  <li className="nav-item my-1">Testimonial</li>
                  <li className="nav-item my-1">Clients</li>
                </ul>
              </div> */}
            </div>

            {/* <div className="row w-100 mx-0 mt-2 justify-content-center">
              <button className="btn clientPortalBtn">Client Portal</button>
            </div> */}
          </div>

          <div className={"searchBar " + (searchBar ? "show-searchBar" : "")}>
            <input type="text" placeholder="Search ..." />
            <i
              className="bx bx-x "
              onClick={() => {
                setSearchBar(false);
              }}
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
