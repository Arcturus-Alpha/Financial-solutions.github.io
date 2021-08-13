import React, { useState, useRef } from "react";
import ServiceOptions from "./ServiceOptions";
import ResourceOptions from "./ResourceOptions";
import AboutOptions from "./AboutOptions";
import WebsiteText from "../../../WebText";
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

  function navigateTo(id) {
    if (document.getElementById(id)) {
      let offsetTop = document.getElementById(id).offsetTop;
      window.scroll({
        top: offsetTop - 90,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-md fixed-top py-md-0 px-1"
        id="navbar"
      >
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

          {/* Collapsible Desktop Nav  */}
          <div
            className="collapse navbar-collapse d-none d-lg-block"
            id="navbarScroll"
          >
            <ul className="navbar-nav ml-auto my-lg-0  d-flex align-items-center">
              <li className="nav-item mx-2 nav-item-service">
                <a className="nav-link nav-link-ltr" href="/">
                  Service <i className="fa fa-chevron-down"></i>
                </a>
                <ServiceOptions />
              </li>

              <li className="nav-item mx-2 nav-item-resource">
                <a className="nav-link nav-link-ltr" href="/">
                  Resource <i className="fa fa-chevron-down"></i>
                </a>
                <ResourceOptions navigateTo={navigateTo} />
              </li>

              <li className="nav-item mx-2 nav-item-about position-relative">
                <a className="nav-link nav-link-ltr" href="/">
                  About <i className="fa fa-chevron-down"></i>
                </a>
                <AboutOptions navigateTo={navigateTo} />
              </li>

              <li className="nav-item ml-2 mr-3 mr-lg-4 py-2">
                <button
                  className="btn clientPortalBtn"
                  onClick={() => {
                    window.location.replace(
                      `http://${window.location.host}/login`
                    );
                  }}
                >
                  Login
                </button>
              </li>

              <li className="nav-item pl-3 pl-lg-4 searchBtn">
                <i
                  className="fa fa-search "
                  onClick={() => {
                    setSearchBar(true);
                  }}
                ></i>
              </li>
            </ul>
          </div>

          {/* Mobile Nav */}
          <div
            className={
              "mobile-nav container d-md-none " +
              (mobileNav ? "mobile-nav-show" : "d-none")
            }
            ref={navbar}
          >
            <div
              className="accordion mobile-nav-accordian"
              id="mobile-nav-accordian"
            >
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

              <div
                id="collapseServices"
                className="collapse show"
                data-parent="#mobile-nav-accordian"
              >
                <ul className="navbar-nav">
                  {WebsiteText.services.map((service) => {
                    return <li className="nav-item my-1">{service.name}</li>;
                  })}
                </ul>
              </div>

              <button
                className="btn btn-link btn-block text-left px-0 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseResource"
                aria-expanded="true"
                aria-controls="collapseResource"
              >
                Resource <i className="fa fa-chevron-down ml-1"></i>
              </button>

              <div
                id="collapseResource"
                className="collapse show"
                data-parent="#mobile-nav-accordian"
              >
                <ul className="navbar-nav">
                  <li
                    className="nav-item my-1"
                    onClick={() => {
                      navigateTo("formSection");
                    }}
                  >
                    Form
                  </li>
                  <li
                    className="nav-item my-1"
                    onClick={() => {
                      navigateTo("calculatorsSection");
                    }}
                  >
                    Calculator
                  </li>
                  <li
                    className="nav-item my-1"
                    onClick={() => {
                      navigateTo("videoGallery");
                    }}
                  >
                    Video
                  </li>
                  <li className="nav-item my-1">Blog</li>
                  <li className="nav-item my-1">Case Study</li>
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

              <div
                id="collapseAbout"
                className="collapse"
                data-parent="#mobile-nav-accordian"
              >
                <ul className="navbar-nav">
                  <li className="nav-item my-1">Team</li>
                  <li className="nav-item my-1">Testimonial</li>
                  <li className="nav-item my-1">Clients</li>
                  <li className="nav-item my-1">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`tel:${WebsiteText.contact.phone}`}
                    >
                      {" "}
                      <i className="mx-2 fa fa-phone"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        window.matchMedia("(max-width: 786px)").matches
                          ? `mailto:${WebsiteText.contact.mail}`
                          : `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${WebsiteText.contact.mail}`
                      }
                    >
                      {" "}
                      <i className="mx-2 fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row w-100 mx-0 mt-2 justify-content-center">
              <button
                className="btn clientPortalBtn"
                onClick={() => {
                  window.location.replace(
                    `http://${window.location.host}/login`
                  );
                }}
              >
                Login
              </button>
            </div>
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
