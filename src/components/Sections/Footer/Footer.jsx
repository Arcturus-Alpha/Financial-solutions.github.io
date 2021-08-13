import React from "react";
import WebText from "../../../WebText";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footerTop px-1 px-sm-3 py-3 text-center">
          <div className="mb-0 d-flex text-light align-items-center justify-content-around flex-column flex-xl-row">
            <p className="address  d-flex align-items-center mb-2 mb-xl-0 flex-column flex-md-row">
              <i className="fa fa-map-marker mb-2 mb-md-0 d-none d-md-flex"></i>
              Kanjekatt House, Attupuram, Punnayurkulam, Guruvayur, Thrissur, Kerala 679561
            </p>
            <div className="contact d-flex align-items-center">
              <div className="icons d-flex ml-1">
                <a href={`tel:${WebText.contact.phone}`}>
                  {" "}
                  <i className="mx-2 fa fa-phone"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${WebText.contact.whatsapp}`}>
                  {" "}
                  <i className="mx-2 fa fa-whatsapp"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={`https://telegram.me/${WebText.contact.telegram}`}>
                  {" "}
                  <i className="mx-2 fa fa-telegram"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    window.matchMedia("(max-width: 786px)").matches
                      ? `mailto:${WebText.contact.mail}`
                      : `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${WebText.contact.mail}`
                  }
                >
                  {" "}
                  <i className="mx-2 fa fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footerMiddle px-1 px-sm-4 py-3 row mx-0">
          <div className="col-sm-12 col-md-3  text-sm-left text-md-center">
            <a href="{PDF}" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{" "}
          </div>
          <div className="col-sm-12 col-md-3  text-sm-left text-md-center">
            <a href="{PDF}" target="_blank" rel="noopener noreferrer">
              Terms & Conditions
            </a>{" "}
          </div>
          <div className="col-sm-12  col-md-3  text-sm-left text-md-center mb-0">
            <p className="cursor-pointer mb-0 d-inline">Careers</p>
          </div>
          <div className="col-sm-12  col-md-3 text-sm-left text-md-center mb-0 ">
            <p className="mb-0 d-inline">
              GST NO: <span>1234 5678 9101 1121</span>{" "}
            </p>
          </div>
        </div>

        <div className="footerBottom px-5 py-3">
          <p className="text-center w-100 text-light mb-1">
            © Copyright <span className=" fw-500">Koyo Account Assistant</span>. All Rights Reserved
          </p>
          <p className="text-center w-100 text-light  mb-0">
            Designed by
            <span style={{ color: "var(--buttonBackground)" }} className="cursor-pointer">
              {" "}
              Koyo Tech Solutions
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
