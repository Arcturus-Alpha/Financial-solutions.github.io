import React from "react";
import "./Clients.css";
import WebsiteText from "../../../WebText";

function Clients() {
  return (
    <>
      <div className="clients py-4 py-sm-5" id="clients">
        <div className="container">
          <div className="section-title mb-3">
            <h2>Clients We Have Served</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <h5 className="clientsTitle"></h5>
          <div className="row">
            {WebsiteText.clients.map((client, i) => {
              return (
                <div className=" col-6 col-md-4 col-lg-3 px-sm-3 px-md-5   py-sm-3 py-1 mt-sm-0 mt-4 shadowCol" key={i}>
                  <a
                    href={client.websiteLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="d-flex justify-content-center align-items-center h-100"
                  >
                    <img src={client.logo} alt="" className="img-fluid client-logo" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
