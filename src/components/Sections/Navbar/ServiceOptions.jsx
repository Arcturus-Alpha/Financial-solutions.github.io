
import React from "react";
import { Link } from "react-router-dom";
import WebsiteText from "../../../WebText";

function ServiceOptions() {
  return (
    <>
      <div className="service-options-container options-container row mx-0">
        <div className="col-6 options-container-left">
          <h1>Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos consequatur explicabo repellendus accusantium molestiae</p>
          <div>
            <a href={`tel:${WebsiteText.contact.phone}`} rel="noopener noreferrer">
              <i class="bx bxs-phone-call cursor-pointer"></i>
            </a>
            <Link
              to={{
                pathname: window.matchMedia("(max-width: 786px)").matches
                  ? `mailto:${WebsiteText.contact.mail}`
                  : `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${WebsiteText.contact.mail}`,
                state: { fromDashboard: true },
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxs-envelope ml-3 cursor-pointer"></i>
            </Link>
          </div>
        </div>
        <div className="col-6 options-container-right">
          <div className="row">
            {WebsiteText.services.map((service) => {
              return <div className="col-4 option">{service.name}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceOptions;
